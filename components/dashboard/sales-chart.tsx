"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { label: "Jan", revenue: 3200 },
  { label: "Feb", revenue: 4100 },
  { label: "Mar", revenue: 5400 },
  { label: "Apr", revenue: 4900 },
  { label: "May", revenue: 6400 },
  { label: "Jun", revenue: 7300 },
  { label: "Jul", revenue: 8400 },
];

export function SalesChart() {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis dataKey="label" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderRadius: 16, border: "1px solid #334155" }} />
          <Area type="monotone" dataKey="revenue" stroke="#38bdf8" fill="url(#revenueGradient)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
