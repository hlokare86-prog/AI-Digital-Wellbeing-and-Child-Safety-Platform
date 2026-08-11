"use client";

import { useState } from "react";
import {
  Plus,
  Smartphone,
  Laptop,
  Tablet,
  Monitor,
  Pause,
  Play,
  Lock,
  Moon,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Activity,
  MessageSquare,
  Gamepad2,
  Code2,
  BookOpen,
  ChevronRight,
} from "lucide-react";

type Device = {
  name: string;
  type: "phone" | "laptop" | "tablet" | "monitor";
  child: string;
  os: string;
  battery: string;
  status: "Active" | "Paused";
};

const children = [
  {
    name: "Leo Jenkins",
    age: "12 yrs",
    grade: "Grade 7",
    status: "Online",
    screenTime: "2h 25m",
    dailyLimit: "5h",
    activity: "Gaming",
    color: "bg-blue-500",
  },
  {
    name: "Maya Jenkins",
    age: "10 yrs",
    grade: "Grade 5",
    status: "Online",
    screenTime: "1h 55m",
    dailyLimit: "4h",
    activity: "Education",
    color: "bg-emerald-500",
  },
  {
    name: "Sam Jenkins",
    age: "15 yrs",
    grade: "Grade 10",
    status: "Online",
    screenTime: "2h 35m",
    dailyLimit: "5h",
    activity: "Social & Chat",
    color: "bg-purple-500",
  },
];

