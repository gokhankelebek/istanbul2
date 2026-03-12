"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MenuCategory } from "@/lib/menu-data";
import { getMenuItemHref } from "@/lib/menu-utils";

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
}

export default function MenuSection({ category, index }: MenuSectionProps) {
  return (
    <section id={category.id} className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {category.image && index % 3 === 0 && (
          <div className="relative mb-8 h-48 overflow-hidden rounded-2xl sm:h-64">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h2 className="font-heading text-2xl font-bold text-cream sm:text-3xl">
                {category.title}
              </h2>
              {category.subtitle && (
                <p className="mt-1 text-sm text-cream/60">
                  {category.subtitle}
                </p>
              )}
            </div>
          </div>
        )}

        {(!category.image || index % 3 !== 0) && (
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-stone sm:text-3xl">
              {category.title}
            </h2>
            {category.subtitle && (
              <p className="mt-2 text-warm-gray">{category.subtitle}</p>
            )}
            <div className="mt-3 h-0.5 w-16 bg-crimson/30 rounded-full" />
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          {category.items.map((item, i) => {
            const href = getMenuItemHref(item.name);
            const card = (
              <>
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
                    <h3 className="font-heading text-sm font-bold text-stone transition-colors group-hover:text-crimson sm:text-base">
                      {item.name}
                    </h3>
                    <span className="shrink-0 text-sm font-bold text-crimson">
                      {item.price}
                    </span>
                  </div>
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
                  className="group flex gap-4 rounded-xl border border-stone/6 bg-white p-4 transition-all hover:shadow-lg hover:shadow-stone/5 hover:-translate-y-0.5"
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
