import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-800/70 bg-slate-950/80 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.8)] backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}
