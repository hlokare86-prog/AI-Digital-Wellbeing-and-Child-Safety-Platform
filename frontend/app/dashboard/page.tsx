
"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  HeartPulse,
  ShieldCheck,
  Clock3,
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Settings,
  Bell,
  Brain,
  Moon,
  Activity,
  Users,
  ChevronRight,
  LogOut,
} from "lucide-react";

export default function DashboardPage() {
    const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user");
  window.location.href = "/login";
};
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">

        {/* Sidebar */}
         
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
              <ShieldCheck size={23} />
            </div>

            <div>
              <h1 className="font-bold">SafeMind AI</h1>
              <p className="text-xs text-slate-400">Digital Wellbeing</p>
            </div>
          </div>

          <nav className="space-y-2">

            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium"
            >
              <LayoutDashboard size={19} />
              Dashboard
            </Link>

            <Link
              href="/wellbeing"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-slate-800"
            >
              <HeartPulse size={19} />
              Wellbeing
            </Link>

            <Link
              href="/safety"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-slate-800"
            >
              <ShieldCheck size={19} />
              Child Safety
            </Link>

            <Link
              href="/screen-time"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-slate-800"
            >
              <Clock3 size={19} />
              Screen Time
            </Link>

            <Link
              href="/activity"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-slate-800"
            >
              <Activity size={19} />
              Activity
            </Link>

            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-slate-800"
            >
              <Settings size={19} />
              Settings
            </Link>

          </nav>

          ```tsx
<div className="mt-auto space-y-3">

  {/* AI Assistant */}
  <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-4">

    <div className="mb-3 flex items-center gap-2">
      <Brain size={18} className="text-blue-400" />
      <span className="text-sm font-semibold">
        AI Assistant
      </span>
    </div>

    <p className="text-xs leading-5 text-slate-400">
      Your digital wellbeing looks healthy today.
    </p>

    <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-xs font-medium hover:bg-blue-500">
      View Insights
      <ChevronRight size={14} />
    </button>

  </div>

  {/* Logout */}
  <button
    onClick={handleLogout}
    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/10"
  >
    <LogOut size={19} />
    Logout
  </button>

</div>
```


        {/* Main Content */}
        <main className="flex-1">

          {/* Header */}
          <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-5 py-5 md:px-8">

            <div>
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <p className="mt-1 text-sm text-slate-400">
                Monitor your digital wellbeing and safety.
              </p>
            </div>

            <button className="relative rounded-xl border border-slate-700 p-3 hover:bg-slate-800">
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

          </header>

          <div className="space-y-6 p-5 md:p-8">

            {/* Welcome */}
            <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-blue-600/20 via-slate-900 to-purple-600/20 p-6">

              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

                <div>
                  <p className="mb-2 text-sm text-blue-400">
                    Good morning 👋
                  </p>

                  <h3 className="text-2xl font-bold">
                    Your digital wellbeing overview
                  </h3>

                  <p className="mt-2 max-w-xl text-sm text-slate-400">
                    AI-powered insights help you maintain healthy screen habits
                    and stay protected online.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-green-500 bg-green-500/10">
                    <div className="text-center">
                      <p className="text-xl font-bold">87</p>
                      <p className="text-[9px] text-slate-400">SCORE</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Stats */}
            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <StatCard
                icon={<Clock3 size={21} />}
                title="Screen Time"
                value="4h 32m"
                change="-18%"
                description="vs yesterday"
                positive
              />

              <StatCard
                icon={<Smartphone size={21} />}
                title="Apps Used"
                value="18"
                change="+2"
                description="today"
              />

              <StatCard
                icon={<ShieldCheck size={21} />}
                title="Safety Score"
                value="94%"
                change="+6%"
                description="this week"
                positive
              />

              <StatCard
                icon={<Moon size={21} />}
                title="Sleep Mode"
                value="8h 12m"
                change="+42m"
                description="last night"
                positive
              />

            </section>

            {/* Main Grid */}
            <section className="grid gap-6 lg:grid-cols-3">

              {/* Screen Time */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">

                <div className="mb-6 flex items-center justify-between">

                  <div>
                    <h3 className="font-semibold">Weekly Screen Time</h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Daily device usage
                    </p>
                  </div>

                  <TrendingUp className="text-blue-400" size={20} />

                </div>

                <div className="flex h-48 items-end justify-between gap-3">

                  {[
                    ["Mon", 55],
                    ["Tue", 70],
                    ["Wed", 48],
                    ["Thu", 80],
                    ["Fri", 62],
                    ["Sat", 90],
                    ["Sun", 58],
                  ].map(([day, height]) => (

                    <div
                      key={day}
                      className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                    >

                      <div
                        className="w-full max-w-10 rounded-t-lg bg-blue-600/80 transition hover:bg-blue-500"
                        style={{ height: `${height}%` }}
                      />

                      <span className="text-xs text-slate-500">
                        {day}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* AI Wellbeing */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                <div className="mb-5 flex items-center gap-3">

                  <div className="rounded-xl bg-purple-500/10 p-3">
                    <Brain className="text-purple-400" size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">AI Insight</h3>
                    <p className="text-xs text-slate-500">
                      Personalized recommendation
                    </p>
                  </div>

                </div>

                <p className="text-sm leading-6 text-slate-300">
                  Your screen time has decreased this week. Keep taking
                  regular breaks to maintain a healthy digital routine.
                </p>

                <div className="mt-5 rounded-xl bg-green-500/10 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-green-400">
                    <CheckCircle2 size={17} />
                    Healthy digital habit
                  </div>
                </div>

              </div>

            </section>

            {/* Bottom Grid */}
            <section className="grid gap-6 lg:grid-cols-2">

              {/* Safety Alerts */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                <div className="mb-5 flex items-center justify-between">

                  <div>
                    <h3 className="font-semibold">Safety Alerts</h3>
                    <p className="text-xs text-slate-500">
                      Recent security activity
                    </p>
                  </div>

                  <Link
                    href="/safety"
                    className="text-xs text-blue-400 hover:text-blue-300"
                  >
                    View all
                  </Link>

                </div>

                <div className="space-y-3">

                  <AlertItem
                    icon={<CheckCircle2 />}
                    title="No harmful content detected"
                    time="Today, 08:30 AM"
                    type="success"
                  />

                  <AlertItem
                    icon={<AlertTriangle />}
                    title="Unusual website activity detected"
                    time="Yesterday, 09:15 PM"
                    type="warning"
                  />

                  <AlertItem
                    icon={<ShieldCheck />}
                    title="Privacy protection active"
                    time="Yesterday, 06:40 PM"
                    type="success"
                  />

                </div>

              </div>

              {/* App Usage */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                <div className="mb-5 flex items-center justify-between">

                  <div>
                    <h3 className="font-semibold">Top Apps</h3>
                    <p className="text-xs text-slate-500">
                      Most used applications today
                    </p>
                  </div>

                  <Smartphone size={20} className="text-blue-400" />

                </div>

                <div className="space-y-5">

                  <AppUsage
                    name="YouTube"
                    time="1h 24m"
                    percentage={72}
                  />

                  <AppUsage
                    name="Instagram"
                    time="58m"
                    percentage={48}
                  />

                  <AppUsage
                    name="Chrome"
                    time="46m"
                    percentage={38}
                  />

                  <AppUsage
                    name="WhatsApp"
                    time="31m"
                    percentage={26}
                  />

                </div>

              </div>

            </section>

            {/* Quick Actions */}
            <section>

              <h3 className="mb-4 font-semibold">Quick Actions</h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <QuickAction
                  icon={<HeartPulse />}
                  title="Wellbeing Scan"
                  description="Check your wellbeing"
                  href="/wellbeing"
                />

                <QuickAction
                  icon={<ShieldCheck />}
                  title="Safety Check"
                  description="Run safety analysis"
                  href="/safety"
                />

                <QuickAction
                  icon={<Clock3 />}
                  title="Set Screen Limit"
                  description="Manage daily limits"
                  href="/screen-time"
                />

                <QuickAction
                  icon={<Users />}
                  title="Family Center"
                  description="Manage family safety"
                  href="/family"
                />

              </div>

            </section>

          </div>

        </main>
      </div>
    </div>
  );
}


/* Stat Card */

function StatCard({
  icon,
  title,
  value,
  change,
  description,
  positive,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  description: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

      <div className="mb-4 flex items-center justify-between">

        <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
          {icon}
        </div>

        <span
          className={`text-xs font-medium ${
            positive ? "text-green-400" : "text-slate-400"
          }`}
        >
          {change}
        </span>

      </div>

      <p className="text-sm text-slate-500">{title}</p>

      <div className="mt-1 flex items-end gap-2">
        <p className="text-2xl font-bold">{value}</p>
        <p className="mb-1 text-xs text-slate-500">{description}</p>
      </div>

    </div>
  );
}


/* Alert Item */

function AlertItem({
  icon,
  title,
  time,
  type,
}: {
  icon: React.ReactNode;
  title: string;
  time: string;
  type: "success" | "warning";
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4">

      <div
        className={`rounded-lg p-2 ${
          type === "success"
            ? "bg-green-500/10 text-green-400"
            : "bg-yellow-500/10 text-yellow-400"
        }`}
      >
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs text-slate-500">{time}</p>
      </div>

    </div>
  );
}


/* App Usage */

function AppUsage({
  name,
  time,
  percentage,
}: {
  name: string;
  time: string;
  percentage: number;
}) {
  return (
    <div>

      <div className="mb-2 flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-slate-400">{time}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-blue-600"
          style={{ width: `${percentage}%` }}
        />
      </div>

    </div>
  );
}


/* Quick Action */

function QuickAction({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-blue-500/50"
    >

      <div className="mb-4 flex items-center justify-between">

        <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
          {icon}
        </div>

        <ChevronRight
          size={18}
          className="text-slate-600 transition group-hover:text-blue-400"
        />

      </div>

      <h4 className="font-medium">{title}</h4>

      <p className="mt-1 text-xs text-slate-500">
        {description}
      </p>

    </Link>
  );
}
