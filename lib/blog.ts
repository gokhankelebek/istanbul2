import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogFrontmatter, BlogPost } from "@/lib/blog-types";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

/** Top-level app routes that should not be used as a blog slug (safety). */
const RESERVED_SLUGS = new Set([
  "api",
  "_next",
  "menu",
  "gallery",
  "our-story",
  "turkish-breakfast",
  "robots.txt",
  "sitemap.xml",
  "feed.xml",
]);

export function includeDrafts(): boolean {
  if (process.env.NODE_ENV !== "production") return true;
  return process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true";
}

function parseAuthor(fm: BlogFrontmatter): { name: string; url?: string } {
  const a = fm.author;
  if (!a) return { name: "Istanbul Mediterranean 2" };
  if (typeof a === "string") return { name: a };
  return { name: a.name, url: a.url };
}

function isValidFrontmatter(data: unknown): data is BlogFrontmatter {
  if (!data || typeof data !== "object") return false;
  const o = data as Record<string, unknown>;
  return (
    typeof o.title === "string" &&
    typeof o.description === "string" &&
    typeof o.date === "string" &&
    typeof o.heroImage === "string" &&
    typeof o.heroAlt === "string"
  );
}

function readPostFile(filePath: string, slug: string): BlogPost | null {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  if (!isValidFrontmatter(data)) {
    console.warn(`[blog] Skipping invalid frontmatter: ${filePath}`);
    return null;
  }
  const fm = data as BlogFrontmatter;
  if (RESERVED_SLUGS.has(slug)) {
    console.warn(`[blog] Reserved slug skipped: ${slug}`);
    return null;
  }
  const stat = fs.statSync(filePath);
  const updated = fm.updated ? new Date(fm.updated) : stat.mtime;
  const published = new Date(fm.date);
  const lastModified =
    updated.getTime() > published.getTime() ? updated : published;

  return {
    ...fm,
    slug,
    body: content.trim(),
    lastModified,
  };
}

function listMdxFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
}

export function getAllPosts(): BlogPost[] {
  const files = listMdxFiles();
  const posts: BlogPost[] = [];
  for (const file of files) {
    const slug = file.replace(/\.mdx$/i, "");
    const full = path.join(CONTENT_DIR, file);
    const post = readPostFile(full, slug);
    if (!post) continue;
    if (post.draft && !includeDrafts()) continue;
    posts.push(post);
  }
  posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  if (RESERVED_SLUGS.has(slug)) return undefined;
  const full = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(full)) return undefined;
  const post = readPostFile(full, slug);
  if (!post) return undefined;
  if (post.draft && !includeDrafts()) return undefined;
  return post;
}

export function getBlogStaticParams(): { slug: string }[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function getAuthorForMeta(post: BlogPost) {
  return parseAuthor(post);
}

export function getAbsolutePostUrl(slug: string): string {
  return `https://www.istanbul2.com/blog/${slug}`;
}
