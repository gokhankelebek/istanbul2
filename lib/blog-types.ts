export type BlogAuthor = string | { name: string; url?: string };

/** FAQ entries for §7-rich posts (renders FAQs + FAQPage JSON-LD). */
export interface BlogPostFaqItem {
  question: string;
  answer: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  /** ISO 8601 date string */
  date: string;
  updated?: string;
  author?: BlogAuthor;
  /** Path under public/, e.g. /images/blog/foo.webp */
  heroImage: string;
  heroAlt: string;
  tags?: string[];
  draft?: boolean;
  /** Editorial content pillar (SEO plan §5: 1–5). Not rendered on site. */
  pillar?: string;
  /** Override canonical path (default /blog/[slug]) */
  canonical?: string;
  /** Optional FAQ block (recommended 4–6 items for FAQ schema). */
  faqs?: BlogPostFaqItem[];
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  /** Raw MDX source */
  body: string;
  /** For sitemap */
  lastModified: Date;
}
