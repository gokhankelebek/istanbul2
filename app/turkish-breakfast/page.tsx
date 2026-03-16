import type { Metadata } from "next";
import BreakfastPageClient from "./breakfast-client";
import BreadcrumbJsonLd from "@/components/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Turkish Breakfast Las Vegas | Kahvalti at Istanbul Mediterranean 2",
  description:
    "Authentic Turkish breakfast (Kahvalti) in Downtown Las Vegas. Traditional spread with fresh cheeses, olives, honey, eggs, simit, and Turkish tea. Served daily at 505 Fremont Street. 100% Halal.",
  keywords:
    "Turkish breakfast Las Vegas, Kahvalti Las Vegas, halal breakfast Las Vegas, Turkish breakfast near me, best breakfast Fremont Street, Mediterranean breakfast Downtown Las Vegas, Turkish brunch Las Vegas",
  alternates: { canonical: "/turkish-breakfast" },
  openGraph: {
    title: "Turkish Breakfast Las Vegas | Kahvalti at Istanbul Mediterranean 2",
    description:
      "A centuries-old morning ritual, now in Downtown Las Vegas. Fresh cheeses, olives, honey, eggs, simit, and endless Turkish tea. Served daily from 10 AM at 505 Fremont Street.",
    url: "https://www.istanbul2.com/turkish-breakfast",
    images: [
      {
        url: "https://www.istanbul2.com/images/2026-march/breakfast/turkish-breakfast-spread.webp",
        width: 1200,
        height: 630,
        alt: "Traditional Turkish breakfast spread at Istanbul Mediterranean 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turkish Breakfast Las Vegas | Kahvalti at Istanbul Mediterranean 2",
    description:
      "A centuries-old morning ritual, now in Downtown Las Vegas. Fresh cheeses, olives, honey, eggs, simit, and endless Turkish tea. Served daily from 10 AM at 505 Fremont Street.",
    images: [
      "https://www.istanbul2.com/images/2026-march/breakfast/turkish-breakfast-spread.webp",
    ],
  },
};

export default function TurkishBreakfastPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Turkish Breakfast", path: "/turkish-breakfast" },
        ]}
      />
      <BreakfastPageClient />
    </>
  );
}
