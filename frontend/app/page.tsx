"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import DashboardOverview from "./components/DashboardOverview";
import WellbeingAnalytics from "./components/WellbeingAnalytics";
import ChildrenDevices from "./components/ChildrenDevices";
import AIContentFilters from "./components/AIContentFilters";
import LiveRiskAlerts from "./components/LiveRiskAlerts";
import GuardianSettings from "./components/GuardianSettings";
import AIRiskDetection from "./components/AIRiskDetection";

import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Bell,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  LayoutGrid,
  LogOut,
  Moon,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  TrendingUp,
  User,
  UserCircle,
  Users,
  X,
  Zap,
} from "lucide-react";

type PageName =
  | "Dashboard Overview"
  | "Wellbeing Analytics"
  | "Children & Devices"
  | "AI Content Filters"
  | "AI Risk Detection"
  | "Live Risk Alerts"
  | "Guardian Settings"
  | "Profile"
  | "Reports"
  | "Screen Time";

type Child = {
  name: string;
  age: string;
  device: string;
  initials: string;
};

type DomainResult = {
  found?: boolean;
  domain?: string;
  status?: "allowed" | "blocked" | "review" | "unknown";
  action?: "ALLOW" | "BLOCK" | "REVIEW" | "NOT_FOUND";
  content_category?: string;
  threat_score?: number;
  message?: string;
};

const navigation: {
  label: PageName;
  icon: ReactNode;
  badge?: string;
}[] = [
  {
    label: "Dashboard Overview",
    icon: <LayoutGrid size={18} />,
  },
  {
    label: "Wellbeing Analytics",
    icon: <TrendingUp size={18} />,
  },
  {
    label: "Children & Devices",
    icon: <Users size={18} />,
  },
  {
    label: "AI Content Filters",
    icon: <ShieldCheck size={18} />,
  },
  {
    label: "AI Risk Detection",
    icon: <AlertCircle size={18} />,
  },
  {
    label: "Live Risk Alerts",
    icon: <AlertTriangle size={18} />,
    badge: "3",
  },
  {
    label: "Guardian Settings",
    icon: <Settings size={18} />,
  },
];

const searchItems: {
  name: PageName;
  description: string;
}[] = [
  {
    name: "Dashboard Overview",
    description: "View wellbeing and safety dashboard",
  },
  {
    name: "Wellbeing Analytics",
    description: "View digital wellbeing analytics",
  },
  {
    name: "Children & Devices",
    description: "Manage children and devices",
  },
  {
    name: "AI Content Filters",
    description: "Manage content filtering",
  },
  {
    name: "AI Risk Detection",
    description: "View AI-powered risk detection",
  },
  {
    name: "Live Risk Alerts",
    description: "View active safety alerts",
  },
  {
    name: "Guardian Settings",
    description: "Manage guardian settings",
  },
  {
    name: "Profile",
    description: "View guardian profile",
  },
  {
    name: "Reports",
    description: "View wellbeing reports",
  },
  {
    name: "Screen Time",
    description: "View screen-time information",
  },
];

const children: Child[] = [
  {
    name: "Maya Jenkins",
    age: "Age 9",
    device: "Chromebook 11",
    initials: "MJ",
  },
  {
    name: "Leo Jenkins",
    age: "Age 12",
    device: 'iPad Pro 11"',
    initials: "LJ",
  },
  {
    name: "Sam Jenkins",
    age: "Age 15",
    device: "MacBook Air M2",
    initials: "SJ",
  },
];

