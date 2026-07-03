import Link from "next/link";
import { UtensilsCrossed, ArrowRight } from "lucide-react";
import { RESTAURANT } from "@/lib/constants";

export default function CateringBanner() {
  return (
    <section className="bg-crimson overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-12 sm:py-14 lg:flex-row lg:justify-between lg:px-8">
        <div className="flex items-start gap-4 text-center lg:text-left">
          <div className="hidden lg:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/10">
            <UtensilsCrossed size={22} className="text-gold" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-cream sm:text-3xl">
              Feeding a group in Las Vegas?
            </h2>
            <p className="mt-2 max-w-2xl text-cream/85">
              Doner packages, breakfast spreads, and party trays — 100% Zabiha
              Halal catering for offices, weddings, and events across the
              valley.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/catering"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-sm font-semibold text-crimson transition-all hover:bg-white hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            Explore Catering <ArrowRight size={16} />
          </Link>
          <a
            href={`mailto:${RESTAURANT.cateringEmail}`}
            className="text-sm font-medium text-cream/80 hover:text-cream transition-colors whitespace-nowrap"
          >
            {RESTAURANT.cateringEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
