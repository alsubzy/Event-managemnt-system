"use client";

import { Activity, Bell, CalendarDays, CreditCard, LayoutDashboard, ListChecks, MapPin, Settings2, Ticket, Users2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/store/use-ui-store";
import { cn } from "@/lib/utils";

const links = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Events", href: "/dashboard/events", icon: Ticket },
  { label: "Bookings", href: "/dashboard/bookings", icon: CalendarDays },
  { label: "Tickets", href: "/dashboard/tickets", icon: Ticket },
  { label: "Analytics", href: "/dashboard/analytics", icon: Activity },
  { label: "Customers", href: "/dashboard/customers", icon: Users2 },
  { label: "Settings", href: "/dashboard/settings", icon: Settings2 },
];

export function Sidebar() {
  const pathname = usePathname();
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <>
      <div className={cn(
        "fixed inset-y-0 left-0 z-30 w-72 overflow-hidden border-r border-slate-800/80 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/50 backdrop-blur-xl lg:static lg:translate-x-0 lg:shadow-none",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}>
        <div className="mb-10">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-5 shadow-xl shadow-slate-950/40">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Eventt</p>
            <h1 className="mt-4 text-2xl font-semibold text-white">Event Management</h1>
            <p className="mt-3 text-sm leading-6 text-slate-400">Premium workspace for your events and teams.</p>
          </div>
        </div>

        <nav className="space-y-2">
          {links.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-slate-800 text-sky-300 shadow-lg shadow-sky-500/10"
                    : "text-slate-300 hover:bg-slate-900/70 hover:text-white",
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 text-slate-300 shadow-xl shadow-slate-950/40">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Live status</p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-2xl font-semibold text-white">24%</p>
              <p className="text-sm text-slate-400">growth this week</p>
            </div>
            <Bell className="h-5 w-5 text-sky-400" />
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <button
          type="button"
          onClick={toggleSidebar}
          className="fixed inset-0 z-20 bg-slate-950/50 lg:hidden"
          aria-label="Close menu"
        />
      )}
    </>
  );
}
