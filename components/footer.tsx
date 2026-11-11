import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Instagram, MapPin, Phone, Rss } from "lucide-react";
import {
  RESTAURANT,
  HOURS,
  LINKS,
  NAV_ITEMS,
  FOOTER_SEO_LINKS,
  FOOTER_DINING_LINKS,
  ORDER_ONLINE_COPY,
} from "@/lib/constants";

const REVIEW_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ?? "https://g.page/r/Cak2OTKFBTxcEAE/review";

const heading = "mb-4 font-heading text-sm font-semibold uppercase tracking-[0.08em] text-white";
const link = "text-sm text-stone-300 transition-colors hover:text-white";

export default function Footer() {
  const tel = `tel:+1${RESTAURANT.phone.replace(/[^0-9]/g, "")}`;

  return (
    <footer className="bg-stone text-stone-300">
      {/* Order band */}
      <div className="border-b border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-2">
            <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-gold">
              Open late, every night
            </span>
            <p className="font-heading text-3xl font-bold leading-none text-white sm:text-4xl">
              Hungry? Your döner is a few taps away.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={LINKS.orderOnline}
              aria-label={ORDER_ONLINE_COPY.ariaLabel}
              className="flex h-[52px] items-center rounded-full bg-crimson px-7 font-bold text-white transition-colors hover:bg-crimson-light"
            >
              {ORDER_ONLINE_COPY.label}
            </a>
            <a
              href={tel}
              className="flex h-[52px] items-center gap-2 rounded-full border border-stone-600 px-6 font-semibold text-white transition-colors hover:border-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {RESTAURANT.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo-istanbul.webp" alt="" width={44} height={44} className="h-11 w-11" />
              <span className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                Istanbul Mediterranean 2
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-stone-400">
              Turkish street food and family recipes, 100% Zabiha Halal. Inside the Inspire
              building on Fremont Street.
            </p>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
            >
              <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
              @istanbul_mediterranean
            </a>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="flex flex-col gap-3">
            <h2 className={heading}>Explore</h2>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className={link}>
                {item.label}
              </Link>
            ))}
            <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer" className={`${link} inline-flex items-center gap-1`}>
              Leave a review <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
            <Link href="/feed.xml" className={`${link} inline-flex items-center gap-1.5`}>
              <Rss className="h-3.5 w-3.5" aria-hidden="true" />
              Blog RSS
            </Link>
          </nav>

          {/* Hours */}
          <div className="flex flex-col">
            <h2 className={heading}>Hours</h2>
            <dl className="flex flex-col gap-3">
              {HOURS.map((h) => (
                <div key={h.days} className="rounded-2xl bg-stone-800/70 px-4 py-3">
                  <dt className="text-[13px] text-stone-400">{h.days}</dt>
                  <dd className="mt-0.5 font-heading text-lg font-semibold text-white">{h.hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visit */}
          <div className="flex flex-col gap-3">
            <h2 className={heading}>Visit us</h2>
            <a href={LINKS.googleMaps} target="_blank" rel="noopener noreferrer" className={`${link} flex items-start gap-2`}>
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-crimson" aria-hidden="true" />
              <span>{RESTAURANT.address}</span>
            </a>
            <a href={tel} className={`${link} flex items-center gap-2`}>
              <Phone className="h-4 w-4 flex-none text-crimson" aria-hidden="true" />
              {RESTAURANT.phone}
            </a>
            <a href={`mailto:${RESTAURANT.cateringEmail}`} className={link}>
              {RESTAURANT.cateringEmail}
            </a>
          </div>
        </div>

        {/* SEO links */}
        <div className="mt-12 grid gap-8 border-t border-stone-800 pt-8 md:grid-cols-2">
          <div>
            <h2 className={heading}>Dining in Las Vegas</h2>
            <nav aria-label="Dining in Las Vegas" className="flex flex-wrap gap-x-5 gap-y-2">
              {FOOTER_DINING_LINKS.map((item) => (
                <Link key={item.href} href={item.href} className={link}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className={heading}>Discover our dishes</h2>
            <nav aria-label="Our dishes" className="flex flex-wrap gap-x-5 gap-y-2">
              {FOOTER_SEO_LINKS.map((item) => (
                <Link key={item.href} href={item.href} className={link}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-stone-800 pt-6 text-xs text-stone-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Istanbul Mediterranean 2. All rights reserved.</p>
          <p>
            Also visit us at{" "}
            <a href={LINKS.stripWebsite} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white">
              Grand Bazaar Shops, Las Vegas Strip
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
