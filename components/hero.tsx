"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="/images/2026-march/fremont/fremont-exterior-night-505.webp"
          alt="Istanbul Mediterranean Restaurant-2 on Fremont Street at night"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
            Now Open on Fremont Street
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        >
          The Heart of Istanbul,
          <br />
          <span className="text-gold">Now in Downtown Las Vegas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-xl text-lg text-cream/70 sm:text-xl"
        >
          Award-winning doner kebab, authentic Turkish flavors &amp;
          Mediterranean hospitality at 505 Fremont Street.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/menu"
            className="rounded-full bg-crimson px-8 py-3.5 text-base font-semibold text-cream transition-all hover:bg-crimson-light hover:shadow-lg hover:shadow-crimson/25 active:scale-95"
          >
            View Menu
          </Link>
          <a
            href={LINKS.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-cream/30 px-8 py-3.5 text-base font-semibold text-cream backdrop-blur-sm transition-all hover:border-gold hover:text-gold active:scale-95"
          >
            Order Online
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border-2 border-cream/30 flex items-start justify-center pt-2"
          >
            <div className="h-2 w-1 rounded-full bg-cream/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
