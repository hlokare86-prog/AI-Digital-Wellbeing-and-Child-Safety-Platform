"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  ChevronDown,
  Check,
  ArrowLeft,
} from "lucide-react";

/* =========================================================
   CHILD DATA
========================================================= */

type Child = {
  id: string;
  name: string;
  grade: string;
  age: number;
  wellbeing: number;
  screenTime: string;
  dailyLimit: string;
  activeDevice: string;
  alerts: number;
  appsMonitored: number;
  avatar: string;
};

const children: Child[] = [
  {
    id: "leo",
    name: "Leo Jenkins",
    grade: "7th Grade",
    age: 12,
    wellbeing: 92,
    screenTime: "2h 25m",
    dailyLimit: "3h 00m",
    activeDevice: 'iPad Pro (11")',
    alerts: 1,
    appsMonitored: 18,
    avatar: "👦",
  },

  {
    id: "maya",
    name: "Maya Jenkins",
    grade: "4th Grade",
    age: 9,
    wellbeing: 96,
    screenTime: "1h 5m",
    dailyLimit: "2h 00m",
    activeDevice: "Chromebook 11",
    alerts: 0,
    appsMonitored: 14,
    avatar: "👧",
  },

  {
    id: "sam",
    name: "Sam Jenkins",
    grade: "10th Grade",
    age: 15,
    wellbeing: 88,
    screenTime: "3h 35m",
    dailyLimit: "4h 00m",
    activeDevice: "MacBook Air M2",
    alerts: 2,
    appsMonitored: 21,
    avatar: "🧒",
  },
];

/* =========================================================
   PROFILE PAGE
========================================================= */

