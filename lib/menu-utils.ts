import { MENU_CATEGORIES, type MenuItem, type MenuCategory } from "./menu-data";

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .replace(/-+/g, "-");
}

/**
 * Menu items that already have dedicated rich SEO pages at /[slug]
 * or /turkish-breakfast. Exclude these from the slim /menu/[slug] route.
 */
const EXCLUDED_ITEM_NAMES = new Set([
  "Lahmacun",
  "Iskender Kebab",
  "Menemen",
  "Gozleme",
  "Simit",
  "Su Borek",
  "Kunefe",
  "Kunefe Pistachio",
  "Rice Pudding",
  "Turkish Tea Cup",
  "Tea Thermos",
  "Turkish Coffee",
]);

export interface MenuItemWithMeta {
  item: MenuItem;
  category: MenuCategory;
  slug: string;
}

export function getAllMenuItems(): MenuItemWithMeta[] {
  const seen = new Set<string>();
  const results: MenuItemWithMeta[] = [];

  for (const category of MENU_CATEGORIES) {
    for (const item of category.items) {
      if (EXCLUDED_ITEM_NAMES.has(item.name)) continue;

      const slug = slugify(item.name);
      if (seen.has(slug)) continue;
      seen.add(slug);

      results.push({ item, category, slug });
    }
  }

  return results;
}

export function getMenuItemBySlug(
  slug: string
): MenuItemWithMeta | undefined {
  return getAllMenuItems().find((entry) => entry.slug === slug);
}

export function getAllMenuItemSlugs(): string[] {
  return getAllMenuItems().map((entry) => entry.slug);
}

const RICH_PAGE_NAME_TO_SLUG: Record<string, string> = {
  "Lahmacun": "/lahmacun",
  "Iskender Kebab": "/iskender-kebab",
  "Doner & Cheese Pide": "/turkish-pide",
  "Sujuk & Cheese Pide": "/turkish-pide",
  "Menemen": "/menemen",
  "Gozleme": "/gozleme",
  "Simit": "/simit",
  "Su Borek": "/su-borek",
  "Kunefe": "/kunefe",
  "Kunefe Pistachio": "/kunefe",
  "Rice Pudding": "/rice-pudding",
  "Turkish Tea Cup": "/turkish-tea",
  "Tea Thermos": "/turkish-tea",
  "Turkish Coffee": "/turkish-coffee",
};

export function getMenuItemHref(itemName: string): string {
  if (RICH_PAGE_NAME_TO_SLUG[itemName]) {
    return RICH_PAGE_NAME_TO_SLUG[itemName];
  }
  return `/menu/${slugify(itemName)}`;
}

export function buildMenuItemJsonLd(entry: MenuItemWithMeta) {
  const priceNum = entry.item.price.replace(/[^0-9.]/g, "");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.istanbul2.com/menu/${entry.slug}`,
        name: `${entry.item.name} | Istanbul Mediterranean 2`,
        description:
          entry.item.description ||
          `${entry.item.name} at Istanbul Mediterranean 2, Downtown Las Vegas.`,
        url: `https://www.istanbul2.com/menu/${entry.slug}`,
        isPartOf: { "@id": "https://www.istanbul2.com/#website" },
      },
      {
        "@type": "Restaurant",
        "@id": "https://www.istanbul2.com/#restaurant-fremont",
        name: "Istanbul Mediterranean Restaurant-2 (Halal)",
        servesCuisine: ["Turkish", "Mediterranean", "Halal"],
        hasMenu: {
          "@type": "Menu",
          hasMenuSection: {
            "@type": "MenuSection",
            name: entry.category.title,
            hasMenuItem: {
              "@type": "MenuItem",
              name: entry.item.name,
              description: entry.item.description || entry.item.name,
              ...(priceNum
                ? {
                    offers: {
                      "@type": "Offer",
                      price: priceNum,
                      priceCurrency: "USD",
                    },
                  }
                : {}),
              suitableForDiet: "https://schema.org/HalalDiet",
            },
          },
        },
      },
    ],
  };
}
