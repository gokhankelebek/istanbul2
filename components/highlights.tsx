"use client";

import { UtensilsCrossed, BookOpen, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { HIGHLIGHTS } from "@/lib/constants";

const ICON_MAP = {
  UtensilsCrossed,
  BookOpen,
  ShieldCheck,
  Clock,
};

export default function Highlights() {
  return (
    <section className="relative bg-cream py-20 lg:py-28 turkish-pattern-subtle">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
            What Makes Istanbul 2 Different
          </h2>
          <p className="mt-4 text-warm-gray max-w-2xl mx-auto">
            A new kind of Turkish dining experience in Downtown Las Vegas
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-stone/8 bg-white p-8 transition-all hover:shadow-xl hover:shadow-stone/5 hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-crimson/8 text-crimson transition-colors group-hover:bg-crimson group-hover:text-cream">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-stone mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-warm-gray">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
