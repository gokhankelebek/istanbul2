"use client";

import { useSyncExternalStore } from "react";
import { MapPin, Clock, Phone, ShoppingBag, Bike } from "lucide-react";
import { motion } from "framer-motion";
import { RESTAURANT, LINKS } from "@/lib/constants";

/** Closing hour (AM) for the night that starts on the given weekday (0 = Sun). */
function closingHourFor(day: number): number {
  return day === 5 || day === 6 ? 5 : 2;
}

/**
 * Live open/closed status in restaurant time (Las Vegas), as an
 * `open:`/`closed:`-prefixed string so useSyncExternalStore can compare
 * snapshots by value. Doors open 10 AM daily.
 */
function getOpenStatusSnapshot(): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour12: false,
    weekday: "short",
    hour: "numeric",
  }).formatToParts(new Date());
  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days.indexOf(get("weekday"));
  const hour = Number(get("hour")) % 24;

  if (day === -1 || Number.isNaN(hour)) {
    return "open:Open Daily from 10 AM";
  }
  if (hour >= 10) {
    return `open:Open now · until ${closingHourFor(day)} AM`;
  }
  const prevDay = (day + 6) % 7;
  if (hour < closingHourFor(prevDay)) {
    return `open:Open now · until ${closingHourFor(prevDay)} AM`;
  }
  return "closed:Closed · opens at 10 AM";
}

function subscribeToMinuteTick(onTick: () => void): () => void {
  const interval = setInterval(onTick, 60_000);
  return () => clearInterval(interval);
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function InfoBar() {
  // Server snapshot is null so SSR/hydration render the static fallback text.
  const snapshot = useSyncExternalStore(
    subscribeToMinuteTick,
    getOpenStatusSnapshot,
    () => null
  );
  const status = snapshot
    ? {
        open: snapshot.startsWith("open:"),
        label: snapshot.slice(snapshot.indexOf(":") + 1),
      }
    : null;

  return (
    <div className="bg-stone text-cream overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-5 py-4 text-sm sm:gap-10 lg:px-8"
      >
        <motion.a
          variants={itemVariants}
          href={LINKS.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gold transition-colors"
        >
          <MapPin size={16} className="text-gold" />
          <span className="hidden sm:inline">505 Fremont Street, Las Vegas</span>
          <span className="sm:hidden">505 Fremont St</span>
        </motion.a>
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <Clock size={16} className="text-gold" />
          {status ? (
            <span className="flex items-center gap-2">
              {status.open && (
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-olive-light animate-pulse"
                />
              )}
              {status.label}
            </span>
          ) : (
            <span>Open Daily from 10 AM</span>
          )}
        </motion.div>
        <motion.a
          variants={itemVariants}
          href={`tel:${RESTAURANT.phone}`}
          className="flex items-center gap-2 hover:text-gold transition-colors"
        >
          <Phone size={16} className="text-gold" />
          <span>{RESTAURANT.phone}</span>
        </motion.a>
        <motion.a
          variants={itemVariants}
          href={LINKS.orderPickup}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-gold/95 hover:text-gold transition-colors"
          aria-label="Order pickup from Istanbul Mediterranean 2 — opens secure checkout in a new tab"
        >
          <ShoppingBag size={16} className="text-gold shrink-0" />
          <span>Pickup</span>
        </motion.a>
        <motion.a
          variants={itemVariants}
          href={LINKS.orderDelivery}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-gold/95 hover:text-gold transition-colors"
          aria-label="Order delivery from Istanbul Mediterranean 2 — opens secure checkout in a new tab"
        >
          <Bike size={16} className="text-gold shrink-0" />
          <span>Delivery</span>
        </motion.a>
        <motion.span
          variants={itemVariants}
          className="rounded-full bg-olive/20 px-3 py-1 text-xs font-semibold text-olive-light border border-olive/30"
        >
          100% Zabiha Halal
        </motion.span>
      </motion.div>
    </div>
  );
}
