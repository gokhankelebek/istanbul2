"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ChevronRight } from "lucide-react";
import { MENU_CATEGORIES } from "@/lib/menu-data";
import {
  slugify,
  POPULAR_ITEMS,
  VEGETARIAN_ITEMS,
} from "@/lib/menu-utils";

export default function InStoreMenu() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveCategory(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    MENU_CATEGORIES.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-stone px-5 pt-10 pb-8 text-center">
        <p className="font-heading text-lg font-bold text-cream">
          Istanbul Mediterranean
        </p>
        <h1 className="mt-2 font-heading text-3xl font-bold text-cream">Menu</h1>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-olive/15 px-4 py-1.5 text-xs font-semibold text-olive-light border border-olive/20">
          <ShieldCheck size={14} />
          100% Zabiha Halal
        </div>
        <p className="mx-auto mt-4 max-w-xs text-sm text-gold font-semibold">
          Please order at the register — our team is happy to help.
        </p>
      </header>

      {/* Sticky category nav */}
      <div className="sticky top-0 z-30 border-b border-stone/10 bg-cream/95 backdrop-blur-lg">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 px-4 py-2.5 min-w-max">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-crimson text-cream shadow-sm"
                    : "text-warm-gray hover:bg-stone/5 hover:text-stone"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-2xl px-4 py-8 space-y-12">
        {MENU_CATEGORIES.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-16">
            <div className="mb-4">
              <h2 className="font-heading text-2xl font-bold text-stone">
                {category.title}
              </h2>
              {category.subtitle && (
                <p className="mt-1 text-sm text-warm-gray">{category.subtitle}</p>
              )}
              <div className="mt-2 h-0.5 w-12 rounded-full bg-crimson/30" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {category.items.map((item, i) => (
                <Link
                  key={`${category.id}-${i}`}
                  href={`/in-store/${slugify(item.name)}`}
                  className="group flex gap-4 rounded-xl border border-stone/6 bg-white p-4 transition-all hover:shadow-lg hover:shadow-stone/5 active:scale-[0.99]"
                >
                  {item.image && (
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="80px"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-sm font-bold text-stone sm:text-base">
                        {item.name}
                      </h3>
                      <span className="shrink-0 text-sm font-bold text-crimson">
                        {item.price}
                      </span>
                    </div>
                    {(POPULAR_ITEMS.has(item.name) ||
                      VEGETARIAN_ITEMS.has(item.name)) && (
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {POPULAR_ITEMS.has(item.name) && (
                          <span className="inline-block rounded-full bg-crimson/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-crimson">
                            Popular
                          </span>
                        )}
                        {VEGETARIAN_ITEMS.has(item.name) && (
                          <span className="inline-block rounded-full bg-olive/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-olive">
                            Vegetarian
                          </span>
                        )}
                      </div>
                    )}
                    {item.description && (
                      <p className="mt-1 text-xs leading-relaxed text-warm-gray line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer note */}
      <footer className="border-t border-stone/10 bg-cream-dark px-5 py-8 text-center">
        <p className="inline-flex items-center gap-1.5 font-heading text-base font-bold text-stone">
          Ready to order? <ChevronRight size={16} className="text-crimson" />
          Step up to the register.
        </p>
        <p className="mt-2 text-xs text-warm-gray">
          505 Fremont Street, Downtown Las Vegas
        </p>
      </footer>
    </div>
  );
}
