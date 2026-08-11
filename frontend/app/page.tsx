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
  LayoutGrid,
  LogOut,
  MoreHorizontal,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  TrendingUp,
  UserCircle,
  Users,
  X,
  Zap,
  Moon,
  FileText,
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

const navigation: { label: PageName; icon: ReactNode; badge?: string }[] = [
  { label: "Dashboard Overview", icon: <LayoutGrid size={18} /> },
  { label: "Wellbeing Analytics", icon: <TrendingUp size={18} /> },
  { label: "Children & Devices", icon: <Users size={18} /> },
  { label: "AI Content Filters", icon: <ShieldCheck size={18} /> },
  { label: "AI Risk Detection", icon: <AlertCircle size={18} /> },
  { label: "Live Risk Alerts", icon: <AlertTriangle size={18} />, badge: "3" },
  { label: "Guardian Settings", icon: <Settings size={18} /> },
];

const searchItems: { name: PageName; description: string }[] = [
  { name: "Dashboard Overview", description: "View wellbeing and safety dashboard" },
  { name: "Wellbeing Analytics", description: "View digital health and wellbeing analytics" },
  { name: "Children & Devices", description: "Manage children and connected devices" },
  { name: "AI Content Filters", description: "Manage content filtering" },
  { name: "AI Risk Detection", description: "View AI-powered risk detection" },
  { name: "Live Risk Alerts", description: "View active safety alerts" },
  { name: "Guardian Settings", description: "Manage guardian settings" },
  { name: "Profile", description: "View guardian profile" },
  { name: "Reports", description: "View wellbeing reports" },
  { name: "Screen Time", description: "View screen time information" },
];

