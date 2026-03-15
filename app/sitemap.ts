import type { MetadataRoute } from "next";
import { ALL_DISH_SLUGS } from "@/lib/dish-pages-data";
import { getAllMenuItemSlugs } from "@/lib/menu-utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.istanbul2.com";

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/turkish-breakfast`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const dishPages: MetadataRoute.Sitemap = ALL_DISH_SLUGS.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const menuItemPages: MetadataRoute.Sitemap = getAllMenuItemSlugs().map(
    (slug) => ({
      url: `${baseUrl}/menu/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  return [...corePages, ...dishPages, ...menuItemPages];
}
