"use client";

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-blue-600">Child Safety</p>

        <h1 className="text-3xl font-bold text-slate-900">
          Location Monitoring
        </h1>

        <p className="mt-2 text-slate-500">
          View your child's current location and recent activity.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm md:col-span-2">
            <h2 className="text-xl font-bold">Current Location</h2>

            <div className="mt-5 flex h-80 items-center justify-center rounded-xl bg-blue-50">
              <div className="text-center">
                <div className="text-5xl">📍</div>
                <h3 className="mt-3 text-lg font-bold">
                  School Campus
                </h3>
                <p className="text-sm text-slate-500">
                  Last updated 2 minutes ago
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Location Status</h2>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-500">Status</p>
                <p className="font-semibold text-green-600">
                  ● Safe
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Last Location</p>
                <p className="font-semibold">School Campus</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Updated</p>
                <p className="font-semibold">2 minutes ago</p>
              </div>
            </div>

            <button className="mt-8 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white">
              Refresh Location
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Safe Zones</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-green-50 p-4">
              <p className="font-bold">🏠 Home</p>
              <p className="text-sm text-slate-500">Safe Zone</p>
            </div>

            <div className="rounded-xl bg-green-50 p-4">
              <p className="font-bold">🏫 School</p>
              <p className="text-sm text-slate-500">Safe Zone</p>
            </div>

            <div className="rounded-xl bg-green-50 p-4">
              <p className="font-bold">🏋️ Activity Center</p>
              <p className="text-sm text-slate-500">Safe Zone</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}