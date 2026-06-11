"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ChevronDown,
  ShieldCheck,
  Phone,
  Mail,
  ArrowRight,
  Box,
  UtensilsCrossed,
  ChefHat,
  Moon,
  Clock,
  Users,
  Truck,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { RESTAURANT, HOURS } from "@/lib/constants";
import {
  CATERING_MARKETS,
  CATERING_SERVICE_STYLES,
  CATERING_PACKAGES,
  CATERING_MENU_SECTIONS,
  CATERING_WHY_US,
  CATERING_PROCESS,
  CATERING_FAQ,
} from "@/lib/catering-data";
import CateringInquiryForm from "@/components/catering-inquiry-form";
import CateringVideos from "@/components/catering-videos";

const SERVICE_ICONS = {
  box: Box,
  tray: UtensilsCrossed,
  buffet: ChefHat,
  moon: Moon,
} as const;

const CATERING_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CATERING_FAQ.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer },
  })),
};

const CATERING_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FoodService",
  name: "Istanbul Mediterranean 2 Catering",
  provider: {
    "@type": "Restaurant",
    name: RESTAURANT.name,
    telephone: RESTAURANT.phone,
    email: RESTAURANT.cateringEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "505 Fremont Street",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89101",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
  },
  serviceType: [
    "Corporate Catering",
    "Office Lunch Catering",
    "Construction Crew Catering",
    "Convention Catering",
    "Private Event Catering",
    "Late Night Catering",
  ],
  description:
    "Halal Turkish and Mediterranean catering in Las Vegas. Individually packaged meals, family-style trays, and hot buffet setup for corporate, construction, conventions, and private events.",
};

