"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MenuCategory } from "@/lib/menu-data";
import {
  getMenuItemHref,
  POPULAR_ITEMS,
  VEGETARIAN_ITEMS,
} from "@/lib/menu-utils";

interface MenuSectionProps {
  category: MenuCategory;
}

export default function MenuSection({ category }: MenuSectionProps) {
  return (
    <section id={category.id} className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h2 className="font-heading text-4xl font-bold leading-none text-stone sm:text-5xl">
            {category.title}
          </h2>
          {category.subtitle && (
            <p className="mt-2 text-warm-gray">{category.subtitle}</p>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {category.items.map((item, i) => {
            const href = getMenuItemHref(item.name);
            const card = (
              <>
                {item.image && (
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-stone-100">
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
                    <h3 className="font-body text-[15px] font-bold text-stone transition-colors group-hover:text-crimson">
                      {item.name}
                    </h3>
                    <span className="shrink-0 text-[15px] font-bold text-stone">
                      {item.price}
                    </span>
                  </div>
                  {(POPULAR_ITEMS.has(item.name) || VEGETARIAN_ITEMS.has(item.name)) && (
                    <div className="mt-1.5 flex gap-1.5 flex-wrap">
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
                    <p className="mt-1 text-xs leading-relaxed text-warm-gray line-clamp-2 sm:text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </>
            );

            return (
              <motion.div
                key={`${category.id}-${i}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <Link
                  href={href}
                  className="group flex gap-4 rounded-[20px] border border-stone-200 bg-white p-3 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(28,25,23,0.4)]"
                >
                  {card}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
