import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import {
  getAllPosts,
  getPostBySlug,
  getBlogStaticParams,
  getAbsolutePostUrl,
  getAuthorForMeta,
} from "@/lib/blog";
import BreadcrumbJsonLd from "@/components/breadcrumb-json-ld";
import BlogPostingJsonLd from "@/components/blog-posting-json-ld";
import { mdxComponents } from "@/components/mdx/mdx-components";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getBlogStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonicalPath = post.canonical ?? `/blog/${slug}`;
  const url = getAbsolutePostUrl(slug);
  const ogImage = post.heroImage.startsWith("http")
    ? post.heroImage
    : `https://www.istanbul2.com${post.heroImage}`;

  return {
    title: `${post.title} | Istanbul Mediterranean 2 Blog`,
    description: post.description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      siteName: "Istanbul Mediterranean 2",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const author = getAuthorForMeta(post);
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <BlogPostingJsonLd post={post} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ]}
      />
      <article className="min-h-screen bg-cream pt-24 pb-20">
        <header className="border-b border-stone/10 bg-stone pb-12 pt-10 lg:pb-16 lg:pt-14">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <Link
              href="/blog"
              className="text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light"
            >
              ← All posts
            </Link>
            <p className="mt-4 text-sm text-cream/60">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.updated ? (
                <>
                  {" · "}
                  <span>Updated {formatDate(post.updated)}</span>
                </>
              ) : null}
              {" · "}
              <span>{author.name}</span>
            </p>
            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-cream/70">
              {post.description}
            </p>
            {post.tags && post.tags.length > 0 ? (
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-cream/20 px-3 py-1 text-xs font-medium text-cream/80"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="relative mx-auto mt-10 max-w-5xl px-5 lg:px-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-cream/10 shadow-xl">
              <Image
                src={post.heroImage}
                alt={post.heroAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 py-12 lg:px-8 lg:py-16">
          <MDXRemote
            source={post.body}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [
                    rehypeAutolinkHeadings,
                    {
                      behavior: "wrap",
                      properties: {
                        className: ["anchor"],
                      },
                    },
                  ],
                ],
              },
            }}
          />
        </div>

        {related.length > 0 ? (
          <section className="border-t border-stone/10 bg-stone/5 py-14">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <h2 className="font-heading text-2xl font-bold text-stone">
                More from the blog
              </h2>
              <ul className="mt-8 grid gap-6 sm:grid-cols-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group block rounded-xl border border-stone/10 bg-white p-4 transition-shadow hover:shadow-md"
                    >
                      <h3 className="font-heading font-semibold text-stone group-hover:text-crimson">
                        {p.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-warm-gray">
                        {p.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </article>
    </>
  );
}
