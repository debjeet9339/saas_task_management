"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// 👉 Replace with your actual useAuth hook
// import { useAuth } from "@/hooks/useAuth";
const mockUser = { name: "Alex Kim", email: "alex@company.com", avatar: "AK", plan: "Pro" };

const NAV_SECTIONS = [
  {
    label: "Main",
    links: [
      {
        href: "/dashboard",
        label: "Dashboard",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
          </svg>
        ),
      },
      {
        href: "/dashboard/workspace",
        label: "Workspaces",
        badge: "3",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        ),
      },
      {
        href: "/dashboard/tasks",
        label: "Tasks",
        badge: "12",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/>
            <line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
        ),
      },
      {
        href: "/dashboard/team",
        label: "Team",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        ),
      },
      {
        href: "/dashboard/reports",
        label: "Reports",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Settings",
    links: [
      {
        href: "/dashboard/settings",
        label: "Settings",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        ),
      },
      {
        href: "/dashboard/invite",
        label: "Invite teammates",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="8.5" cy="7" r="4"/>
            <line x1="20" y1="8" x2="20" y2="14"/>
            <line x1="23" y1="11" x2="17" y2="11"/>
          </svg>
        ),
      },
    ],
  },
];

export default function Sidebar() {
  // const { user, logout } = useAuth();
  const user = mockUser;
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col animate-fade-in">

      {/* Logo */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-[#6ee7c7] to-[#a78bfa] flex items-center justify-center shadow-sm shadow-emerald-100">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="6" height="6" rx="2" fill="white" opacity="0.9"/>
              <rect x="10" y="2" width="6" height="6" rx="2" fill="white" opacity="0.7"/>
              <rect x="2" y="10" width="6" height="6" rx="2" fill="white" opacity="0.7"/>
              <rect x="10" y="10" width="6" height="6" rx="2" fill="white" opacity="0.5"/>
            </svg>
          </div>
          <div>
            <p className="text-[14px] font-semibold text-gray-800 leading-none">TaskFlow</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Workspace</p>
          </div>
        </Link>
      </div>

      {/* New task CTA */}
      <div className="px-3 pt-4">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl text-sm font-medium text-white bg-gradient-to-br from-[#1d9e75] to-[#0f6e56] hover:shadow-md hover:shadow-emerald-100 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          New task
        </button>
      </div>

      {/* Nav sections */}
      <nav className="flex-1 overflow-y-auto px-3 pt-5 space-y-5 scrollbar-hide">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label}>
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-3 mb-1.5">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.links.map((link) => {
                const active = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group ${
                      active
                        ? "bg-[#e8faf3] text-[#0f6e56]"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                    }`}
                  >
                    <span className={`flex-shrink-0 transition-colors ${active ? "text-[#1d9e75]" : "text-gray-400 group-hover:text-gray-600"}`}>
                      {link.icon}
                    </span>
                    <span className="flex-1">{link.label}</span>
                    {link.badge && (
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        active ? "bg-[#1d9e75] text-white" : "bg-gray-100 text-gray-500"
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Storage usage */}
      <div className="mx-3 mb-3 p-3.5 rounded-2xl bg-[#f6fef9] border border-[#d1fae5]">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium text-gray-600">Storage</p>
          <p className="text-xs text-gray-400">6.2 / 10 GB</p>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-[62%] bg-gradient-to-r from-[#1d9e75] to-[#6ee7c7] rounded-full" />
        </div>
        <p className="text-[11px] text-gray-400 mt-1.5">3.8 GB remaining on Pro plan</p>
      </div>

      {/* User profile footer */}
      <div className="border-t border-gray-100 p-3">
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c7f2e4] to-[#a78bfa] flex items-center justify-center text-[11px] font-semibold text-white flex-shrink-0">
            {user.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 truncate">{user.name}</p>
            <p className="text-[11px] text-gray-400 truncate">{user.email}</p>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EEEDFE] text-[#3C3489]">
            {user.plan}
          </span>
        </div>

        {/* Logout */}
        <button
          // onClick={logout}
          className="w-full mt-1 flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-150"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Log out
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fadeIn 0.45s ease both; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </aside>
  );
}