export default function ProfilePage() {
  /* -------------------------------------------------------
     SELECTED CHILD
     This stays in React state.
     Nothing is added to the URL.
  ------------------------------------------------------- */

  const [selectedChild, setSelectedChild] =
    useState<Child>(children[0]);

  const [profileMenuOpen, setProfileMenuOpen] =
    useState(false);

  /* -------------------------------------------------------
     CHANGE CHILD
  ------------------------------------------------------- */

  const selectChild = (child: Child) => {
    setSelectedChild(child);
    setProfileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ===================================================
          TOP BAR
      =================================================== */}

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 md:px-8">

          {/* LEFT */}

          <div>
            <Link
              href="/"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Parent Dashboard
            </Link>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Child Profile
            </h1>
          </div>

          {/* =================================================
              RIGHT TOP GUARDIAN PROFILE
          ================================================= */}

          <div className="relative">

            <button
              type="button"
              onClick={() =>
                setProfileMenuOpen(
                  !profileMenuOpen
                )
              }
              className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-50"
            >

              {/* Guardian Avatar */}

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100">
                <User
                  size={21}
                  className="text-slate-500"
                />
              </div>

              {/* Guardian Name */}

              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-slate-800">
                  Sarah Jenkins
                </p>

                <p className="mt-0.5 text-xs font-medium text-emerald-600">
                  Primary Guardian
                </p>
              </div>

              <ChevronDown
                size={17}
                className={`text-slate-400 transition ${
                  profileMenuOpen
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {/* =================================================
                CHILD SELECTION DROPDOWN
            ================================================= */}

            {profileMenuOpen && (
              <div className="absolute right-0 top-[65px] z-50 w-[330px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

                <div className="border-b border-slate-100 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Select Child Profile
                  </p>
                </div>

                {children.map((child) => {
                  const selected =
                    selectedChild.id === child.id;

                  return (
                    <button
                      key={child.id}
                      type="button"
                      onClick={() =>
                        selectChild(child)
                      }
                      className={`flex w-full items-center gap-3 px-5 py-3 text-left transition ${
                        selected
                          ? "bg-blue-50"
                          : "hover:bg-slate-50"
                      }`}
                    >

                      {/* Avatar */}

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl">
                        {child.avatar}
                      </div>

                      {/* Child information */}

                      <div className="min-w-0 flex-1">

                        <p className="text-sm font-semibold text-slate-800">
                          {child.name}
                        </p>

                        <p className="text-xs text-slate-500">
                          {child.grade} • Age {child.age}
                        </p>

                      </div>

                      {/* Selected icon */}

                      {selected && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-600 text-blue-600">
                          <Check size={14} />
                        </div>
                      )}

                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ===================================================
          PAGE CONTENT
      =================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">

        {/* Description */}

        <p className="mb-7 text-sm text-slate-500">
          Manage your child's wellbeing and safety information.
        </p>

        {/* =================================================
            TOP PROFILE SECTION
        ================================================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* =================================================
              CHILD CARD
          ================================================= */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl">
                {selectedChild.avatar}
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {selectedChild.name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {selectedChild.grade} • Age{" "}
                  {selectedChild.age}
                </p>

                <div className="mt-2 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  Wellbeing Score:{" "}
                  {selectedChild.wellbeing}/100
                </div>
              </div>

            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">

              <div className="flex justify-between py-1.5 text-sm">
                <span className="text-slate-500">
                  Screen Time Today:
                </span>

                <span className="font-bold text-slate-800">
                  {selectedChild.screenTime}
                </span>
              </div>

              <div className="flex justify-between py-1.5 text-sm">
                <span className="text-slate-500">
                  Daily Limit:
                </span>

                <span className="font-medium text-slate-700">
                  {selectedChild.dailyLimit}
                </span>
              </div>

              <div className="flex justify-between py-1.5 text-sm">
                <span className="text-slate-500">
                  Active Device:
                </span>

                <span className="font-semibold text-blue-600">
                  {selectedChild.activeDevice}
                </span>
              </div>

            </div>
          </div>

          {/* =================================================
              PROFILE INFORMATION
          ================================================= */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">

            <h2 className="text-xl font-bold text-slate-900">
              Profile Information
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Name */}

              <ProfileField
                label="Name"
                value={selectedChild.name}
              />

              {/* Age */}

              <ProfileField
                label="Age"
                value={String(selectedChild.age)}
              />

              {/* Grade */}

              <ProfileField
                label="Grade"
                value={selectedChild.grade}
              />

              {/* Device */}

              <ProfileField
                label="Active Device"
                value={selectedChild.activeDevice}
              />

              {/* Screen Limit */}

              <ProfileField
                label="Daily Screen Limit"
                value={selectedChild.dailyLimit}
              />

              {/* Wellbeing */}

              <ProfileField
                label="Wellbeing Score"
                value={`${selectedChild.wellbeing}%`}
              />

            </div>
          </div>
        </div>

        {/* =================================================
            CURRENT STATUS
        ================================================= */}

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold text-slate-900">
            Current Status
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-4">

            {/* Screen Time */}

            <StatusCard
              title="Screen Time"
              value={selectedChild.screenTime}
              className="bg-blue-50"
            />

            {/* Wellbeing */}

            <StatusCard
              title="Wellbeing"
              value={`${selectedChild.wellbeing}%`}
              className="bg-emerald-50"
              valueClass="text-emerald-600"
            />

            {/* Alerts */}

            <StatusCard
              title="Alerts"
              value={String(selectedChild.alerts)}
              className="bg-amber-50"
            />

            {/* Apps */}

            <StatusCard
              title="Apps Monitored"
              value={String(
                selectedChild.appsMonitored
              )}
              className="bg-purple-50"
            />

          </div>
        </div>

        {/* =================================================
            CHILD SWITCHER
        ================================================= */}

        <div className="mt-6">

          <h2 className="mb-4 text-xl font-bold text-slate-900">
            Children
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

            {children.map((child) => {
              const selected =
                selectedChild.id === child.id;

              return (
                <button
                  key={child.id}
                  type="button"
                  onClick={() =>
                    selectChild(child)
                  }
                  className={`rounded-2xl border bg-white p-5 text-left shadow-sm transition ${
                    selected
                      ? "border-blue-400 ring-2 ring-blue-100"
                      : "border-slate-200 hover:border-blue-200 hover:shadow-md"
                  }`}
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
                      {child.avatar}
                    </div>

                    <div className="flex-1">

                      <p className="font-bold text-slate-900">
                        {child.name}
                      </p>

                      <p className="text-sm text-slate-500">
                        {child.grade} • Age{" "}
                        {child.age}
                      </p>

                    </div>

                    {selected && (
                      <Check
                        size={20}
                        className="text-blue-600"
                      />
                    )}

                  </div>

                  <div className="mt-4 rounded-xl bg-slate-50 p-3">

                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">
                        Wellbeing
                      </span>

                      <span className="font-bold text-emerald-600">
                        {child.wellbeing}/100
                      </span>
                    </div>

                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-slate-500">
                        Screen Time
                      </span>

                      <span className="font-semibold text-slate-800">
                        {child.screenTime}
                      </span>
                    </div>

                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-slate-500">
                        Device
                      </span>

                      <span className="font-semibold text-blue-600">
                        {child.activeDevice}
                      </span>
                    </div>

                  </div>
                </button>
              );
            })}

          </div>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   PROFILE FIELD
========================================================= */

function ProfileField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-500">
        {label}
      </label>

      <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
        {value}
      </div>
    </div>
  );
}

/* =========================================================
   STATUS CARD
========================================================= */

function StatusCard({
  title,
  value,
  className,
  valueClass = "text-slate-900",
}: {
  title: string;
  value: string;
  className: string;
  valueClass?: string;
}) {
  return (
    <div className={`rounded-xl p-5 ${className}`}>
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p
        className={`mt-2 text-2xl font-bold ${valueClass}`}
      >
        {value}
      </p>
    </div>
  );
}