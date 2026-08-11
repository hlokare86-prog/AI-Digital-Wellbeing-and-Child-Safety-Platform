"use client";

import { useState } from "react";
import { Shield, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    // Demo login
    if (email === "admin@gmail.com" && password === "admin123") {
      router.push("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="w-full max-w-md">

        {/* LOGO */}
        <div className="text-center mb-8">

          <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
            <Shield className="text-white" size={32} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            AI Wellbeing
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Child Safety & Mental Health Platform
          </p>

        </div>

        {/* LOGIN CARD */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">

          <h2 className="text-2xl font-bold text-slate-900">
            Welcome Back
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Sign in to your guardian dashboard.
          </p>

          <form onSubmit={handleLogin} className="mt-7 space-y-5">

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@gmail.com"
                className="w-full h-12 rounded-xl border border-slate-200 px-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-12 rounded-xl border border-slate-200 px-4 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>
            </div>

            {/* REMEMBER / FORGOT */}
            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm text-slate-500">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Forgot Password?
              </button>

            </div>

            {/* ERROR */}
            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg shadow-blue-200"
            >
              Sign In
            </button>

          </form>

          {/* DEMO LOGIN */}
          <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4">

            <p className="text-xs font-semibold text-slate-500">
              DEMO LOGIN
            </p>

            <p className="text-xs text-slate-500 mt-2">
              Email: admin@gmail.com
            </p>

            <p className="text-xs text-slate-500">
              Password: admin123
            </p>

          </div>

        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          Protected by AI Wellbeing Security
        </p>

      </div>

    </main>
  );
}