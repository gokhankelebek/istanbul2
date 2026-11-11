"use client";

import PageHeader from "@/components/page-header";
import { motion } from "framer-motion";
import GalleryGrid from "@/components/gallery-grid";
import { OPENING_VIDEO_SRC } from "@/lib/gallery-data";

export default function GalleryPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Gallery · Fremont Street"
        title="Turkish restaurant & dining room"
        subtitle="Step inside Istanbul 2 on Fremont Street: the open kitchen, living green walls, handmade Turkish dishes and fresh-baked baklava."
        image={{ src: "/images/2026-march/fremont/fremont-dining-room-wide.webp", alt: "The dining room at Istanbul 2 on Fremont Street" }}
      />

      {/* Gallery grid */}
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl mb-12 text-center text-stone-light leading-relaxed">
          <p>
            Our Turkish restaurant on Fremont Street brings the warmth of Istanbul to Downtown Las Vegas. The gallery captures our dining room with living green walls, the open kitchen where doner and pide are prepared, and the dishes that make us a favorite for Halal Turkish food in Las Vegas.
          </p>
        </div>
        <GalleryGrid />

        {/* Opening Day Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="font-heading text-4xl font-bold text-stone mb-6 text-center">
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
