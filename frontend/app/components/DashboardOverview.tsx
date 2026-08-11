"use client";

import {
  Activity,
  AlertTriangle,
  Brain,
  CheckCircle2,
  Clock3,
  Cloud,
  HeartPulse,
  Lock,
  Moon,
  Play,
  Shield,
  Sparkles,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 text-slate-900">

      {/* PAGE HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Child Wellbeing & Safety Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Showing consolidated safety metrics and real-time screen activity
            for all 3 children.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="text-sm font-medium">3 Children Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_390px]">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          {/* TOP STAT CARDS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

            {/* SCREEN TIME */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-50 p-3">
                    <Clock3 className="h-6 w-6 text-blue-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      SCREEN
                    </p>
                    <p className="text-xs font-semibold text-slate-500">
                      TIME
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                  ↘ -18% vs
                  <br />
                  Yda
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <span className="text-3xl font-bold">7h 5m</span>
                <span className="text-xs text-slate-500">
                  Goal: 9h/day
                </span>
              </div>

              <div className="mt-3 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[79%] rounded-full bg-blue-600" />
              </div>

              <div className="mt-3 flex justify-between text-xs text-slate-500">
                <span>79% of daily limit used</span>
                <button className="font-semibold text-blue-600">
                  Details →
                </button>
              </div>
            </div>

            {/* BLOCKED CONTENT */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-rose-50 p-3">
                    <Shield className="h-6 w-6 text-rose-500" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      BLOCKED
                    </p>
                    <p className="text-xs font-semibold text-slate-500">
                      CONTENT
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-500">
                  ↗ +3
                  <br />
                  Intercepted
                </span>
              </div>

              <div className="mt-5">
                <span className="text-3xl font-bold">16</span>
                <span className="ml-2 text-sm text-slate-600">
                  Threats
                </span>
                <span className="float-right text-xs text-slate-500">
                  Today
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-md bg-slate-100 px-2 py-1 text-xs">
                  3 Web Filters
                </span>

                <span className="rounded-md bg-amber-50 px-2 py-1 text-xs text-amber-600">
                  2 App Limits
                </span>

                <span className="rounded-md bg-rose-50 px-2 py-1 text-xs text-rose-500">
                  1 AI Flag
                </span>
              </div>

              <div className="mt-4 flex justify-between text-xs">
                <span className="text-slate-500">
                  AI DNS Shield: Active
                </span>

                <button className="font-semibold text-rose-500">
                  Logs →
                </button>
              </div>
            </div>

            {/* WELLBEING */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-50 p-3">
                    <HeartPulse className="h-6 w-6 text-emerald-500" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      WELLBEING
                    </p>
                    <p className="text-xs font-semibold text-slate-500">
                      INDEX
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                  ↗ +4
                  <br />
                  pts
                </span>
              </div>

              <div className="mt-5">
                <span className="text-3xl font-bold">94</span>
                <span className="ml-1 text-sm text-slate-500">/ 100</span>

                <span className="ml-2 rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                  Optimal Balance
                </span>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Healthy sleep schedule & balance...
              </p>

              <div className="mt-3 flex justify-between text-xs">
                <span className="text-slate-500">
                  Focus & Mood: High
                </span>

                <button className="font-semibold text-emerald-600">
                  Report →
                </button>
              </div>
            </div>

            {/* SAFETY */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-teal-50 p-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-500" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      SAFETY
                    </p>
                    <p className="text-xs font-semibold text-slate-500">
                      STATUS
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  Protected
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                All 4 Devices
                <br />
                Synced
              </h2>

              <p className="mt-3 text-sm font-medium text-emerald-600">
                ✓ Zero critical threats detected
              </p>

              <div className="mt-4 flex justify-between text-xs text-slate-500">
                <span>Geofence: Inside Safe Zones</span>
                <button className="font-semibold text-teal-600">
                  Shields →
                </button>
              </div>
            </div>
          </div>

          {/* GEMINI AI WELLBEING SUMMARY */}
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#171d4f] to-[#20295e] p-6 text-white shadow-lg">

            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/20 p-3">
                  <Brain className="h-7 w-7 text-blue-300" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold">
                      Gemini AI Wellbeing Summary
                    </h2>

                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-200">
                      Live Behavioral Scan
                    </span>
                  </div>

                  <p className="text-sm text-slate-300">
                    Synthesizing all 3 children's daily interaction records
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-700">
                <Sparkles className="h-4 w-4" />
                Run Deep AI Scan
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-500/20 p-2">
                    <Activity className="h-5 w-5 text-emerald-400" />
                  </div>

                  <h3 className="font-semibold">
                    STEM & Educational Focus
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  55 minutes spent on coding and language learning today.
                  Educational focus index increased +12%.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-500/20 p-2">
                    <HeartPulse className="h-5 w-5 text-indigo-300" />
                  </div>

                  <h3 className="font-semibold">
                    Emotional & Chat Sentiment
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  All social chats show positive engagement.
                  Cyberbullying and harassment detection shields clean.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-purple-500/20 p-2">
                    <Moon className="h-5 w-5 text-purple-300" />
                  </div>

                  <h3 className="font-semibold">
                    Sleep & Downtime Protection
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  Bedtime mode activated at 9:00 PM yesterday.
                  Zero late night blue-light exposure recorded.
                </p>
              </div>
            </div>

            {/* AI INPUT */}
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2">
              <div className="flex-1 px-3 text-sm text-slate-400">
                Ask Guardian AI (e.g. "How is Sam's screen balance this week?")
              </div>

              <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold">
                Ask →
              </button>
            </div>
          </div>

          {/* HOURLY SCREEN TIME */}
          <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold">
                  Today's Hourly Screen Time Breakdown
                </h2>

                <p className="text-xs text-slate-500">
                  Minutes usage categorized by educational, creative,
                  gaming and social impact.
                </p>
              </div>

              <div className="flex gap-2">
                <button className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white">
                  Generate Daily Report
                </button>

                <button className="rounded-lg border px-3 py-2 text-xs">
                  Hourly Today
                </button>

                <button className="rounded-lg border px-3 py-2 text-xs">
                  7-Day Wellbeing
                </button>
              </div>
            </div>

            {/* GRAPH */}
            <div className="mt-6 h-64 w-full">
              <svg
                viewBox="0 0 900 260"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                {/* GRID */}
                <line
                  x1="40"
                  y1="30"
                  x2="860"
                  y2="30"
                  stroke="#e2e8f0"
                />
                <line
                  x1="40"
                  y1="80"
                  x2="860"
                  y2="80"
                  stroke="#e2e8f0"
                />
                <line
                  x1="40"
                  y1="130"
                  x2="860"
                  y2="130"
                  stroke="#e2e8f0"
                />
                <line
                  x1="40"
                  y1="180"
                  x2="860"
                  y2="180"
                  stroke="#e2e8f0"
                />
                <line
                  x1="40"
                  y1="230"
                  x2="860"
                  y2="230"
                  stroke="#e2e8f0"
                />

                {/* EDUCATIONAL */}
                <path
                  d="M40 175 C120 125 170 105 240 150 C310 195 340 70 420 115 C500 160 535 90 620 125 C705 160 770 130 860 175"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="4"
                />

                {/* CREATIVE */}
                <path
                  d="M40 150 C120 95 175 70 240 125 C310 180 355 50 420 105 C490 155 540 75 620 80 C710 85 780 70 860 140"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="4"
                />

                {/* GAMING */}
                <path
                  d="M40 140 C120 80 180 65 240 100 C320 150 350 60 420 100 C500 150 545 45 630 60 C720 70 790 75 860 115"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="4"
                />

                {/* SOCIAL */}
                <path
                  d="M40 130 C120 75 175 55 245 95 C315 130 360 50 430 95 C510 140 545 30 630 45 C720 50 800 55 860 105"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="4"
                />

                {/* X LABELS */}
                <text x="35" y="250" fontSize="11" fill="#64748b">
                  08:00
                </text>
                <text x="170" y="250" fontSize="11" fill="#64748b">
                  10:00
                </text>
                <text x="300" y="250" fontSize="11" fill="#64748b">
                  12:00
                </text>
                <text x="430" y="250" fontSize="11" fill="#64748b">
                  14:00
                </text>
                <text x="560" y="250" fontSize="11" fill="#64748b">
                  16:00
                </text>
                <text x="690" y="250" fontSize="11" fill="#64748b">
                  18:00
                </text>
                <text x="825" y="250" fontSize="11" fill="#64748b">
                  20:00
                </text>
              </svg>
            </div>

            <div className="mt-2 flex justify-center gap-6 text-xs">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Creative/Other
              </span>

              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                Educational
              </span>

              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                Gaming
              </span>

              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
                Social/Chat
              </span>
            </div>
          </div>

          {/* APP USAGE */}
          <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">
                  App Usage & Instant Controls
                </h2>

                <p className="text-xs text-slate-500">
                  Monitor app usage and grant extra time instantly.
                </p>
              </div>

              <div className="flex gap-2 text-xs">
                <button className="rounded-full bg-slate-900 px-3 py-1 text-white">
                  All
                </button>
                <button className="rounded-full border px-3 py-1">
                  Educational
                </button>
                <button className="rounded-full border px-3 py-1">
                  Gaming
                </button>
                <button className="rounded-full border px-3 py-1">
                  Social
                </button>
              </div>
            </div>

            <AppRow
              icon={<Brain className="h-5 w-5 text-blue-600" />}
              name="Duolingo"
              category="Educational"
              usage="35% limit used"
              progress="35%"
            />

            <AppRow
              icon={<Cloud className="h-5 w-5 text-emerald-500" />}
              name="Minecraft Education"
              category="Creative"
              usage="62% limit used"
              progress="62%"
            />

            <AppRow
              icon={<Zap className="h-5 w-5 text-amber-500" />}
              name="Roblox"
              category="Gaming"
              usage="100% limit used"
              progress="100%"
              warning
            />

            <AppRow
              icon={<Play className="h-5 w-5 text-blue-500" />}
              name="YouTube Kids"
              category="Entertainment"
              usage="90% limit used"
              progress="90%"
              warning
            />

            <AppRow
              icon={<Users className="h-5 w-5 text-purple-500" />}
              name="Discord"
              category="Social"
              usage="55% limit used"
              progress="55%"
            />

            <AppRow
              icon={<Brain className="h-5 w-5 text-blue-500" />}
              name="Khan Academy"
              category="Educational"
              usage="25% limit used"
              progress="25%"
            />

            <AppRow
              icon={<Users className="h-5 w-5 text-purple-500" />}
              name="TikTok"
              category="Social"
              usage="Status: BLOCKED"
              progress="100%"
              blocked
            />
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="space-y-6">

          {/* QUICK ACTIONS */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-500" />
              <h2 className="font-bold">QUICK GUARDIAN ACTIONS</h2>
            </div>

            <div className="grid grid-cols-2 gap-3">

              <ActionButton
                icon={<Zap className="h-5 w-5 text-amber-500" />}
                title="Pause Internet"
                sub="1-Tap"
              />

              <ActionButton
                icon={<Clock3 className="h-5 w-5 text-emerald-500" />}
                title="Grant Bonus"
                sub="+30m"
              />

              <ActionButton
                icon={<Lock className="h-5 w-5 text-blue-500" />}
                title="Lock Devices"
                sub="Lock"
              />

              <ActionButton
                icon={<Moon className="h-5 w-5 text-purple-500" />}
                title="Bedtime Mode"
                sub="Sleep"
              />

            </div>
          </div>

          {/* RISK ALERTS */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-rose-500" />
                <h2 className="font-bold">LIVE AI RISK ALERTS</h2>
              </div>

              <span className="rounded-full bg-rose-50 px-2 py-1 text-xs font-bold text-rose-500">
                3 Active
              </span>
            </div>

            <RiskCard
              name="Sam Jenkins"
              time="12 min ago"
              title="Flagged Web Query Blocked"
              description="AI Shield intercepted search query with unverified third-party link attempts."
              type="Inappropriate Content"
            />

            <RiskCard
              name="Leo Jenkins"
              time="25 min ago"
              title="Gaming Limit Approaching"
              description="Roblox playtime is at 38/40 minutes. Auto-downtime scheduled in 2 mins."
              type="Gaming"
            />

            <RiskCard
              name="Sam Jenkins"
              time="1 hour ago"
              title="Negative Text Detected in Group Chat"
              description="AI sentiment analysis detected potentially concerning language patterns."
              type="Cyberbullying"
            />

          </div>

          {/* AI REQUESTS */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <h2 className="mb-4 font-bold text-purple-600">
              ✦ AI REQUESTS (2)
            </h2>

            <RequestCard
              title="Scratch Coding Skills"
              text="Teacher requested guardian approval for STEM activity."
            />

            <RequestCard
              title="Nia's Standoff"
              text="Parent approval requested for educational website access."
            />

          </div>

          {/* ACTIVITY */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-bold">LIVE ACTIVITY STREAM</h2>
              <span className="text-xs text-slate-400">Real-time</span>
            </div>

            <div className="space-y-4 text-xs">

              <ActivityItem
                color="bg-blue-500"
                title="Completed Spanish Lesson"
                text="Duolingo • Educational"
              />

              <ActivityItem
                color="bg-purple-500"
                title="Blocked phishing site"
                text="Web Shield • Leo Jenkins"
              />

              <ActivityItem
                color="bg-emerald-500"
                title="Entered Geofence: Safe Zone"
                text="Maplewood • Sam Jenkins"
              />

              <ActivityItem
                color="bg-amber-500"
                title="Requested 20 min of Minecraft"
                text="Parent approval required"
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


/* ================= APP ROW ================= */

function AppRow({
  icon,
  name,
  category,
  usage,
  progress,
  warning = false,
  blocked = false,
}: {
  icon: React.ReactNode;
  name: string;
  category: string;
  usage: string;
  progress: string;
  warning?: boolean;
  blocked?: boolean;
}) {
  return (
    <div className="mt-4 flex items-center gap-4 rounded-xl border p-3">

      <div className="rounded-lg bg-slate-50 p-2">
        {icon}
      </div>

      <div className="w-40">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-slate-400">{category}</p>
      </div>

      <div className="flex-1">
        <div className="mb-1 flex justify-between text-xs">
          <span
            className={
              blocked
                ? "font-semibold text-rose-500"
                : warning
                ? "font-semibold text-amber-500"
                : "text-slate-500"
            }
          >
            {usage}
          </span>
        </div>

        <div className="h-2 rounded-full bg-slate-100">
          <div
            className={`h-2 rounded-full ${
              blocked
                ? "bg-rose-500"
                : warning
                ? "bg-amber-400"
                : "bg-blue-600"
            }`}
            style={{ width: progress }}
          />
        </div>
      </div>

      <button className="rounded-lg border border-emerald-200 px-3 py-1.5 text-xs font-semibold text-emerald-600">
        +15m
      </button>

      <button className="rounded-lg border px-3 py-1.5 text-xs">
        Pause
      </button>

    </div>
  );
}


/* ================= ACTION BUTTON ================= */

function ActionButton({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <button className="rounded-xl border bg-slate-50 p-4 text-left transition hover:bg-slate-100">
      <div className="mb-2 flex items-center justify-between">
        {icon}
        <span className="text-xs font-semibold text-slate-400">
          {sub}
        </span>
      </div>

      <p className="text-sm font-semibold">{title}</p>
    </button>
  );
}


/* ================= RISK CARD ================= */

function RiskCard({
  name,
  time,
  title,
  description,
  type,
}: {
  name: string;
  time: string;
  title: string;
  description: string;
  type: string;
}) {
  return (
    <div className="mb-3 rounded-xl border border-amber-200 bg-amber-50/50 p-4">

      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">{name}</p>
        <span className="text-xs text-slate-400">{time}</span>
      </div>

      <p className="mt-3 text-sm font-bold">{title}</p>

      <p className="mt-2 text-xs leading-5 text-slate-600">
        {description}
      </p>

      <div className="mt-3 flex items-center justify-between border-t pt-3">
        <span className="text-xs text-slate-500">{type}</span>

        <div className="flex gap-2">
          <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
            Resolve
          </button>

          <button className="rounded-lg border bg-white px-3 py-1.5 text-xs">
            Dismiss
          </button>
        </div>
      </div>

    </div>
  );
}


/* ================= REQUEST CARD ================= */

function RequestCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="mb-3 rounded-xl border bg-purple-50/40 p-4">

      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">{title}</p>
        <span className="text-xs text-purple-500">4h ago</span>
      </div>

      <p className="mt-2 text-xs text-slate-500">{text}</p>

      <div className="mt-3 flex gap-2">
        <button className="rounded-lg bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-white">
          Approve
        </button>

        <button className="rounded-lg border bg-white px-4 py-1.5 text-xs">
          Decline
        </button>
      </div>

    </div>
  );
}


/* ================= ACTIVITY ITEM ================= */

function ActivityItem({
  color,
  title,
  text,
}: {
  color: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">

      <span className={`mt-1 h-2.5 w-2.5 rounded-full ${color}`} />

      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-slate-400">{text}</p>
      </div>

    </div>
  );
}