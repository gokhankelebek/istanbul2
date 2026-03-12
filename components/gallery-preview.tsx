"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/gallery-data";

const PREVIEW_IMAGES = GALLERY_IMAGES.slice(0, 6);

export default function GalleryPreview() {
  return (
    <section className="relative bg-cream py-20 lg:py-28 turkish-pattern-subtle">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {PREVIEW_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
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
        </div>

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
