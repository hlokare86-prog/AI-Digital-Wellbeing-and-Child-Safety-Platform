"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ShieldCheck,
  ShieldAlert,
  Brain,
  Search,
  CheckCircle2,
  XCircle,
  Clock3,
  Globe,
  Gamepad2,
  MessageCircle,
  ExternalLink,
  Activity,
  Lock,
  Eye,
} from "lucide-react";

type RiskAlert = {
  id: number;
  child: string;
  title: string;
  description: string;
  category: string;
  severity: "High" | "Medium" | "Low";
  time: string;
  icon: React.ReactNode;
};

export default function AIRiskDetection() {
  const [scanning, setScanning] = useState(false);
  const [alerts, setAlerts] = useState<RiskAlert[]>([
    {
      id: 1,
      child: "Sam Jenkins",
      title: "Flagged Web Query Blocked",
      description:
        "AI Shield intercepted a search query containing potentially unsafe third-party links.",
      category: "Inappropriate Content",
      severity: "High",
      time: "12 min ago",
      icon: <Globe size={18} />,
    },
    {
      id: 2,
      child: "Leo Jenkins",
      title: "Gaming Limit Approaching",
      description:
        "Gaming activity is approaching the configured daily screen-time limit.",
      category: "Excessive Gaming",
      severity: "Medium",
      time: "25 min ago",
      icon: <Gamepad2 size={18} />,
    },
    {
      id: 3,
      child: "Sam Jenkins",
      title: "Negative Sentiment Detected",
      description:
        "AI detected potentially concerning language in a recent online conversation.",
      category: "Emotional Risk",
      severity: "Medium",
      time: "1 hour ago",
      icon: <MessageCircle size={18} />,
    },
  ]);

  const runScan = () => {
    setScanning(true);

    setTimeout(() => {
      setScanning(false);
    }, 2000);
  };

  const resolveAlert = (id: number) => {
    setAlerts((current) => current.filter((alert) => alert.id !== id));
  };

  const dismissAlert = (id: number) => {
    setAlerts((current) => current.filter((alert) => alert.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 text-slate-900">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
            <span>⌂</span>
            <span>/</span>
            <span>AI Risk Detection</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950">
            AI Risk Detection
          </h1>

          <p className="mt-1 text-base text-slate-500">
            Identify potentially unsafe behaviour using AI-powered risk
            analysis.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={runScan}
            disabled={scanning}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Activity size={18} />

            {scanning ? "Scanning..." : "Run AI Scan"}
          </button>
        </div>
      </div>

      {/* AI Risk Summary */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {/* Overall Risk */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <ShieldAlert size={23} />
            </div>

            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
              3 Active
            </span>
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            Overall Risk
          </p>

          <h2 className="mt-1 text-3xl font-bold text-slate-950">
            Moderate
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Requires guardian attention
          </p>
        </div>

        {/* Threats */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <AlertTriangle size={23} />
            </div>

            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
              Today
            </span>
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            Threats Detected
          </p>

          <h2 className="mt-1 text-3xl font-bold text-slate-950">
            16
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            3 web filters · 2 app limits
          </p>
        </div>

        {/* AI Confidence */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Brain size={23} />
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              Active
            </span>
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            AI Detection Accuracy
          </p>

          <h2 className="mt-1 text-3xl font-bold text-slate-950">
            96%
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Behavioral analysis enabled
          </p>
        </div>

        {/* Protection */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <ShieldCheck size={23} />
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              Protected
            </span>
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            Protection Status
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-950">
            Active
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            AI Shield is monitoring devices
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Left / Main */}
        <div className="space-y-6 xl:col-span-2">
          {/* AI Scan Panel */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950 p-6 text-white shadow-xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                  <Brain size={26} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-bold">
                      Gemini AI Risk Analysis
                    </h2>

                    <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-200">
                      Live Behavioral Scan
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-blue-100/70">
                    Analyzing children's digital activity for potential risks.
                  </p>
                </div>
              </div>

              <button
                onClick={runScan}
                disabled={scanning}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
              >
                <Search size={17} />

                {scanning ? "Scanning..." : "Run Deep AI Scan"}
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/20 text-green-300">
                  <ShieldCheck size={19} />
                </div>

                <h3 className="font-semibold">Content Safety</h3>

                <p className="mt-1 text-sm leading-6 text-blue-100/70">
                  Unsafe websites and suspicious searches are automatically
                  identified.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
                  <Brain size={19} />
                </div>

                <h3 className="font-semibold">Behavior Analysis</h3>

                <p className="mt-1 text-sm leading-6 text-blue-100/70">
                  AI monitors patterns in digital activity and screen usage.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                  <Eye size={19} />
                </div>

                <h3 className="font-semibold">Real-time Monitoring</h3>

                <p className="mt-1 text-sm leading-6 text-blue-100/70">
                  Guardians receive alerts when unusual activity is detected.
                </p>
              </div>
            </div>
          </div>

          {/* Risk Alerts */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  Detected Risk Alerts
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  AI-generated alerts requiring guardian review.
                </p>
              </div>

              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                {alerts.length} Active
              </span>
            </div>

            <div className="space-y-4">
              {alerts.length === 0 ? (
                <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                  <CheckCircle2
                    className="mx-auto text-green-600"
                    size={38}
                  />

                  <h3 className="mt-3 font-bold text-green-800">
                    No Active Risk Alerts
                  </h3>

                  <p className="mt-1 text-sm text-green-700">
                    All detected risks have been handled.
                  </p>
                </div>
              ) : (
                alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`rounded-xl border p-4 ${
                      alert.severity === "High"
                        ? "border-red-200 bg-red-50/50"
                        : "border-orange-200 bg-orange-50/40"
                    }`}
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                            alert.severity === "High"
                              ? "bg-red-100 text-red-600"
                              : "bg-orange-100 text-orange-600"
                          }`}
                        >
                          {alert.icon}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-semibold text-slate-950">
                              {alert.child}
                            </span>

                            <span className="text-xs text-slate-400">
                              {alert.time}
                            </span>
                          </div>

                          <h3 className="mt-1 font-bold text-slate-900">
                            {alert.title}
                          </h3>

                          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                            {alert.description}
                          </p>

                          <span className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                            {alert.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2 md:flex-col">
                        <button
                          onClick={() => resolveAlert(alert.id)}
                          className="flex items-center justify-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                        >
                          <CheckCircle2 size={14} />
                          Resolve
                        </button>

                        <button
                          onClick={() => dismissAlert(alert.id)}
                          className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                        >
                          <XCircle size={14} />
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Quick Guardian Actions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-slate-900">
              <Activity size={19} className="text-orange-500" />
              QUICK GUARDIAN ACTIONS
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <button className="rounded-xl border border-slate-200 p-4 text-left transition hover:bg-slate-50">
                <Lock size={18} className="text-blue-600" />

                <p className="mt-3 text-sm font-semibold">
                  Lock Devices
                </p>

                <span className="text-xs text-slate-400">
                  Instant
                </span>
              </button>

              <button className="rounded-xl border border-slate-200 p-4 text-left transition hover:bg-slate-50">
                <Clock3 size={18} className="text-green-600" />

                <p className="mt-3 text-sm font-semibold">
                  Grant Bonus
                </p>

                <span className="text-xs text-slate-400">
                  +30 min
                </span>
              </button>

              <button className="rounded-xl border border-slate-200 p-4 text-left transition hover:bg-slate-50">
                <ShieldAlert size={18} className="text-red-500" />

                <p className="mt-3 text-sm font-semibold">
                  Pause Internet
                </p>

                <span className="text-xs text-slate-400">
                  1-Tap
                </span>
              </button>

              <button className="rounded-xl border border-slate-200 p-4 text-left transition hover:bg-slate-50">
                <Eye size={18} className="text-purple-600" />

                <p className="mt-3 text-sm font-semibold">
                  View Activity
                </p>

                <span className="text-xs text-slate-400">
                  Live
                </span>
              </button>
            </div>
          </div>

          {/* AI Protection */}
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <ShieldCheck size={21} />
              </div>

              <div>
                <h3 className="font-bold text-green-900">
                  AI Protection Active
                </h3>

                <p className="text-xs text-green-700">
                  Your children are being monitored.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-green-800">
              <div className="flex justify-between">
                <span>Web protection</span>
                <span className="font-semibold">ON</span>
              </div>

              <div className="flex justify-between">
                <span>App monitoring</span>
                <span className="font-semibold">ON</span>
              </div>

              <div className="flex justify-between">
                <span>AI sentiment analysis</span>
                <span className="font-semibold">ON</span>
              </div>

              <div className="flex justify-between">
                <span>Real-time alerts</span>
                <span className="font-semibold">ON</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-base font-bold text-slate-900">
              Recent AI Activity
            </h2>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-green-500" />

                <div>
                  <p className="text-sm font-medium">
                    Safe browsing detected
                  </p>

                  <p className="text-xs text-slate-400">
                    Sam Jenkins · 5 min ago
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />

                <div>
                  <p className="text-sm font-medium">
                    Gaming limit approaching
                  </p>

                  <p className="text-xs text-slate-400">
                    Leo Jenkins · 25 min ago
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />

                <div>
                  <p className="text-sm font-medium">
                    AI scan completed
                  </p>

                  <p className="text-xs text-slate-400">
                    All children · 1 hour ago
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-medium text-blue-600 hover:bg-slate-50">
              View Full Activity
              <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}