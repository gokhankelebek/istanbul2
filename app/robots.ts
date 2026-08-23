import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The image optimizer is not content worth crawling, and each variant is
      // a billable edge request. Pages still expose their images normally.
      disallow: ["/_next/image"],
    },
    sitemap: "https://www.istanbul2.com/sitemap.xml",
  };
}
