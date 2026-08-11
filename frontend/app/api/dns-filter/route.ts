import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type DNSRecord = {
  domain: string;
  action: "ALLOW" | "BLOCK" | "REVIEW";
  label: string;
  content_category: string;
  threat_score: number;
  known_blocklist_match: number;
};

let recordsCache: DNSRecord[] | null = null;

function normalizeDomain(value: string): string {
  let domain = value.trim().toLowerCase();

  // Remove protocol
  domain = domain.replace(/^https?:\/\//, "");

  // Remove www.
  domain = domain.replace(/^www\./, "");

  // Remove path
  domain = domain.split("/")[0];

  // Remove query
  domain = domain.split("?")[0];

  // Remove hash
  domain = domain.split("#")[0];

  // Remove port
  domain = domain.split(":")[0];

  // Remove trailing dot
  domain = domain.replace(/\.$/, "");

  // Handle escaped dots from some CSV values
  domain = domain.replace(/\\\./g, ".");

  return domain;
}

function loadDataset(): DNSRecord[] {
  if (recordsCache) {
    return recordsCache;
  }

  const csvPath = path.join(
    process.cwd(),
    "public",
    "dns_filtering_dataset_60000_rows.csv"
  );

  if (!fs.existsSync(csvPath)) {
    throw new Error(`Dataset not found: ${csvPath}`);
  }

  const csv = fs.readFileSync(csvPath, "utf8");

  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    throw new Error("Dataset is empty.");
  }

  // Find column positions from header
  const headers = lines[0]
    .split(",")
    .map((header) => header.trim().replace(/^"|"$/g, "").toLowerCase());

  const domainIndex = headers.indexOf("domain");
  const actionIndex = headers.indexOf("action");
  const labelIndex = headers.indexOf("label");
  const categoryIndex = headers.indexOf("content_category");
  const threatIndex = headers.indexOf("threat_score");
  const blocklistIndex = headers.indexOf("known_blocklist_match");

  if (
    domainIndex === -1 ||
    actionIndex === -1 ||
    labelIndex === -1
  ) {
    throw new Error(
      "Dataset must contain domain, action and label columns."
    );
  }

  const records: DNSRecord[] = [];

  for (let i = 1; i < lines.length; i++) {
    const columns = lines[i]
      .split(",")
      .map((value) => value.trim().replace(/^"|"$/g, ""));

    const rawDomain = columns[domainIndex];

    if (!rawDomain) {
      continue;
    }

    const domain = normalizeDomain(rawDomain);

    const rawAction = (columns[actionIndex] || "")
      .trim()
      .toUpperCase();

    let action: "ALLOW" | "BLOCK" | "REVIEW";

    if (rawAction === "BLOCK") {
      action = "BLOCK";
    } else if (rawAction === "REVIEW") {
      action = "REVIEW";
    } else {
      action = "ALLOW";
    }

    records.push({
      domain,
      action,
      label: columns[labelIndex] || "",
      content_category:
        categoryIndex >= 0 ? columns[categoryIndex] || "" : "",
      threat_score:
        threatIndex >= 0
          ? Number(columns[threatIndex] || 0)
          : 0,
      known_blocklist_match:
        blocklistIndex >= 0
          ? Number(columns[blocklistIndex] || 0)
          : 0,
    });
  }

  recordsCache = records;

  console.log(
    `DNS dataset loaded: ${records.length} records`
  );

  return records;
}

export async function GET(request: NextRequest) {
  try {
    const rawDomain =
      request.nextUrl.searchParams.get("domain");

    if (!rawDomain) {
      return NextResponse.json(
        {
          found: false,
          error: "Please enter a domain.",
        },
        { status: 400 }
      );
    }

    const domain = normalizeDomain(rawDomain);

    if (!domain) {
      return NextResponse.json(
        {
          found: false,
          error: "Invalid domain.",
        },
        { status: 400 }
      );
    }

    const records = loadDataset();

    // Find ALL records for this domain
    const matches = records.filter(
      (record) => record.domain === domain
    );

    // Domain does not exist
    if (matches.length === 0) {
      return NextResponse.json({
        found: false,
        domain,
        status: "unknown",
        action: "NOT_FOUND",
        message:
          `${domain} was not found in the DNS filtering dataset.`,
      });
    }

    /*
      Some domains occur multiple times.

      Security priority:
      BLOCK > REVIEW > ALLOW

      So if any record for a domain says BLOCK,
      we treat that domain as BLOCKED.
    */

    const hasBlock = matches.some(
      (record) => record.action === "BLOCK"
    );

    const hasReview = matches.some(
      (record) => record.action === "REVIEW"
    );

    let action: "ALLOW" | "BLOCK" | "REVIEW";

    if (hasBlock) {
      action = "BLOCK";
    } else if (hasReview) {
      action = "REVIEW";
    } else {
      action = "ALLOW";
    }

    const selectedRecord =
      matches.find((record) => record.action === action) ||
      matches[0];

    let status:
      | "allowed"
      | "blocked"
      | "review";

    if (action === "BLOCK") {
      status = "blocked";
    } else if (action === "REVIEW") {
      status = "review";
    } else {
      status = "allowed";
    }

    return NextResponse.json({
      found: true,

      domain,

      status,

      action,

      label: selectedRecord.label,

      content_category:
        selectedRecord.content_category,

      threat_score:
        selectedRecord.threat_score,

      known_blocklist_match:
        selectedRecord.known_blocklist_match,

      total_records: matches.length,

      message:
        action === "BLOCK"
          ? `${domain} is blocked by the DNS filtering policy.`
          : action === "REVIEW"
            ? `${domain} requires review according to the DNS filtering policy.`
            : `${domain} is allowed by the DNS filtering policy.`,
    });
  } catch (error) {
    console.error("DNS FILTER ERROR:", error);

    return NextResponse.json(
      {
        found: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to read DNS filtering dataset.",
      },
      { status: 500 }
    );
  }
}