import { LayoutDashboard, CalendarDays, Ticket, Users2, BarChart3, Settings2, Bell } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Events", href: "/dashboard/events", icon: Ticket },
  { label: "Bookings", href: "/dashboard/bookings", icon: CalendarDays },
  { label: "Tickets", href: "/dashboard/tickets", icon: Ticket },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Customers", href: "/dashboard/customers", icon: Users2 },
  { label: "Settings", href: "/dashboard/settings", icon: Settings2 },
];

export function Sidebar({ active }: { active?: string }) {
  return (
    <aside className="hidden min-h-screen w-72 flex-col gap-8 border-r border-slate-800/90 bg-slate-950/95 p-6 lg:flex lg:fixed lg:top-0 lg:left-0 lg:z-20">
      <div className="space-y-3">
        <div className="rounded-3xl bg-slate-900/80 p-4 text-slate-100 shadow-xl shadow-slate-950/20">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Eventt Platform
          </p>
          <h1 className="mt-3 text-2xl font-semibold">Admin dashboard</h1>
          <p className="mt-2 text-sm text-slate-400">
            Manage events, bookings, analytics and teams from one place.
          </p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition-all duration-200",
                active === item.href
                  ? "bg-slate-800 text-sky-300 shadow-lg shadow-slate-900/20"
                  : "text-slate-300 hover:bg-slate-900/70 hover:text-slate-50",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 text-slate-300 shadow-xl shadow-slate-950/20">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Live summary</p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-2xl font-semibold text-slate-100">18%</p>
            <p className="text-xs text-slate-500">week growth</p>
          </div>
          <Bell className="h-6 w-6 text-sky-400" />
        </div>
      </div>
    </aside>
  );
}