const children: Child[] = [
  { name: "Maya Jenkins", age: "Age 9", device: "Chromebook 11", initials: "MJ" },
  { name: "Leo Jenkins", age: "Age 12", device: 'iPad Pro 11"', initials: "LJ" },
  { name: "Sam Jenkins", age: "Age 15", device: "MacBook Air M2", initials: "SJ" },
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

function PlaceholderPage({ title, description, icon }: { title: string; description: string; icon: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        {icon}
      </div>
      <h2 className="mt-6 text-2xl font-bold text-slate-900">{title}</h2>
      <p className="mt-3 text-slate-500">{description}</p>
      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700">
        AI-powered monitoring and analytics module
      </div>
    </div>
  );
}

export default function Home() {
  const [adminName, setAdminName] = useState("Admin");
  const [activeItem, setActiveItem] = useState<PageName>("Dashboard Overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const [domainResult, setDomainResult] = useState<{
  found: boolean;
  domain?: string;
  status?: "allowed" | "blocked" | "review" | "unknown";
  action?: "ALLOW" | "BLOCK" | "REVIEW" | "NOT_FOUND";
  label?: string;
  content_category?: string;
  threat_score?: number;
  known_blocklist_match?: number;
  total_records?: number;
  message?: string;
} | null>(null);

const checkDomainFromSearch = async (value: string) => {
  const domain = value.trim();

  if (!domain) return;

  setSearchOpen(true);
  setDomainResult(null);

  try {
    const response = await fetch(
      `/api/dns-filter?domain=${encodeURIComponent(domain)}`,
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    console.log("DNS RESULT:", data);

    setDomainResult(data);

    setSearchOpen(true);
  } catch (error) {
    console.error("DNS SEARCH ERROR:", error);

    setDomainResult({
      found: false,
      domain,
      status: "unknown",
      action: "NOT_FOUND",
      message:
        "Unable to connect to the DNS filtering API.",
    });

    setSearchOpen(true);
  }
};
  
  const [profileOpen, setProfileOpen] = useState(false);
  const [topProfileOpen, setTopProfileOpen] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [selectedChild, setSelectedChild] = useState<Child>({
    name: "Maya Jenkins",
    age: "Age 9",
    device: "Chromebook 11",
    initials: "MJ",
  });

  useEffect(() => {
    const savedName = window.localStorage.getItem("adminName");
    if (savedName) setAdminName(savedName);
  }, []);

  const filteredSearchItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    return searchItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const openPage = (page: PageName) => {
    setActiveItem(page);
    setSearchQuery("");
    setSearchOpen(false);
    setProfileOpen(false);
    setTopProfileOpen(false);
    setAdminMenuOpen(false);
    if (window.innerWidth < 1024) setSidebarOpen(false);
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
        return (
          <PlaceholderPage
            title="Guardian Profile"
            description="View and manage the primary guardian profile without leaving the dashboard."
            icon={<UserCircle size={34} />}
          />
        );
      case "Reports":
        return (
          <PlaceholderPage
            title="Reports"
            description="View wellbeing, safety and screen-time reports."
            icon={<FileText size={34} />}
          />
        );
      case "Screen Time":
        return (
          <PlaceholderPage
            title="Screen Time"
            description="View daily screen-time activity and limits for the selected child."
            icon={<Clock3 size={34} />}
          />
        );

      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className={`min-h-screen ${focusMode ? "bg-slate-100" : "bg-slate-50"}`}>
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
        {/* BRAND */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-200 md:h-14 md:w-14">
            <Shield className="h-6 w-6 text-white md:h-7 md:w-7" />
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-slate-900 md:text-xl">AI Wellbeing</h1>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600 md:px-3 md:text-xs">
                Guard Shield
              </span>
            </div>
            <p className="text-xs text-slate-500 md:text-sm">Child Safety & Mental Health Engine</p>
          </div>
        </div>

        <div className="mx-4 hidden h-10 w-px bg-slate-200 xl:block" />

        {/* CHILD SELECTOR */}
        <div className="relative ml-2 shrink-0 md:ml-4">
          <button
            type="button"
            onClick={() => {
              setProfileOpen((v) => !v);
              setTopProfileOpen(false);
              setNotificationsOpen(false);
            }}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-left shadow-sm transition hover:border-blue-300 hover:shadow-md md:min-w-[250px] md:px-4"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600 md:h-10 md:w-10">
              {selectedChild.initials}
            </div>
            <div className="hidden flex-1 sm:block">
              <p className="text-sm font-semibold text-slate-800">{selectedChild.name}</p>
              <p className="text-xs text-slate-500">{selectedChild.age} • {selectedChild.device}</p>
            </div>
            <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform ${profileOpen ? "rotate-180" : ""}`} />
          </button>

          {profileOpen && (
            <div className="absolute left-0 top-[70px] z-[300] w-[330px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div className="border-b border-slate-100 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Select Profile</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedChild({ name: "All Children", age: "Overview", device: "3 Children", initials: "ALL" });
                  setProfileOpen(false);
                }}
                className="flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-slate-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">ALL</div>
                <div>
                  <p className="font-semibold text-slate-800">All Children Overview</p>
                  <p className="text-xs text-slate-500">View all children</p>
                </div>
              </button>

              {children.map((child) => (
                <button
                  key={child.name}
                  type="button"
                  onClick={() => {
                    setSelectedChild(child);
                    setProfileOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-5 py-4 text-left ${selectedChild.name === child.name ? "bg-blue-50" : "hover:bg-slate-50"}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700">
                    {child.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{child.name}</p>
                    <p className="text-xs text-slate-500">
                      {child.name === "Maya Jenkins" ? "4th Grade" : child.name === "Leo Jenkins" ? "7th Grade" : "10th Grade"} • {child.device}
                    </p>
                  </div>
                  {selectedChild.name === child.name && <CheckCircle2 className="ml-auto h-5 w-5 text-blue-600" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* SEARCH */}
<div className="relative ml-3 hidden min-w-0 flex-1 justify-center md:flex">
  <div className="flex w-full max-w-[390px] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-blue-300 focus-within:bg-white">

    <Search className="h-5 w-5 shrink-0 text-slate-400" />

    <input
      type="text"
      value={searchQuery}
      onFocus={() => {
        setSearchOpen(true);
      }}
      onChange={(e) => {
        const value = e.target.value;

        setSearchQuery(value);
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
          const value = e.currentTarget.value.trim();

          if (!value) return;

          const looksLikeDomain =
            value.includes(".") ||
            value.startsWith("http://") ||
            value.startsWith("https://") ||
            value.startsWith("www.");

          if (looksLikeDomain) {
            checkDomainFromSearch(value);
            setSearchOpen(true);
            return;
          }

          if (filteredSearchItems[0]) {
            openPage(filteredSearchItems[0].name);
          }
        }
      }}
      placeholder="Search apps, domains, alerts..."
      className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
    />
  </div>

  {searchOpen && searchQuery.trim() && (
    <div className="absolute top-[62px] z-[250] w-full max-w-[390px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

     {/* DOMAIN RESULT */}
{domainResult ? (
  <div className="p-5">

    {/* BLOCKED */}
    {domainResult.status === "blocked" && (
      <div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-xl">
            🚫
          </div>

          <div>
            <p className="text-sm font-bold text-red-600">
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
            <p className="text-[10px] font-semibold uppercase text-red-400">
              Category
            </p>

            <p className="mt-1 text-xs font-semibold text-red-700">
              {domainResult.content_category || "Restricted"}
            </p>
          </div>

          <div className="rounded-xl bg-red-50 p-3">
            <p className="text-[10px] font-semibold uppercase text-red-400">
              Threat Score
            </p>

            <p className="mt-1 text-xs font-semibold text-red-700">
              {domainResult.threat_score ?? 0}
            </p>
          </div>

        </div>

        <div className="mt-3 rounded-xl border border-red-100 bg-red-50 p-3">
          <p className="text-xs font-semibold text-red-700">
            Child Safety Protection
          </p>

          <p className="mt-1 text-xs text-red-600">
            Access to this domain should be blocked.
          </p>
        </div>
      </div>
    )}

    {/* ALLOWED */}
    {domainResult.status === "allowed" && (
      <div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-xl">
            ✅
          </div>

          <div>
            <p className="text-sm font-bold text-green-600">
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

        <div className="mt-4 rounded-xl border border-green-100 bg-green-50 p-3">
          <p className="text-xs font-semibold text-green-700">
            Safe Domain
          </p>

          <p className="mt-1 text-xs text-green-600">
            This domain is allowed by your DNS filtering policy.
          </p>
        </div>

       {/* OPEN DOMAIN */}
{domainResult.domain && (
  <a
    href={`https://${domainResult.domain}`}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 block w-full rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-700"
  >
    🌐 Open Domain
  </a>
)}
      </div>
    )}

    {/* REVIEW */}
    {domainResult.status === "review" && (
      <div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 text-xl">
            ⚠️
          </div>

          <div>
            <p className="text-sm font-bold text-yellow-600">
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

        <div className="mt-4 rounded-xl border border-yellow-100 bg-yellow-50 p-3">
          <p className="text-xs font-semibold text-yellow-700">
            Review Required
          </p>

          <p className="mt-1 text-xs text-yellow-600">
            This domain has a REVIEW action in the dataset.
          </p>
        </div>
      </div>
    )}

    {/* NOT FOUND */}
    {domainResult.status === "unknown" && (
      <div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl">
            🔎
          </div>

          <div>
            <p className="text-sm font-bold text-slate-600">
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
) : (
        <>
          {/* NORMAL PAGE SEARCH */}
          {filteredSearchItems.length > 0 ? (
            filteredSearchItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => openPage(item.name)}
                className="flex w-full items-start gap-3 border-b border-slate-100 px-4 py-3 text-left last:border-0 hover:bg-blue-50"
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
            /* DOMAIN SEARCH PROMPT */
            <button
  type="button"
  onClick={() => {
    const value = searchQuery.trim();

    if (!value) return;

    checkDomainFromSearch(value);
  }}
  className="w-full cursor-pointer p-4 text-left transition-colors hover:bg-blue-50"
>
  <div className="flex items-center gap-3">

    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-lg">
      🔍
    </div>

    <div>
      <p className="text-sm font-semibold text-slate-800">
        Check this domain
      </p>

      <p className="text-xs text-slate-500">
        Click here to check the DNS filtering dataset.
      </p>
    </div>

  </div>
</button>
          )}
        </>
      )}

    </div>
  )}
