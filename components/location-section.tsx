"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { RESTAURANT, HOURS, LINKS } from "@/lib/constants";

const detailVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const detailsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

export default function LocationSection() {
  return (
    <section className="bg-stone py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 18,
              mass: 1,
            }}
          >
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              Find Us on Fremont
            </h2>
            <p className="mt-4 text-cream/50 max-w-lg">
              Located in the heart of the Fremont East District, inside the
              historic Inspire building at 505 Fremont Street.
            </p>

            <motion.div
              className="mt-10 space-y-6"
              variants={detailsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <motion.div
                className="flex items-start gap-4"
                variants={detailVariants}
                transition={{ type: "spring", stiffness: 100, damping: 14 }}
              >
                <motion.div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/15 text-crimson"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <MapPin size={20} />
                </motion.div>
                <div>
                  <h3 className="text-sm font-semibold text-cream">Address</h3>
                  <p className="text-sm text-cream/60">{RESTAURANT.address}</p>
                  <p className="text-xs text-cream/40 mt-1">
                    {RESTAURANT.neighborhood}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                variants={detailVariants}
                transition={{ type: "spring", stiffness: 100, damping: 14 }}
              >
                <motion.div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/15 text-crimson"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Clock size={20} />
                </motion.div>
                <div>
                  <h3 className="text-sm font-semibold text-cream">Hours</h3>
                  {HOURS.map((h) => (
                    <p key={h.days} className="text-sm text-cream/60">
                      {h.days}: {h.hours}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                variants={detailVariants}
                transition={{ type: "spring", stiffness: 100, damping: 14 }}
              >
                <motion.div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/15 text-crimson"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Phone size={20} />
                </motion.div>
                <div>
                  <h3 className="text-sm font-semibold text-cream">Phone</h3>
                  <a
                    href={`tel:${RESTAURANT.phone}`}
                    className="text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {RESTAURANT.phone}
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href={LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-cream transition-all hover:bg-crimson-light hover:shadow-lg hover:shadow-crimson/25 active:scale-95"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 18,
              mass: 1,
              delay: 0.15,
            }}
            className="overflow-hidden rounded-2xl border border-cream/10"
          >
            <iframe
              title="Istanbul Mediterranean Restaurant-2 Location"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=505+Fremont+Street,Las+Vegas,NV+89101&zoom=16"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
