"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { RESTAURANT, HOURS, LINKS } from "@/lib/constants";

export default function LocationSection() {
  return (
    <section className="bg-stone py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              Find Us on Fremont
            </h2>
            <p className="mt-4 text-cream/50 max-w-lg">
              Located in the heart of the Fremont East District, inside the
              historic Inspire building at 505 Fremont Street.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/15 text-crimson">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-cream">Address</h3>
                  <p className="text-sm text-cream/60">{RESTAURANT.address}</p>
                  <p className="text-xs text-cream/40 mt-1">
                    {RESTAURANT.neighborhood}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/15 text-crimson">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-cream">Hours</h3>
                  {HOURS.map((h) => (
                    <p key={h.days} className="text-sm text-cream/60">
                      {h.days}: {h.hours}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/15 text-crimson">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-cream">Phone</h3>
                  <a
                    href={`tel:${RESTAURANT.phone}`}
                    className="text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {RESTAURANT.phone}
                  </a>
                </div>
              </div>
            </div>

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

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="overflow-hidden rounded-2xl border border-cream/10"
          >
            <iframe
              title="Istanbul Mediterranean Restaurant-2 Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.5!2d-115.1441!3d36.1711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s505+Fremont+Street+Las+Vegas+NV!5e0!3m2!1sen!2sus!4v1700000000000"
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