export default function CateringPageClient() {
  const scrollToForm = () => {
    document.getElementById("catering-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-cream pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CATERING_FAQ_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CATERING_SERVICE_JSON_LD) }}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/catering/halal-catering-trays-spread-las-vegas.webp"
            alt="Halal catering trays from Istanbul Mediterranean 2 Las Vegas — salad, doner, rice, pide bread, baklava and hummus ready for delivery"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30" />
        </div>
        <div className="relative flex min-h-[85vh] flex-col items-center justify-center px-5 text-center pt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold backdrop-blur-sm mb-4"
          >
            <ShieldCheck size={18} />
            100% Zabiha Halal Catering
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-heading text-4xl font-bold text-cream sm:text-5xl md:text-6xl max-w-5xl leading-tight"
          >
            Las Vegas Catering
            <br />
            <span className="text-gold">Fresh Mediterranean. Any Size.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-cream/80 leading-relaxed"
          >
            Corporate lunches, construction crews, conventions, private parties, and
            late-night events — individually packaged or family-style. Beef &amp; lamb
            doner, chicken, falafel, and full Turkish spreads delivered across Las
            Vegas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={scrollToForm}
              className="rounded-full bg-crimson px-10 py-4 text-base font-semibold text-cream transition-all hover:bg-crimson-light hover:shadow-xl hover:shadow-crimson/30 active:scale-95"
            >
              Get a Free Quote
            </button>
            <a
              href={`tel:${RESTAURANT.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/30 px-10 py-4 text-base font-semibold text-cream backdrop-blur-sm hover:border-gold hover:text-gold transition-all"
            >
              <Phone size={18} />
              {RESTAURANT.phone}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream/60"
          >
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-gold" /> Response within 24 hrs
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-gold" /> 10 – 200+ guests
            </span>
            <span className="flex items-center gap-1.5">
              <Truck size={14} className="text-gold" /> Valley-wide delivery
            </span>
            <span className="flex items-center gap-1.5">
              <Moon size={14} className="text-gold" /> Late-night available
            </span>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-stone py-6">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-cream/70">
            <span className="flex items-center gap-2 font-semibold text-gold">
              <ShieldCheck size={16} /> Zabiha Halal Certified
            </span>
            <span className="flex items-center gap-2">
              <Leaf size={16} className="text-olive-light" /> Healthy Options
            </span>
            <span className="flex items-center gap-2">
              <Box size={16} className="text-gold" /> Individually Packaged
            </span>
            <span className="flex items-center gap-2">
              <UtensilsCrossed size={16} className="text-gold" /> Family-Style Trays
            </span>
            <span className="flex items-center gap-2">
              <Truck size={16} className="text-gold" /> Fast &amp; Reliable Delivery
            </span>
          </div>
        </div>
      </section>

      {/* Who we cater for */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-crimson mb-3">
              Who We Serve
            </p>
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
              Catering for Every Las Vegas Event
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-warm-gray leading-relaxed">
              From job-site lunches to convention floors to bachelor parties on
              Fremont — we feed Las Vegas the way it actually works.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CATERING_MARKETS.map((market, i) => (
              <motion.div
                key={market.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-stone/8 bg-white p-6 transition-all hover:shadow-lg hover:shadow-stone/5 hover:-translate-y-0.5"
              >
                <h3 className="font-heading text-base font-bold text-stone mb-2">
                  {market.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {market.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service styles */}
      <section className="bg-stone/5 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-crimson mb-3">
              How We Serve
            </p>
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
              Four Ways to Cater
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATERING_SERVICE_STYLES.map((style, i) => {
              const Icon = SERVICE_ICONS[style.icon];
              return (
                <motion.div
                  key={style.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl bg-white border border-stone/8 p-6 flex flex-col"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-stone mb-2">
                    {style.title}
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed flex-1">
                    {style.description}
                  </p>
                  <p className="mt-4 text-xs font-semibold text-gold uppercase tracking-wide">
                    Best for: {style.bestFor}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kitchen photo gallery */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-crimson mb-3">
              Real Orders, Real Kitchen
            </p>
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
              From Our Catering Kitchen
            </h2>
            <p className="mt-4 text-warm-gray max-w-2xl mx-auto">
              Every tray is prepared fresh at 505 Fremont Street — hand-sliced
              doner, garnished to order, and packed ready for your event.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/catering/chicken-beef-doner-catering-tray.webp",
                alt: "Catering tray of hand-sliced Halal chicken and beef-lamb doner with fresh garnish at Istanbul Mediterranean 2",
              },
              {
                src: "/images/catering/doner-catering-tray-garnish-prep.webp",
                alt: "Chef garnishing a Halal doner catering tray with fresh parsley in the Istanbul Mediterranean 2 kitchen",
              },
              {
                src: "/images/catering/catering-salad-tray-prep.webp",
                alt: "Team member preparing a fresh salad catering tray with cucumber and tomato at Istanbul Mediterranean 2",
              },
            ].map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative aspect-[16/10] overflow-hidden rounded-2xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <CateringVideos />

      {/* Packages */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-crimson mb-3">
              Sample Packages
            </p>
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
              Popular Catering Packages
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-warm-gray">
              Starting points — every order is customized. Request a quote for
              exact pricing based on your guest count and menu.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATERING_PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl border p-6 flex flex-col ${
                  pkg.highlight
                    ? "border-crimson/40 bg-crimson/5 shadow-lg shadow-crimson/10 ring-2 ring-crimson/20"
                    : "border-stone/8 bg-white"
                }`}
              >
                {pkg.highlight && (
                  <span className="mb-3 inline-block self-start rounded-full bg-crimson px-3 py-1 text-xs font-bold uppercase tracking-wide text-cream">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-stone">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-warm-gray">{pkg.tagline}</p>
                <p className="mt-3 text-xs font-semibold text-gold">
                  {pkg.guestRange}
                </p>
                <p className="mt-1 font-heading text-lg font-bold text-crimson">
                  {pkg.priceNote}
                </p>
                <ul className="mt-5 space-y-2 flex-1">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-warm-gray"
                    >
                      <CheckCircle2
                        size={15}
                        className="shrink-0 mt-0.5 text-olive"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className={`mt-6 w-full rounded-full py-3 text-sm font-semibold transition-all active:scale-95 ${
                    pkg.highlight
                      ? "bg-crimson text-cream hover:bg-crimson-light"
                      : "border-2 border-stone/15 text-stone hover:border-crimson hover:text-crimson"
                  }`}
                >
                  Get Quote
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full catering menu */}
      <section className="bg-stone py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
                Full Catering Menu
              </p>
              <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
                Build Your Perfect Spread
              </h2>
              <p className="mt-4 text-cream/60 leading-relaxed">
                Mix proteins, formats, and sides to match your event. Every item
                is prepared fresh from our Fremont kitchen — the same menu our
                dining room guests love, scaled for your group.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-8 py-3.5 font-semibold text-cream hover:bg-crimson-light transition-all"
                >
                  View Full Restaurant Menu <ArrowRight size={16} />
                </Link>
                <a
                  href={`mailto:${RESTAURANT.cateringEmail}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/20 px-8 py-3.5 font-semibold text-cream hover:border-gold hover:text-gold transition-all"
                >
                  <Mail size={16} /> {RESTAURANT.cateringEmail}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/catering/catering-spread-fremont-kitchen.webp"
                alt="Full Halal catering spread prepared in the Istanbul Mediterranean 2 Fremont kitchen — fresh salad, doner, rice and pide trays"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {CATERING_MENU_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-gold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-cream/70 flex items-start gap-2"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
              Why Las Vegas Chooses Istanbul 2
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATERING_WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-stone/8 bg-white p-6"
              >
                <h3 className="font-heading text-lg font-bold text-stone mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-stone/5 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-warm-gray">
              Four steps from inquiry to a table full of Turkish food.
            </p>
          </div>
          <div className="space-y-6">
            {CATERING_PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 items-start rounded-2xl border border-stone/8 bg-white p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-crimson font-heading text-lg font-bold text-cream">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-stone">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-warm-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="catering-form" className="py-20 lg:py-28 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-crimson mb-3">
              Get Started
            </p>
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
              Request a Catering Quote
            </h2>
            <p className="mt-4 text-warm-gray leading-relaxed">
              Tell us about your event and we&apos;ll respond within{" "}
              <strong>24 hours</strong> with a custom menu and pricing. Minimum
              order: 10 guests.
            </p>
          </div>
          <div className="rounded-2xl border border-stone/8 bg-white p-6 sm:p-10 shadow-xl shadow-stone/5">
            <CateringInquiryForm />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 text-center text-sm">
            <a
              href={`tel:${RESTAURANT.phone.replace(/\D/g, "")}`}
              className="flex flex-col items-center gap-2 rounded-xl border border-stone/8 bg-white p-5 hover:border-crimson/30 hover:shadow-md transition-all"
            >
              <Phone size={22} className="text-crimson" />
              <span className="font-semibold text-stone">{RESTAURANT.phone}</span>
              <span className="text-warm-gray text-xs">Call us directly</span>
            </a>
            <a
              href={`mailto:${RESTAURANT.cateringEmail}`}
              className="flex flex-col items-center gap-2 rounded-xl border border-stone/8 bg-white p-5 hover:border-crimson/30 hover:shadow-md transition-all"
            >
              <Mail size={22} className="text-crimson" />
              <span className="font-semibold text-stone text-xs break-all">
                {RESTAURANT.cateringEmail}
              </span>
              <span className="text-warm-gray text-xs">Email your event details</span>
            </a>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-stone/8 bg-white p-5">
              <Clock size={22} className="text-crimson" />
              <span className="font-semibold text-stone">Kitchen Hours</span>
              <span className="text-warm-gray text-xs">
                {HOURS[0].days}: {HOURS[0].hours}
                <br />
                {HOURS[1].days}: {HOURS[1].hours}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone/5 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-stone sm:text-3xl mb-10 text-center">
            Catering FAQs
          </h2>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {CATERING_FAQ.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden rounded-xl border border-stone/8 bg-white"
              >
                <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-semibold text-stone hover:text-crimson [&[data-state=open]>svg]:rotate-180">
                  {item.question}
                  <ChevronDown size={20} className="shrink-0 text-stone/50 transition-transform" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-5 text-warm-gray leading-relaxed">
                  {item.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-stone py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-cream sm:text-3xl">
            Ready to Feed Your Event?
          </h2>
          <p className="mt-4 text-cream/60 leading-relaxed">
            {RESTAURANT.address} — Downtown Las Vegas&apos;s Halal Turkish
            catering kitchen. Corporate, construction, conventions, and private
            events across the valley.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-10 py-4 font-semibold text-cream hover:bg-crimson-light transition-all hover:shadow-lg"
            >
              Get a Free Quote <ArrowRight size={16} />
            </button>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/20 px-8 py-3.5 font-semibold text-cream hover:border-gold hover:text-gold transition-all"
            >
              Browse Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-stone/10 bg-cream/95 backdrop-blur-lg p-4 md:hidden">
        <button
          type="button"
          onClick={scrollToForm}
          className="w-full rounded-full bg-crimson py-3.5 text-sm font-semibold text-cream shadow-lg shadow-crimson/25 active:scale-95 transition-all"
        >
          Request Catering Quote
        </button>
      </div>
    </div>
  );
}
