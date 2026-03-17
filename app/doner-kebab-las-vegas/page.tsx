import type { Metadata } from "next";
import DonerPageClient from "./doner-client";
import BreadcrumbJsonLd from "@/components/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Doner Kebab Las Vegas | Turkish Doner on Fremont Street | Istanbul Mediterranean 2",
  description:
    "Best doner kebab in Las Vegas. Authentic Turkish doner at Istanbul Mediterranean 2 on Fremont Street. Iskender, pita, rice bowls, wraps. 100% Halal. Open late.",
  keywords:
    "Doner kebab Las Vegas, best doner Fremont Street, Turkish doner Las Vegas, Iskender kebab Las Vegas, doner pita Las Vegas, Halal doner Las Vegas",
  alternates: { canonical: "/doner-kebab-las-vegas" },
  openGraph: {
    title: "Doner Kebab Las Vegas | Turkish Doner on Fremont Street | Istanbul Mediterranean 2",
    description:
      "Authentic Turkish doner kebab on Fremont Street. Iskender, pita, rice bowls, wraps. 100% Zabiha Halal. Open until 5 AM Thu–Sat.",
    url: "https://www.istanbul2.com/doner-kebab-las-vegas",
    images: [
      {
        url: "https://www.istanbul2.com/images/2026-march/food/iskender-plate.webp",
        width: 1200,
        height: 630,
        alt: "Iskender kebab with doner meat at Istanbul Mediterranean 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doner Kebab Las Vegas | Turkish Doner on Fremont Street",
    description: "Authentic Turkish doner kebab on Fremont Street. Iskender, pita, rice bowls. 100% Halal.",
    images: [
      "https://www.istanbul2.com/images/2026-march/food/iskender-plate.webp",
    ],
  },
};

export default function DonerKebabPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Doner Kebab Las Vegas", path: "/doner-kebab-las-vegas" },
        ]}
      />
      <DonerPageClient />
    </>
  );
}
