"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import {
  LockKeyhole,
  ShieldCheck,
  SlidersHorizontal,
  Moon,
  Cloud,
  Bell,
  Save,
  Eye,
  EyeOff,
  Phone,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Lock,
  Smartphone,
  Clock3,
  Activity,
  Users,
} from "lucide-react";

/* =========================================================
   GUARDIAN SETTINGS
========================================================= */

export default function GuardianSettings() {
  /* =======================================================
     STATES
  ======================================================= */

  const [pin, setPin] = useState("1234");
  const [showPin, setShowPin] = useState(false);

  const [emergencyContact, setEmergencyContact] =
    useState("+1 (555) 019-2834");

  const [strictness, setStrictness] = useState<
    "Relaxed" | "Moderate" | "Strict"
  >("Strict");

  const [geofence, setGeofence] = useState(500);

  const [nightStart, setNightStart] = useState("09:00 PM");
  const [morningStart, setMorningStart] =
    useState("07:00 AM");

  const [pushAlerts, setPushAlerts] = useState(true);
  const [cloudSync, setCloudSync] = useState(true);

  const [saved, setSaved] = useState(false);

  /* =======================================================
     SAVE SETTINGS
  ======================================================= */

  const saveSettings = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="space-y-5">
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Guardian System Settings & Security
            </h1>

            <span className="hidden rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold text-emerald-600 md:inline-flex">
              AES-256 Encrypted
            </span>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Showing consolidated safety metrics and real-time
            screen activity for all 3 children.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-[10px] font-semibold text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            3 Children Active
          </div>
        </div>
      </div>

      {/* =====================================================
          SETTINGS HEADER
      ===================================================== */}

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-slate-900">
                Guardian System Settings & Security
              </h2>

              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-600">
                AES-256 Encrypted
              </span>
            </div>

            <p className="mt-1 text-[10px] text-slate-400">
              Configure master family security PIN, emergency
              contact numbers, AI sensitivity thresholds, and
              cloud backups.
            </p>
          </div>

          <button
            type="button"
            onClick={saveSettings}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-[10px] font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <Save size={14} />

            {saved ? "Settings Saved" : "Save System Settings"}
          </button>
        </div>
      </div>

      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* ===================================================
            LEFT / CENTER
        =================================================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:col-span-2">
          {/* =================================================
              MASTER PASSCODE
          ================================================= */}

          <SettingsCard
            icon={<LockKeyhole size={17} />}
            iconClass="bg-blue-50 text-blue-600"
            title="Master Passcode & Security Lock"
            subtitle="Family PIN protection, vault changes and SOS override."
          >
            <label className="text-[9px] font-semibold text-slate-600">
              Master 4-Digit Guardian PIN
            </label>

            <div className="mt-1 flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3">
              <input
                type={showPin ? "text" : "password"}
                value={pin}
                maxLength={4}
                onChange={(e) =>
                  setPin(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                className="w-full bg-transparent py-2 text-xs font-semibold tracking-[0.3em] text-slate-700 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPin(!showPin)
                }
                className="text-slate-400 hover:text-slate-600"
              >
                {showPin ? (
                  <EyeOff size={14} />
                ) : (
                  <Eye size={14} />
                )}
              </button>
            </div>

            <p className="mt-1 text-[8px] text-slate-400">
              Required when bypassing downtime or modifying
              content filters.
            </p>

            <label className="mt-4 block text-[9px] font-semibold text-slate-600">
              Emergency SOS Contact Phone
            </label>

            <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3">
              <Phone
                size={13}
                className="text-slate-400"
              />

              <input
                type="text"
                value={emergencyContact}
                onChange={(e) =>
                  setEmergencyContact(e.target.value)
                }
                className="w-full bg-transparent py-2 text-[10px] text-slate-600 outline-none"
              />
            </div>
          </SettingsCard>

          {/* =================================================
              AI SENSITIVITY
          ================================================= */}

          <SettingsCard
            icon={<SlidersHorizontal size={17} />}
            iconClass="bg-purple-50 text-purple-600"
            title="AI Sensitivity & Geofencing"
            subtitle="Autonomous protection policies and location boundaries."
          >
            <p className="text-[9px] font-semibold text-slate-600">
              AI Content Interception Strictness
            </p>

            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {(
                [
                  "Relaxed",
                  "Moderate",
                  "Strict",
                ] as const
              ).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setStrictness(item)
                  }
                  className={`rounded-lg border px-2 py-2 text-[9px] font-semibold transition ${
                    strictness === item
                      ? "border-purple-600 bg-purple-600 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-500 hover:bg-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <label className="text-[9px] font-semibold text-slate-600">
                  School & Home Geofence Buffer
                </label>

                <span className="text-[9px] font-bold text-purple-600">
                  {geofence} meters
                </span>
              </div>

              <input
                type="range"
                min="100"
                max="2000"
                step="100"
                value={geofence}
                onChange={(e) =>
                  setGeofence(
                    Number(e.target.value)
                  )
                }
                className="mt-3 w-full accent-purple-600"
              />

              <div className="flex justify-between text-[7px] text-slate-400">
                <span>100m (Strict)</span>
                <span>2000m (Neighborhood)</span>
              </div>
            </div>
          </SettingsCard>

          {/* =================================================
              BEDTIME
          ================================================= */}

          <SettingsCard
            icon={<Moon size={17} />}
            iconClass="bg-amber-50 text-amber-600"
            title="Bedtime & Scheduled Downtime"
            subtitle="Locks non-essential apps during rest hours."
          >
            <div className="grid grid-cols-2 gap-3">
              <TimeInput
                label="Lock Night Mode Starts"
                value={nightStart}
                onChange={setNightStart}
              />

              <TimeInput
                label="Morning Mode Unlocks"
                value={morningStart}
                onChange={setMorningStart}
              />
            </div>
          </SettingsCard>

          {/* =================================================
              CLOUD SYNC
          ================================================= */}

          <SettingsCard
            icon={<Cloud size={17} />}
            iconClass="bg-emerald-50 text-emerald-600"
            title="Cloud Sync & Notifications"
            subtitle="Cross-device sync policies and parent alerts."
          >
            <ToggleRow
              icon={<Bell size={13} />}
              title="Real-time Push Alerts"
              description="Instant notification when risk events occur."
              enabled={pushAlerts}
              onChange={setPushAlerts}
            />

            <div className="my-2 h-px bg-slate-100" />

            <ToggleRow
              icon={<Cloud size={13} />}
              title="Encrypted Cloud Telemetry Sync"
              description="AES-256 cloud backup for logs & reports."
              enabled={cloudSync}
              onChange={setCloudSync}
            />
          </SettingsCard>
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

          <LiveRiskAlerts />

          {/* =================================================
              APP REQUESTS
          ================================================= */}

          <AppRequests />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SETTINGS CARD
========================================================= */

function SettingsCard({
  icon,
  iconClass,
  title,
  subtitle,
  children,
}: {
  icon: ReactNode;
  iconClass: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-xs font-bold text-slate-800">
            {title}
          </h3>

          <p className="mt-0.5 text-[8px] leading-4 text-slate-400">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="my-4 h-px bg-slate-100" />

      {children}
    </div>
  );
}

/* =========================================================
   TIME INPUT
========================================================= */

function TimeInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="text-[8px] font-semibold text-slate-600">
        {label}
      </label>

      <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5">
        <Clock3
          size={12}
          className="text-slate-400"
        />

        <input
          type="text"
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="w-full bg-transparent py-2 text-[9px] font-semibold text-slate-600 outline-none"
        />
      </div>
    </div>
  );
}

/* =========================================================
   TOGGLE ROW
========================================================= */

function ToggleRow({
  icon,
  title,
  description,
  enabled,
  onChange,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 p-2.5">
      <div className="flex min-w-0 items-start gap-2">
        <div className="mt-0.5 text-emerald-600">
          {icon}
        </div>

        <div>
          <p className="text-[9px] font-semibold text-slate-700">
            {title}
          </p>

          <p className="mt-0.5 text-[7px] text-slate-400">
            {description}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={`relative h-5 w-9 shrink-0 rounded-full transition ${
          enabled
            ? "bg-emerald-500"
            : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            enabled ? "left-4" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}

/* =========================================================
   QUICK GUARDIAN ACTIONS
========================================================= */

function QuickGuardianActions() {
  const action = (message: string) => {
    alert(message);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Zap
          size={14}
          className="text-amber-500"
        />

        <h3 className="text-[10px] font-bold text-slate-800">
          QUICK GUARDIAN ACTIONS
        </h3>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <ActionButton
          icon={<Zap size={12} />}
          title="Pause Internet"
          value="1-Tap"
          onClick={() =>
            action("Internet paused for 1 hour.")
          }
        />

        <ActionButton
          icon={<CheckCircle2 size={12} />}
          title="Grant Bonus"
          value="+30m"
          onClick={() =>
            action("30 minutes granted.")
          }
        />

        <ActionButton
          icon={<Lock size={12} />}
          title="Lock Devices"
          value="Lock"
          onClick={() =>
            action("All devices locked.")
          }
        />

        <ActionButton
          icon={<Moon size={12} />}
          title="Bedtime"
          value="Sleep"
          onClick={() =>
            action("Bedtime mode enabled.")
          }
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
      <div className="flex items-center justify-between gap-1">
        <span className="text-amber-500">
          {icon}
        </span>

        <span className="text-[7px] font-bold text-slate-400">
          {value}
        </span>
      </div>

      <p className="mt-1 text-[8px] font-semibold text-slate-600">
        {title}
      </p>
    </button>
  );
}

/* =========================================================
   LIVE AI RISK ALERTS
========================================================= */

function LiveRiskAlerts() {
  const alerts = [
    {
      child: "Sam Jenkins",
      title: "Flagged Web Query Blocked",
      description:
        "AI Shield intercepted search query with unsafe third-party link attempts.",
      category: "Inappropriate Content",
      time: "12 min ago",
    },
    {
      child: "Leo Jenkins",
      title: "Gaming Limit Approaching",
      description:
        "Roblox playtime is at 1h 40m. Auto-shutdown scheduled in 2 min.",
      category: "Screen Limit",
      time: "25 min ago",
    },
    {
      child: "Sam Jenkins",
      title: "Negative Tone Detected in Group Chat",
      description:
        "AI sentiment model detected stressful interaction patterns in Discord chat.",
      category: "Cyberbullying",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle
            size={13}
            className="text-red-500"
          />

          <h3 className="text-[10px] font-bold text-slate-800">
            LIVE AI RISK ALERTS
          </h3>
        </div>

        <span className="rounded-full bg-red-50 px-2 py-1 text-[7px] font-bold text-red-600">
          3 Active
        </span>
      </div>

      <div className="mt-3 space-y-2">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`rounded-lg border p-2.5 ${
              index === 2
                ? "border-red-200 bg-red-50/40"
                : "border-amber-200 bg-amber-50/30"
            }`}
          >
            <div className="flex items-start gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[7px] font-bold text-slate-600">
                {alert.child
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[8px] font-bold text-slate-700">
                    {alert.child}
                  </p>

                  <span className="text-[7px] text-slate-400">
                    {alert.time}
                  </span>
                </div>

                <p className="mt-1 text-[8px] font-semibold text-slate-700">
                  {alert.title}
                </p>

                <p className="mt-1 text-[7px] leading-3 text-slate-400">
                  {alert.description}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[7px] font-semibold text-slate-400">
                    {alert.category}
                  </span>

                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() =>
                        alertAction("Alert resolved.")
                      }
                      className="rounded bg-blue-600 px-2 py-1 text-[7px] font-semibold text-white"
                    >
                      Resolve
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        alertAction("Alert dismissed.")
                      }
                      className="rounded bg-slate-200 px-2 py-1 text-[7px] font-semibold text-slate-600"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function alertAction(message: string) {
  window.alert(message);
}

/* =========================================================
   APP REQUESTS
========================================================= */

function AppRequests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Scratch Coding Studio 3",
      child: "Leo Jenkins",
      age: "Age 4+",
      description:
        "Teacher assigned Scratch project for STEM week.",
    },
    {
      id: 2,
      name: "Notion Student",
      child: "Sam Jenkins",
      age: "Age 12+",
      description:
        "To organize high school study notes and group prep.",
    },
  ]);

  const removeRequest = (id: number) => {
    setRequests((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Activity
          size={13}
          className="text-purple-500"
        />

        <h3 className="text-[10px] font-bold text-slate-800">
          APP REQUESTS ({requests.length})
        </h3>
      </div>

      <div className="mt-3 space-y-3">
        {requests.map((request) => (
          <div
            key={request.id}
            className="rounded-lg border border-purple-100 bg-purple-50/40 p-2.5"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[8px] font-bold text-slate-700">
                  {request.name}
                </p>

                <p className="mt-1 text-[7px] text-slate-400">
                  "{request.description}"
                </p>
              </div>

              <span className="rounded-full bg-purple-100 px-1.5 py-1 text-[6px] font-bold text-purple-600">
                {request.age}
              </span>
            </div>

            <p className="mt-1.5 text-[7px] text-slate-400">
              Requested by {request.child} • 15 mins ago
            </p>

            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() =>
                  removeRequest(request.id)
                }
                className="rounded bg-emerald-600 py-1.5 text-[7px] font-bold text-white hover:bg-emerald-700"
              >
                Approve
              </button>

              <button
                type="button"
                onClick={() =>
                  removeRequest(request.id)
                }
                className="rounded bg-slate-200 py-1.5 text-[7px] font-bold text-slate-600 hover:bg-slate-300"
              >
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}