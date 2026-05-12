import { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";

interface DashboardShellProps {
  active?: string;
  children: ReactNode;
}

export function DashboardShell({ active, children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar active={active} />
      <main className="min-h-screen lg:ml-72">
        <DashboardHeader />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
