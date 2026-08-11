"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";

import {
  AlertTriangle,
  Search,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Clock3,
  Zap,
  LockKeyhole,
  Moon,
  Plus,
  Activity,
  Globe2,
  Gamepad2,
  MessageCircleWarning,
  UserRound,
  Filter,
  ChevronDown,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type AlertStatus = "Active" | "Resolved" | "Dismissed";

type RiskAlert = {
  id: number;
  child: string;
  initials: string;
  title: string;
  description: string;
  category: string;
  time: string;
  source: string;
  status: AlertStatus;
  risk: "Critical" | "Informational" | "High Severity";
};

/* =========================================================
   LIVE RISK ALERTS
========================================================= */

export default function LiveRiskAlerts() {
  /* =======================================================
     SEARCH / FILTER
  ======================================================= */

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState<AlertStatus | "All">("Active");

  const [sourceFilter, setSourceFilter] =
    useState("All Sources");

  /* =======================================================
     ALERT DATA
  ======================================================= */

  const [alerts, setAlerts] = useState<RiskAlert[]>([
    {
      id: 1,
      child: "Sam Jenkins",
      initials: "SJ",
      title: "Flagged Web Query Blocked",
      description:
        "AI Shield intercepted search query with unsafe third-party link activity.",
      category: "Inappropriate Content",
      time: "12 min ago",
      source: "Web & Search",
      status: "Active",
      risk: "Critical",
    },
    {
      id: 2,
      child: "Leo Jenkins",
      initials: "LJ",
      title: "Gaming Limit Approaching",
      description:
        "Roblox playtime is at 1h 45m. Auto-shutdown scheduled in 2 min.",
      category: "Screen Limit",
      time: "25 min ago",
      source: "Screen Time",
      status: "Active",
      risk: "Informational",
    },
    {
      id: 3,
      child: "Sam Jenkins",
      initials: "SJ",
      title: "Negative Tone Detected in Group Chat",
      description:
        "AI sentiment model detected aggressive interaction patterns in a Discord chat.",
      category: "Cyberbullying",
      time: "1 hour ago",
      source: "Social & Chat",
      status: "Active",
      risk: "High Severity",
    },
    {
      id: 4,
      child: "Maya Jenkins",
      initials: "MJ",
      title: "Unsafe Search Attempt",
      description:
        "AI content filter prevented access to a potentially harmful website.",
      category: "Web Safety",
      time: "2 hours ago",
      source: "Web & Search",
      status: "Resolved",
      risk: "Critical",
    },
  ]);

  /* =======================================================
     FILTERED ALERTS
  ======================================================= */

  const filteredAlerts = useMemo(() => {
    return alerts.filter((alert) => {
      const matchesSearch =
        alert.child
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        alert.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        alert.category
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        alert.status === statusFilter;

      const matchesSource =
        sourceFilter === "All Sources" ||
        alert.source === sourceFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesSource
      );
    });
  }, [
    alerts,
    search,
    statusFilter,
    sourceFilter,
  ]);

  /* =======================================================
     RESOLVE
  ======================================================= */

  const resolveAlert = (id: number) => {
    setAlerts((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "Resolved",
            }
          : item
      )
    );
  };

  /* =======================================================
     DISMISS
  ======================================================= */

  const dismissAlert = (id: number) => {
    setAlerts((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "Dismissed",
            }
          : item
      )
    );
  };

  /* =======================================================
     ACTIVE COUNT
  ======================================================= */

  const activeCount = alerts.filter(
    (item) => item.status === "Active"
  ).length;

  const criticalCount = alerts.filter(
    (item) =>
      item.status === "Active" &&
      item.risk === "Critical"
  ).length;

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div className="space-y-5">
      {/* =====================================================
          PAGE TITLE
      ===================================================== */}

      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Live Risk Alerts Log
            </h1>

            <span className="rounded-full bg-red-100 px-2 py-1 text-[10px] font-bold text-red-600">
              {activeCount} Active
            </span>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Real-time cyberbullying flags, geofence departures,
            screen time overages, and inappropriate content logs.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-[10px] font-bold text-red-600">
            <AlertTriangle size={12} />
            {criticalCount} Critical
          </span>

          <span className="flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">
            <CheckCircle2 size={12} />
            {alerts.filter(
              (item) => item.status === "Resolved"
            ).length}{" "}
            Resolved
          </span>
        </div>
      </div>

      {/* =====================================================
          TOP CONTENT
      ===================================================== */}

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* ===================================================
            MAIN ALERT LOG
        =================================================== */}

        <div className="space-y-4 xl:col-span-2">
          {/* =================================================
              HEADER CARD
          ================================================= */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Live Risk Alerts & Safety Interventions
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  Review, resolve and manage AI-detected safety
                  events.
                </p>
              </div>

              {/* SEARCH + FILTERS */}

              <div className="flex flex-col gap-2 lg:flex-row">
                <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <Search
                    size={15}
                    className="text-slate-400"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search alerts, keywords, child name..."
                    className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>

                <div className="flex gap-2">
                  <FilterButton
                    active={statusFilter === "Active"}
                    onClick={() =>
                      setStatusFilter("Active")
                    }
                  >
                    Active
                  </FilterButton>

                  <FilterButton
                    active={statusFilter === "Resolved"}
                    onClick={() =>
                      setStatusFilter("Resolved")
                    }
                  >
                    Resolved
                  </FilterButton>

                  <FilterButton
                    active={statusFilter === "Dismissed"}
                    onClick={() =>
                      setStatusFilter("Dismissed")
                    }
                  >
                    Dismissed
                  </FilterButton>

                  <FilterButton
                    active={statusFilter === "All"}
                    onClick={() =>
                      setStatusFilter("All")
                    }
                  >
                    All
                  </FilterButton>

                  <select
                    value={sourceFilter}
                    onChange={(e) =>
                      setSourceFilter(e.target.value)
                    }
                    className="rounded-lg border border-slate-200 bg-white px-2 py-2 text-[10px] font-semibold text-slate-600 outline-none"
                  >
                    <option>All Sources</option>
                    <option>Web & Search</option>
                    <option>Screen Time</option>
                    <option>Social & Chat</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              ALERT LIST
          ================================================= */}

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {filteredAlerts.length === 0 ? (
              <div className="p-10 text-center">
                <CheckCircle2
                  size={34}
                  className="mx-auto text-emerald-500"
                />

                <p className="mt-3 text-sm font-semibold text-slate-700">
                  No alerts found
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Try changing your search or filters.
                </p>
              </div>
            ) : (
              filteredAlerts.map((alert) => (
                <AlertRow
                  key={alert.id}
                  alert={alert}
                  onResolve={resolveAlert}
                  onDismiss={dismissAlert}
                />
              ))
            )}
          </div>
        </div>

        {/* ===================================================
            RIGHT SIDEBAR
        =================================================== */}

        <div className="space-y-5">
          {/* =================================================
              QUICK GUARDIAN ACTIONS
          ================================================= */}

          <QuickGuardianActions />

          {/* =================================================
              LIVE AI RISK ALERTS
          ================================================= */}

          <MiniRiskAlerts
            alerts={alerts.filter(
              (item) => item.status === "Active"
            )}
          />

          {/* =================================================
              APP REQUESTS
          ================================================= */}

          <AppRequests />

          {/* =================================================
              LIVE ACTIVITY
          ================================================= */}

          <LiveActivity />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FILTER BUTTON
