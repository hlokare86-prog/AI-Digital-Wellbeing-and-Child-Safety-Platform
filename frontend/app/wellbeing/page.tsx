"use client";

import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  Brain,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  Flag,
  HeartPulse,
  Home,
  LayoutDashboard,
  Lock,
  LogOut,
  MessageSquare,
  Moon,
  MoreHorizontal,
  Play,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  User,
  Users,
  Video,
  XCircle,
  Zap,
} from "lucide-react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useState } from "react";

/* ---------------- DATA ---------------- */

const wellbeingData = [
  { day: "Mon", wellbeing: 82, focus: 76 },
  { day: "Tue", wellbeing: 86, focus: 82 },
  { day: "Wed", wellbeing: 89, focus: 88 },
  { day: "Thu", wellbeing: 84, focus: 78 },
  { day: "Fri", wellbeing: 80, focus: 73 },
  { day: "Sat", wellbeing: 87, focus: 84 },
  { day: "Sun", wellbeing: 91, focus: 88 },
];

const fatigueData = [
  { time: "8 AM", normal: 82, fatigue: 14 },
  { time: "11 AM", normal: 84, fatigue: 18 },
  { time: "2 PM", normal: 80, fatigue: 27 },
  { time: "5 PM", normal: 73, fatigue: 42 },
  { time: "8 PM", normal: 78, fatigue: 25 },
  { time: "10 PM", normal: 84, fatigue: 10 },
];

const screenData = [
  { name: "Educational", value: 42 },
  { name: "Creative", value: 23 },
  { name: "Gaming", value: 18 },
  { name: "Social", value: 12 },
  { name: "Other", value: 5 },
];

const pieColors = [
  "#10b981",
  "#6366f1",
  "#f59e0b",
  "#a855f7",
  "#94a3b8",
];

/* ---------------- COMPONENT ---------------- */

