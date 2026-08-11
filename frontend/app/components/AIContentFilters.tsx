"use client";

import { useState } from "react";

export default function AIContentFilters() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<{
    found?: boolean;
    domain?: string;
    status?: string;
    message?: string;
  } | null>(null);

  const checkDomain = async () => {
    const value = domain.trim();

    if (!value) {
      setResult({
        found: false,
        message: "Please enter a domain.",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        `/api/dns-filter?domain=${encodeURIComponent(value)}`
      );

      const data = await response.json();

      setResult(data);
    } catch (error) {
      setResult({
        found: false,
        message: "Unable to connect to DNS filter.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          AI Content Filters
        </h1>

        <p className="text-gray-500 mt-1">
          Check whether a website domain is allowed or blocked.
        </p>
      </div>

      <div className="flex gap-3 max-w-3xl">
        <input
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkDomain();
            }
          }}
          placeholder="Enter domain e.g. example.com"
          className="flex-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={checkDomain}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Checking..." : "Check Domain"}
        </button>
      </div>

      {result && (
        <div className="mt-6 max-w-3xl rounded-xl border p-5">
          {result.status === "blocked" && (
            <div>
              <div className="text-2xl font-bold text-red-600">
                🚫 BLOCKED
              </div>

              <p className="mt-2">
                <strong>{result.domain}</strong>
              </p>

              <p className="mt-1 text-gray-600">
                {result.message}
              </p>
            </div>
          )}

          {result.status === "allowed" && (
            <div>
              <div className="text-2xl font-bold text-green-600">
                ✅ ALLOWED
              </div>

              <p className="mt-2">
                <strong>{result.domain}</strong>
              </p>

              <p className="mt-1 text-gray-600">
                {result.message}
              </p>
            </div>
          )}

          {result.status === "unknown" && (
            <div>
              <div className="text-2xl font-bold text-yellow-600">
                ⚠️ NOT FOUND
              </div>

              <p className="mt-2">
                <strong>{result.domain}</strong>
              </p>

              <p className="mt-1 text-gray-600">
                {result.message}
              </p>
            </div>
          )}

          {!result.status && (
            <p className="text-red-600 font-semibold">
              {result.message}
            </p>
          )}
        </div>
      )}
    </div>
  );
}