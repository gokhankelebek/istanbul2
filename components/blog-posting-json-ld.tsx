import type { BlogPost } from "@/lib/blog-types";
import { getAbsolutePostUrl, getAuthorForMeta } from "@/lib/blog";

export default function BlogPostingJsonLd({ post }: { post: BlogPost }) {
  const url = getAbsolutePostUrl(post.slug);
  const author = getAuthorForMeta(post);
  const imageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `https://www.istanbul2.com${post.heroImage}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.url ? { url: author.url } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "Istanbul Mediterranean Restaurant-2 (Halal)",
      logo: {
        "@type": "ImageObject",
        url: "https://www.istanbul2.com/images/logo-istanbul.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
