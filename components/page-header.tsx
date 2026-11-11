import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Page header in the order-first design: white ground, red eyebrow, bold Oswald
 * title, optional rounded photo on the right. Sits under the fixed navbar.
 */
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
  badges,
  children,
  note,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: { src: string; alt: string; priority?: boolean };
  badges?: string[];
  /** Call-to-action buttons */
  children?: ReactNode;
  /** Small print under the buttons */
  note?: ReactNode;
}) {
  return (
    <section data-ga-location="page_header" className="border-b border-stone-200 bg-white pt-[76px] sm:pt-[84px]">
      <div
        className={`mx-auto flex max-w-7xl flex-wrap items-center gap-10 px-5 lg:px-8 ${
          image ? "py-10 sm:py-14" : "py-12 sm:py-16"
        }`}
      >
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-stone-100 px-3 py-1.5 text-[13px] font-semibold text-stone-light"
                >
                  {b}
                </span>
              ))}
            </div>
          )}
          {eyebrow && (
            <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-crimson">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-[40px] font-bold leading-[1] text-stone sm:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-[560px] text-lg leading-relaxed text-stone-light">{subtitle}</p>
          )}
          {children && <div className="mt-1 flex flex-wrap gap-3">{children}</div>}
          {note && <p className="text-[13px] text-stone-500">{note}</p>}
        </div>
        {image && (
          <div className="relative h-[300px] min-w-0 flex-[1_1_400px] overflow-hidden rounded-[28px] bg-stone-100 sm:h-[420px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={image.priority ?? true}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}

/** Primary red button, matching the homepage order buttons. */
export const btnPrimary =
  "inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-crimson px-7 font-bold text-white transition-colors hover:bg-crimson-light";
/** Secondary outline button for light backgrounds. */
export const btnSecondary =
  "inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-stone-300 px-6 font-semibold text-stone transition-colors hover:border-stone hover:bg-stone-50";