export default function ChildrenDevices() {
  const [devices, setDevices] = useState<Device[]>([
    {
      name: "Maya's Chromebook",
      type: "laptop",
      child: "Maya Jenkins",
      os: "ChromeOS",
      battery: "84%",
      status: "Active",
    },
    {
      name: "Leo's MacBook Air",
      type: "laptop",
      child: "Leo Jenkins",
      os: "macOS",
      battery: "72%",
      status: "Active",
    },
    {
      name: "Sam's MacBook Air",
      type: "laptop",
      child: "Sam Jenkins",
      os: "macOS",
      battery: "61%",
      status: "Active",
    },
    {
      name: "Sam's iPhone 15",
      type: "phone",
      child: "Sam Jenkins",
      os: "iOS",
      battery: "51%",
      status: "Paused",
    },
  ]);

  const [pausedInternet, setPausedInternet] = useState(false);
  const [bonusGranted, setBonusGranted] = useState(false);
  const [bedtimeMode, setBedtimeMode] = useState(false);

  const toggleDevice = (index: number) => {
    setDevices((current) =>
      current.map((device, i) =>
        i === index
          ? {
              ...device,
              status: device.status === "Active" ? "Paused" : "Active",
            }
          : device
      )
    );
  };

  const getDeviceIcon = (type: Device["type"]) => {
    if (type === "phone") return <Smartphone size={20} />;
    if (type === "tablet") return <Tablet size={20} />;
    if (type === "monitor") return <Monitor size={20} />;
    return <Laptop size={20} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="mx-auto max-w-[1500px]">
        {/* PAGE HEADER */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
              <span>Home</span>
              <ChevronRight size={15} />
              <span>Children & Devices</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              Children & Device Guardian
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage active device syncing, remote screen pause, and hardware
              OS safety policies.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              3 Children Active
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          {/* LEFT CONTENT */}
          <main className="min-w-0">
            {/* CHILDREN HEADER */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-950">
                    Children & Connected Devices
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Manage active device syncing, remote screen pause and
                    hardware OS safety policies.
                  </p>
                </div>

                <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                  <Plus size={17} />
                  Pair New Device
                </button>
              </div>

              {/* CHILD CARDS */}
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                {children.map((child) => (
                  <div
                    key={child.name}
                    className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${child.color}`}
                      >
                        {child.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold text-slate-900">
                          {child.name}
                        </h3>

                        <p className="text-xs text-slate-500">
                          {child.age} • {child.grade}
                        </p>
                      </div>

                      <span className="ml-auto flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {child.status}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-slate-400">Screen Time Today</p>
                        <p className="mt-1 font-semibold text-slate-800">
                          {child.screenTime}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-400">Daily Limit</p>
                        <p className="mt-1 font-semibold text-slate-800">
                          {child.dailyLimit}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-400">Active Device</p>
                        <p className="mt-1 font-semibold text-slate-800">
                          {child.activity}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-400">Safety</p>
                        <p className="mt-1 font-semibold text-emerald-600">
                          Protected
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* HARDWARE DEVICES */}
            <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Syncing Hardware Endpoints ({devices.length})
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Devices currently connected to the guardian system.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 size={14} />
                  All Systems Syncing
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {devices.map((device, index) => (
                  <div
                    key={device.name}
                    className="flex flex-col gap-4 py-4 md:flex-row md:items-center"
                  >
                    {/* DEVICE ICON */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        device.status === "Active"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-orange-50 text-orange-500"
                      }`}
                    >
                      {getDeviceIcon(device.type)}
                    </div>

                    {/* DEVICE INFO */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {device.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        Assigned to {device.child} • {device.os}
                      </p>
                    </div>

                    {/* STATUS */}
                    <div className="flex items-center gap-5 text-xs">
                      <div className="flex items-center gap-1 text-emerald-600">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        {device.battery}
                      </div>

                      <div className="flex items-center gap-1 text-slate-400">
                        <Clock3 size={13} />
                        Just now
                      </div>

                      <button
                        onClick={() => toggleDevice(index)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                          device.status === "Active"
                            ? "border border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100"
                            : "bg-emerald-600 text-white hover:bg-emerald-700"
                        }`}
                      >
                        {device.status === "Active" ? (
                          <span className="flex items-center gap-1">
                            <Pause size={13} />
                            Pause Device
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Play size={13} />
                            Resume Internet
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-5">
            {/* QUICK GUARDIAN ACTIONS */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-amber-500">⚡</span>
                <h2 className="text-sm font-bold text-slate-900">
                  QUICK GUARDIAN ACTIONS
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPausedInternet(!pausedInternet)}
                  className={`rounded-xl border p-3 text-left transition ${
                    pausedInternet
                      ? "border-red-200 bg-red-50"
                      : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                  }`}
                >
                  <Pause
                    size={17}
                    className={pausedInternet ? "text-red-500" : "text-blue-600"}
                  />

                  <p className="mt-3 text-xs text-slate-400">
                    {pausedInternet ? "Resume" : "1-Tap"}
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-900">
                    {pausedInternet ? "Resume Internet" : "Pause Internet"}
                  </p>
                </button>

                <button
                  onClick={() => setBonusGranted(!bonusGranted)}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-left transition hover:bg-slate-100"
                >
                  <Plus size={17} className="text-emerald-600" />

                  <p className="mt-3 text-xs text-emerald-500">
                    {bonusGranted ? "Granted" : "+30m"}
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-900">
                    Grant Bonus
                  </p>
                </button>

                <button
                  onClick={() =>
                    setDevices((current) =>
                      current.map((device) => ({
                        ...device,
                        status: "Paused",
                      }))
                    )
                  }
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-left transition hover:bg-slate-100"
                >
                  <Lock size={17} className="text-blue-600" />

                  <p className="mt-3 text-xs text-slate-400">Lock</p>

                  <p className="mt-1 text-sm font-bold text-slate-900">
                    Lock Devices
                  </p>
                </button>

                <button
                  onClick={() => setBedtimeMode(!bedtimeMode)}
                  className={`rounded-xl border p-3 text-left transition ${
                    bedtimeMode
                      ? "border-purple-200 bg-purple-50"
                      : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                  }`}
                >
                  <Moon size={17} className="text-purple-600" />

                  <p className="mt-3 text-xs text-purple-500">
                    {bedtimeMode ? "Active" : "Sleep"}
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-900">
                    Bedtime Mode
                  </p>
                </button>
              </div>
            </section>

            {/* LIVE AI RISK ALERTS */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle size={17} className="text-red-500" />

                <h2 className="text-sm font-bold text-slate-900">
                  LIVE AI RISK ALERTS
                </h2>

                <span className="rounded-full bg-red-50 px-2 py-1 text-[10px] font-bold text-red-500">
                  3 Active
                </span>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-900">
                      Sam Jenkins
                    </p>
                    <span className="text-[10px] text-slate-400">
                      12 min ago
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-bold text-slate-900">
                    Flagged Web Query Blocked
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    AI Shield intercepted search query with unverified
                    third-party link attempts.
                  </p>

                  <div className="mt-3 flex gap-2">
                    <button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                      Resolve
                    </button>

                    <button className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
                      Dismiss
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-3">
                  <p className="text-xs font-bold text-slate-900">
                    Leo Jenkins
                  </p>

                  <p className="mt-2 text-sm font-bold text-slate-900">
                    Gaming Limit Approaching
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Roblox playtime is at 38/40 minutes. Auto-downtime
                    scheduled in 2 mins.
                  </p>
                </div>

                <div className="rounded-xl border border-red-200 bg-red-50 p-3">
                  <p className="text-xs font-bold text-slate-900">
                    Sam Jenkins
                  </p>

                  <p className="mt-2 text-sm font-bold text-red-700">
                    Negative Text Detected in Group Chat
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Sentiment analysis detected concerning language patterns
                    in a recent chat.
                  </p>
                </div>
              </div>
            </section>

            {/* APP REQUESTS */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <MessageSquare size={16} className="text-purple-600" />

                <h2 className="text-sm font-bold text-slate-900">
                  APP REQUESTS (2)
                </h2>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-purple-100 bg-purple-50 p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-900">
                      Scratch Coding Studio
                    </p>

                    <span className="text-[10px] text-purple-500">
                      Age 8+
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    Requested by Leo Jenkins • Education
                  </p>

                  <div className="mt-3 flex gap-2">
                    <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
                      Approve
                    </button>

                    <button className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs">
                      Decline
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-purple-100 bg-purple-50 p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-900">
                      Notion Student
                    </p>

                    <span className="text-[10px] text-purple-500">
                      Age 12+
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    Requested by Maya Jenkins • Education
                  </p>

                  <div className="mt-3 flex gap-2">
                    <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
                      Approve
                    </button>

                    <button className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* LIVE ACTIVITY STREAM */}
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900">
                  LIVE ACTIVITY STREAM
                </h2>

                <span className="text-[10px] text-slate-400">Real-time</span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="rounded-full bg-blue-50 p-2">
                    <BookOpen size={14} className="text-blue-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      Completed Education Lesson
                    </p>

                    <p className="text-[10px] text-slate-400">
                      Maya finished a math lesson • 2 min ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="rounded-full bg-purple-50 p-2">
                    <Gamepad2 size={14} className="text-purple-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      Blocked phishing-like domain
                    </p>

                    <p className="text-[10px] text-slate-400">
                      Safety Shield blocked request • 5 min ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="rounded-full bg-emerald-50 p-2">
                    <Activity size={14} className="text-emerald-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      Extended Screen Time
                    </p>

                    <p className="text-[10px] text-slate-400">
                      Bonus granted to Leo • 12 min ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="rounded-full bg-orange-50 p-2">
                    <Code2 size={14} className="text-orange-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      Requested coding app
                    </p>

                    <p className="text-[10px] text-slate-400">
                      New app request pending • 18 min ago
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>

        {/* BOTTOM STATUS */}
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-700">
          <ShieldCheck size={16} />
          <span className="font-semibold">Guardian Protection Active</span>
          <span className="text-emerald-600">
            All connected devices are being monitored for safety and wellbeing.
          </span>
        </div>
      </div>
    </div>
  );
}