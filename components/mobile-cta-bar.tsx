"use client";

import { Phone, MapPin, ShoppingBag, Bike } from "lucide-react";
import { RESTAURANT, LINKS, ORDER_CHANNELS } from "@/lib/constants";

const CHANNEL_ICONS = {
  pickup: ShoppingBag,
  delivery: Bike,
} as const;

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-stone/95 backdrop-blur-xl border-t border-cream/10 px-2 py-2 safe-area-bottom">
        <div className="grid grid-cols-4 gap-1.5">
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
          {ORDER_CHANNELS.map((channel) => {
            const Icon = CHANNEL_ICONS[channel.key];
            return (
              <a
                key={channel.key}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-crimson py-2 px-1 text-cream transition-colors active:bg-crimson-light"
                aria-label={channel.ariaLabel}
              >
                <Icon size={20} />
                <span className="text-[10px] font-bold leading-tight text-center">
                  {channel.labelShort}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
