"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Clock, MapPin, ArrowRight } from "lucide-react";
import { RESTAURANT, HOURS, LINKS } from "@/lib/constants";

const LATE_NIGHT_FAQ = [
  {
    question: "What time does Istanbul Mediterranean 2 close?",
    answer:
      "Sunday through Wednesday we close at 2 AM. Thursday through Saturday we stay open until 5 AM. We open daily at 10 AM, so we serve breakfast, lunch, dinner, and late-night dining.",
  },
  {
    question: "Is there late night food on Fremont Street?",
    answer:
      "Yes. Istanbul Mediterranean 2 is open late every night at 505 Fremont Street. We serve full Turkish cuisine—doner kebab, pide, lahmacun, and more—until 2 AM Sun–Wed and until 5 AM Thu–Sat.",
  },
  {
    question: "What food is available after midnight in Downtown Las Vegas?",
    answer:
      "We serve our full menu until closing: doner kebab, Iskender, Turkish pide, lahmacun, falafel, rice bowls, and sides. Everything is 100% Zabiha Halal. Perfect for hospitality workers, late shift crews, and night owls.",
  },
];

const LATE_NIGHT_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LATE_NIGHT_FAQ.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer },
  })),
};

export default function LateNightPageClient() {
  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LATE_NIGHT_FAQ_JSON_LD) }}
      />

      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/2026-march/fremont/fremont-exterior-night-505.webp"
            alt="Istanbul Mediterranean 2 on Fremont Street at night"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold backdrop-blur-sm mb-4"
          >
            <Clock size={18} />
            Open Until 5 AM Thu–Sat
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl font-bold text-cream sm:text-5xl md:text-6xl max-w-4xl"
          >
            Late Night Food
            <br />
            <span className="text-gold">Downtown Las Vegas</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl text-lg text-cream/80"
          >
            Turkish restaurant on Fremont Street. Doner kebab, pide, lahmacun—until 2 AM Sun–Wed, 5 AM Thu–Sat. 100% Halal.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/menu"
              className="rounded-full bg-crimson px-8 py-3.5 font-semibold text-cream transition-all hover:bg-crimson-light hover:shadow-lg"
            >
              See Late Night Menu
            </Link>
            <a
              href={LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-cream/30 px-8 py-3.5 font-semibold text-cream backdrop-blur-sm hover:border-gold hover:text-gold inline-flex items-center justify-center gap-2"
            >
              <MapPin size={18} /> Get Directions
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-stone sm:text-3xl mb-8">
            Food Open Late on Fremont Street
          </h2>
          <div className="prose prose-stone max-w-none space-y-6 text-warm-gray leading-relaxed">
            <p>
              Istanbul Mediterranean 2 is one of the few Turkish restaurants in Downtown Las Vegas that stays open late. Located at 505 Fremont Street in the Fremont East District, we serve authentic Turkish and Mediterranean food until 2 AM Sunday through Wednesday, and until 5 AM Thursday through Saturday.
            </p>
            <p>
              Whether you are finishing a shift on the Strip, heading home from a night out, or simply craving real food after midnight, we have you covered. Our full menu is available until closing: doner kebab, Iskender, Turkish pide, lahmacun, falafel, rice bowls, and more. Everything is 100% Zabiha Halal.
            </p>
            <p>
              Try our signature <Link href="/iskender-kebab" className="text-crimson hover:underline">Iskender kebab</Link>—sliced doner over pita with tomato sauce and yogurt—or our <Link href="/turkish-pide" className="text-crimson hover:underline">Turkish pide</Link> and lahmacun. We offer full table service in a spacious dining room, so you can sit down and relax.
            </p>
            <p>
              We are open every day at 10 AM. No reservation needed for small parties; for groups of 6 or more, call ahead at {RESTAURANT.phone}.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone/5 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-stone sm:text-3xl mb-10 text-center">
            Late Night Dining FAQs
          </h2>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {LATE_NIGHT_FAQ.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden rounded-xl border border-stone/8 bg-white"
              >
                <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-semibold text-stone hover:text-crimson [&[data-state=open]>svg]:rotate-180">
                  {item.question}
                  <ChevronDown size={20} className="shrink-0 text-stone/50" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-5 text-warm-gray leading-relaxed">
                  {item.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <section className="bg-stone py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-cream sm:text-3xl">
            Late Night on Fremont Street
          </h2>
          <p className="mt-4 text-cream/60">
            {RESTAURANT.address} — Open until 2 AM / 5 AM
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-8 py-3.5 font-semibold text-cream hover:bg-crimson-light"
            >
              View Full Menu <ArrowRight size={16} />
            </Link>
            <a
              href={LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/20 px-8 py-3.5 font-semibold text-cream hover:border-gold hover:text-gold"
            >
              <MapPin size={16} /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