function SidebarItem({
  icon,
  text,
  active,
  onClick,
  badge,
}: {
  icon: ReactNode;
  text: string;
  active: boolean;
  onClick: () => void;
  badge?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
        active
          ? "bg-blue-50 font-semibold text-blue-600"
          : "text-slate-600 hover:bg-slate-50"
      }`}
    >
      <span className="shrink-0">{icon}</span>

      <span className="flex-1 text-left">{text}</span>

      {badge && (
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-yellow-100 px-2 text-xs font-semibold text-yellow-700">
          {badge}
        </span>
      )}
    </button>
  );
}

function ProfileInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}

function GuardianProfilePage({
  openPage,
}: {
  openPage: (page: PageName) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <User className="h-10 w-10 text-blue-600" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900">
              Sarah Jenkins
            </h2>

            <p className="mt-1 text-sm font-medium text-emerald-600">
              Primary Guardian
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Parent and primary safety administrator
            </p>
          </div>

          <button
            type="button"
            onClick={() => openPage("Guardian Settings")}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          Profile Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage the primary guardian account information.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          <ProfileInfo label="Full Name" value="Sarah Jenkins" />
          <ProfileInfo label="Role" value="Primary Guardian" />
          <ProfileInfo label="Account Type" value="Parent Account" />
          <ProfileInfo label="Protected Children" value="3 Children" />
          <ProfileInfo label="Account Status" value="Active" />
          <ProfileInfo label="AI Protection" value="Enabled" />
        </div>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
            <ShieldCheck className="h-6 w-6 text-blue-600" />
          </div>

          <div>
            <h3 className="font-bold text-blue-900">
              AI Protection Active
            </h3>

            <p className="mt-1 text-sm leading-6 text-blue-600">
              Your children are protected by continuous AI safety monitoring
              and wellbeing analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          Account Actions
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => openPage("Guardian Settings")}
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Account Settings
          </button>

          <button
            type="button"
            onClick={() => openPage("Reports")}
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}

function ScreenTimePage() {
  const rows = [
    { name: "Maya Jenkins", time: "3h 12m", percent: 62 },
    { name: "Leo Jenkins", time: "4h 05m", percent: 78 },
    { name: "Sam Jenkins", time: "4h 48m", percent: 91 },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          Screen Time Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Daily device usage for protected children.
        </p>

        <div className="mt-7 space-y-6">
          {rows.map((row) => (
            <div key={row.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">
                  {row.name}
                </span>

                <span className="text-sm font-bold text-slate-800">
                  {row.time}
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{ width: `${row.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-xl bg-blue-50 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">
                Family Average
              </p>

              <p className="mt-1 text-xl font-bold text-slate-900">
                3h 42m
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-500">
                Daily Limit
              </p>

              <p className="mt-1 text-xl font-bold text-blue-600">
                5h 00m
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportRow({
  child,
  report,
  status,
  date,
}: {
  child: string;
  report: string;
  status: "Healthy" | "Reviewed" | "Attention";
  date: string;
}) {
  const statusClass =
    status === "Healthy"
      ? "bg-green-50 text-green-600"
      : status === "Reviewed"
        ? "bg-blue-50 text-blue-600"
        : "bg-yellow-50 text-yellow-600";

  return (
    <tr className="border-b border-slate-100">
      <td className="px-3 py-4 text-sm font-semibold text-slate-800">
        {child}
      </td>

      <td className="px-3 py-4 text-sm text-slate-600">
        {report}
      </td>

      <td className="px-3 py-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}
        >
          {status}
        </span>
      </td>

      <td className="px-3 py-4 text-sm text-slate-500">
        {date}
      </td>
    </tr>
  );
}

function ReportsPage() {
  const [reportType, setReportType] = useState("Weekly");
  const [selectedChild, setSelectedChild] =
    useState("All Children");

  const cards = [
    {
      title: "Digital Wellbeing",
      value: "82%",
      label: "Wellbeing Score",
      icon: <TrendingUp size={22} />,
    },
    {
      title: "Screen Time",
      value: "3h 42m",
      label: "Daily Average",
      icon: <Clock3 size={22} />,
    },
    {
      title: "Safety Monitoring",
      value: "97%",
      label: "Protection Rate",
      icon: <ShieldCheck size={22} />,
    },
    {
      title: "Risk Alerts",
      value: "3",
      label: "Active Alerts",
      icon: <AlertTriangle size={22} />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Reports Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Review wellbeing, safety and screen-time activity.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
            >
              <option>All Children</option>
              <option>Maya Jenkins</option>
              <option>Leo Jenkins</option>
              <option>Sam Jenkins</option>
            </select>

            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
            >
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>

            <button
              type="button"
              onClick={() =>
                alert(
                  `${reportType} report prepared for ${selectedChild}.`
                )
              }
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              <FileText size={16} />
              Export Report
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              {card.icon}
            </div>

            <p className="mt-5 text-sm text-slate-500">
              {card.title}
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {card.value}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              {card.label}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Wellbeing Trend
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Weekly wellbeing score
            </p>
          </div>

          <TrendingUp className="text-blue-600" />
        </div>

        <div className="mt-8 flex h-48 items-end justify-between gap-3 border-b border-l border-slate-200 px-4">
          {[
            ["Mon", 68],
            ["Tue", 74],
            ["Wed", 71],
            ["Thu", 79],
            ["Fri", 84],
            ["Sat", 80],
            ["Sun", 82],
          ].map(([day, value]) => (
            <div
              key={day}
              className="flex h-full flex-1 flex-col items-center justify-end"
            >
              <div
                className="w-full max-w-[35px] rounded-t-lg bg-blue-500"
                style={{
                  height: `${Number(value) * 1.65}px`,
                  maxHeight: "165px",
                }}
              />

              <span className="mt-2 text-[10px] text-slate-400">
                {day}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-between">
          <div>
            <p className="text-xs text-slate-400">
              Current Score
            </p>

            <p className="text-xl font-bold text-blue-600">
              82 / 100
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-400">
              Weekly Change
            </p>

            <p className="font-bold text-green-600">
              +8.4%
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-blue-600" />

          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Safety & AI Monitoring
            </h3>

            <p className="text-sm text-slate-500">
              AI-powered safety monitoring summary.
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-100 text-left">
                <th className="px-3 py-3 text-xs text-slate-400">
                  Child
                </th>

                <th className="px-3 py-3 text-xs text-slate-400">
                  Report
                </th>

                <th className="px-3 py-3 text-xs text-slate-400">
                  Status
                </th>

                <th className="px-3 py-3 text-xs text-slate-400">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              <ReportRow
                child="Maya Jenkins"
                report="Weekly Wellbeing"
                status="Healthy"
                date="Today"
              />

              <ReportRow
                child="Leo Jenkins"
                report="Screen Time"
                status="Reviewed"
                date="Yesterday"
              />

              <ReportRow
                child="Sam Jenkins"
                report="Safety Monitoring"
                status="Attention"
                date="Yesterday"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [adminName, setAdminName] = useState("Admin");
  const [activeItem, setActiveItem] =
    useState<PageName>("Dashboard Overview");

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const [domainResult, setDomainResult] =
    useState<DomainResult | null>(null);

  const [childSelectorOpen, setChildSelectorOpen] =
    useState(false);

  const [notificationsOpen, setNotificationsOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const [adminMenuOpen, setAdminMenuOpen] =
    useState(false);

  const [focusMode, setFocusMode] = useState(false);

  const [selectedChild, setSelectedChild] =
    useState<Child>(children[0]);

  useEffect(() => {
    const savedName =
      window.localStorage.getItem("adminName");

    if (savedName) {
      setAdminName(savedName);
    }
  }, []);

  const filteredSearchItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return [];

    return searchItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const openPage = (page: PageName) => {
    setActiveItem(page);

    setSearchQuery("");
    setSearchOpen(false);
    setDomainResult(null);

    setChildSelectorOpen(false);
    setNotificationsOpen(false);
    setProfileOpen(false);
    setAdminMenuOpen(false);

    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const checkDomain = async (value: string) => {
    const domain = value.trim();

    if (!domain) return;

    setDomainResult(null);
    setSearchOpen(true);

    try {
      const response = await fetch(
        `/api/dns-filter?domain=${encodeURIComponent(domain)}`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      setDomainResult(data);
    } catch {
      setDomainResult({
        found: false,
        domain,
        status: "unknown",
        action: "NOT_FOUND",
        message:
          "Unable to connect to the DNS filtering API.",
      });
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("adminName");
    window.localStorage.removeItem("adminAge");
    window.localStorage.removeItem("adminGender");
    window.localStorage.removeItem("adminBio");

    window.location.href = "/login";
  };

  const renderPage = () => {
    switch (activeItem) {
      case "Dashboard Overview":
        return <DashboardOverview />;

      case "Wellbeing Analytics":
        return <WellbeingAnalytics />;

      case "Children & Devices":
        return <ChildrenDevices />;

      case "AI Content Filters":
        return <AIContentFilters />;

      case "AI Risk Detection":
        return <AIRiskDetection />;

      case "Live Risk Alerts":
        return <LiveRiskAlerts />;

      case "Guardian Settings":
        return <GuardianSettings />;

      case "Profile":
        return <GuardianProfilePage openPage={openPage} />;

      case "Reports":
        return <ReportsPage />;

      case "Screen Time":
        return <ScreenTimePage />;

      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div
      className={`min-h-screen ${
        focusMode ? "bg-slate-100" : "bg-slate-50"
      }`}
    >
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* TOP BAR */}
      <header className="fixed left-0 right-0 top-0 z-[100] flex h-[88px] items-center border-b border-slate-200 bg-white px-4 shadow-sm md:px-6">
        {/* LOGO */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-200">
            <Shield className="h-6 w-6 text-white" />
          </div>

          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900">
                AI Wellbeing
              </h1>

              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                Guard Shield
              </span>
            </div>

            <p className="text-sm text-slate-500">
              Child Safety & Mental Health Engine
            </p>
          </div>
        </div>

        {/* CHILD SELECTOR */}
        <div className="relative ml-6 hidden shrink-0 md:block">
          <button
            type="button"
            onClick={() => {
              setChildSelectorOpen(
                (value) => !value
              );
              setProfileOpen(false);
              setNotificationsOpen(false);
              setAdminMenuOpen(false);
            }}
            className="flex min-w-[230px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-left shadow-sm hover:border-blue-300"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
              {selectedChild.initials}
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-800">
                {selectedChild.name}
              </p>

              <p className="text-xs text-slate-500">
                {selectedChild.age} •{" "}
                {selectedChild.device}
              </p>
            </div>

            <ChevronDown
              className={`h-4 w-4 text-slate-500 ${
                childSelectorOpen
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>

          {childSelectorOpen && (
            <div className="absolute left-0 top-14 z-[300] w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div className="border-b border-slate-100 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Select Child
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedChild({
                    name: "All Children",
                    age: "Overview",
                    device: "3 Children",
                    initials: "ALL",
                  });

                  setChildSelectorOpen(false);
                }}
                className="flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-slate-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  ALL
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    All Children
                  </p>

                  <p className="text-xs text-slate-500">
                    View family overview
                  </p>
                </div>
              </button>

              {children.map((child) => (
                <button
                  key={child.name}
                  type="button"
                  onClick={() => {
                    setSelectedChild(child);
                    setChildSelectorOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-5 py-4 text-left ${
                    selectedChild.name === child.name
                      ? "bg-blue-50"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700">
                    {child.initials}
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800">
                      {child.name}
                    </p>

                    <p className="text-xs text-slate-500">
                      {child.age} • {child.device}
                    </p>
                  </div>

                  {selectedChild.name === child.name && (
                    <CheckCircle2 className="ml-auto h-5 w-5 text-blue-600" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* SEARCH */}
        <div className="relative ml-5 hidden min-w-0 flex-1 md:flex">
          <div className="flex w-full max-w-[430px] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-blue-300 focus-within:bg-white">
            <Search className="h-5 w-5 text-slate-400" />

            <input
              type="text"
              value={searchQuery}
              onFocus={() => setSearchOpen(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchOpen(true);
                setDomainResult(null);
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setSearchQuery("");
                  setSearchOpen(false);
                  setDomainResult(null);
                  return;
                }

                if (e.key === "Enter") {
                  const value =
                    e.currentTarget.value.trim();

                  if (!value) return;

                  const looksLikeDomain =
                    value.includes(".") ||
                    value.startsWith("http://") ||
                    value.startsWith("https://") ||
                    value.startsWith("www.");

                  if (looksLikeDomain) {
                    checkDomain(value);
                  } else if (filteredSearchItems[0]) {
                    openPage(filteredSearchItems[0].name);
                  }
                }
              }}
              placeholder="Search apps, domains, alerts..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          {/* SEARCH DROPDOWN */}
          {searchOpen && searchQuery.trim() && (
            <div className="absolute top-14 z-[500] w-full max-w-[430px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              {domainResult ? (
                <div className="p-5">
                  {domainResult.status === "blocked" && (
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-xl">
                          🚫
                        </div>

                        <div>
                          <p className="font-bold text-red-600">
                            DOMAIN BLOCKED
                          </p>

                          <p className="text-sm font-semibold text-slate-800">
                            {domainResult.domain}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-slate-500">
                        {domainResult.message}
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="rounded-xl bg-red-50 p-3">
                          <p className="text-[10px] uppercase text-red-400">
                            Category
                          </p>

                          <p className="mt-1 text-xs font-semibold text-red-700">
                            {domainResult.content_category ||
                              "Restricted"}
                          </p>
                        </div>

                        <div className="rounded-xl bg-red-50 p-3">
                          <p className="text-[10px] uppercase text-red-400">
                            Threat Score
                          </p>

                          <p className="mt-1 text-xs font-semibold text-red-700">
                            {domainResult.threat_score ?? 0}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {domainResult.status === "allowed" && (
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-xl">
                          ✅
                        </div>

                        <div>
                          <p className="font-bold text-green-600">
                            DOMAIN ALLOWED
                          </p>

                          <p className="text-sm font-semibold text-slate-800">
                            {domainResult.domain}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-slate-500">
                        {domainResult.message}
                      </p>

                      <div className="mt-4 rounded-xl bg-green-50 p-3">
                        <p className="text-xs font-semibold text-green-700">
                          Safe Domain
                        </p>

                        <p className="mt-1 text-xs text-green-600">
                          This domain is allowed by the DNS filtering policy.
                        </p>
                      </div>
                    </div>
                  )}

                  {domainResult.status === "review" && (
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 text-xl">
                          ⚠️
                        </div>

                        <div>
                          <p className="font-bold text-yellow-600">
                            DOMAIN UNDER REVIEW
                          </p>

                          <p className="text-sm font-semibold text-slate-800">
                            {domainResult.domain}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-slate-500">
                        {domainResult.message}
                      </p>
                    </div>
                  )}

                  {domainResult.status === "unknown" && (
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl">
                          🔎
                        </div>

                        <div>
                          <p className="font-bold text-slate-600">
                            DOMAIN NOT FOUND
                          </p>

                          <p className="text-sm font-semibold text-slate-800">
                            {domainResult.domain}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-slate-500">
                        {domainResult.message}
                      </p>
                    </div>
                  )}
                </div>
              ) : filteredSearchItems.length > 0 ? (
                filteredSearchItems.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => openPage(item.name)}
                    className="flex w-full items-start gap-3 border-b border-slate-100 px-4 py-3 text-left hover:bg-blue-50"
                  >
                    <Search className="mt-0.5 h-4 w-4 text-blue-600" />

                    <span>
                      <span className="block text-sm font-semibold text-slate-800">
                        {item.name}
                      </span>

                      <span className="block text-xs text-slate-500">
                        {item.description}
                      </span>
                    </span>
                  </button>
                ))
              ) : (
                <button
                  type="button"
                  onClick={() => checkDomain(searchQuery)}
                  className="w-full p-4 text-left hover:bg-blue-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                      🔍
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Check this domain
                      </p>

                      <p className="text-xs text-slate-500">
                        Search the DNS filtering dataset.
                      </p>
                    </div>
                  </div>
                </button>
              )}
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center gap-2">
          {/* NOTIFICATIONS */}
          <div className="relative">
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => {
                setNotificationsOpen(
                  (value) => !value
                );
                setProfileOpen(false);
                setChildSelectorOpen(false);
                setAdminMenuOpen(false);
              }}
              className="relative flex h-11 w-11 items-center justify-center rounded-full hover:bg-slate-100"
            >
              <Bell className="h-5 w-5 text-slate-600" />

              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-orange-400 ring-2 ring-white" />
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 top-14 z-[600] w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                  <p className="font-semibold text-slate-900">
                    Notifications
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setNotificationsOpen(false)
                    }
                  >
                    <X size={17} />
                  </button>
                </div>

                <div className="p-4">
                  <div className="rounded-xl bg-red-50 p-4">
                    <p className="font-semibold text-red-700">
                      3 active risk alerts
                    </p>

                    <p className="mt-1 text-xs text-red-600">
                      Review the latest child safety events.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setNotificationsOpen(false);
                      openPage("Live Risk Alerts");
                    }}
                    className="mt-3 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    View Risk Alerts
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* PROFILE */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setProfileOpen(
                  (value) => !value
                );
                setNotificationsOpen(false);
                setChildSelectorOpen(false);
                setAdminMenuOpen(false);
              }}
              className="flex items-center gap-3 rounded-xl px-2 py-1.5 hover:bg-slate-50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100">
                <User className="h-5 w-5 text-slate-500" />
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-slate-800">
                  Sarah Jenkins
                </p>

                <p className="text-xs font-medium text-emerald-600">
                  Primary Guardian
                </p>
              </div>

              <ChevronDown
                className={`h-4 w-4 text-slate-400 ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-14 z-[600] w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="border-b border-slate-100 px-4 py-4">
                  <p className="font-bold text-slate-800">
                    Sarah Jenkins
                  </p>

                  <p className="mt-1 text-xs text-emerald-600">
                    Primary Guardian
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setProfileOpen(false);
                    openPage("Profile");
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm hover:bg-blue-50"
                >
                  <User size={18} />
                  My Profile
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setProfileOpen(false);
                    openPage("Guardian Settings");
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm hover:bg-blue-50"
                >
                  <Settings size={18} />
                  Settings
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setProfileOpen(false);
                    handleLogout();
                  }}
                  className="flex w-full items-center gap-3 border-t border-slate-100 px-4 py-3.5 text-left text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-[88px] z-50 flex h-[calc(100vh-88px)] w-72 flex-col border-r border-slate-200 bg-white transition-transform ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <Shield size={23} />
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-900">
              SafeWell AI
            </h2>

            <p className="text-xs text-slate-400">
              Child Safety Platform
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="ml-auto rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-3 py-5">
          <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            Main Menu
          </p>

          <nav className="mt-3 space-y-2">
            {navigation.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                text={item.label}
                badge={item.badge}
                active={activeItem === item.label}
                onClick={() =>
                  openPage(item.label)
                }
              />
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t border-slate-100 p-4">
          <div className="rounded-2xl bg-blue-50 p-4">
            <div className="flex items-center gap-2 text-blue-700">
              <Zap size={18} />

              <span className="text-sm font-bold">
                AI Protection Active
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-blue-600">
              Your children are protected by continuous AI safety monitoring.
            </p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() =>
                setAdminMenuOpen(
                  (value) => !value
                )
              }
              className="flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-slate-50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {adminName.charAt(0).toUpperCase()}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {adminName}
                </p>

                <p className="text-xs text-slate-400">
                  Parent Account
                </p>
              </div>

              <ChevronDown
                className={`h-4 w-4 ${
                  adminMenuOpen
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {adminMenuOpen && (
              <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <button
                  type="button"
                  onClick={() => {
                    setAdminMenuOpen(false);
                    openPage("Profile");
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-blue-50"
                >
                  <UserCircle size={18} />
                  My Profile
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAdminMenuOpen(false);
                    openPage("Guardian Settings");
                  }}
                  className="flex w-full items-center gap-3 border-t border-slate-100 px-4 py-3 text-left text-sm hover:bg-blue-50"
                >
                  <Settings size={18} />
                  Settings
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAdminMenuOpen(false);
                    handleLogout();
                  }}
                  className="flex w-full items-center gap-3 border-t border-slate-100 px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div
        className={`transition-all ${
          sidebarOpen ? "lg:pl-72" : "lg:pl-0"
        }`}
      >
        <main className="p-5 pt-[108px] md:p-8 md:pt-[112px]">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <LayoutGrid size={15} />
                <span>/</span>
                <span>{activeItem}</span>
              </div>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                {activeItem}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                AI-powered wellbeing and child safety monitoring.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setFocusMode(
                    (value) => !value
                  )
                }
                className={`rounded-xl border px-4 py-2.5 text-sm font-semibold ${
                  focusMode
                    ? "border-blue-200 bg-blue-50 text-blue-600"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Moon
                  size={16}
                  className="mr-2 inline"
                />

                {focusMode
                  ? "Exit Focus"
                  : "Focus Mode"}
              </button>

              <button
                type="button"
                onClick={() =>
                  alert(
                    "AI safety scan started successfully."
                  )
                }
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <Activity
                  size={16}
                  className="mr-2 inline"
                />
                Run AI Scan
              </button>
            </div>
          </div>

          {renderPage()}
        </main>
      </div>
    </div>
  );
}