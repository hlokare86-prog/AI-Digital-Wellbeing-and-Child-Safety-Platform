"use client";

export default function ScreenTimePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-blue-600">Digital Wellbeing</p>

        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Screen Time
            </h1>
            <p className="mt-2 text-slate-500">
              Monitor and manage your child's daily device usage.
            </p>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
            Set Screen Limit
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-slate-500">Today's Usage</p>
            <p className="mt-2 text-4xl font-bold">2h 18m</p>
            <p className="mt-2 text-green-600">↓ 18% from yesterday</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-slate-500">Daily Limit</p>
            <p className="mt-2 text-4xl font-bold">3h</p>
            <p className="mt-2 text-blue-600">42 minutes remaining</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-slate-500">Weekly Average</p>
            <p className="mt-2 text-4xl font-bold">2h 41m</p>
            <p className="mt-2 text-green-600">Healthy range</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">App Usage Today</h2>

          <div className="mt-6 space-y-5">
            {[
              ["YouTube", "52 min", "75%"],
              ["Chrome", "38 min", "55%"],
              ["Instagram", "24 min", "40%"],
              ["Educational Apps", "18 min", "30%"],
            ].map(([app, time, width]) => (
              <div key={app}>
                <div className="mb-2 flex justify-between">
                  <span className="font-medium">{app}</span>
                  <span className="text-slate-500">{time}</span>
                </div>

                <div className="h-3 rounded-full bg-slate-100">
                  <div
                    className="h-3 rounded-full bg-blue-500"
                    style={{ width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}