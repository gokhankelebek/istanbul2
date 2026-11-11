"use client";

import { useEffect, useState } from "react";

/**
 * Live open/closed status in Las Vegas time.
 * Hours: Sun–Thu 10 AM – 2 AM, Fri–Sat 10 AM – 5 AM (closing runs past midnight).
 */
function getStatus(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days.indexOf(weekday);
  const lateNight = (d: number) => d === 5 || d === 6; // Fri, Sat
  const closeLabel = (d: number) => (lateNight(d) ? "5 AM" : "2 AM");

  if (hour >= 10) return { open: true, label: `Open now · until ${closeLabel(day)}` };
  const prev = (day + 6) % 7;
  const closeHour = lateNight(prev) ? 5 : 2;
  if (hour < closeHour) return { open: true, label: `Open now · until ${closeLabel(prev)}` };
  return { open: false, label: "Closed now · opens 10 AM" };
}

export default function OpenStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const tick = () => setStatus(getStatus(new Date()));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full ${
          status === null ? "bg-stone-400" : status.open ? "bg-emerald-400" : "bg-stone-400"
        }`}
      />
      <span className="font-semibold text-white">
        {status ? status.label : "Open daily from 10 AM"}
      </span>
    </span>
  );
}
