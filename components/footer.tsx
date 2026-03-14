import Link from "next/link";
import { Instagram, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { RESTAURANT, HOURS, LINKS, NAV_ITEMS, FOOTER_SEO_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-stone text-cream/80 turkish-pattern-footer overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-xl font-bold text-cream mb-4">
              Istanbul Mediterranean 2
            </h3>
            <p className="text-sm leading-relaxed text-cream/60 mb-6">
              The Heart of Istanbul, Now in Downtown Las Vegas. Authentic Turkish
              cuisine, 100% Zabiha Halal certified.
            </p>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
            >
              <Instagram size={18} />
              @istanbul_mediterranean
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:text-cream transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={LINKS.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-cream transition-colors inline-flex items-center gap-1"
              >
                Order Online <ExternalLink size={12} />
              </a>
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Hours
            </h4>
            <div className="space-y-3">
              {HOURS.map((h) => (
                <div key={h.days} className="flex items-start gap-2 text-sm">
                  <Clock size={14} className="mt-0.5 shrink-0 text-cream/40" />
                  <div>
                    <div className="text-cream/90">{h.days}</div>
                    <div className="text-cream/50">{h.hours}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Visit Us
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-cream transition-colors"
              >
                <MapPin size={14} className="mt-0.5 shrink-0 text-cream/40" />
                <span>{RESTAURANT.address}</span>
              </a>
              <a
                href={`tel:${RESTAURANT.phone}`}
                className="flex items-center gap-2 hover:text-cream transition-colors"
              >
                <Phone size={14} className="shrink-0 text-cream/40" />
                {RESTAURANT.phone}
              </a>
            </div>
          </div>
        </div>

        {/* SEO / Discover pages */}
        <div className="mt-12 border-t border-cream/10 pt-8">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
            Discover Our Dishes
          </h4>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {FOOTER_SEO_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-cream/70 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cream/10 pt-8">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Istanbul Mediterranean 2.
            All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            Also visit us at{" "}
            <a
              href={LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              Grand Bazaar Shops, Las Vegas Strip
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
