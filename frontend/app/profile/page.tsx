"use client";

import { useState } from "react";

type Student = {
  id: number;
  name: string;
  age: number;
  device: string;
  school: string;
  className: string;
  email: string;
  status: string;
  wellbeing: number;
  screenTime: string;
  aiProtection: string;
  avatar: string;
};

const students: Student[] = [
  {
    id: 1,
    name: "Maya Jenkins",
    age: 9,
    device: "Chromebook 11",
    school: "Green Valley School",
    className: "4",
    email: "maya.jenkins@student.com",
    status: "Active",
    wellbeing: 86,
    screenTime: "3h 25m",
    aiProtection: "Enabled",
    avatar: "MJ",
  },
  {
    id: 2,
    name: "Leo Jenkins",
    age: 12,
    device: 'iPad Pro 11"',
    school: "Green Valley School",
    className: "7",
    email: "leo.jenkins@student.com",
    status: "Active",
    wellbeing: 82,
    screenTime: "4h 10m",
    aiProtection: "Enabled",
    avatar: "LJ",
  },
  {
    id: 3,
    name: "Sam Jenkins",
    age: 15,
    device: "MacBook Air M2",
    school: "Green Valley High School",
    className: "10",
    email: "sam.jenkins@student.com",
    status: "Active",
    wellbeing: 91,
    screenTime: "3h 45m",
    aiProtection: "Enabled",
    avatar: "SJ",
  },
];

const parent = {
  name: "Sarah Jenkins",
  role: "Primary Guardian",
  accountType: "Parent Account",
  avatar: "SJ",
};

