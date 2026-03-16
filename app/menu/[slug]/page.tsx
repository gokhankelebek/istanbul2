import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllMenuItems,
  getMenuItemBySlug,
  buildMenuItemJsonLd,
} from "@/lib/menu-utils";
import MenuItemPage from "@/components/menu-item-page";
import BreadcrumbJsonLd from "@/components/breadcrumb-json-ld";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllMenuItems().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getMenuItemBySlug(slug);
  if (!entry) return {};

  const { item, category } = entry;
  const title = `${item.name} — ${item.price} | Istanbul Mediterranean 2`;
  const description =
    item.description ||
    `Try ${item.name} at Istanbul Mediterranean 2, Downtown Las Vegas. 100% Halal.`;

  return {
    title,
    description,
    keywords: [
      item.name,
      `${item.name} Las Vegas`,
      `${item.name} Halal`,
      category.title,
      "Turkish food Las Vegas",
      "Halal restaurant Las Vegas",
      "Istanbul Mediterranean",
      "Fremont Street food",
    ],
    openGraph: {
      title,
      description,
      url: `https://www.istanbul2.com/menu/${slug}`,
      siteName: "Istanbul Mediterranean 2",
      locale: "en_US",
      type: "website",
      ...(item.image
        ? {
            images: [
              {
                url: item.image.startsWith("http")
                  ? item.image
                  : `https://www.istanbul2.com${item.image}`,
                width: 800,
                height: 600,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(item.image
        ? {
            images: [
              item.image.startsWith("http")
                ? item.image
                : `https://www.istanbul2.com${item.image}`,
            ],
          }
        : {}),
    },
    alternates: { canonical: `/menu/${slug}` },
  };
}

export default async function MenuItemRoute({ params }: Props) {
  const { slug } = await params;
  const entry = getMenuItemBySlug(slug);
  if (!entry) notFound();

  const jsonLd = buildMenuItemJsonLd(entry);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
          { name: entry.item.name, path: `/menu/${slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MenuItemPage entry={entry} />
    </>
  );
}
