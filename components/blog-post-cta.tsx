import Link from "next/link";
import { Phone, ExternalLink } from "lucide-react";
import { LINKS, ORDER_ONLINE_COPY, RESTAURANT } from "@/lib/constants";

export default function BlogPostCta({
  variant = "stone",
}: {
  variant?: "stone" | "cream";
}) {
  const tel = RESTAURANT.phone.replace(/[^0-9]/g, "");
  const chip =
    variant === "stone"
      ? "border-cream/20 bg-cream/10 text-cream backdrop-blur-sm"
      : "border-stone/15 bg-white text-stone shadow-sm";

  return (
    <div
      className={`rounded-2xl border px-5 py-5 sm:px-8 sm:py-6 ${chip}`}
      role="region"
      aria-label="Reserve, visit, or order"
    >
      <p
        className={`text-center text-sm font-semibold leading-relaxed sm:text-base ${
          variant === "stone" ? "text-cream/95" : "text-stone"
        }`}
      >
        <a
          href={LINKS.orderOnline}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 font-bold underline-offset-2 ${
            variant === "stone"
              ? "text-gold hover:text-gold-light"
              : "text-crimson hover:text-crimson-light"
          }`}
          aria-label={ORDER_ONLINE_COPY.ariaLabel}
        >
          {ORDER_ONLINE_COPY.label}
          <ExternalLink size={14} aria-hidden />
        </a>
        <span
          className={`mx-2 sm:mx-3 ${
            variant === "stone" ? "text-cream/40" : "text-stone/35"
          }`}
        >
          ·
        </span>
        <Link
          href="/menu"
          className={`font-medium underline underline-offset-2 ${
            variant === "stone"
              ? "text-gold hover:text-gold-light"
              : "text-crimson hover:text-crimson-light"
          }`}
        >
          Full menu
        </Link>
        <span
          className={`mx-2 sm:mx-3 ${
            variant === "stone" ? "text-cream/40" : "text-stone/35"
          }`}
        >
          ·
        </span>
        Visit us{" "}
        <span
          className={`font-medium ${
            variant === "stone" ? "text-cream" : "text-stone"
          }`}
        >
          {RESTAURANT.address}
        </span>
      </p>
      <p
        className={`mt-3 text-center text-xs sm:text-sm ${
          variant === "stone" ? "text-cream/70" : "text-warm-gray"
        }`}
      >
        Open daily{" "}
        <span className="font-semibold">
          10 AM – 2 AM (5 AM Fri–Sat)
        </span>{" "}
        ·{" "}
        <a
          href={`tel:${tel}`}
          className={`inline-flex items-center gap-1 font-semibold ${
            variant === "stone"
              ? "text-gold hover:text-gold-light"
              : "text-crimson hover:text-crimson-light"
          }`}
        >
          <Phone size={14} className="shrink-0" aria-hidden />
          {RESTAURANT.phone}
        </a>
      </p>
    </div>
  );
}