export default function ProfilePage() {
  const [selectedStudent, setSelectedStudent] = useState<Student>(
    students[0]
  );

  const [studentMenuOpen, setStudentMenuOpen] = useState(false);

  const [editMode, setEditMode] = useState(false);

  const [focusMode, setFocusMode] = useState(false);

  const [scanRunning, setScanRunning] = useState(false);

  const switchStudent = (student: Student) => {
    setSelectedStudent(student);
    setStudentMenuOpen(false);
    setEditMode(false);
  };

  const runAIScan = () => {
    setScanRunning(true);

    setTimeout(() => {
      setScanRunning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">

      {/* ========================================================= */}
      {/* TOP BAR */}
      {/* ========================================================= */}

      <header className="h-[74px] bg-white border-b border-slate-200 flex items-center px-7">

        {/* LOGO */}

        <div className="flex items-center gap-3 w-[235px]">

          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white text-lg">
            🛡
          </div>

          <div>
            <h1 className="font-bold text-[17px]">
              AI Wellbeing
            </h1>

            <p className="text-[10px] text-slate-400">
              Child Safety & Mental Health Engine
            </p>
          </div>

        </div>


        {/* ========================================================= */}
        {/* STUDENT SELECTOR */}
        {/* ========================================================= */}

        <div className="relative">

          <button
            onClick={() =>
              setStudentMenuOpen(!studentMenuOpen)
            }
            className="w-[285px] h-[56px] bg-white border border-slate-200 rounded-xl flex items-center px-4 gap-3 hover:bg-slate-50 transition"
          >

            {/* Avatar */}

            <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
              {selectedStudent.avatar}
            </div>


            {/* Student name */}

            <div className="text-left flex-1">

              <p className="text-sm font-semibold">
                {selectedStudent.name}
              </p>

              <p className="text-[11px] text-slate-400">
                Age {selectedStudent.age} • {selectedStudent.device}
              </p>

            </div>


            {/* Arrow */}

            <span className="text-slate-400">
              {studentMenuOpen ? "⌃" : "⌄"}
            </span>

          </button>


          {/* ========================================================= */}
          {/* STUDENT DROPDOWN */}
          {/* ========================================================= */}

          {studentMenuOpen && (

            <div className="absolute top-[62px] left-0 w-[330px] bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden">

              {/* Header */}

              <div className="px-5 py-4 border-b border-slate-100">

                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                  Select Child
                </p>

              </div>


              {/* ALL CHILDREN */}

              <button
                onClick={() => setStudentMenuOpen(false)}
                className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-50 text-left transition"
              >

                <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">
                  ALL
                </div>

                <div>

                  <p className="font-semibold text-[15px]">
                    All Children
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    View family overview
                  </p>

                </div>

              </button>


              {/* STUDENTS */}

              {students.map((student) => (

                <button
                  key={student.id}
                  onClick={() => switchStudent(student)}
                  className={`w-full flex items-center gap-4 px-5 py-4 text-left transition
                    ${
                      selectedStudent.id === student.id
                        ? "bg-blue-50"
                        : "hover:bg-slate-50"
                    }
                  `}
                >

                  {/* Avatar */}

                  <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                    {student.avatar}
                  </div>


                  {/* Information */}

                  <div className="flex-1">

                    <p className="font-semibold text-[15px]">
                      {student.name}
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      Age {student.age} • {student.device}
                    </p>

                  </div>


                  {/* Selected */}

                  {selectedStudent.id === student.id && (

                    <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 text-xs">
                      ✓
                    </div>

                  )}

                </button>

              ))}

            </div>

          )}

        </div>


        {/* ========================================================= */}
        {/* SEARCH */}
        {/* ========================================================= */}

        <div className="ml-5 flex-1 max-w-[360px]">

          <div className="h-[46px] border border-slate-200 bg-white rounded-xl flex items-center px-4 gap-3">

            <span className="text-slate-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search apps, domains, alerts..."
              className="outline-none w-full text-sm bg-transparent"
            />

          </div>

        </div>


        {/* ========================================================= */}
        {/* PARENT ACCOUNT */}
        {/* ========================================================= */}

        <div className="ml-auto flex items-center gap-4">

          <button className="text-slate-500 hover:text-blue-600">
            🔔
          </button>


          <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">
            {parent.avatar}
          </div>


          <div>

            <p className="text-sm font-semibold">
              {parent.name}
            </p>

            <p className="text-[10px] text-slate-400">
              {parent.role}
            </p>

          </div>

        </div>

      </header>


      {/* ========================================================= */}
      {/* MAIN BODY */}
      {/* ========================================================= */}

      <div className="flex">


        {/* ========================================================= */}
        {/* SIDEBAR */}
        {/* ========================================================= */}

        <aside className="w-[235px] min-h-[calc(100vh-74px)] bg-white border-r border-slate-200 p-5">

          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">
            Main Menu
          </p>


          <nav className="space-y-1">

            <SidebarItem
              icon="▦"
              label="Dashboard Overview"
            />

            <SidebarItem
              icon="⌁"
              label="Wellbeing Analytics"
            />

            <SidebarItem
              icon="♙"
              label="Children & Devices"
            />

            <SidebarItem
              icon="✓"
              label="AI Content Filters"
            />

            <SidebarItem
              icon="◉"
              label="AI Risk Detection"
            />

            <SidebarItem
              icon="⚠"
              label="Live Risk Alerts"
              badge="3"
            />

            <SidebarItem
              icon="⚙"
              label="Guardian Settings"
            />

          </nav>


          {/* ========================================================= */}
          {/* AI PROTECTION CARD */}
          {/* ========================================================= */}

          <div className="mt-[220px] bg-blue-50 rounded-xl p-4">

            <div className="flex items-center gap-2 mb-2">

              <span className="text-blue-600">
                ⚡
              </span>

              <p className="text-xs font-bold text-blue-700">
                AI Protection Active
              </p>

            </div>


            <p className="text-[10px] leading-4 text-blue-500">
              {selectedStudent.name} is protected by continuous
              AI safety monitoring.
            </p>

          </div>


          {/* ========================================================= */}
          {/* PARENT ACCOUNT */}
          {/* ========================================================= */}

          <div className="mt-5 pt-4 border-t border-slate-200">

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">
                {parent.avatar}
              </div>


              <div className="flex-1">

                <p className="text-sm font-semibold">
                  {parent.name}
                </p>

                <p className="text-[10px] text-slate-400">
                  {parent.accountType}
                </p>

              </div>


              <span className="text-xs text-slate-400">
                ⋮
              </span>

            </div>

          </div>

        </aside>


        {/* ========================================================= */}
        {/* MAIN PROFILE CONTENT */}
        {/* ========================================================= */}

        <main className="flex-1 p-7 max-w-[1250px]">


          {/* BREADCRUMB */}

          <div className="text-xs text-slate-400 mb-4">
            Dashboard &nbsp;/&nbsp; Profile
          </div>


          {/* ========================================================= */}
          {/* PAGE TITLE */}
          {/* ========================================================= */}

          <div className="flex justify-between items-center mb-7">

            <div>

              <h2 className="text-[28px] font-bold">
                Student Profile
              </h2>

              <p className="text-sm text-slate-400 mt-1">
                AI-powered wellbeing and child safety profile.
              </p>

            </div>


            <div className="flex gap-3">

              {/* FOCUS MODE */}

              <button
                onClick={() => setFocusMode(!focusMode)}
                className={`px-4 py-2.5 rounded-lg text-sm border transition
                  ${
                    focusMode
                      ? "bg-blue-50 border-blue-200 text-blue-600"
                      : "bg-white border-slate-200 text-slate-700"
                  }
                `}
              >
                ◔ {focusMode ? "Focus Mode On" : "Focus Mode"}
              </button>


              {/* AI SCAN */}

              <button
                onClick={runAIScan}
                disabled={scanRunning}
                className="px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 disabled:opacity-70"
              >
                {scanRunning
                  ? "⟳ Scanning..."
                  : "⚡ Run AI Scan"}
              </button>

            </div>

          </div>


          {/* ========================================================= */}
          {/* STUDENT HEADER CARD */}
          {/* ========================================================= */}

          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-5">

            <div className="flex items-center">


              {/* STUDENT AVATAR */}

              <div className="w-[76px] h-[76px] rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mr-5">
                {selectedStudent.avatar}
              </div>


              {/* STUDENT INFORMATION */}

              <div className="flex-1">

                <div className="flex items-center gap-3">

                  <h3 className="text-xl font-bold">
                    {selectedStudent.name}
                  </h3>


                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-[10px] font-semibold">
                    Student
                  </span>

                </div>


                <p className="text-sm text-slate-400 mt-1">
                  Age {selectedStudent.age} • Class{" "}
                  {selectedStudent.className}
                </p>


                <p className="text-xs text-slate-400 mt-1">
                  {selectedStudent.school}
                </p>

              </div>


              {/* DEVICE */}

              <div className="mr-10">

                <p className="text-[10px] text-slate-400 uppercase">
                  Connected Device
                </p>

                <p className="text-sm font-semibold mt-1">
                  💻 {selectedStudent.device}
                </p>

              </div>


              {/* STATUS */}

              <div>

                <p className="text-[10px] text-slate-400 uppercase">
                  Status
                </p>

                <p className="text-sm font-semibold text-green-600 mt-1">
                  ● {selectedStudent.status}
                </p>

              </div>

            </div>

          </section>


          {/* ========================================================= */}
          {/* PROFILE INFORMATION */}
          {/* ========================================================= */}

          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-5">

            <div className="flex justify-between items-center mb-5">

              <div>

                <h3 className="text-lg font-bold">
                  Profile Information
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  Manage {selectedStudent.name}'s student information.
                </p>

              </div>


              {/* EDIT BUTTON */}

              <button
                onClick={() => setEditMode(!editMode)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700"
              >
                {editMode ? "Save Changes" : "Edit Profile"}
              </button>

            </div>


            <div className="grid grid-cols-2 gap-4">

              <InfoBox
                label="FULL NAME"
                value={selectedStudent.name}
                editMode={editMode}
              />


              <InfoBox
                label="AGE"
                value={`${selectedStudent.age} Years`}
                editMode={editMode}
              />


              <InfoBox
                label="CLASS"
                value={`Class ${selectedStudent.className}`}
                editMode={editMode}
              />


              <InfoBox
                label="SCHOOL"
                value={selectedStudent.school}
                editMode={editMode}
              />


              <InfoBox
                label="CONNECTED DEVICE"
                value={selectedStudent.device}
                editMode={editMode}
              />


              <InfoBox
                label="EMAIL"
                value={selectedStudent.email}
                editMode={editMode}
              />


              <InfoBox
                label="ACCOUNT STATUS"
                value={selectedStudent.status}
                editMode={editMode}
              />


              <InfoBox
                label="AI PROTECTION"
                value={selectedStudent.aiProtection}
                editMode={editMode}
              />

            </div>

          </section>


          {/* ========================================================= */}
          {/* WELLBEING OVERVIEW */}
          {/* ========================================================= */}

          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-5">

            <h3 className="text-lg font-bold">
              Wellbeing Overview
            </h3>


            <p className="text-xs text-slate-400 mt-1 mb-5">
              AI-generated wellbeing indicators for{" "}
              {selectedStudent.name}.
            </p>


            <div className="grid grid-cols-3 gap-4">


              {/* WELLBEING SCORE */}

              <StatCard
                title="Wellbeing Score"
                value={`${selectedStudent.wellbeing}/100`}
                description="Healthy"
              />


              {/* SCREEN TIME */}

              <StatCard
                title="Today's Screen Time"
                value={selectedStudent.screenTime}
                description="Within limits"
              />


              {/* AI PROTECTION */}

              <StatCard
                title="AI Protection"
                value={selectedStudent.aiProtection}
                description="Continuous monitoring"
              />

            </div>

          </section>


          {/* ========================================================= */}
          {/* AI PROTECTION */}
          {/* ========================================================= */}

          <section className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-600 text-xl">
                🛡
              </div>


              <div>

                <h3 className="font-bold text-blue-800">
                  AI Protection Active
                </h3>


                <p className="text-xs text-blue-600 mt-1">
                  {selectedStudent.name} is protected by continuous
                  AI safety monitoring, content filtering and
                  wellbeing analysis.
                </p>

              </div>

            </div>

          </section>


          {/* ========================================================= */}
          {/* PARENT INFORMATION */}
          {/* ========================================================= */}

          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">
                {parent.avatar}
              </div>


              <div>

                <p className="text-[10px] uppercase text-slate-400 font-semibold">
                  Managed By
                </p>

                <h3 className="text-base font-bold mt-1">
                  {parent.name}
                </h3>

                <p className="text-xs text-slate-400">
                  {parent.role} • {parent.accountType}
                </p>

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}


/* ========================================================= */
/* SIDEBAR ITEM */
/* ========================================================= */

function SidebarItem({
  icon,
  label,
  badge,
}: {
  icon: string;
  label: string;
  badge?: string;
}) {
  return (
    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition">

      <span className="w-5 text-center">
        {icon}
      </span>


      <span className="flex-1 text-left">
        {label}
      </span>


      {badge && (

        <span className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-700 text-[10px] flex items-center justify-center">
          {badge}
        </span>

      )}

    </button>
  );
}


/* ========================================================= */
/* INFORMATION BOX */
/* ========================================================= */

function InfoBox({
  label,
  value,
  editMode,
}: {
  label: string;
  value: string;
  editMode: boolean;
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">

      <p className="text-[9px] font-semibold text-slate-400 mb-2">
        {label}
      </p>


      {editMode ? (

        <input
          defaultValue={value}
          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
        />

      ) : (

        <p className="text-sm font-medium text-slate-700">
          {value}
        </p>

      )}

    </div>
  );
}


/* ========================================================= */
/* STAT CARD */
/* ========================================================= */

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="border border-slate-200 rounded-xl p-5">

      <p className="text-xs text-slate-400">
        {title}
      </p>


      <p className="text-2xl font-bold mt-2">
        {value}
      </p>


      <p className="text-[11px] text-green-600 mt-2">
        ✓ {description}
      </p>

    </div>
  );
}