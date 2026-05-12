import { Bell, LayoutDashboard, Search, Sparkles } from "lucide-react";
import Link from "next/link";

export function DashboardHeader() {
  return (
    <div className="sticky top-0 z-10 flex flex-col gap-4 border-b border-slate-800/80 bg-slate-950/95 px-6 py-5 backdrop-blur-xl lg:ml-72">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Dashboard</p>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-semibold text-slate-100">Hello, organizer</h2>
            <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-sky-400">
              Admin
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900/80 text-slate-300 hover:bg-slate-800">
            <Search className="h-5 w-5" />
          </button>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900/80 text-slate-300 hover:bg-slate-800">
            <Bell className="h-5 w-5" />
          </button>
          <Link
            href="/dashboard/settings"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
          >
            <Sparkles className="h-4 w-4 text-sky-400" />
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
