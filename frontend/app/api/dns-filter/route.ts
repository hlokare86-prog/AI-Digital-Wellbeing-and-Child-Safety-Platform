import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";

function normalizeDomain(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]
    .split("?")[0]
    .split("#")[0]
    .replace(/\.$/, "");
}

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let quoted = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (quoted && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

function findColumn(headers: string[], names: string[]) {
  const normalized = headers.map((h) =>
    h.toLowerCase().replace(/[^a-z0-9]/g, "")
  );

  for (const name of names) {
    const index = normalized.indexOf(
      name.toLowerCase().replace(/[^a-z0-9]/g, "")
    );

    if (index !== -1) return index;
  }

  return -1;
}

function actionToStatus(action: string) {
  const value = action.trim().toUpperCase();

  if (value === "ALLOW" || value === "ALLOWED") {
    return "allowed" as const;
  }

  if (
    value === "BLOCK" ||
    value === "BLOCKED" ||
    value === "DENY"
  ) {
    return "blocked" as const;
  }

  if (value === "REVIEW" || value === "WARN") {
    return "review" as const;
  }

  return "unknown" as const;
}

export async function GET(request: NextRequest) {
  const rawDomain =
    request.nextUrl.searchParams.get("domain") ?? "";

  const domain = normalizeDomain(rawDomain);

  if (!domain) {
    return NextResponse.json(
      {
        found: false,
        domain: "",
        status: "unknown",
        action: "NOT_FOUND",
        message: "Please enter a domain name.",
      },
      { status: 400 }
    );
  }

  const csvPath = path.join(
    process.cwd(),
    "public",
    "dns_filtering_dataset_60000_rows.csv"
  );

  try {
    const csv = await fs.readFile(csvPath, "utf8");

    const lines = csv
      .split(/\r?\n/)
      .filter((line) => line.trim().length > 0);

    if (lines.length < 2) {
      return NextResponse.json(
        {
          found: false,
          domain,
          status: "unknown",
          action: "NOT_FOUND",
          message: "The DNS filtering dataset is empty.",
        },
        { status: 500 }
      );
    }

    const headers = parseCsvLine(lines[0]);

    const domainIndex = findColumn(headers, [
      "domain",
      "domains",
      "website",
      "url",
      "hostname",
      "host",
      "domainname",
    ]);

    const actionIndex = findColumn(headers, [
      "action",
      "status",
      "decision",
      "policy",
      "access",
    ]);

    const categoryIndex = findColumn(headers, [
      "content_category",
      "category",
      "contentcategory",
      "type",
    ]);

    const threatIndex = findColumn(headers, [
      "threat_score",
      "threatscore",
      "risk_score",
      "riskscore",
      "score",
    ]);

    if (domainIndex === -1) {
      return NextResponse.json(
        {
          found: false,
          domain,
          status: "unknown",
          action: "NOT_FOUND",
          message:
            "The dataset does not contain a recognizable domain column.",
        },
        { status: 500 }
      );
    }

    for (let i = 1; i < lines.length; i++) {
      const values = parseCsvLine(lines[i]);

      const rowDomain = normalizeDomain(
        values[domainIndex] ?? ""
      );

      if (!rowDomain) continue;

      if (
        rowDomain === domain ||
        rowDomain.endsWith(`.${domain}`)
      ) {
        const rawAction =
          actionIndex >= 0
            ? values[actionIndex] ?? ""
            : "";

        const status = actionToStatus(rawAction);

        let action:
          | "ALLOW"
          | "BLOCK"
          | "REVIEW"
          | "NOT_FOUND" = "REVIEW";

        if (status === "allowed") {
          action = "ALLOW";
        } else if (status === "blocked") {
          action = "BLOCK";
        } else if (status === "review") {
          action = "REVIEW";
        }

        const threatValue =
          threatIndex >= 0
            ? values[threatIndex] ?? ""
            : "";

        const threatScore = Number(threatValue);

        return NextResponse.json({
          found: true,
          domain,
          status,
          action,
          label:
            rawAction || status.toUpperCase(),

          content_category:
            categoryIndex >= 0
              ? values[categoryIndex] || "Unknown"
              : "Unknown",

          threat_score:
            Number.isFinite(threatScore)
              ? threatScore
              : undefined,

          total_records: lines.length - 1,

          message:
            status === "allowed"
              ? `${domain} is allowed by the DNS filtering policy.`
              : status === "blocked"
                ? `${domain} is blocked by the DNS filtering policy.`
                : `${domain} requires review according to the DNS filtering policy.`,
        });
      }
    }

    return NextResponse.json({
      found: false,
      domain,
      status: "unknown",
      action: "NOT_FOUND",
      total_records: lines.length - 1,
      message:
        `${domain} was not found in the DNS filtering dataset.`,
    });

  } catch (error) {
    console.error("DNS FILTER ERROR:", error);

    return NextResponse.json(
      {
        found: false,
        domain,
        status: "unknown",
        action: "NOT_FOUND",
        message:
          "DNS filtering dataset not found. Put dns_filtering_dataset_60000_rows.csv inside frontend/public.",
      },
      { status: 500 }
    );
  }
}