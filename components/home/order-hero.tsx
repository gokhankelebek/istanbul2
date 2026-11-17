"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, MapPin, Moon, Truck } from "lucide-react";
import OpenStatus from "@/components/home/open-status";
import { DELIVERY_PARTNERS, LINKS, RESTAURANT } from "@/lib/constants";

type Mode = "delivery" | "pickup";

const PILLARS = [
  {
    Icon: Truck,
    eyebrow: "Delivery",
    title: "Delivered hot, late.",
    body: "Döner, pide, lahmacun, kebab plates and desserts through Cash App, Uber Eats or DoorDash. Online orders run until about 1 AM.",
    cta: { label: "Order delivery", href: `${LINKS.orderOnline}#delivery`, external: false },
  },
  {
    Icon: Coffee,
    eyebrow: "Breakfast",
    title: "Turkish breakfast, dine-in only.",
    body: "Kahvaltı is served at the table from 10 AM: cheeses, olives, honey and kaymak, eggs, fresh bread and Turkish tea. It isn’t available for delivery.",
    cta: { label: "See the breakfast", href: "/turkish-breakfast", external: false },
  },
  {
    Icon: Moon,
    eyebrow: "Late night",
    title: "Open late on Fremont.",
    body: "Dine in until 2 AM Sunday to Thursday and 5 AM on Friday and Saturday. Walk in, no reservation needed.",
    cta: { label: "Get directions", href: LINKS.googleMaps, external: true },
  },
];

const tabBase =
  "h-11 rounded-[11px] text-[15px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson";

