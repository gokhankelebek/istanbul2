import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllInStoreItems,
  getInStoreItemBySlug,
} from "@/lib/menu-utils";
import InStoreItem from "@/components/in-store-item";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllInStoreItems().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getInStoreItemBySlug(slug);
  if (!entry) return {};

  const { item } = entry;
  return {
    title: `${item.name} — ${item.price} | Istanbul Mediterranean 2`,
    description:
      item.description ||
      `${item.name} at Istanbul Mediterranean 2. Order at the register.`,
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
    alternates: {
      canonical: "/menu",
    },
  };
}

export default async function InStoreItemPage({ params }: Props) {
  const { slug } = await params;
  const entry = getInStoreItemBySlug(slug);
  if (!entry) notFound();
  return <InStoreItem entry={entry} />;
}
