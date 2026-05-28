"use client";

import { useState } from "react";
import Link from "next/link";

interface Props {
  params: {
    workspaceId: string;
  };
}

// Mock data — replace with real API calls
const MOCK_WORKSPACE = {
  name: "Product Design",
  emoji: "🎨",
  description: "All design-related tasks, sprints, and handoffs for the core product team.",
  members: [
    { avatar: "AK", name: "Alex Kim",    role: "Owner",  color: "from-[#6ee7c7] to-[#a78bfa]" },
    { avatar: "MR", name: "Maya R.",     role: "Editor", color: "from-[#c7f2e4] to-[#6ee7c7]"  },
    { avatar: "JS", name: "Jordan S.",   role: "Editor", color: "from-[#fde8d0] to-[#fdba74]"  },
    { avatar: "LP", name: "Lee Park",    role: "Viewer", color: "from-[#e8d5f5] to-[#c4b5fd]"  },
  ],
  stats: [
    { label: "Total tasks",    value: "48", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
    ), bg: "#E1F5EE", color: "#0f6e56" },
    { label: "Completed",      value: "31", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    ), bg: "#EEEDFE", color: "#3C3489" },
    { label: "In progress",    value: "11", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ), bg: "#FAEEDA", color: "#633806" },
    { label: "Members",        value: "4",  icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ), bg: "#FBEAF0", color: "#993556" },
  ],
  tasks: [
    { title: "Redesign onboarding flow",     status: "In progress", priority: "High",   assignee: "AK", due: "Jun 2"  },
    { title: "Create component library",      status: "In progress", priority: "High",   assignee: "MR", due: "Jun 5"  },
    { title: "Finalize Q3 design system",     status: "Done",        priority: "Medium", assignee: "AK", due: "May 28" },
    { title: "User research interviews",      status: "Upcoming",    priority: "Medium", assignee: "JS", due: "Jun 10" },
    { title: "Accessibility audit",           status: "Upcoming",    priority: "Low",    assignee: "LP", due: "Jun 14" },
    { title: "Export design tokens to CSS",   status: "Done",        priority: "Low",    assignee: "MR", due: "May 20" },
  ],
};

const STATUS_STYLES: Record<string, string> = {
  "Done":        "bg-[#E1F5EE] text-[#085041]",
  "In progress": "bg-[#FAEEDA] text-[#633806]",
  "Upcoming":    "bg-[#EEEDFE] text-[#3C3489]",
};

const PRIORITY_STYLES: Record<string, { pill: string; dot: string }> = {
  "High":   { pill: "bg-[#FCEBEB] text-[#A32D2D]", dot: "#E24B4A" },
  "Medium": { pill: "bg-[#FAEEDA] text-[#633806]", dot: "#BA7517" },
  "Low":    { pill: "bg-[#E1F5EE] text-[#085041]", dot: "#1D9E75" },
};

export default function WorkspaceDetailsPage({ params }: Props) {
  const ws = MOCK_WORKSPACE;
  const [activeTab, setActiveTab] = useState<"tasks" | "members">("tasks");

  const completed = ws.tasks.filter((t) => t.status === "Done").length;
  const progress = Math.round((completed / ws.tasks.length) * 100);

  return (
    <div className="min-h-screen bg-[#f7fdf9] p-6 space-y-6 animate-fade-in">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Link href="/dashboard" className="hover:text-gray-600 transition-colors">Dashboard</Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        <Link href="/dashboard/workspace" className="hover:text-gray-600 transition-colors">Workspaces</Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        <span className="text-gray-600 font-medium">{ws.name}</span>
      </div>

      {/* Header card */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm shadow-emerald-50">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e8faf3] to-[#d1fae5] flex items-center justify-center text-3xl border border-[#bbf7d0]">
              {ws.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{ws.name}</h1>
                <span className="text-xs font-mono text-gray-300 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-lg">
                  #{params.workspaceId}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 max-w-md">{ws.description}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 border border-gray-200 bg-white hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              Share
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 border border-gray-200 bg-white hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              Settings
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-br from-[#1d9e75] to-[#0f6e56] hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-100 active:scale-[0.97] transition-all duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add task
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-xs font-medium text-gray-500">Overall progress</p>
            <p className="text-xs font-semibold text-[#1d9e75]">{progress}% complete</p>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#1d9e75] to-[#6ee7c7] rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[11px] text-gray-400 mt-1">{completed} of {ws.tasks.length} tasks completed</p>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {ws.stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex items-center gap-3 hover:-translate-y-0.5 transition-transform duration-150">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: s.bg, color: s.color }}>
              {s.icon}
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 leading-none">{s.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center gap-1 p-2 border-b border-gray-100">
          {(["tasks", "members"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-150 ${
                activeTab === tab
                  ? "bg-[#e8faf3] text-[#0f6e56]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              {tab === "tasks" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              )}
              {tab}
              <span className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-full ${
                activeTab === tab ? "bg-[#1d9e75] text-white" : "bg-gray-100 text-gray-500"
              }`}>
                {tab === "tasks" ? ws.tasks.length : ws.members.length}
              </span>
            </button>
          ))}
        </div>

        {/* Tasks tab */}
        {activeTab === "tasks" && (
          <div className="divide-y divide-gray-50">
            {ws.tasks.map((task) => (
              <div key={task.title} className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50/60 transition-colors group cursor-pointer">
                {/* Checkbox */}
                <div className={`w-5 h-5 rounded-[6px] border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all ${
                  task.status === "Done" ? "bg-[#1d9e75] border-[#1d9e75]" : "border-gray-300 group-hover:border-[#1d9e75]"
                }`}>
                  {task.status === "Done" && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>

                {/* Title */}
                <span className={`flex-1 text-sm ${task.status === "Done" ? "line-through text-gray-400" : "text-gray-700"}`}>
                  {task.title}
                </span>

                {/* Priority dot */}
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 ${PRIORITY_STYLES[task.priority].pill}`}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: PRIORITY_STYLES[task.priority].dot }} />
                  {task.priority}
                </span>

                {/* Status pill */}
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${STATUS_STYLES[task.status]}`}>
                  {task.status}
                </span>

                {/* Assignee */}
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#c7f2e4] to-[#a78bfa] flex items-center justify-center text-[10px] font-semibold text-white flex-shrink-0">
                  {task.assignee}
                </div>

                {/* Due date */}
                <span className="text-xs text-gray-400 w-14 text-right">{task.due}</span>
              </div>
            ))}
          </div>
        )}

        {/* Members tab */}
        {activeTab === "members" && (
          <div className="divide-y divide-gray-50">
            {ws.members.map((m) => (
              <div key={m.name} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50/60 transition-colors">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-sm font-semibold text-white flex-shrink-0`}>
                  {m.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{m.name}</p>
                  <p className="text-xs text-gray-400">{m.role}</p>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  m.role === "Owner"  ? "bg-[#EEEDFE] text-[#3C3489]" :
                  m.role === "Editor" ? "bg-[#E1F5EE] text-[#085041]" :
                                        "bg-gray-100 text-gray-500"
                }`}>
                  {m.role}
                </span>
                {m.role !== "Owner" && (
                  <button className="text-xs text-gray-400 hover:text-red-400 transition-colors px-2 py-1 rounded-lg hover:bg-red-50">
                    Remove
                  </button>
                )}
              </div>
            ))}
            <div className="px-5 py-4">
              <button className="flex items-center gap-2 text-sm text-[#1d9e75] font-medium hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Invite a member
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease both; }
      `}</style>
    </div>
  );
}