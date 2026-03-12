"use client";

import { motion } from "framer-motion";
import GalleryGrid from "@/components/gallery-grid";
import { OPENING_VIDEO_SRC } from "@/lib/gallery-data";

export default function GalleryPageClient() {
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
            <h1 className="font-heading text-4xl font-bold text-cream sm:text-5xl">
              Gallery
            </h1>
            <p className="mt-4 text-cream/50 max-w-xl mx-auto">
              A visual journey through Istanbul Mediterranean — our food, our
              space, and our community
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <GalleryGrid />

        {/* Opening Day Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="font-heading text-2xl font-bold text-stone mb-6 text-center">
            Grand Opening Day
          </h2>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl">
            <video
              src={OPENING_VIDEO_SRC}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-2xl"
              poster="/images/opening/82b5fcd3-00da-4860-8436-43ab54666547.JPG"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
