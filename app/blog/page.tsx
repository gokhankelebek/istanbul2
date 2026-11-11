import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
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
      <div className="min-h-screen bg-white pb-20">
        <PageHeader
          eyebrow="From the kitchen & Fremont Street"
          title="Blog"
          subtitle="Opening updates, Turkish food guides, and what's cooking at Istanbul Mediterranean 2 in Downtown Las Vegas."
        />

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
                    className="group block overflow-hidden rounded-[20px] border border-stone-200 bg-white transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(28,25,23,0.4)]"
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
                        className="text-xs font-bold uppercase tracking-[0.08em] text-crimson"
                      >
                        {formatDate(post.date)}
                      </time>
                      <h2 className="mt-2 font-heading text-xl font-bold text-stone transition-colors group-hover:text-crimson">
                        {post.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-500">
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
