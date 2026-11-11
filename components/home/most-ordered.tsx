import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { LINKS } from "@/lib/constants";
import { MOST_ORDERED } from "@/lib/home-data";

export default function MostOrdered() {
  return (
    <section id="most-ordered" className="mx-auto flex max-w-7xl flex-col gap-7 px-5 pb-16 sm:pb-20 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-crimson">Most ordered</span>
          <h2 className="font-heading text-[34px] font-bold leading-none text-stone sm:text-5xl">
            What Fremont orders at 2 AM
          </h2>
        </div>
        <Link href="/menu" className="text-[15px] font-semibold text-crimson hover:text-crimson-dark">
          See the full menu →
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
        {MOST_ORDERED.map((d) => (
          <article
            key={d.name}
            className="flex flex-col overflow-hidden rounded-[20px] border border-stone-200 bg-white transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(28,25,23,0.4)]"
          >
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image
                src={d.image}
                alt={d.name}
                fill
                sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              {d.tag && (
                <span className="absolute left-3 top-3 rounded-full bg-stone px-2.5 py-1.5 text-xs font-semibold text-white">
                  {d.tag}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1.5 px-[18px] pb-[18px] pt-4">
              <h3 className="font-body text-[17px] font-bold leading-snug text-stone">
                {d.href ? (
                  <Link href={d.href} className="hover:text-crimson">
                    {d.name}
                  </Link>
                ) : (
                  d.name
                )}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-stone-500">{d.description}</p>
              <div className="mt-2.5 flex items-center justify-between">
                <span className="text-[17px] font-bold text-stone">{d.price}</span>
                <a
                  href={LINKS.orderOnline}
                  aria-label={`Order ${d.name}`}
                  className="flex h-11 items-center gap-1.5 rounded-full bg-stone px-[18px] text-sm font-semibold text-white transition-colors hover:bg-crimson"
                >
                  <Plus className="h-4 w-4" strokeWidth={2.6} aria-hidden="true" />
                  Order
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
