"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [aiMonitoring, setAiMonitoring] = useState(true);
  const [location, setLocation] = useState(true);

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-blue-600">Account</p>

        <h1 className="text-3xl font-bold text-slate-900">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your platform preferences and safety settings.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">General Settings</h2>

          <div className="mt-5 divide-y">
            <Setting
              title="Safety Notifications"
              description="Receive alerts when safety issues are detected."
              enabled={notifications}
              setEnabled={setNotifications}
            />

            <Setting
              title="AI Monitoring"
              description="Allow AI to analyze wellbeing and safety patterns."
              enabled={aiMonitoring}
              setEnabled={setAiMonitoring}
            />

            <Setting
              title="Location Monitoring"
              description="Allow location monitoring for registered children."
              enabled={location}
              setEnabled={setLocation}
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Account Information</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Account Name</p>
              <p className="font-semibold">Admin</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Account Type</p>
              <p className="font-semibold">Parent</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white">
            Save Changes
          </button>
        </div>
      </div>
    </main>
  );
}

function Setting({
  title,
  description,
  enabled,
  setEnabled,
}: {
  title: string;
  description: string;
  enabled: boolean;
  setEnabled: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-5">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative h-7 w-12 rounded-full ${
          enabled ? "bg-blue-600" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}