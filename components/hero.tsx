"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LINKS } from "@/lib/constants";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.4]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      <motion.div
        className="absolute inset-0 animate-ken-burns"
        style={{ y: bgY, scale: bgScale }}
      >
        <Image
          src="/images/2026-march/fremont/fremont-exterior-night-505.webp"
          alt="Istanbul Mediterranean Restaurant-2 on Fremont Street at night"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      <motion.div
        className="relative flex h-full flex-col items-center justify-center px-5 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-3 text-sm font-medium tracking-wide text-cream/70"
        >
          Downtown Las Vegas Turkish Restaurant
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-4 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
            Now Open on Fremont Street
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-olive/40 bg-olive/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-olive-light backdrop-blur-sm">
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm3.5 6.7-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06L7 9.14l3.47-3.47a.75.75 0 1 1 1.06 1.06Z"/></svg>
            100% Zabiha Halal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        >
          The Heart of Istanbul,
          <br />
          <span className="text-gold">Now in Downtown Las Vegas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 max-w-xl text-lg text-cream/90 sm:text-xl"
        >
          Authentic doner kebab, Turkish breakfast &amp; Mediterranean
          hospitality — now on Fremont Street. 100% Zabiha Halal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
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
            title="Order via istanbullasvegas.square.site — our secure ordering partner"
          >
            Order Online
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border-2 border-cream/30 flex items-start justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4], scaleY: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-2 w-1 rounded-full bg-cream/60"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
