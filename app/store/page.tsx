import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingBag,
  Bike,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  UtensilsCrossed,
} from "lucide-react";
import {
  RESTAURANT,
  HOURS,
  LINKS,
  DELIVERY_PARTNERS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Order Online | Istanbul Mediterranean 2 (Halal) · Fremont Street",
  description:
    "Order Istanbul Mediterranean 2 online. Pickup at 505 Fremont Street through Cash App, or delivery through Cash App, Uber Eats or DoorDash. 100% Zabiha Halal.",
  alternates: {
    canonical: `${LINKS.store}/`,
  },
  openGraph: {
    title: "Order Online | Istanbul Mediterranean 2",
    description:
      "Pickup through Cash App. Delivery through Cash App, Uber Eats or DoorDash.",
    url: `${LINKS.store}/`,
  },
};

const ON_SITE = LINKS.website;
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function StorePage() {
  const partners = DELIVERY_PARTNERS.filter((p) => p.href);
  const phoneHref = `tel:${RESTAURANT.phone.replace(/[^0-9]/g, "")}`;

  return (
    <main className="min-h-screen bg-stone text-cream">
      <header className="border-b border-cream/10">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <Link
            href={`${ON_SITE}/`}
            className="font-heading text-lg font-bold tracking-tight text-cream"
          >
            Istanbul <span className="text-gold">Mediterranean 2</span>
          </Link>
          <Link
            href={`${ON_SITE}/menu`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cream/70 transition-colors hover:text-gold"
          >
            <UtensilsCrossed size={16} />
            View menu
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:pt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          100% Zabiha Halal · Fremont Street
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold leading-tight sm:text-5xl">
          Order online
        </h1>
        <p className="mt-3 max-w-xl text-cream/70">
          Same menu as our dining room, from our kitchen at{" "}
          {RESTAURANT.address.split(",")[0]}. Choose pickup or delivery.
        </p>

        {/* Pickup */}
        <section data-ga-location="store_pickup" aria-labelledby="pickup-heading" className="mt-10">
          <h2
            id="pickup-heading"
            className="flex items-center gap-2 font-heading text-2xl font-bold"
          >
            <ShoppingBag size={22} className="text-gold" />
            Pickup
          </h2>
          <div className="mt-4 rounded-2xl border border-cream/10 bg-cream/5 p-5 sm:p-6">
            <a
              href={LINKS.orderPickup}
              {...external}
              className="flex items-center justify-between gap-4 rounded-xl bg-crimson px-5 py-4 text-cream transition-colors hover:bg-crimson-light"
              aria-label="Order pickup through Cash App — opens in a new tab"
            >
              <span>
                <span className="block text-lg font-bold">Order pickup</span>
                <span className="block text-sm text-cream/80">
                  Pay with Cash App, collect at the counter
                </span>
              </span>
              <ArrowUpRight size={22} className="shrink-0" />
            </a>
            <div className="mt-4 flex flex-col gap-2 text-sm text-cream/70 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={LINKS.googleMaps}
                {...external}
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <MapPin size={16} className="text-gold" />
                {RESTAURANT.address}
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <Phone size={16} className="text-gold" />
                {RESTAURANT.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section
          data-ga-location="store_delivery"
          id="delivery"
          aria-labelledby="delivery-heading"
          className="mt-10 scroll-mt-6"
        >
          <h2
            id="delivery-heading"
            className="flex items-center gap-2 font-heading text-2xl font-bold"
          >
            <Bike size={22} className="text-gold" />
            Delivery
          </h2>
          <p className="mt-2 text-sm text-cream/70">
            Pick the app you already use.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {partners.map((partner) => (
              <li key={partner.key}>
                <a
                  href={partner.href}
                  {...external}
                  className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-cream/10 bg-cream/5 p-5 transition-colors hover:border-gold/60 hover:bg-cream/10"
                  aria-label={`Order delivery through ${partner.name} — opens in a new tab`}
                >
                  <span>
                    <span className="block text-lg font-bold">
                      {partner.name}
                    </span>
                    <span className="block text-sm text-cream/60">
                      {partner.note}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold">
                    Order delivery <ArrowUpRight size={16} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Hours + catering */}
        <section className="mt-10 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-cream/10 p-5">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold">
              <Clock size={16} />
              Hours
            </h2>
            <dl className="mt-3 space-y-1 text-sm">
              {HOURS.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="text-cream/70">{h.days}</dt>
                  <dd className="font-semibold">{h.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Link
            href={`${ON_SITE}/catering`}
            className="flex flex-col justify-between gap-4 rounded-2xl border border-cream/10 p-5 transition-colors hover:border-gold/60"
          >
            <span>
              <span className="block text-sm font-semibold uppercase tracking-wider text-gold">
                Catering
              </span>
              <span className="mt-2 block text-sm text-cream/70">
                Feeding 10 or more? Request a catering quote.
              </span>
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold">
              Plan an event <ArrowUpRight size={16} />
            </span>
          </Link>
        </section>
      </div>
    </main>
  );
}