========================================================= */

function FilterButton({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-3 py-2 text-[10px] font-semibold transition ${
        active
          ? "bg-blue-600 text-white"
          : "border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

/* =========================================================
   ALERT ROW
========================================================= */

function AlertRow({
  alert,
  onResolve,
  onDismiss,
}: {
  alert: RiskAlert;
  onResolve: (id: number) => void;
  onDismiss: (id: number) => void;
}) {
  const riskClass =
    alert.risk === "Critical"
      ? "bg-red-50 text-red-600"
      : alert.risk === "High Severity"
        ? "bg-amber-50 text-amber-600"
        : "bg-blue-50 text-blue-600";

  const icon =
    alert.category === "Cyberbullying" ? (
      <MessageCircleWarning size={15} />
    ) : alert.category === "Screen Limit" ? (
      <Clock3 size={15} />
    ) : (
      <ShieldAlert size={15} />
    );

  return (
    <div className="border-b border-slate-100 p-4 last:border-b-0">
      <div className="flex gap-3">
        {/* CHILD AVATAR */}

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
          {alert.initials}
        </div>

        {/* CONTENT */}

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-2 py-1 text-[9px] font-bold ${riskClass}`}
                >
                  {icon}
                </span>

                <h3 className="text-xs font-bold text-slate-800">
                  {alert.title}
                </h3>

                <span className="rounded-full bg-slate-100 px-2 py-1 text-[8px] font-semibold text-slate-500">
                  {alert.category}
                </span>
              </div>

              <p className="mt-2 text-[10px] leading-5 text-slate-500">
                {alert.description}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-[9px] text-slate-400">
                <span className="font-semibold text-slate-600">
                  {alert.child}
                </span>

                <span>•</span>

                <span>{alert.time}</span>

                <span>•</span>

                <span>{alert.source}</span>
              </div>
            </div>

            {/* ACTIONS */}

            {alert.status === "Active" ? (
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    onResolve(alert.id)
                  }
                  className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-2 text-[9px] font-semibold text-white hover:bg-emerald-700"
                >
                  <CheckCircle2 size={12} />
                  Mark Resolved
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onDismiss(alert.id)
                  }
                  className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[9px] font-semibold text-slate-500 hover:bg-slate-50"
                >
                  <XCircle size={12} />
                  Dismiss
                </button>
              </div>
            ) : (
              <span
                className={`rounded-full px-3 py-1 text-[9px] font-semibold ${
                  alert.status === "Resolved"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {alert.status}
              </span>
            )}
          </div>

          {/* AI RECOMMENDATION */}

          <div className="mt-3 flex items-start gap-2 rounded-lg bg-purple-50 px-3 py-2">
            <SparkleIcon />

            <p className="text-[9px] leading-4 text-purple-700">
              <span className="font-bold">
                Guardian AI Advice:
              </span>{" "}
              Review the event and consider discussing safe
              online behavior with {alert.child}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SPARKLE ICON
========================================================= */

function SparkleIcon() {
  return (
    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
      <Zap size={11} />
    </div>
  );
}

/* =========================================================
   QUICK GUARDIAN ACTIONS
========================================================= */

function QuickGuardianActions() {
  const pauseInternet = () => {
    alert("Internet paused for 1 hour.");
  };

  const grantTime = () => {
    alert("30 minutes granted.");
  };

  const lockDevices = () => {
    alert("All devices have been locked.");
  };

  const bedtime = () => {
    alert("Bedtime mode enabled.");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Zap
          size={15}
          className="text-amber-500"
        />

        <h3 className="text-[11px] font-bold text-slate-800">
          QUICK GUARDIAN ACTIONS
        </h3>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <ActionButton
          icon={<Clock3 size={13} />}
          title="Pause Internet"
          value="1 hour"
          onClick={pauseInternet}
        />

        <ActionButton
          icon={<Plus size={13} />}
          title="Grant Time"
          value="+30m"
          onClick={grantTime}
        />

        <ActionButton
          icon={<LockKeyhole size={13} />}
          title="Lock Devices"
          value="Lock"
          onClick={lockDevices}
        />

        <ActionButton
          icon={<Moon size={13} />}
          title="Bedtime"
          value="Enable Mode"
          onClick={bedtime}
        />
      </div>
    </div>
  );
}

/* =========================================================
   ACTION BUTTON
========================================================= */

function ActionButton({
  icon,
  title,
  value,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-left transition hover:border-blue-200 hover:bg-blue-50"
    >
      <div className="flex items-center gap-1.5 text-slate-500">
        {icon}

        <span className="text-[9px] font-semibold">
          {title}
        </span>
      </div>

      <p className="mt-1.5 text-[10px] font-bold text-slate-800">
        {value}
      </p>
    </button>
  );
}

/* =========================================================
   MINI RISK ALERTS
========================================================= */

function MiniRiskAlerts({
  alerts,
}: {
  alerts: RiskAlert[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle
            size={14}
            className="text-red-500"
          />

          <h3 className="text-[11px] font-bold text-slate-800">
            LIVE AI RISK ALERTS
          </h3>
        </div>

        <span className="rounded-full bg-red-50 px-2 py-1 text-[8px] font-bold text-red-600">
          {alerts.length} Active
        </span>
      </div>

      <div className="mt-3 space-y-2">
        {alerts.slice(0, 3).map((alert) => (
          <div
            key={alert.id}
            className="rounded-lg border border-red-100 bg-red-50/50 p-2.5"
          >
            <div className="flex items-start gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                <UserRound size={11} />
              </div>

              <div className="min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[9px] font-bold text-slate-700">
                    {alert.child}
                  </p>

                  <span className="text-[7px] text-slate-400">
                    {alert.time}
                  </span>
                </div>

                <p className="mt-1 text-[9px] font-semibold text-slate-700">
                  {alert.title}
                </p>

                <p className="mt-1 text-[8px] leading-3.5 text-slate-400">
                  {alert.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   APP REQUESTS
========================================================= */

function AppRequests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Scratch Coding Studio",
      child: "Leo Jenkins",
      description:
        "Requested for STEM class project.",
      age: "Age 14+",
    },
    {
      id: 2,
      name: "Notion Student",
      child: "Sam Jenkins",
      description:
        "Requested for school notes and projects.",
      age: "Age 12+",
    },
  ]);

  const approve = (id: number) => {
    setRequests((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const decline = (id: number) => {
    setRequests((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Plus
          size={14}
          className="text-purple-500"
        />

        <h3 className="text-[11px] font-bold text-slate-800">
          APP REQUESTS ({requests.length})
        </h3>
      </div>

      <div className="mt-3 space-y-3">
        {requests.length === 0 ? (
          <p className="rounded-lg bg-slate-50 p-3 text-center text-[9px] text-slate-400">
            No pending requests
          </p>
        ) : (
          requests.map((request) => (
            <div
              key={request.id}
              className="rounded-lg border border-purple-100 bg-purple-50/40 p-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[9px] font-bold text-slate-700">
                    {request.name}
                  </p>

                  <p className="mt-1 text-[8px] text-slate-400">
                    {request.description}
                  </p>
                </div>

                <span className="shrink-0 rounded-full bg-purple-100 px-1.5 py-1 text-[7px] font-bold text-purple-600">
                  {request.age}
                </span>
              </div>

              <p className="mt-1.5 text-[8px] text-slate-400">
                Requested by {request.child}
              </p>

              <div className="mt-2 grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    approve(request.id)
                  }
                  className="rounded-md bg-emerald-600 py-1.5 text-[8px] font-semibold text-white hover:bg-emerald-700"
                >
                  Approve
                </button>

                <button
                  type="button"
                  onClick={() =>
                    decline(request.id)
                  }
                  className="rounded-md bg-slate-200 py-1.5 text-[8px] font-semibold text-slate-600 hover:bg-slate-300"
                >
                  Decline
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* =========================================================
   LIVE ACTIVITY
========================================================= */

function LiveActivity() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity
            size={14}
            className="text-blue-500"
          />

          <h3 className="text-[11px] font-bold text-slate-800">
            LIVE ACTIVITY STREAM
          </h3>
        </div>

        <span className="text-[8px] font-semibold text-slate-400">
          Real-time
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <ActivityRow
          icon={<Gamepad2 size={11} />}
          title="Completed Duolingo Lesson"
          description="Leo: Spanish Level 4"
          time="10 min ago"
          color="blue"
        />

        <ActivityRow
          icon={<LockKeyhole size={11} />}
          title="Blocked phishing-ad domain"
          description="Sam: Filtered via AI Shield"
          time="21 min ago"
          color="red"
        />

        <ActivityRow
          icon={<Globe2 size={11} />}
          title="Entered Geofence: Safe Zone"
          description="Maya: Outside Public Library"
          time="1 hr ago"
          color="emerald"
        />

        <ActivityRow
          icon={<Gamepad2 size={11} />}
          title="Requested +30m for Minecraft"
          description="Leo: Raised within Minecraft block"
          time="2 hr ago"
          color="blue"
        />
      </div>
    </div>
  );
}

/* =========================================================
   ACTIVITY ROW
========================================================= */

function ActivityRow({
  icon,
  title,
  description,
  time,
  color,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  time: string;
  color: "blue" | "red" | "emerald";
}) {
  const colorClass =
    color === "blue"
      ? "bg-blue-50 text-blue-600"
      : color === "red"
        ? "bg-red-50 text-red-500"
        : "bg-emerald-50 text-emerald-600";

  return (
    <div className="flex gap-2.5">
      <div
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${colorClass}`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[8px] font-semibold text-slate-700">
            {title}
          </p>

          <span className="shrink-0 text-[7px] text-slate-400">
            {time}
          </span>
        </div>

        <p className="mt-0.5 text-[8px] text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}