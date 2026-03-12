"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FEATURED_DISHES } from "@/lib/constants";

export default function FeaturedDishes() {
  return (
    <section className="bg-stone py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
            Signature Dishes
          </h2>
          <p className="mt-4 text-cream/50 max-w-xl mx-auto">
            From the streets of Istanbul to your table — authentic flavors
            crafted with care
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-5 px-5 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {FEATURED_DISHES.map((dish, i) => {
            const card = (
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 260px, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block rounded-full bg-gold/90 px-3 py-1 text-xs font-bold text-stone mb-2">
                    {dish.price}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-cream">
                    {dish.name}
                  </h3>
                  <p className="mt-1 text-sm text-cream/60 line-clamp-2">
                    {dish.description}
                  </p>
                </div>
              </div>
            );
            return (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex-shrink-0 w-[260px] lg:w-auto snap-start"
              >
                {"href" in dish && dish.href ? (
                  <Link href={dish.href}>{card}</Link>
                ) : (
                  card
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
