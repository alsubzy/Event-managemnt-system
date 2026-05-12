"use client";

import { Moon, SunMedium, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useUIStore } from "@/store/use-ui-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Topbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <div className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/95 px-4 py-4 backdrop-blur-xl lg:px-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="lg:hidden h-12 w-12 p-0"
            onClick={toggleSidebar}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Dashboard</p>
            <h2 className="text-lg font-semibold text-white">Control center</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            className="h-12 w-12 p-0"
            onClick={() => setTheme(nextTheme)}
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <div className={cn("hidden items-center gap-3 rounded-3xl bg-slate-900/80 px-4 py-2 text-sm text-slate-200 sm:flex")}> 
            <div className="h-10 w-10 rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-500" />
            <div>
              <p className="text-sm font-semibold text-white">Avery</p>
              <p className="text-xs text-slate-500">Organizer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
