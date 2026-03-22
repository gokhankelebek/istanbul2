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
import type { DishPageData } from "@/lib/dish-pages-data";

export default function DishPage({ dish }: { dish: DishPageData }) {
  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dish.jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={dish.heroImage}
            alt={dish.heroImageAlt}
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
              {dish.heroTag}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-heading text-lg tracking-widest text-cream/60 uppercase sm:text-xl"
          >
            {dish.turkishName}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mt-2"
          >
            {dish.heroTitle}
            <br />
            <span className="text-gold">{dish.heroHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 max-w-2xl text-lg text-cream/70 sm:text-xl leading-relaxed"
          >
            {dish.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#dish-menu"
              className="rounded-full bg-crimson px-8 py-3.5 text-base font-semibold text-cream transition-all hover:bg-crimson-light hover:shadow-lg hover:shadow-crimson/25 active:scale-95"
            >
              {dish.heroCtaLabel}
            </a>
            <a
              href={LINKS.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-cream/30 px-8 py-3.5 text-base font-semibold text-cream backdrop-blur-sm transition-all hover:border-gold hover:text-gold active:scale-95"
              aria-label={ORDER_ONLINE_COPY.ariaLabel}
            >
              {ORDER_ONLINE_COPY.label}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ── */}
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
              {dish.storyTag}
            </p>
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl lg:text-5xl">
              {dish.storyHeading}
            </h2>
            <p className="mt-4 text-warm-gray max-w-2xl mx-auto text-lg">
              {dish.storySubheading}
            </p>
          </motion.div>

          <div className="space-y-24 lg:space-y-32">
            {dish.storySections.map((section, i) => (
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

      {/* ── MENU ── */}
      <section
        id="dish-menu"
        className="bg-stone py-20 lg:py-28 scroll-mt-20"
      >
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
              On Our Menu
            </h2>
            <p className="mt-4 text-cream/50 max-w-xl mx-auto">
              Served daily at our 505 Fremont Street location
            </p>
          </motion.div>

          {dish.menuSections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 last:mb-0"
            >
              <h3 className="font-heading text-2xl font-bold text-cream mb-2">
                {section.title}
              </h3>
              {section.subtitle && (
                <p className="text-cream/40 mb-8 text-sm">
                  {section.subtitle}
                </p>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item, i) => (
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
          ))}

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
              See the Full Menu <ArrowRight size={14} />
            </Link>
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
              {dish.englishName} FAQ
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion.Root type="single" collapsible className="space-y-3">
              {dish.faq.map((item, i) => (
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

      {/* ── RELATED DISHES ── */}
      {dish.relatedDishes.length > 0 && (
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
                More to Discover
              </h2>
              <p className="mt-4 text-warm-gray max-w-xl mx-auto">
                Explore other authentic Turkish dishes at Istanbul
                Mediterranean 2
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {dish.relatedDishes.map((related, i) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    href={`/${related.slug}`}
                    className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="font-heading text-lg font-bold text-stone group-hover:text-crimson transition-colors">
                        {related.name}
                      </h3>
                      <ArrowRight
                        size={16}
                        className="text-warm-gray group-hover:text-crimson transition-colors"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── VISIT US CTA ── */}
      <section className="bg-stone py-20 lg:py-28">
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
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              Try It at 505 Fremont
            </h2>
            <p className="mt-4 text-cream/50 max-w-lg mx-auto">
              Walk-ins always welcome. For groups of 6+, call ahead to reserve.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-cream/60">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-crimson shrink-0" />
                {RESTAURANT.address}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-crimson shrink-0" />
                Open daily from 10 AM
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-crimson shrink-0" />
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  className="hover:text-gold transition-colors"
                >
                  {RESTAURANT.phone}
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-cream/40">
              {HOURS.map((h) => (
                <span key={h.days}>
                  {h.days}: {h.hours}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