export default function WellbeingAnalytics() {
  const [activeMenu, setActiveMenu] = useState("Wellbeing Analytics");
  const [selectedChild, setSelectedChild] = useState("All Children");
  const [period, setPeriod] = useState("7 Days");

  const menuItems = [
    {
      name: "Dashboard Overview",
      icon: LayoutDashboard,
    },
    {
      name: "Wellbeing Analytics",
      icon: HeartPulse,
    },
    {
      name: "Children & Devices",
      icon: Users,
    },
    {
      name: "AI Content Filters",
      icon: Shield,
    },
    {
      name: "Live Risk Alerts",
      icon: AlertTriangle,
    },
    {
      name: "Guardian Settings",
      icon: Settings,
    },
    {
      name: "Reports & Insights",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">

      {/* ================= TOP NAVBAR ================= */}

      <header className="h-[68px] bg-white border-b border-slate-200 flex items-center px-6 sticky top-0 z-50">

        {/* Logo */}

        <div className="flex items-center gap-3 w-[260px]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-sm">
            <HeartPulse className="w-5 h-5 text-white" />
          </div>

          <div>
            <div className="font-bold text-[15px] text-slate-800">
              AI Wellbeing
            </div>

            <div className="text-[10px] text-emerald-600 font-medium">
              Child Safety & Health
            </div>
          </div>
        </div>

        {/* Child Selector */}

        <div className="flex-1 flex items-center gap-3">

          <button
            onClick={() =>
              setSelectedChild(
                selectedChild === "All Children"
                  ? "Leo Jenkins"
                  : "All Children"
              )
            }
            className="h-9 px-3 rounded-lg border border-slate-200 bg-white flex items-center gap-2 text-xs font-medium hover:bg-slate-50"
          >
            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
              <Users className="w-3 h-3 text-blue-600" />
            </div>

            {selectedChild}

            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {/* Search */}

          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />

            <input
              placeholder="Search apps, web logs, alerts..."
              className="w-[250px] h-9 rounded-lg border border-slate-200 pl-9 pr-3 text-xs outline-none focus:border-emerald-400"
            />
          </div>

        </div>

        {/* Right Navbar */}

        <div className="flex items-center gap-3">

          <button className="px-3 h-8 rounded-lg bg-red-50 text-red-600 text-[11px] font-semibold">
            SOS RISK
          </button>

          <button className="px-3 h-8 rounded-lg bg-slate-900 text-white text-[11px] font-semibold">
            Export to Figma
          </button>

          <Bell className="w-4 h-4 text-slate-500" />

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
              SJ
            </div>

            <div className="hidden lg:block">
              <div className="text-[11px] font-semibold">
                Sarah Jenkins
              </div>
              <div className="text-[9px] text-emerald-500">
                Primary Guardian
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* ================= BODY ================= */}

      <div className="flex">

        {/* ================= SIDEBAR ================= */}

        <aside className="w-[230px] min-h-[calc(100vh-68px)] bg-white border-r border-slate-200 p-4 hidden lg:flex flex-col">

          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
            Main Menu
          </div>

          <div className="space-y-1">

            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = activeMenu === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => setActiveMenu(item.name)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition ${
                    active
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </button>
              );
            })}

          </div>

          {/* Protection Card */}

          <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-100 p-3">

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />

              <span className="text-[10px] font-bold text-emerald-700">
                PRO PROTECTION
              </span>
            </div>

            <p className="text-[9px] text-emerald-700/70 mt-2 leading-relaxed">
              AI-powered protection is monitoring your child's digital
              wellbeing.
            </p>

            <div className="mt-2 h-1.5 bg-white rounded-full overflow-hidden">
              <div className="h-full w-[88%] bg-emerald-500 rounded-full" />
            </div>

            <div className="flex justify-between mt-1">
              <span className="text-[8px] text-emerald-700">
                Protection active
              </span>

              <span className="text-[8px] font-bold text-emerald-700">
                88%
              </span>
            </div>

          </div>

          {/* Export */}

          <button className="mt-3 border border-purple-200 bg-purple-50 rounded-xl p-3 text-left">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />

              <span className="text-[10px] font-bold text-purple-700">
                Export Design
              </span>
            </div>

            <span className="text-[8px] text-purple-500">
              Figma
            </span>
          </button>

          <div className="mt-auto">

            <div className="flex items-center gap-2 px-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                <Shield className="w-4 h-4 text-emerald-600" />
              </div>

              <div>
                <p className="text-[10px] font-semibold">
                  Family Wellbeing
                </p>

                <p className="text-[8px] text-slate-400">
                  Safe & secure
                </p>
              </div>
            </div>

            <button className="w-full flex items-center gap-2 px-2 py-2 text-[10px] text-slate-500 hover:text-red-500">
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>

          </div>

        </aside>

        {/* ================= MAIN ================= */}

        <main className="flex-1 p-6 max-w-[1250px]">

          {/* Page Heading */}

          <div className="flex items-center justify-between mb-5">

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Digital Health & Sentiment Analytics
              </h1>

              <p className="text-[11px] text-slate-400 mt-1">
                Comprehensive wellbeing insights and emotional health
                indicators across your children.
              </p>
            </div>

            <div className="flex items-center gap-2">

              <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                3 Children Active
              </span>

            </div>

          </div>

          {/* Analytics Header */}

          <div className="bg-white border border-slate-200 rounded-xl p-4 mb-5">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

              <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-600" />
                </div>

                <div>
                  <h2 className="text-sm font-bold">
                    Digital Health & Sentiment Analytics
                  </h2>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] text-slate-400">
                      AI Sentiment Engine
                    </span>

                    <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 text-[8px] font-semibold">
                      AI Sentiment Engine
                    </span>
                  </div>
                </div>

              </div>

              <div className="flex items-center gap-2">

                {["7 Days", "30 Days", "Quarter"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setPeriod(item)}
                    className={`px-3 py-2 rounded-lg text-[9px] font-semibold border ${
                      period === item
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-500 border-slate-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}

                <button className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-[9px] font-semibold flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  Export Analytics CSV
                </button>

              </div>

            </div>

          </div>

          {/* ================= KPI CARDS ================= */}

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-5">

            <MetricCard
              title="OVERALL WELLBEING"
              value="92 / 100"
              change="+4.2% from last week"
              icon={<HeartPulse className="w-4 h-4" />}
              iconBg="bg-emerald-50"
              iconColor="text-emerald-600"
            />

            <MetricCard
              title="FOCUS & HOMEWORK"
              value="88%"
              change="86% high productivity ratio"
              icon={<Brain className="w-4 h-4" />}
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
            />

            <MetricCard
              title="POSITIVE SENTIMENT"
              value="96%"
              change="92% positive interaction detected"
              icon={<SmileIcon />}
              iconBg="bg-purple-50"
              iconColor="text-purple-600"
            />

            <MetricCard
              title="FUN VS LEISURE RATIO"
              value="2.8 : 1"
              change="3 hours recommended balance"
              icon={<Zap className="w-4 h-4" />}
              iconBg="bg-orange-50"
              iconColor="text-orange-500"
            />

          </div>

          {/* ================= CHART ROW ================= */}

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-4">

            {/* Wellbeing Chart */}

            <div className="bg-white border border-slate-200 rounded-xl p-5">

              <div className="flex justify-between items-start mb-4">

                <div>
                  <h3 className="text-sm font-bold">
                    Longitudinal Wellbeing & Focus Trajectory
                  </h3>

                  <p className="text-[9px] text-slate-400 mt-1">
                    Comparing daily digital engagement with focus level and
                    positive sentiment.
                  </p>
                </div>

                <div className="flex gap-3 text-[9px]">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Wellbeing
                  </span>

                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Focus
                  </span>
                </div>

              </div>

              <div className="h-[270px]">

                <ResponsiveContainer width="100%" height="100%">

                  <LineChart data={wellbeingData}>

                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e2e8f0"
                    />

                    <XAxis
                      dataKey="day"
                      tick={{ fontSize: 10, fill: "#94a3b8" }}
                      axisLine={false}
                      tickLine={false}
                    />

                    <YAxis
                      domain={[50, 100]}
                      tick={{ fontSize: 10, fill: "#94a3b8" }}
                      axisLine={false}
                      tickLine={false}
                    />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="wellbeing"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{
                        r: 3,
                        fill: "#10b981",
                      }}
                    />

                    <Line
                      type="monotone"
                      dataKey="focus"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                      dot={{
                        r: 2,
                        fill: "#3b82f6",
                      }}
                    />

                  </LineChart>

                </ResponsiveContainer>

              </div>

            </div>

            {/* Screen Content */}

            <div className="bg-white border border-slate-200 rounded-xl p-5">

              <div>
                <h3 className="text-sm font-bold">
                  Screen Content Breakdown
                </h3>

                <p className="text-[9px] text-slate-400 mt-1">
                  AI categorization of active screen hours.
                </p>
              </div>

              <div className="relative h-[200px] flex justify-center items-center">

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Pie
                      data={screenData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={3}
                    >
                      {screenData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={pieColors[index]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />

                  </PieChart>

                </ResponsiveContainer>

                <div className="absolute text-center">
                  <div className="text-xl font-bold">
                    67%
                  </div>

                  <div className="text-[8px] text-slate-400 uppercase">
                    Constructive
                  </div>
                </div>

              </div>

              <div className="space-y-2">

                {screenData.slice(0, 4).map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between text-[9px]"
                  >

                    <div className="flex items-center gap-2">

                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: pieColors[index],
                        }}
                      />

                      <span className="text-slate-500">
                        {item.name}
                      </span>

                    </div>

                    <span className="font-semibold">
                      {item.value}%
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* ================= FATIGUE ================= */}

          <div className="bg-white border border-slate-200 rounded-xl p-5 mt-4">

            <div className="flex justify-between">

              <div>
                <h3 className="text-sm font-bold">
                  Intraday Emotion & Mental Fatigue Gauge
                </h3>

                <p className="text-[9px] text-slate-400 mt-1">
                  Contextual AI assessment based on screen time and activity.
                </p>
              </div>

              <span className="px-3 py-1 h-fit rounded-full bg-emerald-50 text-emerald-600 text-[8px] font-semibold border border-emerald-100">
                Normal Fatigue Curve
              </span>

            </div>

            <div className="h-[200px] mt-3">

              <ResponsiveContainer width="100%" height="100%">

                <AreaChart data={fatigueData}>

                  <defs>

                    <linearGradient
                      id="normalGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#10b981"
                        stopOpacity={0.18}
                      />

                      <stop
                        offset="100%"
                        stopColor="#10b981"
                        stopOpacity={0.02}
                      />
                    </linearGradient>

                    <linearGradient
                      id="fatigueGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#fb7185"
                        stopOpacity={0.15}
                      />

                      <stop
                        offset="100%"
                        stopColor="#fb7185"
                        stopOpacity={0.02}
                      />
                    </linearGradient>

                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e2e8f0"
                  />

                  <XAxis
                    dataKey="time"
                    tick={{ fontSize: 9, fill: "#94a3b8" }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    domain={[0, 100]}
                    tick={{ fontSize: 9, fill: "#94a3b8" }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="normal"
                    stroke="#10b981"
                    fill="url(#normalGradient)"
                    strokeWidth={2}
                  />

                  <Area
                    type="monotone"
                    dataKey="fatigue"
                    stroke="#fb7185"
                    fill="url(#fatigueGradient)"
                    strokeWidth={2}
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

        </main>

        {/* ================= RIGHT PANEL ================= */}

        <aside className="w-[330px] p-5 pr-6 hidden xl:block">

          {/* Quick Actions */}

          <Panel title="QUICK GUARDIAN ACTIONS">

            <div className="grid grid-cols-2 gap-2">

              <QuickAction
                icon={<PauseIcon />}
                title="Pause Internet"
              />

              <QuickAction
                icon={<CheckCircle2 />}
                title="Grant Break"
              />

              <QuickAction
                icon={<Lock />}
                title="Lock Device"
              />

              <QuickAction
                icon={<Moon />}
                title="Bedtime Mode"
              />

            </div>

          </Panel>

          {/* Risk Alerts */}

          <Panel
            title="LIVE AI RISK ALERTS"
            badge="3 Active"
            className="mt-4"
          >

            <RiskCard
              name="Sam Jenkins"
              time="10 min ago"
              title="Flagged Web Query Blocked"
              description="AI detected potentially harmful content during web activity."
            />

            <RiskCard
              name="Leo Jenkins"
              time="25 min ago"
              title="Gaming Link Approaching"
              description="Gaming session approaching recommended daily limit."
            />

            <RiskCard
              name="Sam Jenkins"
              time="1 hour ago"
              title="Negative Text Detected"
              description="Sentiment analysis detected negative emotional patterns."
            />

          </Panel>

          {/* App Requests */}

          <Panel
            title="APP REQUESTS (2)"
            className="mt-4"
          >

            <RequestCard
              app="Scratch Coding Studio"
              description="Requested for school programming activity."
            />

            <RequestCard
              app="Notion Student"
              description="Requested for homework and study organization."
            />

          </Panel>

          {/* Activity */}

          <Panel
            title="LIVE ACTIVITY STREAM"
            className="mt-4"
          >

            <ActivityItem
              icon={<CheckCircle2 />}
              title="Completed Reading Lesson"
              child="Leo Jenkins"
              time="12 min ago"
            />

            <ActivityItem
              icon={<Play />}
              title="Blocked phishing link detected"
              child="Sam Jenkins"
              time="18 min ago"
            />

            <ActivityItem
              icon={<Activity />}
              title="Extended Session: 25 min"
              child="Maya Jenkins"
              time="34 min ago"
            />

            <ActivityItem
              icon={<Flag />}
              title="Requested video recommendation"
              child="Leo Jenkins"
              time="42 min ago"
            />

          </Panel>

        </aside>

      </div>

    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function MetricCard({
  title,
  value,
  change,
  icon,
  iconBg,
  iconColor,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4">

      <div className="flex justify-between">

        <div>
          <p className="text-[8px] font-bold text-slate-400 uppercase">
            {title}
          </p>

          <p className="text-xl font-bold text-slate-900 mt-2">
            {value}
          </p>

          <p className="text-[8px] text-emerald-500 mt-1">
            {change}
          </p>
        </div>

        <div
          className={`w-8 h-8 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

function Panel({
  title,
  badge,
  children,
  className = "",
}: {
  title: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-4 ${className}`}
    >

      <div className="flex items-center justify-between mb-3">

        <h3 className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">
          {title}
        </h3>

        {badge && (
          <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-500 text-[8px] font-semibold">
            {badge}
          </span>
        )}

      </div>

      {children}

    </div>
  );
}

function QuickAction({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <button className="border border-slate-200 rounded-lg p-2.5 hover:bg-slate-50 text-left">

      <div className="flex items-center gap-2">

        <div className="text-blue-500">
          {icon}
        </div>

        <span className="text-[9px] font-semibold text-slate-600">
          {title}
        </span>

      </div>

    </button>
  );
}

function RiskCard({
  name,
  time,
  title,
  description,
}: {
  name: string;
  time: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-red-100 bg-red-50/30 rounded-lg p-3 mb-2">

      <div className="flex justify-between">

        <div className="flex items-center gap-1.5">

          <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center">
            <User className="w-3 h-3 text-slate-500" />
          </div>

          <span className="text-[9px] font-semibold">
            {name}
          </span>

        </div>

        <span className="text-[7px] text-slate-400">
          {time}
        </span>

      </div>

      <p className="text-[9px] font-bold mt-2 text-slate-700">
        {title}
      </p>

      <p className="text-[8px] text-slate-400 mt-1 leading-relaxed">
        {description}
      </p>

      <div className="flex gap-2 mt-2">

        <button className="px-2.5 py-1 rounded bg-slate-900 text-white text-[8px] font-semibold">
          Review
        </button>

        <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-500 text-[8px] font-semibold">
          Dismiss
        </button>

      </div>

    </div>
  );
}

function RequestCard({
  app,
  description,
}: {
  app: string;
  description: string;
}) {
  return (
    <div className="border border-purple-100 rounded-lg p-3 mb-2">

      <div className="flex justify-between">

        <span className="text-[9px] font-bold text-slate-700">
          {app}
        </span>

        <span className="text-[7px] text-purple-500">
          App Request
        </span>

      </div>

      <p className="text-[8px] text-slate-400 mt-1">
        {description}
      </p>

      <div className="flex gap-2 mt-2">

        <button className="flex-1 py-1 rounded bg-emerald-500 text-white text-[8px] font-semibold">
          Approve
        </button>

        <button className="flex-1 py-1 rounded border border-slate-200 text-slate-500 text-[8px] font-semibold">
          Decline
        </button>

      </div>

    </div>
  );
}

function ActivityItem({
  icon,
  title,
  child,
  time,
}: {
  icon: React.ReactNode;
  title: string;
  child: string;
  time: string;
}) {
  return (
    <div className="flex gap-2 py-2 border-b border-slate-100 last:border-0">

      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div className="flex-1">

        <p className="text-[8px] font-semibold text-slate-700">
          {title}
        </p>

        <p className="text-[7px] text-slate-400 mt-0.5">
          {child} • {time}
        </p>

      </div>

    </div>
  );
}

/* Icons */

function SmileIcon() {
  return <span className="text-sm">☺</span>;
}

function PauseIcon() {
  return <span className="text-sm">Ⅱ</span>;
}

/* Cell component for PieChart */

function Cell({
  fill,
}: {
  fill: string;
}) {
  return <path fill={fill} />;
}