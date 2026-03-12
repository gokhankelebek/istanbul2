"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function QuoteBlock() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/2026-march/ambiance/dining-room-tea.webp"
          alt="Istanbul Mediterranean dining ambiance"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 font-heading text-6xl text-gold/50">&ldquo;</div>
          <blockquote className="font-heading text-2xl font-medium leading-relaxed text-cream sm:text-3xl lg:text-4xl">
            We hope to provide a high-quality, authentic Halal option that stays
            open late — perfect for the hospitality workers, artists, and locals
            who make Downtown thrive.
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <cite className="not-italic text-sm font-semibold text-gold">
              Zane Atlas Muslu, Owner
            </cite>
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
