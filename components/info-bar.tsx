"use client";

import { MapPin, Clock, Phone, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { RESTAURANT, LINKS, ORDER_ONLINE_COPY } from "@/lib/constants";

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
          <span>Open Daily from 10 AM</span>
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
          href={LINKS.orderOnline}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-gold/95 hover:text-gold transition-colors"
          aria-label={ORDER_ONLINE_COPY.ariaLabel}
        >
          <ShoppingBag size={16} className="text-gold shrink-0" />
          <span className="hidden sm:inline">{ORDER_ONLINE_COPY.labelShort}</span>
          <span className="sm:hidden">Order</span>
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
