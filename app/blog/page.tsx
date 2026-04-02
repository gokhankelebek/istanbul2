import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BreadcrumbJsonLd from "@/components/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Blog | Istanbul Mediterranean 2",
  description:
    "News, stories, and guides from Istanbul Mediterranean 2 on Fremont Street — Halal Turkish food in Downtown Las Vegas.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Istanbul Mediterranean 2",
    description:
      "News and stories from Istanbul 2 — Turkish restaurant on Fremont Street, Las Vegas.",
    url: "https://www.istanbul2.com/blog",
    siteName: "Istanbul Mediterranean 2",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Istanbul Mediterranean 2",
    description:
      "News and stories from Istanbul 2 — Turkish restaurant on Fremont Street, Las Vegas.",
  },
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <div className="min-h-screen bg-cream pt-24 pb-20">
        <div className="bg-stone py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              From the kitchen &amp; Fremont Street
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold text-cream sm:text-5xl">
              Blog
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-cream/65">
              Opening updates, Turkish food guides, and what&apos;s cooking at
              Istanbul Mediterranean 2 in Downtown Las Vegas.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-warm-gray">
              New posts are coming soon. Check back shortly.
            </p>
          ) : (
            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-stone/10 bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone/10">
                      <Image
                        src={post.heroImage}
                        alt={post.heroAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <time
                        dateTime={post.date}
                        className="text-xs font-medium uppercase tracking-wider text-gold"
                      >
                        {formatDate(post.date)}
                      </time>
                      <h2 className="mt-2 font-heading text-xl font-bold text-stone transition-colors group-hover:text-crimson">
                        {post.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-warm-gray">
                        {post.description}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-crimson">
                        Read more
                        <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
