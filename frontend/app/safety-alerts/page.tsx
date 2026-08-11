"use client";

export default function SafetyAlertsPage() {
  const alerts = [
    {
      title: "Excessive Screen Time",
      description: "Screen usage exceeded the recommended evening limit.",
      time: "Today, 8:42 PM",
      type: "warning",
    },
    {
      title: "Potentially Unsafe Content",
      description: "AI detected potentially inappropriate content.",
      time: "Today, 6:15 PM",
      type: "danger",
    },
    {
      title: "Late Night Activity",
      description: "Device activity detected after bedtime.",
      time: "Yesterday, 11:24 PM",
      type: "warning",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-blue-600">Protection Center</p>

        <h1 className="text-3xl font-bold text-slate-900">
          Safety Alerts
        </h1>

        <p className="mt-2 text-slate-500">
          AI-powered alerts that help keep your child safe online.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-slate-500">Total Alerts</p>
            <p className="mt-2 text-4xl font-bold">08</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-slate-500">High Priority</p>
            <p className="mt-2 text-4xl font-bold text-red-500">02</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-slate-500">Resolved</p>
            <p className="mt-2 text-4xl font-bold text-green-600">06</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Recent Alerts</h2>

          <div className="mt-5 space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.title}
                className={`rounded-xl border p-5 ${
                  alert.type === "danger"
                    ? "border-red-200 bg-red-50"
                    : "border-yellow-200 bg-yellow-50"
                }`}
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold">{alert.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {alert.description}
                    </p>
                  </div>

                  <span className="whitespace-nowrap text-xs text-slate-500">
                    {alert.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}