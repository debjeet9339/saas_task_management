import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef8f4] flex flex-col items-center font-sans">

      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#6ee7c7] opacity-50 blur-[100px] animate-blob" />
        <div className="absolute -top-16 -right-16 w-[420px] h-[420px] rounded-full bg-[#c4b5fd] opacity-45 blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full bg-[#fdba74] opacity-35 blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/4 w-[260px] h-[260px] rounded-full bg-[#86efac] opacity-30 blur-[80px] animate-blob animation-delay-2000" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 w-full max-w-3xl flex items-center justify-between px-6 pt-6 animate-fade-down">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-[#6ee7c7] to-[#a78bfa] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="6" height="6" rx="2" fill="white" opacity="0.9" />
              <rect x="10" y="2" width="6" height="6" rx="2" fill="white" opacity="0.7" />
              <rect x="2" y="10" width="6" height="6" rx="2" fill="white" opacity="0.7" />
              <rect x="10" y="10" width="6" height="6" rx="2" fill="white" opacity="0.5" />
            </svg>
          </div>
          <span className="text-[15px] font-semibold text-gray-800">TaskFlow</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-gradient-to-br from-[#1d9e75] to-[#0f6e56] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-200"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 mt-16 max-w-2xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#f0fdf8] border border-[#9fe1cb] text-[#0f6e56] text-xs font-medium px-4 py-1.5 rounded-full mb-5 animate-fade-up animation-delay-100">
          <span className="w-2 h-2 rounded-full bg-[#1d9e75] inline-block" />
          New — AI-powered task sorting is here
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-bold leading-[1.15] text-gray-900 tracking-tight animate-fade-up animation-delay-200">
          Manage tasks your team will actually{" "}
          <span className="bg-gradient-to-r from-[#1d9e75] to-[#a78bfa] bg-clip-text text-transparent">
            love using
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-500 leading-relaxed animate-fade-up animation-delay-300">
          A friendly, beautiful workspace that keeps your team in sync —
          without the chaos of endless threads and missed deadlines.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex items-center gap-3 flex-wrap justify-center animate-fade-up animation-delay-400">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-7 py-3 text-base font-semibold text-white rounded-2xl bg-gradient-to-br from-[#1d9e75] to-[#0f6e56] hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-200 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
            Start for free
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-gray-700 rounded-2xl bg-white border border-gray-200 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
            Log in to dashboard
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-6 flex items-center gap-3 animate-fade-up animation-delay-500">
          <div className="flex -space-x-2">
            {[
              { initials: "AK", bg: "#c7f2e4", color: "#0f6e56" },
              { initials: "MR", bg: "#e8d5f5", color: "#534ab7" },
              { initials: "JS", bg: "#fde8d0", color: "#993c1d" },
              { initials: "LP", bg: "#f4c0d1", color: "#993556" },
            ].map((av) => (
              <div
                key={av.initials}
                className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-medium"
                style={{ background: av.bg, color: av.color }}
              >
                {av.initials}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Loved by <span className="text-gray-800 font-medium">4,200+ teams</span> worldwide
          </p>
        </div>
      </section>

      {/* App preview */}
      <div className="relative z-10 mt-12 w-full max-w-xl px-4 animate-fade-up animation-delay-600">
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-100 rounded-t-xl border border-gray-200 border-b-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f09595]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#fac775]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#c0dd97]" />
          <span className="ml-2 text-xs text-gray-400">app.taskflow.io/workspace</span>
        </div>
        {/* Preview content */}
        <div className="bg-white border border-gray-200 border-t-0 rounded-b-xl p-4 flex flex-col gap-2.5">
          {[
            { label: "Finalize Q3 design system", done: true, pill: "Done", pillStyle: "bg-[#E1F5EE] text-[#085041]" },
            { label: "Review onboarding flow with team", done: false, pill: "In progress", pillStyle: "bg-[#FAEEDA] text-[#633806]" },
            { label: "Set up billing integration", done: false, pill: "Upcoming", pillStyle: "bg-[#EEEDFE] text-[#3C3489]" },
          ].map((task) => (
            <div
              key={task.label}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-150"
            >
              <div
                className={`w-[18px] h-[18px] rounded-[5px] border-[1.5px] flex items-center justify-center flex-shrink-0 ${
                  task.done ? "bg-[#1d9e75] border-[#1d9e75]" : "border-gray-300"
                }`}
              >
                {task.done && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className={`text-sm flex-1 ${task.done ? "line-through text-gray-400" : "text-gray-700"}`}>
                {task.label}
              </span>
              <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${task.pillStyle}`}>
                {task.pill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature cards */}
      <div className="relative z-10 mt-8 mb-12 w-full max-w-xl px-4 grid grid-cols-3 gap-3 animate-fade-up animation-delay-700">
        {[
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f6e56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            ),
            iconBg: "#E1F5EE",
            title: "Smart tasks",
            desc: "Auto-prioritize work by deadlines & impact.",
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3C3489" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            ),
            iconBg: "#EEEDFE",
            title: "Team sync",
            desc: "Real-time updates, everyone on the same page.",
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#633806" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            ),
            iconBg: "#FAEEDA",
            title: "Reports",
            desc: "Dashboards that make progress visible.",
          },
        ].map((f) => (
          <div key={f.title} className="bg-gray-50 rounded-xl p-3.5 flex flex-col gap-2">
            <div
              className="w-8 h-8 rounded-[9px] flex items-center justify-center"
              style={{ background: f.iconBg }}
            >
              {f.icon}
            </div>
            <p className="text-[13px] font-semibold text-gray-800">{f.title}</p>
            <p className="text-[12px] text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Tailwind animation keyframes — add to your globals.css instead */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, 20px) scale(1.07); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-blob          { animation: blob 8s ease-in-out infinite; }
        .animate-fade-down     { animation: fadeDown 0.6s ease both; }
        .animate-fade-up       { animation: fadeUp 0.65s ease both; }
        .animation-delay-100   { animation-delay: 0.1s; }
        .animation-delay-200   { animation-delay: 0.2s; }
        .animation-delay-300   { animation-delay: 0.3s; }
        .animation-delay-400   { animation-delay: 0.4s; }
        .animation-delay-500   { animation-delay: 0.5s; }
        .animation-delay-600   { animation-delay: 0.6s; }
        .animation-delay-700   { animation-delay: 0.7s; }
        .animation-delay-2000  { animation-delay: 2s; }
        .animation-delay-4000  { animation-delay: 4s; }
      `}</style>

    </main>
  );
}