"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ChevronDown,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { RESTAURANT, HOURS, LINKS, ORDER_ONLINE_COPY } from "@/lib/constants";
import { MENU_CATEGORIES } from "@/lib/menu-data";
import {
  BREAKFAST_STORY,
  BREAKFAST_FAQ,
  BREAKFAST_ATMOSPHERE_IMAGES,
  BREAKFAST_JSON_LD,
} from "@/lib/breakfast-data";

const breakfastCategory = MENU_CATEGORIES.find((c) => c.id === "breakfast")!;
const pastriesCategory = MENU_CATEGORIES.find((c) => c.id === "pastries")!;

export default function BreakfastPageClient() {
  return (
    <div className="min-h-screen bg-cream">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREAKFAST_JSON_LD) }}
      />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="/images/2026-march/breakfast/turkish-breakfast-spread.webp"
            alt="Traditional Turkish breakfast spread at Istanbul Mediterranean 2"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-3"
          >
            <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
              Exclusive to Fremont Street
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-heading text-lg tracking-widest text-cream/60 uppercase sm:text-xl"
          >
            Kahvalti
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mt-2"
          >
            The Art of Turkish Breakfast
            <br />
            <span className="text-gold">in Las Vegas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 max-w-2xl text-lg text-cream/70 sm:text-xl leading-relaxed"
          >
            A centuries-old morning ritual. Fresh cheeses, olives, honey, eggs,
            and endless Turkish tea — now in Downtown Las Vegas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#breakfast-menu"
              className="rounded-full bg-crimson px-8 py-3.5 text-base font-semibold text-cream transition-all hover:bg-crimson-light hover:shadow-lg hover:shadow-crimson/25 active:scale-95"
            >
              See the Breakfast Menu
            </a>
            <a
              href={LINKS.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-cream/30 px-8 py-3.5 text-base font-semibold text-cream backdrop-blur-sm transition-all hover:border-gold hover:text-gold active:scale-95"
              aria-label={ORDER_ONLINE_COPY.ariaLabel}
            >
              Order breakfast — pickup &amp; delivery
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="h-10 w-6 rounded-full border-2 border-cream/30 flex items-start justify-center pt-2"
            >
              <div className="h-2 w-1 rounded-full bg-cream/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS KAHVALTI ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-crimson mb-3">
              More than a meal
            </p>
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl lg:text-5xl">
              What is Kahvalti?
            </h2>
            <p className="mt-4 text-warm-gray max-w-2xl mx-auto text-lg">
              The Turkish word for breakfast — and a morning tradition that has
              brought families together for centuries
            </p>
          </motion.div>

          <div className="space-y-24 lg:space-y-32">
            {BREAKFAST_STORY.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-center"
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <h3 className="font-heading text-2xl font-bold text-stone sm:text-3xl">
                    {section.title}
                  </h3>
                  <div className="mt-2 h-0.5 w-12 bg-crimson/40 rounded-full" />
                  {section.content.split("\n\n").map((p, j) => (
                    <p
                      key={j}
                      className="mt-5 text-warm-gray leading-relaxed text-base lg:text-lg"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                    i % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BREAKFAST MENU ── */}
      <section id="breakfast-menu" className="bg-stone py-20 lg:py-28 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-olive/15 px-4 py-1.5 text-xs font-semibold text-olive-light border border-olive/20">
              <ShieldCheck size={14} />
              100% Zabiha Halal Certified
            </div>
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              The Breakfast Menu
            </h2>
            <p className="mt-4 text-cream/50 max-w-xl mx-auto">
              Served daily from 10 AM — exclusively at our Fremont Street
              location
            </p>
          </motion.div>

          {/* Breakfast Plates */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="font-heading text-2xl font-bold text-cream mb-2">
              {breakfastCategory.title} Plates
            </h3>
            <p className="text-cream/40 mb-8 text-sm">
              {breakfastCategory.subtitle}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {breakfastCategory.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group flex gap-4 rounded-xl border border-cream/8 bg-cream/5 p-5 transition-all hover:bg-cream/10"
                >
                  {item.image && (
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-heading text-base font-bold text-cream">
                        {item.name}
                      </h4>
                      <span className="shrink-0 text-sm font-bold text-gold">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="mt-1.5 text-sm leading-relaxed text-cream/50">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pastries */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-2xl font-bold text-cream mb-2">
              Fresh-Baked Pastries
            </h3>
            <p className="text-cream/40 mb-8 text-sm">
              {pastriesCategory.subtitle}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pastriesCategory.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="rounded-xl border border-cream/8 bg-cream/5 p-5 transition-all hover:bg-cream/10"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-heading text-base font-bold text-cream">
                      {item.name}
                    </h4>
                    <span className="shrink-0 text-sm font-bold text-gold">
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/50">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/menu"
              className="text-sm font-semibold text-gold hover:text-gold-light transition-colors inline-flex items-center gap-1.5"
            >
              See the Full Menu <ExternalLink size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PERFECT MORNING AT FREMONT ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
              Your Perfect Morning at Fremont
            </h2>
            <p className="mt-4 text-warm-gray max-w-xl mx-auto">
              Cozy booths, living green walls, and the aroma of fresh-baked
              simit — this is where your morning begins
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {BREAKFAST_ATMOSPHERE_IMAGES.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-3 text-center"
          >
            {[
              {
                label: "Living Green Walls",
                desc: "A breath of fresh air with natural greenery throughout",
              },
              {
                label: "Open Kitchen",
                desc: "Watch Chef Adem prepare your breakfast fresh",
              },
              {
                label: "Cozy Booths",
                desc: "Settle in for a slow, relaxed breakfast experience",
              },
            ].map((feat) => (
              <div key={feat.label}>
                <h3 className="font-heading text-lg font-bold text-stone">
                  {feat.label}
                </h3>
                <p className="mt-1 text-sm text-warm-gray">{feat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
              Turkish Breakfast FAQ
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion.Root type="single" collapsible className="space-y-3">
              {BREAKFAST_FAQ.map((item, i) => (
                <Accordion.Item
                  key={i}
                  value={`faq-${i}`}
                  className="group overflow-hidden rounded-xl border border-stone/8 bg-white transition-shadow data-[state=open]:shadow-lg data-[state=open]:shadow-stone/5"
                >
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-semibold text-stone transition-colors hover:text-crimson sm:text-lg [&[data-state=open]>svg]:rotate-180">
                    {item.question}
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-warm-gray transition-transform duration-300"
                    />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="px-6 pb-5 text-sm leading-relaxed text-warm-gray">
                      {item.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
        </div>
      </section>

      {/* ── LOCATION & CTA ── */}
      <section className="bg-stone py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
                Start Your Morning With Us
              </p>
              <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
                Breakfast at 505 Fremont
              </h2>
              <p className="mt-4 text-cream/50 max-w-lg">
                Join us every morning for the most authentic Turkish breakfast
                experience in Las Vegas. Walk-ins always welcome. For groups
                of 6+, call ahead to reserve.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/15 text-crimson">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cream">
                      Breakfast Hours
                    </h3>
                    <p className="text-sm text-cream/60">
                      Served daily from 10 AM
                    </p>
                    {HOURS.map((h) => (
                      <p key={h.days} className="text-xs text-cream/40 mt-1">
                        {h.days}: {h.hours}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/15 text-crimson">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cream">
                      Location
                    </h3>
                    <p className="text-sm text-cream/60">
                      {RESTAURANT.address}
                    </p>
                    <p className="text-xs text-cream/40 mt-1">
                      {RESTAURANT.neighborhood}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/15 text-crimson">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cream">Phone</h3>
                    <a
                      href={`tel:${RESTAURANT.phone}`}
                      className="text-sm text-cream/60 hover:text-gold transition-colors"
                    >
                      {RESTAURANT.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={LINKS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-cream transition-all hover:bg-crimson-light hover:shadow-lg hover:shadow-crimson/25 active:scale-95"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
                <a
                  href={LINKS.orderOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/20 px-6 py-3 text-sm font-semibold text-cream transition-all hover:border-gold hover:text-gold active:scale-95"
                  aria-label={ORDER_ONLINE_COPY.ariaLabel}
                >
                  Breakfast — pickup &amp; delivery
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="overflow-hidden rounded-2xl border border-cream/10"
            >
              <iframe
                title="Istanbul Mediterranean 2 — Fremont Street Location"
                src="https://www.google.com/maps?q=505+Fremont+Street,+Las+Vegas,+NV+89101&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
