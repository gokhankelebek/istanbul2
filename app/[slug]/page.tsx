import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DishPage from "@/components/dish-page";
import { DISH_PAGES, ALL_DISH_SLUGS } from "@/lib/dish-pages-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ALL_DISH_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dish = DISH_PAGES[slug];
  if (!dish) return {};

  return {
    title: dish.metaTitle,
    description: dish.metaDescription,
    keywords: dish.metaKeywords,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: dish.metaTitle,
      description: dish.ogDescription,
      url: `https://www.istanbullv.com/${slug}`,
      images: [
        {
          url: `https://www.istanbullv.com${dish.heroImage}`,
          width: 1200,
          height: 630,
          alt: dish.heroImageAlt,
        },
      ],
    },
  };
}

export default async function DishPageRoute({ params }: Props) {
  const { slug } = await params;
  const dish = DISH_PAGES[slug];
  if (!dish) notFound();

  return <DishPage dish={dish} />;
}
