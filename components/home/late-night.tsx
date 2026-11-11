import Image from "next/image";
import { Clock, House, ShieldCheck } from "lucide-react";
import { HOURS, LINKS } from "@/lib/constants";

export function LateNight() {
  return (
    <section id="late-night" className="bg-stone text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-12 px-5 py-16 sm:py-20 lg:px-8">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-gold">Late-night kitchen</span>
          <h2 className="font-heading text-4xl font-bold leading-none sm:text-[56px]">
            Kitchen&rsquo;s open after the Strip goes quiet.
          </h2>
          <p className="max-w-[480px] text-[17px] leading-relaxed text-stone-300">
            For the hospitality crews, artists and night owls of Downtown: a real, hot, halal
            meal at any hour we&rsquo;re open.
          </p>
          <dl className="grid max-w-[480px] grid-cols-2 gap-3">
            {HOURS.map((h, i) => (
              <div key={h.days} className="rounded-2xl bg-stone-800 p-[18px]">
                <dt className="text-[13px] text-stone-400">{h.days}</dt>
                <dd className={`mt-1.5 font-heading text-2xl font-semibold ${i === 1 ? "text-gold" : ""}`}>
                  {h.hours}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-3">
            <a
              href={`${LINKS.orderOnline}#delivery`}
              className="flex h-[52px] items-center rounded-full bg-gold px-6 font-bold text-stone transition-colors hover:bg-gold-light"
            >
              Order late-night delivery
            </a>
            <a
              href={LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[52px] items-center rounded-full border border-stone-600 px-6 font-semibold text-white transition-colors hover:border-white"
            >
              Directions
            </a>
          </div>
        </div>
        <div className="grid min-w-0 flex-[1_1_420px] grid-cols-2 gap-3">
          <div className="relative col-span-2 h-[260px] overflow-hidden rounded-[20px] sm:h-[300px]">
            <Image
              src="/images/2026-march/fremont/fremont-exterior-night-505.webp"
              alt="Istanbul 2 storefront at 505 Fremont Street at night"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[160px] overflow-hidden rounded-[20px] sm:h-[200px]">
            <Image
              src="/images/2026-march/food/lahmacun-pide-spread.webp"
              alt="Lahmacun and pide spread"
              fill
              sizes="(min-width: 1024px) 300px, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[160px] overflow-hidden rounded-[20px] sm:h-[200px]">
            <Image
              src="/images/menu/kunefe.webp"
              alt="Künefe, served hot"
              fill
              sizes="(min-width: 1024px) 300px, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  {
    Icon: ShieldCheck,
    title: "100% Zabiha Halal",
    body: "Hand-slaughtered meats, no pork or alcohol in any preparation, a fully separated kitchen.",
  },
  {
    Icon: House,
    title: "Chef Adem’s family recipes",
    body: "Recipes handed down through generations, from the Grand Bazaar on the Strip to Fremont East.",
  },
  {
    Icon: Clock,
    title: "Kahvaltı to late-night pide",
    body: "Turkish breakfast from 10 AM, döner and kebab plates all day, pide after a night out.",
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-9 px-5 py-16 sm:py-20 lg:px-8">
      <h2 className="max-w-[720px] font-heading text-[34px] font-bold leading-none text-stone sm:text-5xl">
        Turkish hospitality, even when it arrives in a bag.
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {REASONS.map(({ Icon, title, body }) => (
          <div key={title} className="flex flex-col gap-2.5 rounded-[20px] border border-stone-200 bg-white p-6">
            <Icon className="h-7 w-7 text-crimson" aria-hidden="true" />
            <h3 className="font-body text-lg font-bold text-stone">{title}</h3>
            <p className="text-[15px] leading-relaxed text-stone-light">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
