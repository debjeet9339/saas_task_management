"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// 👉 Replace with your actual useAuth hook
// import { useAuth } from "@/hooks/useAuth";

// Mock user — remove when wiring up real auth
const mockUser = { name: "Alex Kim", email: "alex@company.com", avatar: "AK" };

const NAV_LINKS = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
    ),
  },
  {
    href: "/tasks",
    label: "Tasks",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
    ),
  },
  {
    href: "/team",
    label: "Team",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
  },
  {
    href: "/reports",
    label: "Reports",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
    ),
  },
];

export default function Navbar() {
  // const { user, logout } = useAuth();
  const user = mockUser; // remove when wiring real auth
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifsOpen, setNotifsOpen] = useState(false);

  return (
    <>
      <nav className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center px-5 justify-between sticky top-0 z-50 animate-fade-down">

        {/* Left — Logo */}
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-[#6ee7c7] to-[#a78bfa] flex items-center justify-center shadow-sm shadow-emerald-200">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="6" height="6" rx="2" fill="white" opacity="0.9" />
                <rect x="10" y="2" width="6" height="6" rx="2" fill="white" opacity="0.7" />
                <rect x="2" y="10" width="6" height="6" rx="2" fill="white" opacity="0.7" />
                <rect x="10" y="10" width="6" height="6" rx="2" fill="white" opacity="0.5" />
              </svg>
            </div>
            <span className="text-[15px] font-semibold text-gray-800">TaskFlow</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-150 ${active
                      ? "bg-[#e8faf3] text-[#0f6e56]"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    }`}
                >
                  <span className={active ? "text-[#1d9e75]" : ""}>{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right — Actions + Profile */}
        <div className="flex items-center gap-2">

          {/* Search */}
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm text-gray-400 border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:text-gray-600 transition-all duration-150 w-44">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span>Search...</span>
            <span className="ml-auto text-[10px] bg-gray-200 text-gray-400 px-1.5 py-0.5 rounded-md">⌘K</span>
          </button>

          {/* New task button */}
          <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium text-white bg-gradient-to-br from-[#1d9e75] to-[#0f6e56] hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-200 active:scale-[0.97] transition-all duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            New task
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => { setNotifsOpen((v) => !v); setProfileOpen(false); }}
              className="relative w-9 h-9 flex items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
              {/* Red dot */}
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-400 border-2 border-white" />
            </button>

            {/* Notifs dropdown */}
            {notifsOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl shadow-gray-100 p-2 animate-fade-up z-50">
                <p className="text-xs font-semibold text-gray-400 px-3 py-2 uppercase tracking-wide">Notifications</p>
                {[
                  {
                    text: 'Jordan completed "Finalize Q3 design"',
                    time: "2m ago",
                    color: "#e8faf3",
                    dot: "#1d9e75"
                  },
                  {
                    text: 'New comment on "Billing integration"',
                    time: "18m ago",
                    color: "#EEEDFE",
                    dot: "#534ab7"
                  },
                  { text: "Sprint review starts in 1 hour", time: "1h ago", color: "#FAEEDA", dot: "#ba7517" },
                ].map((n) => (
                  <div key={n.text} className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                    <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ background: n.dot }} />
                    <div>
                      <p className="text-xs text-gray-700 leading-snug">{n.text}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{n.time}</p>
                    </div>
                  </div>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <button className="w-full text-xs text-[#1d9e75] font-medium py-2 hover:bg-gray-50 rounded-xl transition-colors">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => { setProfileOpen((v) => !v); setNotifsOpen(false); }}
              className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-xl hover:bg-gray-100 transition-all duration-150"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#c7f2e4] to-[#a78bfa] flex items-center justify-center text-[11px] font-semibold text-white">
                {user.avatar}
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-700">{user.name.split(" ")[0]}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`text-gray-400 transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`}><polyline points="6 9 12 15 18 9" /></svg>
            </button>

            {/* Profile dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl shadow-gray-100 p-2 animate-fade-up z-50">
                {/* User info */}
                <div className="px-3 py-2.5 border-b border-gray-100 mb-1">
                  <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{user.email}</p>
                </div>

                {[
                  { label: "Your profile", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>, href: "/profile" },
                  { label: "Settings", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>, href: "/settings" },
                  { label: "Invite teammates", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>, href: "/invite" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    onClick={() => setProfileOpen(false)}
                  >
                    <span className="text-gray-400">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}

                <div className="border-t border-gray-100 mt-1 pt-1">
                  <button
                    // onClick={logout}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Click-outside overlay to close dropdowns */}
      {(profileOpen || notifsOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => { setProfileOpen(false); setNotifsOpen(false); }}
        />
      )}

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-down { animation: fadeDown 0.5s ease both; }
        .animate-fade-up   { animation: fadeUp 0.18s ease both; }
      `}</style>
    </>
  );
}