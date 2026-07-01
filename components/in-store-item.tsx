"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, ChevronRight } from "lucide-react";
import {
  POPULAR_ITEMS,
  VEGETARIAN_ITEMS,
  slugify,
  type MenuItemWithMeta,
} from "@/lib/menu-utils";

export default function InStoreItem({ entry }: { entry: MenuItemWithMeta }) {
  const { item, category } = entry;
  const heroImage =
    item.image || category.image || "/images/2026-march/food/doner-salad-plate.webp";

  const others = category.items
    .filter((o) => o.name !== item.name)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-cream">
      {/* Back bar */}
      <div className="sticky top-0 z-30 border-b border-stone/10 bg-cream/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-2xl items-center px-4 py-3">
          <Link
            href={`/in-store#${category.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone transition-colors hover:text-crimson"
          >
            <ArrowLeft size={16} />
            Back to menu
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-72 overflow-hidden sm:h-96">
        <Image
          src={heroImage}
          alt={item.name}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 640px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute bottom-0 w-full p-6">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
            {category.title}
          </span>
          <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-cream sm:text-4xl">
            {item.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="font-heading text-2xl font-bold text-gold">
              {item.price}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-olive/15 px-3 py-1 text-xs font-semibold text-olive-light border border-olive/20">
              <ShieldCheck size={12} />
              Halal
            </span>
            {POPULAR_ITEMS.has(item.name) && (
              <span className="rounded-full bg-crimson/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cream">
                Popular
              </span>
            )}
            {VEGETARIAN_ITEMS.has(item.name) && (
              <span className="rounded-full bg-olive/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cream">
                Vegetarian
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Description + order-at-register note */}
      <section className="mx-auto max-w-2xl px-5 py-10">
        {item.description && (
          <p className="text-center text-lg leading-relaxed text-warm-gray">
            {item.description}
          </p>
        )}
        <div className="mt-8 rounded-2xl border border-crimson/15 bg-crimson/5 px-6 py-5 text-center">
          <p className="font-heading text-base font-bold text-stone">
            Order at the register
          </p>
          <p className="mt-1 text-sm text-warm-gray">
            Tell our team what you&apos;d like — we&apos;ll take it from there.
          </p>
        </div>
      </section>

      {/* More from category */}
      {others.length > 0 && (
        <section className="bg-stone py-12">
          <div className="mx-auto max-w-2xl px-5">
            <h2 className="mb-6 text-center font-heading text-xl font-bold text-cream">
              More from {category.title}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {others.map((other, i) => (
                <Link
                  key={i}
                  href={`/in-store/${slugify(other.name)}`}
                  className="group flex gap-3 rounded-xl border border-cream/8 bg-cream/5 p-4 transition-all hover:bg-cream/10 active:scale-[0.99]"
                >
                  {other.image && (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={other.image}
                        alt={other.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-stone/10 bg-cream-dark px-5 py-8 text-center">
        <Link
          href="/in-store"
          className="inline-flex items-center gap-1.5 font-heading text-base font-bold text-stone transition-colors hover:text-crimson"
        >
          Back to full menu <ChevronRight size={16} className="text-crimson" />
        </Link>
        <p className="mt-2 text-xs text-warm-gray">
          505 Fremont Street, Downtown Las Vegas
        </p>
      </footer>
    </div>
  );
}
