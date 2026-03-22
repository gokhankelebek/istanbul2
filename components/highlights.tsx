"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LINKS, ORDER_ONLINE_COPY } from "@/lib/constants";

const HIGHLIGHTS = [
  {
    title: "Full Table Service",
    subtitle: "Sit down. Relax. Stay a while.",
    description:
      "Unlike our Strip location's quick-serve model, Fremont offers full table service with cozy booths, living green walls, and an open kitchen.",
    image: "/images/2026-march/fremont/fremont-dining-room-wide.webp",
    alt: "Istanbul Mediterranean Fremont dining room with green walls and warm lighting",
    span: "col-span-2 row-span-2" as const,
    aspect: "aspect-[4/3] sm:aspect-auto sm:h-full" as const,
  },
  {
    title: "Expanded Menu",
    subtitle: "Beyond the doner.",
    description:
      "Kahvalti, Lahmacun, Pide, fresh pastries — the full spectrum of Turkish cuisine.",
    image: "/images/2026-march/food/lahmacun-pide-spread.webp",
    alt: "Spread of Turkish dishes including lahmacun and pide",
    span: "col-span-2 sm:col-span-1" as const,
    aspect: "aspect-[4/3]" as const,
  },
  {
    title: "100% Zabiha Halal",
    subtitle: "No compromises.",
    description:
      "Every meat hand-slaughtered to strict Islamic dietary laws. No pork, no alcohol — ever.",
    image: "/images/2026-march/fremont/fremont-open-kitchen-doner.webp",
    alt: "Doner kebab spit in Istanbul Mediterranean open kitchen",
    span: "col-span-2 sm:col-span-1" as const,
    aspect: "aspect-[4/3]" as const,
  },
  {
    title: "Open Late, Every Night",
    subtitle: "10 AM — 2 AM / 5 AM weekends.",
    description:
      "From Kahvalti at sunrise to late-night Pide after your shift. Open every day for Downtown's community.",
    image: "/images/2026-march/breakfast/turkish-breakfast-spread.webp",
    alt: "Turkish breakfast spread with eggs, cheese, olives and fresh bread",
    span: "col-span-2" as const,
    aspect: "aspect-[16/9] sm:aspect-[2/1]" as const,
  },
  {
    title: ORDER_ONLINE_COPY.label,
    subtitle: "Istanbul 2 — Fremont Street.",
    description:
      "Same Halal menu as dine-in: order online for pickup at 505 Fremont or delivery to your door.",
    image: "/images/2026-march/food/doner-salad-plate.webp",
    alt: "Turkish doner and fresh salad plate from Istanbul Mediterranean 2",
    span: "col-span-2" as const,
    aspect: "aspect-[16/9] sm:aspect-[2/1]" as const,
    externalHref: LINKS.orderOnline,
    externalLabel: ORDER_ONLINE_COPY.ariaLabel,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 16,
      mass: 1,
    },
  },
};

export default function Highlights() {
  return (
    <section className="relative bg-stone py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              The Fremont Experience
            </span>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl lg:text-5xl max-w-2xl">
            Not just another
            <span className="text-gold"> kebab shop</span>
          </h2>
          <p className="mt-4 text-cream/60 max-w-2xl text-sm sm:text-base">
            From our <Link href="/turkish-breakfast" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Turkish breakfast</Link> to our <Link href="/doner-kebab-las-vegas" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Halal doner kebab</Link>, we bring authentic Turkish cuisine to <Link href="/" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Fremont Street</Link>.{" "}
            <a
              href={LINKS.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors underline underline-offset-2 font-medium"
              aria-label={ORDER_ONLINE_COPY.ariaLabel}
            >
              Order pickup &amp; delivery
            </a>{" "}
            from our kitchen, or see our full <Link href="/menu" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Turkish restaurant menu</Link>.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 gap-3 sm:gap-4"
        >
          {HIGHLIGHTS.map((item) => {
            const cardClass = `group relative overflow-hidden rounded-2xl ${item.span}`;
            const inner = (
              <div className={`relative ${item.aspect} w-full`}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  sizes={
                    item.span.includes("row-span-2")
                      ? "(max-width: 640px) 100vw, 50vw"
                      : "(max-width: 640px) 100vw, 50vw"
                  }
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/40" />

                <div className="absolute inset-0 border border-cream/[0.06] rounded-2xl" />
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-2xl m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold/80 mb-1.5">
                    {item.subtitle}
                  </p>
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-cream leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60 max-w-md line-clamp-2 sm:line-clamp-none">
                    {item.description}
                  </p>
                  {"externalHref" in item && item.externalHref ? (
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold">
                      Tap to order →
                    </p>
                  ) : null}
                </div>
              </div>
            );

            if ("externalHref" in item && item.externalHref) {
              return (
                <motion.a
                  key={item.title}
                  href={item.externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  className={`${cardClass} block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-stone`}
                  aria-label={item.externalLabel}
                >
                  {inner}
                </motion.a>
              );
            }

            return (
              <motion.div key={item.title} variants={cardVariants} className={cardClass}>
                {inner}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
