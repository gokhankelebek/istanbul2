"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ShieldCheck } from "lucide-react";
import { MENU_CATEGORIES } from "@/lib/menu-data";
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
    <div className="min-h-screen bg-cream pt-24">
      {/* Header */}
      <div className="bg-stone py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-olive/15 px-4 py-1.5 text-xs font-semibold text-olive-light border border-olive/20">
              <ShieldCheck size={14} />
              100% Zabiha Halal Certified
            </div>
            <h1 className="font-heading text-4xl font-bold text-cream sm:text-5xl">
              Our Menu
            </h1>
            <p className="mt-4 text-cream/50 max-w-xl mx-auto">
              Celebrating the full spectrum of Turkish cuisine — from morning
              Kahvalti to late-night Pide
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky category nav */}
      <div
        className={`sticky top-[60px] z-30 bg-cream/95 backdrop-blur-lg border-b transition-shadow ${
          isSticky ? "shadow-md border-stone/10" : "border-transparent"
        }`}
      >
        <div className="mx-auto max-w-4xl overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 px-5 py-3 min-w-max">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
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

      {/* Menu content */}
      <div className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16 space-y-16">
        {MENU_CATEGORIES.map((category, index) => (
          <MenuSection key={category.id} category={category} index={index} />
        ))}

        {/* Download PDF */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-8"
        >
          <a
            href="/istanbul-2-menu.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-stone/15 px-6 py-3 text-sm font-semibold text-stone transition-all hover:border-crimson hover:text-crimson hover:shadow-lg"
          >
            <Download size={18} />
            Download PDF Menu
          </a>
        </motion.div>
      </div>
    </div>
  );
}
