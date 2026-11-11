"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import OpenStatus from "@/components/home/open-status";
import { DELIVERY_PARTNERS, LINKS, RESTAURANT } from "@/lib/constants";

type Mode = "delivery" | "pickup";

const tabBase =
  "h-11 rounded-[11px] text-[15px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson";

export default function OrderHero() {
  const [mode, setMode] = useState<Mode>("delivery");
  const partners = DELIVERY_PARTNERS.filter((p) => p.href);
  const tel = `tel:+1${RESTAURANT.phone.replace(/[^0-9]/g, "")}`;

  return (
    <>
      {/* Status strip — sits under the fixed navbar */}
      <div className="bg-stone pt-[76px] text-[13px] text-stone-300 sm:pt-[84px]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 lg:px-8">
          <span className="flex flex-wrap items-center gap-x-2">
            <OpenStatus />
            <span className="hidden sm:inline">· Fri &amp; Sat until 5 AM</span>
          </span>
          <span className="flex flex-wrap gap-x-5">
            <span className="hidden md:inline">{RESTAURANT.address}</span>
            <a href={tel} className="font-semibold text-gold hover:text-gold-light">
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
            Döner, pide &amp; Turkish breakfast.{" "}
            <span className="text-crimson">Delivered hot,</span> late.
          </h1>
          <p className="max-w-[520px] text-lg leading-relaxed text-stone-light">
            Fremont Street&rsquo;s late-night Turkish kitchen. Order for delivery or skip the
            line with pickup, same menu as our dining room.
          </p>

          {/* Order box */}
          <div className="flex max-w-[560px] flex-col gap-4 rounded-[20px] border border-stone-200 bg-white p-5 shadow-[0_18px_40px_-24px_rgba(28,25,23,0.35)]">
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
          <Link href="/menu" className="w-fit text-[15px] font-semibold text-crimson hover:text-crimson-dark">
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

      {/* Ways to order */}
      <section aria-label="Ways to order" className="mx-auto max-w-7xl px-5 pb-12 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 border-y border-stone-200 py-[18px]">
          <span className="text-sm text-stone-500">Order your way</span>
          <div className="flex flex-wrap items-baseline gap-x-9 gap-y-2 font-heading text-xl font-semibold uppercase tracking-wide text-stone-light">
            <span>
              Cash App{" "}
              <span className="font-body text-[13px] font-medium normal-case tracking-normal text-stone-500">
                direct from our kitchen
              </span>
            </span>
            <span>Uber Eats</span>
            <span>DoorDash</span>
            <span>Dine in</span>
          </div>
        </div>
      </section>
    </>
  );
}
