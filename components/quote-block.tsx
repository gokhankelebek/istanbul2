"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words =
  "We hope to provide a high-quality, authentic Halal option that stays open late — perfect for the hospitality workers, artists, and locals who make Downtown thrive.".split(
    " "
  );

const wordVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035, delayChildren: 0.2 },
  },
};

export default function QuoteBlock() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/images/2026-march/ambiance/dining-room-tea.webp"
          alt="Istanbul Mediterranean dining ambiance"
          fill
          className="object-cover scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="mb-6 font-heading text-6xl text-gold/50"
          >
            &ldquo;
          </motion.div>
          <blockquote className="font-heading text-2xl font-medium leading-relaxed text-cream sm:text-3xl lg:text-4xl">
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </blockquote>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-8 flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="h-px w-12 bg-gold/40" />
            <cite className="not-italic text-sm font-semibold text-gold whitespace-nowrap">
              Zane Atlas Muslu, Owner
            </cite>
            <div className="h-px w-12 bg-gold/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
