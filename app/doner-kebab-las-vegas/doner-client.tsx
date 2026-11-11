"use client";

import PageHeader, { btnPrimary, btnSecondary } from "@/components/page-header";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MapPin, ArrowRight } from "lucide-react";
import { RESTAURANT, LINKS } from "@/lib/constants";

const DONER_FAQ = [
  {
    question: "Where can I get doner kebab in Las Vegas?",
    answer:
      "Istanbul Mediterranean 2 serves authentic Turkish doner kebab at 505 Fremont Street in Downtown Las Vegas. We offer Iskender kebab, doner pita, doner rice bowls, doner wraps, and more. All 100% Zabiha Halal.",
  },
  {
    question: "What is Iskender kebab?",
    answer:
      "Iskender is one of our signature dishes: thinly sliced doner meat over pita bread with tomato sauce, yogurt, and melted butter. It is a classic Turkish preparation and one of our most popular items.",
  },
  {
    question: "Is the doner Halal?",
    answer:
      "Yes. All our meats, including doner, are 100% Zabiha Halal. Hand-slaughtered according to Islamic dietary law. No pork or alcohol in any preparation.",
  },
];

const DONER_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DONER_FAQ.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer },
  })),
};

export default function DonerPageClient() {
  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DONER_FAQ_JSON_LD) }}
      />

      <PageHeader
        badges={["100% Zabiha Halal", "Carved to order"]}
        eyebrow="Authentic Turkish döner"
        title={<>Döner kebab <span className="text-crimson">Las Vegas</span></>}
        subtitle="Authentic Turkish döner on Fremont Street: Iskender, pita, rice bowls and wraps, sliced off the spit for every order."
        image={{ src: "/images/2026-march/food/iskender-plate.webp", alt: "Iskender kebab with doner meat at Istanbul Mediterranean 2" }}
      >
        <Link href="/menu" className={btnPrimary}>See the döner menu</Link>
        <Link href="/iskender-kebab" className={btnSecondary}>Our Iskender kebab</Link>
      </PageHeader>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="font-heading text-4xl font-bold leading-none text-stone sm:text-5xl mb-8">
            Turkish Doner on Fremont Street
          </h2>
          <div className="prose prose-stone max-w-none space-y-6 text-warm-gray leading-relaxed">
            <p>
              Istanbul Mediterranean 2 brings authentic Turkish doner kebab to Downtown Las Vegas. Located at 505 Fremont Street in the Fremont East District, we prepare our doner in-house and serve it in classic Turkish styles: Iskender, pita, rice bowls, lavash wraps, and more.
            </p>
            <p>
              Our doner is 100% Zabiha Halal. We use quality beef and lamb, seasoned and stacked on the spit, then sliced to order. Try our signature <Link href="/iskender-kebab" className="text-crimson hover:underline">Iskender kebab</Link>—sliced doner over pita with tomato sauce, yogurt, and melted butter—or our doner pita, rice bowl, or salad. We also offer chicken doner and falafel for variety.
            </p>
            <p>
              Beyond doner, we serve the full spectrum of Turkish cuisine: <Link href="/lahmacun" className="text-crimson hover:underline">lahmacun</Link>, <Link href="/turkish-pide" className="text-crimson hover:underline">Turkish pide</Link>, <Link href="/turkish-breakfast" className="text-crimson hover:underline">Kahvalti (Turkish breakfast)</Link>, and fresh-baked pastries. Full table service in a spacious dining room with living green walls and an open kitchen.
            </p>
            <p>
              We are open daily at 10 AM. Sunday–Thursday until 2 AM; Friday–Saturday until 5 AM. Perfect for late-night doner on Fremont Street.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="font-heading text-4xl font-bold leading-none text-stone sm:text-5xl mb-10 text-center">
            Doner Kebab FAQs
          </h2>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {DONER_FAQ.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden rounded-xl border border-stone-200 bg-white"
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
          <h2 className="font-heading text-4xl font-bold leading-none text-white sm:text-5xl">
            Doner Kebab on Fremont Street
          </h2>
          <p className="mt-4 text-cream/60">
            {RESTAURANT.address}
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
