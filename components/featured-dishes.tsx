"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FEATURED_DISHES } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 16,
      mass: 0.9,
    },
  },
};

export default function FeaturedDishes() {
  return (
    <section className="bg-stone py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-5 px-5 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible"
          style={{ perspective: "1000px" }}
        >
          {FEATURED_DISHES.map((dish) => {
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
                  <motion.span
                    className="inline-block rounded-full bg-gold/90 px-3 py-1 text-xs font-bold text-stone mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {dish.price}
                  </motion.span>
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
                variants={cardVariants}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
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
        </motion.div>
      </div>
    </section>
  );
}
