"use client";

import { useState } from "react";

export default function ContentControlsPage() {
  const [safeSearch, setSafeSearch] = useState(true);
  const [adultContent, setAdultContent] = useState(true);
  const [socialMedia, setSocialMedia] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-blue-600">Online Protection</p>

        <h1 className="text-3xl font-bold text-slate-900">
          Content Controls
        </h1>

        <p className="mt-2 text-slate-500">
          Configure safe browsing and content protection settings.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Protection Settings</h2>

          <div className="mt-6 divide-y">
            <Setting
              title="Safe Search"
              description="Filter potentially unsafe search results."
              enabled={safeSearch}
              setEnabled={setSafeSearch}
            />

            <Setting
              title="Block Adult Content"
              description="Automatically block inappropriate websites."
              enabled={adultContent}
              setEnabled={setAdultContent}
            />

            <Setting
              title="Restrict Social Media"
              description="Limit access to social media platforms."
              enabled={socialMedia}
              setEnabled={setSocialMedia}
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-blue-50 p-6">
          <h2 className="font-bold text-blue-900">AI Content Protection</h2>
          <p className="mt-2 text-sm text-blue-800">
            Our AI system analyzes online activity and can identify potentially
            harmful or inappropriate content.
          </p>
        </div>
      </div>
    </main>
  );
}

function Setting({
  title,
  description,
  enabled,
  setEnabled,
}: {
  title: string;
  description: string;
  enabled: boolean;
  setEnabled: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-5">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative h-7 w-12 rounded-full transition ${
          enabled ? "bg-blue-600" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}