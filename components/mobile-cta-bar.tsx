"use client";

import { Phone, MapPin, ShoppingBag } from "lucide-react";
import { RESTAURANT, LINKS, ORDER_ONLINE_COPY } from "@/lib/constants";

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-stone/95 backdrop-blur-xl border-t border-cream/10 px-2 py-2 safe-area-bottom">
        <div className="grid grid-cols-3 gap-1.5">
          <a
            href={`tel:${RESTAURANT.phone.replace(/[^0-9]/g, "")}`}
            className="flex flex-col items-center gap-1 rounded-xl py-2.5 text-cream/80 transition-colors active:bg-cream/10"
          >
            <Phone size={20} className="text-gold" />
            <span className="text-[11px] font-semibold">Call</span>
          </a>
          <a
            href={LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 rounded-xl py-2.5 text-cream/80 transition-colors active:bg-cream/10"
          >
            <MapPin size={20} className="text-gold" />
            <span className="text-[11px] font-semibold">Directions</span>
          </a>
          <a
            href={LINKS.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-crimson py-2 px-1 text-cream transition-colors active:bg-crimson-light"
            aria-label={ORDER_ONLINE_COPY.ariaLabel}
          >
            <ShoppingBag size={20} />
            <span className="text-[10px] font-bold leading-tight text-center">
              {ORDER_ONLINE_COPY.labelShort}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
