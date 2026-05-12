import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-slate-800/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200",
        className,
      )}
      {...props}
    />
  );
}
