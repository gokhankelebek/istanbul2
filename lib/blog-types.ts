export type BlogAuthor = string | { name: string; url?: string };

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
  /** Override canonical path (default /blog/[slug]) */
  canonical?: string;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  /** Raw MDX source */
  body: string;
  /** For sitemap */
  lastModified: Date;
}
