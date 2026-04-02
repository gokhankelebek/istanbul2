import type { MetadataRoute } from "next";
import { ALL_DISH_SLUGS } from "@/lib/dish-pages-data";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.istanbul2.com";
  const siteLastModified = new Date("2026-03-31T00:00:00.000Z");
  const blogPosts = getAllPosts();

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/turkish-breakfast`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/halal-restaurant-las-vegas`,
      lastModified: siteLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/late-night-food-downtown-las-vegas`,
      lastModified: siteLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/doner-kebab-las-vegas`,
      lastModified: siteLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogPosts[0]?.lastModified ?? siteLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
  ];

  const dishPages: MetadataRoute.Sitemap = ALL_DISH_SLUGS.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: siteLastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...corePages, ...dishPages, ...blogPages];
}