</div>

        {/* RIGHT ACTIONS */}
        <div className="ml-auto flex shrink-0 items-center gap-1 md:gap-2">
          <button
            type="button"
            onClick={() => alert("SOS Pause activated")}
            className="hidden items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-100 xl:flex"
          >
            <AlertCircle className="h-5 w-5" />
            SOS PAUSE
          </button>

          <div className="relative">
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => {
                setNotificationsOpen((v) => !v);
                setTopProfileOpen(false);
                setProfileOpen(false);
              }}
              className="relative flex h-11 w-11 items-center justify-center rounded-full hover:bg-slate-100"
            >
              <Bell className="h-5 w-5 text-slate-600" />
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-orange-400 ring-2 ring-white" />
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 top-14 z-[300] w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                  <p className="font-semibold text-slate-900">Notifications</p>
                  <button type="button" onClick={() => setNotificationsOpen(false)} aria-label="Close notifications">
                    <X size={17} className="text-slate-400" />
                  </button>
                </div>
                <div className="p-3">
                  <div className="rounded-xl bg-red-50 p-3">
                    <p className="text-sm font-semibold text-red-700">3 active risk alerts</p>
                    <p className="mt-1 text-xs text-red-600">Review the latest child safety events.</p>
                  </div>
                  <button type="button" onClick={() => { setNotificationsOpen(false); openPage("Live Risk Alerts"); }} className="mt-3 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                    View Risk Alerts
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* GUARDIAN PROFILE */}
          <div className="relative ml-1">
            <button
              type="button"
              onClick={() => {
                setTopProfileOpen((v) => !v);
                setNotificationsOpen(false);
                setProfileOpen(false);
              }}
              className="flex items-center gap-2 rounded-xl px-2 py-2 text-left hover:bg-slate-50 md:px-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-slate-100">
                <UserCircle className="h-6 w-6 text-slate-500" />
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-semibold text-slate-800">Sarah Jenkins</p>
                <p className="text-xs font-medium text-emerald-600">Primary Guardian</p>
              </div>
              <ChevronDown className={`hidden h-4 w-4 text-slate-400 transition-transform lg:block ${topProfileOpen ? "rotate-180" : ""}`} />
            </button>

            {topProfileOpen && (
              <div className="absolute right-0 top-[62px] z-[300] w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="border-b border-slate-100 px-5 py-4">
                  <p className="text-sm font-semibold text-slate-900">Sarah Jenkins</p>
                  <p className="text-xs text-emerald-600">Primary Guardian</p>
                </div>
                <button type="button" onClick={() => openPage("Profile")} className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm text-slate-700 hover:bg-slate-50">
                  <UserCircle size={18} /> My Profile
                </button>
                <button type="button" onClick={() => openPage("Guardian Settings")} className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm text-slate-700 hover:bg-slate-50">
                  <Settings size={18} /> Settings
                </button>
                <button type="button" onClick={handleLogout} className="flex w-full items-center gap-3 border-t border-slate-100 px-5 py-3 text-left text-sm text-red-600 hover:bg-red-50">
                  <LogOut size={18} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-[88px] z-50 flex h-[calc(100vh-88px)] w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <Shield size={23} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">SafeWell AI</h2>
            <p className="text-xs text-slate-400">Child Safety Platform</p>
          </div>
          <button type="button" onClick={() => setSidebarOpen(false)} className="ml-auto rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden" aria-label="Close menu">
            <X size={18} />
          </button>
        </div>

        <div className="px-3 py-5">
          <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">Main Menu</p>
          <nav className="mt-3 space-y-2">
            {navigation.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                text={item.label}
                badge={item.badge}
                active={activeItem === item.label}
                onClick={() => openPage(item.label)}
              />
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t border-slate-100 p-4">
          <div className="rounded-2xl bg-blue-50 p-4">
            <div className="flex items-center gap-2 text-blue-700">
              <Zap size={18} />
              <span className="text-sm font-bold">AI Protection Active</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-blue-600">Your children are protected by continuous AI safety monitoring.</p>
          </div>

          <div className="relative mt-4">
            <button
              type="button"
              onClick={() => setAdminMenuOpen((v) => !v)}
              className="flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-slate-50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">{adminName.charAt(0).toUpperCase()}</div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">{adminName}</p>
                <p className="text-xs text-slate-400">Parent Account</p>
              </div>
              <MoreHorizontal size={18} className="text-slate-400" />
            </button>

            {adminMenuOpen && (
              <div className="absolute bottom-14 left-0 right-0 z-[200] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                <button type="button" onClick={() => openPage("Profile")} className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <UserCircle size={17} /> My Profile
                </button>
                <button type="button" onClick={handleLogout} className="flex w-full items-center gap-3 border-t border-slate-100 px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50">
                  <LogOut size={17} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className={`transition-all duration-200 ${sidebarOpen ? "lg:pl-72" : "lg:pl-0"}`}>
        <main className="p-5 pt-[108px] md:p-8 md:pt-[112px]">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <LayoutGrid size={15} />
                <span>/</span>
                <span>{activeItem}</span>
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{activeItem}</h2>
              <p className="mt-1 text-sm text-slate-500">AI-powered wellbeing and child safety monitoring.</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFocusMode((v) => !v)}
                className={`rounded-xl border px-4 py-2.5 text-sm font-semibold shadow-sm ${focusMode ? "border-blue-200 bg-blue-50 text-blue-600" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}
              >
                <Moon size={16} className="mr-2 inline" />
                {focusMode ? "Exit Focus" : "Focus Mode"}
              </button>
              <button type="button" onClick={() => alert("AI safety scan started successfully.")} className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
                <Activity size={16} className="mr-2 inline" />
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