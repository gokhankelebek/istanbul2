"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/gallery-data";

const PREVIEW_IMAGES = GALLERY_IMAGES.slice(0, 6);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const imageVariants = [
  { hidden: { opacity: 0, scale: 0.8, y: 40 }, visible: { opacity: 1, scale: 1, y: 0 } },
  { hidden: { opacity: 0, x: 60, rotate: 3 }, visible: { opacity: 1, x: 0, rotate: 0 } },
  { hidden: { opacity: 0, y: 60, scale: 0.85 }, visible: { opacity: 1, y: 0, scale: 1 } },
  { hidden: { opacity: 0, x: -60, rotate: -3 }, visible: { opacity: 1, x: 0, rotate: 0 } },
  { hidden: { opacity: 0, scale: 0.7, y: 50 }, visible: { opacity: 1, scale: 1, y: 0 } },
  { hidden: { opacity: 0, x: 40, y: 30 }, visible: { opacity: 1, x: 0, y: 0 } },
];

export default function GalleryPreview() {
  return (
    <section className="relative bg-cream py-20 lg:py-28 turkish-pattern-subtle overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
              Inside Istanbul 2
            </h2>
            <p className="mt-4 text-warm-gray max-w-xl">
              A glimpse into our space, our food, and our community
            </p>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-crimson hover:text-crimson-light transition-colors"
          >
            View Gallery <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3"
        >
          {PREVIEW_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              variants={imageVariants[i % imageVariants.length]}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 16,
                mass: 0.8,
              }}
              whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0
                  ? "col-span-2 row-span-2 aspect-square md:aspect-auto"
                  : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes={
                  i === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
            </motion.div>
          ))}
        </motion.div>

        <Link
          href="/gallery"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-crimson hover:text-crimson-light transition-colors sm:hidden"
        >
          View All Photos <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
