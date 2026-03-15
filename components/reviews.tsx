"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah M.",
    text: "Best Turkish food I've had outside of Istanbul. The Iskender kebab was incredible and the staff treated us like family. Will be coming back every time we visit Vegas.",
    rating: 5,
    source: "Google",
  },
  {
    name: "James R.",
    text: "Finally a legit halal spot downtown that's open late. The lahmacun is paper-thin perfection and the pide is loaded. This place is a game changer for Fremont East.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Amira K.",
    text: "The Turkish breakfast was the highlight of our Vegas trip. So many fresh dishes, endless tea, and the atmosphere with the green walls is beautiful. A must-visit.",
    rating: 5,
    source: "Yelp",
  },
  {
    name: "David L.",
    text: "I work nights on Fremont and this place is a lifesaver. Open late, real food, great prices. The doner plate with bulgur is my go-to. Staff always remembers my order.",
    rating: 5,
    source: "Google",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 16,
    },
  },
};

export default function Reviews() {
  return (
    <section className="bg-cream py-20 lg:py-28 turkish-pattern-subtle overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-warm-gray max-w-xl mx-auto">
            Real reviews from real guests — locals, tourists, and late-night regulars
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {REVIEWS.map((review) => (
            <motion.div
              key={review.name}
              variants={cardVariants}
              className="rounded-2xl border border-stone/8 bg-white p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-warm-gray flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-stone">
                  {review.name}
                </span>
                <span className="text-[11px] font-medium text-warm-gray-light">
                  {review.source}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
