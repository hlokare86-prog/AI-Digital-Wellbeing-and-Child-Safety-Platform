"use client";

import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileDown,
  Flag,
  Gamepad2,
  HeartPulse,
  Home,
  Laptop,
  MessageCircle,
  Moon,
  MoreHorizontal,
  ShieldCheck,
  Smile,
  Sparkles,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";

export default function WellbeingAnalytics() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800">
      {/* TOP HEADER */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900">
              Digital Health & Sentiment Analytics
            </h1>

            <span className="rounded-full bg-purple-100 px-2.5 py-1 text-[10px] font-semibold text-purple-700">
              AI Sentiment Engine
            </span>
          </div>

          <p className="mt-1 text-xs text-slate-500">
            Deep longitudinal analysis on emotional wellbeing, focus index,
            and educational engagement.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs">
            <span className="text-slate-400">Child</span>
            <span className="ml-2 font-semibold text-slate-700">
              All Children
            </span>
            <ChevronDown className="ml-2 inline h-3 w-3" />
          </div>

          <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
            7 Days
          </button>

          <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
            30 Days
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800">
            <FileDown className="h-3.5 w-3.5" />
            Export Analytics
          </button>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="OVERALL WELLBEING"
          value="92 / 100"
          change="+4.2%"
          description="from last week"
          icon={<HeartPulse className="h-4 w-4" />}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-500"
        />

        <MetricCard
          title="FOCUS & HOMEWORK"
          value="88%"
          change="+6%"
          description="high productivity ratio"
          icon={<Brain className="h-4 w-4" />}
          iconBg="bg-blue-50"
          iconColor="text-blue-500"
        />

        <MetricCard
          title="POSITIVE SENTIMENT"
          value="96%"
          change="+2.1%"
          description="positive interaction detected"
          icon={<Smile className="h-4 w-4" />}
          iconBg="bg-purple-50"
          iconColor="text-purple-500"
        />

        <MetricCard
          title="FOCUS VS LEISURE RATIO"
          value="2.8 : 1"
          change=""
          description="Focus recommended balance"
          icon={<Clock3 className="h-4 w-4" />}
          iconBg="bg-orange-50"
          iconColor="text-orange-500"
        />
      </div>

      {/* MAIN GRID */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-5">
          {/* WELLBEING TRAJECTORY */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Longitudinal Wellbeing & Focus Trajectory
                </h2>
                <p className="mt-1 text-[11px] text-slate-400">
                  Consistency of digital engagement with focus levels and
                  positive sentiment
                </p>
              </div>

              <div className="flex items-center gap-4 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Wellbeing
                </span>

                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Focus
                </span>
              </div>
            </div>

            <div className="relative h-[250px]">
              {/* Y AXIS */}
              <div className="absolute bottom-7 left-0 top-0 flex flex-col justify-between text-[9px] text-slate-400">
                <span>100</span>
                <span>90</span>
                <span>80</span>
                <span>70</span>
                <span>60</span>
                <span>50</span>
              </div>

              {/* GRID */}
              <div className="absolute bottom-7 left-7 right-0 top-0">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="border-t border-dashed border-slate-100"
                    />
                  ))}
                </div>

                {/* SVG CHART */}
                <svg
                  viewBox="0 0 700 210"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  {/* Wellbeing */}
                  <polyline
                    points="0,75 115,57 230,43 345,82 460,100 575,63 700,47"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Focus */}
                  <polyline
                    points="0,108 115,83 230,62 345,112 460,143 575,93 700,68"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                  />

                  {[0, 115, 230, 345, 460, 575, 700].map((x, i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={
                        [75, 57, 43, 82, 100, 63, 47][i]
                      }
                      r="5"
                      fill="white"
                      stroke="#10b981"
                      strokeWidth="3"
                    />
                  ))}
                </svg>

                {/* X AXIS */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[9px] text-slate-400">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>

          {/* SCREEN CONTENT BREAKDOWN */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    Screen Content Breakdown
                  </h2>
                  <p className="mt-1 text-[11px] text-slate-400">
                    AI categorization of active screen hours
                  </p>
                </div>

                <button>
                  <MoreHorizontal className="h-4 w-4 text-slate-400" />
                </button>
              </div>

              <div className="flex items-center gap-7">
                <div className="relative flex h-36 w-36 shrink-0 items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "conic-gradient(#10b981 0deg 151deg, #8b5cf6 151deg 245deg, #f59e0b 245deg 296deg, #3b82f6 296deg 360deg)",
                    }}
                  />

                  <div className="absolute inset-[13px] flex items-center justify-center rounded-full bg-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">
                        67%
                      </div>
                      <div className="text-[9px] uppercase tracking-wide text-slate-400">
                        Constructive
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-[11px]">
                  <LegendItem
                    color="bg-emerald-500"
                    label="Educational & STEM"
                    value="42%"
                  />

                  <LegendItem
                    color="bg-purple-500"
                    label="Creative & Coding"
                    value="28%"
                  />

                  <LegendItem
                    color="bg-orange-400"
                    label="Gaming & Apps"
                    value="18%"
                  />

                  <LegendItem
                    color="bg-blue-500"
                    label="Social & Chat"
                    value="12%"
                  />
                </div>
              </div>
            </div>

            {/* EMOTION GAUGE */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    Intraday Emotion & Mental Fatigue Gauge
                  </h2>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Emotional AI assessment based on chat and app activity.
                  </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-600">
                  Normal Fatigue Curve
                </span>
              </div>

              <div className="relative h-40">
                <div className="absolute inset-x-0 top-0 flex justify-between text-[9px] text-slate-400">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>

                <svg
                  viewBox="0 0 700 170"
                  className="absolute inset-0 mt-4 h-[125px] w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 25 C120 20 170 20 250 28 C350 38 430 55 510 35 C590 20 650 20 700 25 L700 170 L0 170 Z"
                    fill="#10b981"
                    fillOpacity="0.08"
                  />

                  <path
                    d="M0 25 C120 20 170 20 250 28 C350 38 430 55 510 35 C590 20 650 20 700 25"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                  />

                  <path
                    d="M0 105 C120 100 190 100 270 90 C350 78 410 48 480 80 C550 112 620 125 700 105 L700 170 L0 170 Z"
                    fill="#ef4444"
                    fillOpacity="0.06"
                  />

                  <path
                    d="M0 105 C120 100 190 100 270 90 C350 78 410 48 480 80 C550 112 620 125 700 105"
                    fill="none"
                    stroke="#fb7185"
                    strokeWidth="3"
                  />
                </svg>

                <div className="absolute -bottom-1 left-0 right-0 flex justify-between text-[9px] text-slate-400">
                  <span>8 AM</span>
                  <span>11 AM</span>
                  <span>2 PM</span>
                  <span>5 PM</span>
                  <span>8 PM</span>
                  <span>10 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          {/* QUICK ACTIONS */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xs font-bold text-slate-900">
                QUICK GUARDIAN ACTIONS
              </h2>

              <Sparkles className="h-4 w-4 text-orange-400" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <ActionButton
                icon={<Zap />}
                label="Pause Internet"
              />

              <ActionButton
                icon={<CheckCircle2 />}
                label="Grant Bonus"
              />

              <ActionButton
                icon={<Laptop />}
                label="Lock Devices"
              />

              <ActionButton
                icon={<Moon />}
                label="Bedtime Mode"
              />
            </div>
          </div>

          {/* LIVE AI RISK ALERTS */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50">
                <AlertTriangle className="h-3.5 w-3.5 text-red-500" />
              </div>

              <h2 className="text-xs font-bold text-slate-900">
                LIVE AI RISK ALERTS
              </h2>

              <span className="rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-bold text-red-600">
                3 Active
              </span>
            </div>

            <RiskAlert
              name="Sam Jenkins"
              time="10 min ago"
              title="Flagged Web Query Blocked"
              description="AI detected potentially harmful search behavior."
              type="High Risk"
            />

            <RiskAlert
              name="Leo Jenkins"
              time="25 min ago"
              title="Gaming Limit Approaching"
              description="Daily gaming limit is almost reached."
              type="Moderate"
            />

            <RiskAlert
              name="Sam Jenkins"
              time="1 hour ago"
              title="Negative Sentiment Group Chat"
              description="Repeated negative language detected."
              type="Sentiment"
            />
          </div>

          {/* APP REQUESTS */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-purple-500" />

              <h2 className="text-xs font-bold text-slate-900">
                APP REQUESTS
              </h2>

              <span className="text-[10px] text-slate-400">(2)</span>
            </div>

            <RequestCard
              icon={<Gamepad2 />}
              name="Scratch Coding Studio"
              description="Request to install educational coding app."
            />

            <RequestCard
              icon={<Video />}
              name="Notion Student"
              description="Productivity application requested."
            />
          </div>

          {/* ACTIVITY STREAM */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xs font-bold text-slate-900">
                LIVE ACTIVITY STREAM
              </h2>

              <span className="text-[9px] text-slate-400">Real-time</span>
            </div>

            <ActivityItem
              icon={<CheckCircle2 />}
              title="Completed Science Lesson"
              time="2 min ago"
            />

            <ActivityItem
              icon={<Laptop />}
              title="Blocked phishing website"
              time="8 min ago"
            />

            <ActivityItem
              icon={<Smile />}
              title="Entered Balanced Safe Zone"
              time="15 min ago"
            />

            <ActivityItem
              icon={<TrendingUp />}
              title="Registered positive sentiment"
              time="24 min ago"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function MetricCard({
  title,
  value,
  change,
  description,
  icon,
  iconBg,
  iconColor,
}: {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[9px] font-bold tracking-wide text-slate-400">
            {title}
          </p>

          <div className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </div>

          <div className="mt-1 flex items-center gap-1 text-[10px]">
            {change && (
              <span className="font-semibold text-emerald-500">
                {change}
              </span>
            )}

            <span className="text-slate-400">{description}</span>
          </div>
        </div>

        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function LegendItem({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${color}`} />
        <span className="text-slate-500">{label}</span>
      </div>

      <span className="font-semibold text-slate-700">{value}</span>
    </div>
  );
}

function ActionButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-left text-[10px] font-semibold text-slate-600 transition hover:border-slate-200 hover:bg-slate-100">
      <span className="text-slate-500">{icon}</span>
      {label}
    </button>
  );
}

function RiskAlert({
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
    <div className="mb-3 rounded-lg border border-red-100 bg-red-50/40 p-3 last:mb-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-slate-200" />

          <span className="text-[10px] font-bold text-slate-700">
            {name}
          </span>
        </div>

        <span className="text-[8px] text-slate-400">{time}</span>
      </div>

      <p className="mt-2 text-[10px] font-semibold text-slate-700">
        {title}
      </p>

      <p className="mt-1 text-[9px] leading-4 text-slate-400">
        {description}
      </p>

      <div className="mt-2 flex items-center justify-between">
        <span className="rounded-full bg-red-100 px-2 py-1 text-[8px] font-bold text-red-600">
          {type}
        </span>

        <div className="flex gap-1">
          <button className="rounded-md bg-slate-900 px-2 py-1 text-[8px] font-semibold text-white">
            Review
          </button>

          <button className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[8px] font-semibold text-slate-500">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

function RequestCard({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) {
  return (
    <div className="mb-3 rounded-lg border border-purple-100 bg-purple-50/30 p-3 last:mb-0">
      <div className="flex items-start gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 text-purple-500">
          {icon}
        </div>

        <div className="flex-1">
          <p className="text-[10px] font-bold text-slate-700">{name}</p>

          <p className="mt-1 text-[8px] leading-3 text-slate-400">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-2 flex gap-2">
        <button className="rounded-md bg-emerald-500 px-3 py-1 text-[8px] font-bold text-white">
          Approve
        </button>

        <button className="rounded-md border border-slate-200 bg-white px-3 py-1 text-[8px] font-bold text-slate-500">
          Decline
        </button>
      </div>
    </div>
  );
}

function ActivityItem({
  icon,
  title,
  time,
}: {
  icon: React.ReactNode;
  title: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-2 border-b border-slate-50 py-2 last:border-0">
      <div className="text-emerald-500">{icon}</div>

      <div className="flex-1">
        <p className="text-[9px] font-semibold text-slate-600">{title}</p>
      </div>

      <span className="text-[8px] text-slate-400">{time}</span>
    </div>
  );
}