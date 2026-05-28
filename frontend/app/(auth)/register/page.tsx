"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await register(name, email, password);
    setLoading(false);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-2xl border text-sm text-gray-800 placeholder-gray-400 bg-white outline-none transition-all duration-200 ${
      focused === field
        ? "border-[#1d9e75] ring-4 ring-[#1d9e75]/10"
        : "border-gray-200 hover:border-gray-300"
    }`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef8f4] flex items-center justify-center font-sans px-4">

      {/* Background blobs — same as homepage */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#6ee7c7] opacity-50 blur-[100px] animate-blob" />
        <div className="absolute -top-16 -right-16 w-[420px] h-[420px] rounded-full bg-[#c4b5fd] opacity-45 blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full bg-[#fdba74] opacity-35 blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/4 w-[260px] h-[260px] rounded-full bg-[#86efac] opacity-30 blur-[80px] animate-blob animation-delay-2000" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md animate-fade-up">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-[11px] bg-gradient-to-br from-[#6ee7c7] to-[#a78bfa] flex items-center justify-center shadow-lg shadow-emerald-200">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="6" height="6" rx="2" fill="white" opacity="0.9" />
              <rect x="10" y="2" width="6" height="6" rx="2" fill="white" opacity="0.7" />
              <rect x="2" y="10" width="6" height="6" rx="2" fill="white" opacity="0.7" />
              <rect x="10" y="10" width="6" height="6" rx="2" fill="white" opacity="0.5" />
            </svg>
          </div>
          <span className="text-[17px] font-semibold text-gray-800">TaskFlow</span>
        </div>

        {/* Glass card */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-xl shadow-emerald-100/40">

          {/* Header */}
          <div className="mb-7">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Create your account</h1>
            <p className="text-sm text-gray-500 mt-1">Join 4,200+ teams already using TaskFlow</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-600 pl-1">Full name</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input
                  type="text"
                  placeholder="Alex Kim"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass("name")} pl-10`}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-600 pl-1">Email address</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass("email")} pl-10`}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-600 pl-1">Password</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass("password")} pl-10`}
                  required
                  minLength={8}
                />
              </div>
              {/* Password strength indicator */}
              {password.length > 0 && (
                <div className="flex gap-1.5 mt-2 pl-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        password.length >= i * 3
                          ? i <= 1
                            ? "bg-red-400"
                            : i <= 2
                            ? "bg-amber-400"
                            : i <= 3
                            ? "bg-yellow-400"
                            : "bg-[#1d9e75]"
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                  <span className="text-[11px] text-gray-400 ml-1">
                    {password.length < 4 ? "Weak" : password.length < 7 ? "Fair" : password.length < 10 ? "Good" : "Strong"}
                  </span>
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-br from-[#1d9e75] to-[#0f6e56] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Creating account...
                </>
              ) : (
                <>
                  Create account
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google SSO (UI only) */}
          <button
            type="button"
            className="w-full py-3 rounded-2xl text-sm font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1d9e75] font-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-5 mt-5">
          {[
            { icon: "🔒", text: "256-bit SSL" },
            { icon: "🛡️", text: "GDPR compliant" },
            { icon: "✨", text: "Free 14-day trial" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <span>{b.icon}</span>
              {b.text}
            </div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, 20px) scale(1.07); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-blob        { animation: blob 8s ease-in-out infinite; }
        .animate-fade-up     { animation: fadeUp 0.7s ease both; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin { animation: spin 0.8s linear infinite; }
      `}</style>
    </main>
  );
}