"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  Armchair,
  ChefHat,
  Maximize,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { LINKS, ORDER_ONLINE_COPY } from "@/lib/constants";
import PromoVideo from "@/components/promo-video";

const STORY_SECTIONS = [
  {
    title: "Bringing the Soul of Istanbul to Downtown",
    content:
      "At Istanbul Mediterranean, we're the Turkish restaurant Las Vegas has been waiting for — bringing the soul of Istanbul to the heart of Downtown Las Vegas. Our mission is to share centuries-old culinary traditions with a community that values authentic flavors and genuine hospitality.\n\nOur flagship location at the Grand Bazaar Shops on the Strip has become a beloved destination for authentic Turkish street food. Now, with our second location in Fremont East, we're expanding our reach while staying true to our roots.",
    image: "/images/2026-march/fremont/fremont-exterior-night-505.webp",
    imageAlt: "Istanbul Mediterranean Fremont Street exterior at night",
  },
  {
    title: "Why Downtown Las Vegas?",
    content:
      '"We chose Fremont East because of its incredible energy," owner Zane Atlas Muslu explains. "Downtown is undergoing a culinary renaissance, and we wanted to be part of a neighborhood that celebrates local grit, late-night culture, and authentic flavors. While the Strip is about the spectacle, Downtown is about the community — and that\'s where we want to grow."',
    image: "/images/2026-march/fremont/fremont-dining-room-wide.webp",
    imageAlt: "Busy dining room with living green walls",
  },
  {
    title: "Chef Adem's Family Legacy",
    content:
      "Behind every dish at Istanbul Mediterranean is Chef Adem, who carries on his family's legacy by preserving secret recipes passed down through generations. These aren't just recipes — they're stories, traditions, and a connection to Istanbul's rich culinary heritage.\n\nChef Adem ensures that every dish is prepared with care, using 100% Halal meats, fresh ingredients, and handcrafted techniques inspired by Istanbul's street food scene.",
    image: "/images/2026-march/fremont/fremont-open-kitchen-doner.webp",
    imageAlt: "Open kitchen with doner kebab preparation",
  },
  {
    title: "A Real Turkish Welcome",
    content:
      "Turkish hospitality — known as Misafirperverlik — is at the heart of everything we do. In our culture, the guest is \"a guest of God,\" and we treat everyone who walks through our doors like family. This philosophy guides every interaction, every dish we prepare, and every moment we share with our community.\n\nWhether you're grabbing a quick lunch or sitting down for a family dinner, we invite you to experience the authentic flavors and genuine hospitality that only a family business can provide.",
    image: "/images/2026-march/ambiance/istanbul-coffee-cart.webp",
    imageAlt: "Istanbul coffee cart corner with cozy booth seating",
  },
];

const SPACE_FEATURES = [
  {
    icon: Leaf,
    title: "Living Green Walls",
    description:
      "Natural, living green walls create a fresh, inviting atmosphere that brings nature into the dining experience.",
  },
  {
    icon: Armchair,
    title: "Cozy Booths",
    description:
      "Comfortable booth seating perfect for groups, families, and intimate dining experiences.",
  },
  {
    icon: ChefHat,
    title: "Open Kitchen",
    description:
      "Watch our chefs in action as they prepare authentic Turkish dishes. Transparency and authenticity in every meal.",
  },
  {
    icon: Maximize,
    title: "Larger Dining Room",
    description:
      "More spacious than our Strip location, with room to relax and enjoy the full Turkish dining experience.",
  },
];

export default function StoryPageClient() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Hero */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fremont/d24561c8-8aea-4681-b32b-26c5f0de5ec6.JPG"
            alt="Istanbul Mediterranean Restaurant interior"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-lg text-cream/60 max-w-2xl mx-auto">
              More than just food — we&apos;re bringing Turkish hospitality and
              centuries-old culinary traditions to Downtown Las Vegas.
            </p>
            <p className="mt-4 text-base text-cream/55 max-w-2xl mx-auto">
              <Link
                href="/blog"
                className="font-medium text-gold hover:text-gold-light underline underline-offset-2"
              >
                Read news and guides on our blog
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      <PromoVideo variant="light" />

      {/* Story sections */}
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24 space-y-24 lg:space-y-32">
        {STORY_SECTIONS.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`grid gap-10 lg:gap-16 lg:grid-cols-2 items-center ${
              i % 2 !== 0 ? "lg:direction-rtl" : ""
            }`}
          >
            <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <h2 className="font-heading text-2xl font-bold text-stone sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-2 h-0.5 w-12 bg-crimson/40 rounded-full" />
              {section.content.split("\n\n").map((p, j) => (
                <p
                  key={j}
                  className="mt-5 text-warm-gray leading-relaxed"
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

      {/* Halal commitment */}
      <section className="bg-olive/8 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-olive/15 text-olive">
              <ShieldCheck size={32} />
            </div>
            <h2 className="font-heading text-2xl font-bold text-stone sm:text-3xl">
              100% Zabiha Halal
            </h2>
            <p className="mt-4 text-warm-gray max-w-2xl mx-auto leading-relaxed">
              All meats are hand-slaughtered according to strict Islamic dietary
              laws, with no pork or alcohol in any preparation. Our kitchen
              maintains strict separation from any non-halal items. The same
              commitment to halal certification as our Strip location.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Designed for community */}
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
              Designed for Community
            </h2>
            <p className="mt-4 text-warm-gray max-w-xl mx-auto">
              Every detail of our Fremont space was designed to feel like home
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SPACE_FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-stone/8 bg-white p-8 text-center"
                >
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-stone mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm-gray">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              Come Experience Istanbul
            </h2>
            <p className="mt-4 text-cream/50 max-w-lg mx-auto">
              Whether it&apos;s your first visit or you&apos;re part of our
              family, there&apos;s always a warm welcome waiting at 505 Fremont.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/menu"
                className="rounded-full bg-crimson px-8 py-3.5 font-semibold text-cream transition-all hover:bg-crimson-light hover:shadow-lg hover:shadow-crimson/25 active:scale-95"
              >
                View Our Menu
              </Link>
              <a
                href={LINKS.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream/20 px-8 py-3.5 font-semibold text-cream transition-all hover:border-gold hover:text-gold active:scale-95"
                aria-label={ORDER_ONLINE_COPY.ariaLabel}
              >
                {ORDER_ONLINE_COPY.label} <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
