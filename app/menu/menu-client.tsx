"use client";

import { useState, useEffect } from "react";
import PageHeader, { btnPrimary } from "@/components/page-header";
import { MENU_CATEGORIES } from "@/lib/menu-data";
import { LINKS, ORDER_ONLINE_COPY } from "@/lib/constants";
import MenuSection from "@/components/menu-section";

export default function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState(
    MENU_CATEGORIES[0].id
  );
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    MENU_CATEGORIES.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        badges={["100% Zabiha Halal", "Breakfast to late night"]}
        eyebrow="Full menu · Fremont Street"
        title="Turkish restaurant menu"
        subtitle="Döner, pide, lahmacun, kebab plates, Turkish breakfast and our bakery case. Every dish is on the menu for pickup and delivery too."
        image={{ src: "/images/2026-march/food/lahmacun-pide-table.webp", alt: "Lahmacun and pide on the table at Istanbul 2" }}
        note={ORDER_ONLINE_COPY.promo}
      >
        <a href={LINKS.orderOnline} className={btnPrimary} aria-label={ORDER_ONLINE_COPY.ariaLabel}>
          {ORDER_ONLINE_COPY.label}
        </a>
      </PageHeader>

      {/* Sticky category nav */}
      <div
        className={`sticky top-[68px] z-30 bg-white/95 backdrop-blur-lg border-b transition-shadow ${
          isSticky ? "shadow-md border-stone-200" : "border-transparent"
        }`}
      >
        <div className="mx-auto max-w-4xl overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 px-5 py-3 min-w-max">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`h-11 whitespace-nowrap rounded-full border px-[18px] text-sm font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? "border-stone bg-stone text-white"
                    : "border-stone-300 bg-white text-stone-light hover:border-stone hover:text-stone"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu content */}
      <div className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16 space-y-16">
        {MENU_CATEGORIES.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
