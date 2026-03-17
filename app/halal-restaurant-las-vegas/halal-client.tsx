"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, ShieldCheck, MapPin, Phone, ArrowRight } from "lucide-react";
import { RESTAURANT, HOURS, LINKS } from "@/lib/constants";

const HALAL_FAQ = [
  {
    question: "Is Istanbul Mediterranean 2 a Halal restaurant?",
    answer:
      "Yes. We maintain 100% Zabiha Halal certification. All meats are hand-slaughtered according to strict Islamic dietary laws. There is no pork or alcohol in any preparation, and our kitchen maintains strict separation from non-halal items.",
  },
  {
    question: "Where is the best Halal restaurant in Downtown Las Vegas?",
    answer:
      "Istanbul Mediterranean 2 is located at 505 Fremont Street in the Fremont East District. We offer full table service, an expanded Turkish menu with doner kebab, pide, lahmacun, and Turkish breakfast, all 100% Zabiha Halal.",
  },
  {
    question: "Do you have Halal Turkish food on Fremont Street?",
    answer:
      "Yes. We serve authentic Halal Turkish and Mediterranean cuisine including doner kebab, Iskender, lahmacun, Turkish pide, menemen, gozleme, and Kahvalti (Turkish breakfast). Everything is 100% Zabiha Halal.",
  },
];

const HALAL_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HALAL_FAQ.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer },
  })),
};

export default function HalalPageClient() {
  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HALAL_FAQ_JSON_LD) }}
      />

      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/2026-march/fremont/fremont-open-kitchen-doner.webp"
            alt="Halal doner kebab preparation in open kitchen at Istanbul Mediterranean 2"
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
            className="inline-flex items-center gap-2 rounded-full border border-olive/40 bg-olive/20 px-4 py-2 text-sm font-semibold text-olive-light backdrop-blur-sm mb-4"
          >
            <ShieldCheck size={18} />
            100% Zabiha Halal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl font-bold text-cream sm:text-5xl md:text-6xl max-w-4xl"
          >
            Halal Restaurant Las Vegas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl text-lg text-cream/80"
          >
            Authentic Turkish and Mediterranean cuisine, 100% Zabiha Halal certified. No pork. No alcohol. Ever.
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
              View Halal Menu
            </Link>
            <a
              href={`tel:${RESTAURANT.phone.replace(/\D/g, "")}`}
              className="rounded-full border-2 border-cream/30 px-8 py-3.5 font-semibold text-cream backdrop-blur-sm hover:border-gold hover:text-gold"
            >
              Call to Reserve
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-stone sm:text-3xl mb-8">
            Halal Turkish Food in Downtown Las Vegas
          </h2>
          <div className="prose prose-stone max-w-none space-y-6 text-warm-gray leading-relaxed">
            <p>
              Istanbul Mediterranean 2 is a 100% Zabiha Halal restaurant on Fremont Street in Downtown Las Vegas. We bring authentic Turkish and Mediterranean cuisine to the Fremont East District, serving guests who seek halal-certified dining without compromise.
            </p>
            <p>
              Our kitchen is fully halal. All meats are hand-slaughtered according to Islamic dietary law. There is no pork or alcohol in any dish or preparation. We maintain strict separation from non-halal items, so you can dine with confidence.
            </p>
            <p>
              From our signature <Link href="/iskender-kebab" className="text-crimson hover:underline">doner kebab</Link> and <Link href="/turkish-pide" className="text-crimson hover:underline">Turkish pide</Link> to our daily <Link href="/turkish-breakfast" className="text-crimson hover:underline">Kahvalti (Turkish breakfast)</Link>, every dish is prepared with care. We offer full table service in a spacious dining room with living green walls and an open kitchen where you can see our chefs at work.
            </p>
            <p>
              We are open daily at 505 Fremont Street. Sunday through Wednesday we close at 2 AM; Thursday through Saturday we stay open until 5 AM. Perfect for late-night Halal food in Las Vegas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone/5 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-stone sm:text-3xl mb-10 text-center">
            Halal Restaurant FAQs
          </h2>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {HALAL_FAQ.map((item, i) => (
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
            Visit Our Halal Restaurant
          </h2>
          <p className="mt-4 text-cream/60">
            {RESTAURANT.address} — {RESTAURANT.neighborhood}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-8 py-3.5 font-semibold text-cream hover:bg-crimson-light"
            >
              See Full Menu <ArrowRight size={16} />
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
