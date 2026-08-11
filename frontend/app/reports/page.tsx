"use client";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-blue-600">Analytics</p>

        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Wellbeing Reports
            </h1>

            <p className="mt-2 text-slate-500">
              Analyze your child's digital wellbeing trends.
            </p>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">
            Download Report
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Wellbeing Score</p>
            <p className="mt-2 text-3xl font-bold text-green-600">86%</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Screen Time</p>
            <p className="mt-2 text-3xl font-bold">2h 41m</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Safety Alerts</p>
            <p className="mt-2 text-3xl font-bold">08</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Healthy Days</p>
            <p className="mt-2 text-3xl font-bold text-blue-600">24</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Weekly Wellbeing</h2>

          <div className="mt-8 flex h-64 items-end justify-around gap-4">
            {[
              ["Mon", 70],
              ["Tue", 76],
              ["Wed", 82],
              ["Thu", 78],
              ["Fri", 88],
              ["Sat", 91],
              ["Sun", 86],
            ].map(([day, value]) => (
              <div key={day as string} className="flex h-full flex-1 flex-col items-center justify-end">
                <div className="mb-2 text-sm font-semibold">{value}%</div>

                <div
                  className="w-full max-w-12 rounded-t-lg bg-blue-500"
                  style={{ height: `${Number(value) * 2}px`, maxHeight: "200px" }}
                />

                <div className="mt-2 text-sm text-slate-500">{day}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}