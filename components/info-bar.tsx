import { MapPin, Clock, Phone } from "lucide-react";
import { RESTAURANT, LINKS } from "@/lib/constants";

export default function InfoBar() {
  return (
    <div className="bg-stone text-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-5 py-4 text-sm sm:gap-10 lg:px-8">
        <a
          href={LINKS.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gold transition-colors"
        >
          <MapPin size={16} className="text-gold" />
          <span className="hidden sm:inline">505 Fremont Street, Las Vegas</span>
          <span className="sm:hidden">505 Fremont St</span>
        </a>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-gold" />
          <span>Open Daily from 10 AM</span>
        </div>
        <a
          href={`tel:${RESTAURANT.phone}`}
          className="flex items-center gap-2 hover:text-gold transition-colors"
        >
          <Phone size={16} className="text-gold" />
          <span>{RESTAURANT.phone}</span>
        </a>
        <span className="rounded-full bg-olive/20 px-3 py-1 text-xs font-semibold text-olive-light border border-olive/30">
          100% Zabiha Halal
        </span>
      </div>
    </div>
  );
}
