import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="relative bg-cream py-12 sm:py-16 lg:py-28 turkish-pattern-subtle overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between mb-8 sm:mb-14">
          <div>
            <h2 className="font-heading text-3xl font-bold text-stone sm:text-4xl">
              From Our Kitchen
            </h2>
            <p className="mt-4 text-warm-gray max-w-xl">
              Stories, guides, and the dishes behind them
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-crimson hover:text-crimson-light transition-colors"
          >
            Read the Blog <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-stone/8 bg-white transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.heroAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <time
                  dateTime={post.date}
                  className="text-xs font-medium uppercase tracking-wide text-warm-gray-light"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
                <h3 className="mt-2 font-heading text-lg font-bold text-stone leading-snug group-hover:text-crimson transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-warm-gray line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-crimson hover:text-crimson-light transition-colors sm:hidden"
        >
          Read the Blog <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