export default function OrderHero() {
  const [mode, setMode] = useState<Mode>("delivery");
  const partners = DELIVERY_PARTNERS.filter((p) => p.href);
  const tel = `tel:+1${RESTAURANT.phone.replace(/[^0-9]/g, "")}`;

  return (
    <>
      {/* Status strip — sits under the fixed navbar */}
      <div data-ga-location="status_bar" className="bg-stone pt-[76px] text-[13px] text-stone-300 sm:pt-[84px]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 lg:px-8">
          <span className="flex flex-wrap items-center gap-x-2">
            <OpenStatus />
            <span className="hidden sm:inline">· Fri &amp; Sat until 5 AM</span>
          </span>
          <span className="flex flex-wrap gap-x-5">
            <span className="hidden md:inline">{RESTAURANT.address}</span>
            <a href={tel} className="-my-2.5 inline-flex min-h-11 items-center font-semibold text-gold hover:text-gold-light">
              {RESTAURANT.phone}
            </a>
          </span>
        </div>
      </div>

      <section className="mx-auto flex max-w-7xl flex-wrap items-stretch gap-10 px-5 pt-10 pb-10 sm:pt-14 lg:px-8">
        <div className="flex min-w-0 flex-[1_1_460px] flex-col justify-center gap-6 sm:gap-7">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-stone-100 px-3 py-1.5 text-[13px] font-semibold text-stone-light">
              100% Zabiha Halal
            </span>
            <span className="rounded-full bg-stone-100 px-3 py-1.5 text-[13px] font-semibold text-stone-light">
              Family recipes from Istanbul
            </span>
          </div>

          <h1 className="font-heading text-[44px] font-bold leading-[0.98] text-stone sm:text-6xl lg:text-[76px]">
            Döner, pide &amp; lahmacun.{" "}
            <span className="text-crimson">Delivered hot,</span> late.
          </h1>
          <p className="max-w-[520px] text-lg leading-relaxed text-stone-light">
            Fremont Street&rsquo;s late-night Turkish kitchen. Order döner, pide and kebab
            plates for delivery, or skip the line with pickup.
          </p>

          {/* Order box */}
          <div data-ga-location="home_order_box" className="flex max-w-[560px] flex-col gap-4 rounded-[20px] border border-stone-200 bg-white p-5 shadow-[0_18px_40px_-24px_rgba(28,25,23,0.35)]">
            <div
              role="group"
              aria-label="Order type"
              className="grid grid-cols-2 gap-1 rounded-[14px] bg-stone-100 p-1"
            >
              <button
                type="button"
                aria-pressed={mode === "delivery"}
                onClick={() => setMode("delivery")}
                className={`${tabBase} ${mode === "delivery" ? "bg-stone text-white" : "text-stone-light hover:text-stone"}`}
              >
                Delivery
              </button>
              <button
                type="button"
                aria-pressed={mode === "pickup"}
                onClick={() => setMode("pickup")}
                className={`${tabBase} ${mode === "pickup" ? "bg-stone text-white" : "text-stone-light hover:text-stone"}`}
              >
                Pickup
              </button>
            </div>

            {mode === "delivery" ? (
              <div className="flex flex-col gap-3">
                <p className="text-[13px] font-semibold text-stone-light">Choose your delivery app</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {partners.map((p, i) => (
                    <a
                      key={p.key}
                      href={p.href}
                      className={`flex h-[52px] items-center justify-center rounded-xl px-4 text-[15px] font-bold transition-colors ${
                        i === 0
                          ? "bg-crimson text-white hover:bg-crimson-light"
                          : "border border-stone-300 text-stone hover:border-stone hover:bg-stone-50"
                      }`}
                    >
                      {p.name}
                    </a>
                  ))}
                </div>
                <p className="text-[13px] text-stone-500">
                  Cash App orders go straight to our kitchen. Same Halal menu everywhere.
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-5 w-5 flex-none text-crimson" aria-hidden="true" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-stone">505 Fremont St, Las Vegas</span>
                    <span className="text-sm text-stone-500">Order ahead and pay with Cash App</span>
                  </div>
                </div>
                <a
                  href={LINKS.orderPickup}
                  className="flex h-[52px] items-center gap-2 rounded-xl bg-crimson px-6 font-bold text-white transition-colors hover:bg-crimson-light"
                >
                  Start pickup order <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
          <Link href="/menu" className="inline-flex min-h-11 items-center w-fit text-[15px] font-semibold text-crimson hover:text-crimson-dark">
            Browse the full menu →
          </Link>
        </div>

        <div className="relative min-h-[380px] min-w-0 flex-[1_1_420px] overflow-hidden rounded-[28px] bg-stone sm:min-h-[520px]">
          <Image
            src="/images/2026-march/fremont/fremont-open-kitchen-doner.webp"
            alt="Döner being carved in the open kitchen at Istanbul 2 on Fremont Street"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-3">
            <div className="flex max-w-[260px] flex-col gap-0.5 rounded-2xl bg-stone/85 px-[18px] py-3.5 text-white backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-[0.06em] text-gold">Carved to order</span>
              <span className="text-[15px] leading-snug">
                Beef &amp; lamb döner, sliced off the spit for every order.
              </span>
            </div>
            <span className="rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-stone">From $12.95</span>
          </div>
        </div>
      </section>

      {/* Three separate promises: what we deliver, what's dine-in only, and late hours */}
      <section aria-label="Delivery, breakfast and late night" className="mx-auto max-w-7xl px-5 pb-12 lg:px-8">
        <div className="grid gap-3 md:grid-cols-3">
          {PILLARS.map(({ Icon, eyebrow, title, body, cta }) => (
            <div
              key={eyebrow}
              data-ga-location={`pillar_${eyebrow.toLowerCase().replace(/[^a-z]+/g, "_")}`}
              className="flex flex-col gap-3 rounded-[20px] border border-stone-200 bg-white p-6"
            >
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-crimson">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {eyebrow}
              </span>
              <h2 className="font-heading text-[28px] font-bold leading-none text-stone">{title}</h2>
              <p className="flex-1 text-[15px] leading-relaxed text-stone-500">{body}</p>
              {cta.external ? (
                <a href={cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-fit items-center text-[15px] font-semibold text-crimson hover:text-crimson-dark">
                  {cta.label} →
                </a>
              ) : cta.href.startsWith("/") ? (
                <Link href={cta.href} className="inline-flex min-h-11 w-fit items-center text-[15px] font-semibold text-crimson hover:text-crimson-dark">
                  {cta.label} →
                </Link>
              ) : (
                <a href={cta.href} className="inline-flex min-h-11 w-fit items-center text-[15px] font-semibold text-crimson hover:text-crimson-dark">
                  {cta.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
