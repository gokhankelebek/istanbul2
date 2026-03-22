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
  ArrowRight,
} from "lucide-react";
import { RESTAURANT, HOURS, LINKS, ORDER_ONLINE_COPY } from "@/lib/constants";
import type { MenuItemWithMeta } from "@/lib/menu-utils";

export default function MenuItemPage({ entry }: { entry: MenuItemWithMeta }) {
  const { item, category } = entry;
  const heroImage = item.image || category.image || "/images/2026-march/food/doner-salad-plate.webp";

  const faqItems = [
    {
      question: `Is ${item.name} Halal?`,
      answer: `Yes. Everything at Istanbul Mediterranean 2 is 100% Zabiha Halal certified. All meats are hand-slaughtered according to strict Islamic dietary laws, with no pork or alcohol in any preparation.`,
    },
    {
      question: `Where can I get ${item.name} in Las Vegas?`,
      answer: `Istanbul Mediterranean 2 at 505 Fremont Street, Downtown Las Vegas serves ${item.name} for ${item.price}. We're open daily from 10 AM. Order pickup or delivery online at istanbullasvegas.square.site — same Halal menu from our Fremont kitchen.`,
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* ── HERO ── */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={item.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative flex h-full flex-col items-center justify-end px-5 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3"
          >
            <Link
              href={`/menu#${category.id}`}
              className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm hover:bg-gold/20 transition-colors"
            >
              {category.title}
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-heading text-3xl font-bold leading-tight text-cream sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl"
          >
            {item.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 flex items-center gap-4"
          >
            <span className="text-2xl font-bold text-gold font-heading">
              {item.price}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-olive/15 px-3 py-1 text-xs font-semibold text-olive-light border border-olive/20">
              <ShieldCheck size={12} />
              100% Halal
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {item.description && (
              <p className="text-lg leading-relaxed text-warm-gray lg:text-xl text-center">
                {item.description}
              </p>
            )}

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={LINKS.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-8 py-3.5 text-base font-semibold text-cream transition-all hover:bg-crimson-light hover:shadow-lg hover:shadow-crimson/25 active:scale-95"
                aria-label={ORDER_ONLINE_COPY.ariaLabel}
              >
                {ORDER_ONLINE_COPY.label}
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-stone/15 px-8 py-3.5 text-base font-semibold text-stone transition-all hover:border-crimson hover:text-crimson active:scale-95"
              >
                See Full Menu <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OTHER ITEMS IN CATEGORY ── */}
      <section className="bg-stone py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-2xl font-bold text-cream sm:text-3xl">
              More from {category.title}
            </h2>
            {category.subtitle && (
              <p className="mt-3 text-cream/50 max-w-xl mx-auto text-sm">
                {category.subtitle}
              </p>
            )}
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {category.items
              .filter((other) => other.name !== item.name)
              .slice(0, 6)
              .map((other, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex gap-3 rounded-xl border border-cream/8 bg-cream/5 p-4 transition-all hover:bg-cream/10"
                >
                  {other.image && (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={other.image}
                        alt={other.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-sm font-bold text-cream">
                        {other.name}
                      </h3>
                      <span className="shrink-0 text-xs font-bold text-gold">
                        {other.price}
                      </span>
                    </div>
                    {other.description && (
                      <p className="mt-1 text-xs leading-relaxed text-cream/50 line-clamp-2">
                        {other.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream-dark py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-2xl font-bold text-stone sm:text-3xl">
              FAQ
            </h2>
          </motion.div>

          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqItems.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="group overflow-hidden rounded-xl border border-stone/8 bg-white transition-shadow data-[state=open]:shadow-lg data-[state=open]:shadow-stone/5"
              >
                <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-semibold text-stone transition-colors hover:text-crimson [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-warm-gray transition-transform duration-300"
                  />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 pb-5 text-sm leading-relaxed text-warm-gray">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* ── VISIT CTA ── */}
      <section className="bg-stone py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
              Visit Us
            </p>
            <h2 className="font-heading text-2xl font-bold text-cream sm:text-3xl">
              Try It at 505 Fremont
            </h2>

            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-cream/60">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-crimson shrink-0" />
                {RESTAURANT.address}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-crimson shrink-0" />
                Open daily from 10 AM
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-crimson shrink-0" />
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  className="hover:text-gold transition-colors"
                >
                  {RESTAURANT.phone}
                </a>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-cream/40">
              {HOURS.map((h) => (
                <span key={h.days}>
                  {h.days}: {h.hours}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-8 py-3.5 text-base font-semibold text-cream transition-all hover:bg-crimson-light hover:shadow-lg hover:shadow-crimson/25 active:scale-95"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <a
                href={LINKS.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/20 px-8 py-3.5 text-base font-semibold text-cream transition-all hover:border-gold hover:text-gold active:scale-95"
                aria-label={ORDER_ONLINE_COPY.ariaLabel}
              >
                {ORDER_ONLINE_COPY.label}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
