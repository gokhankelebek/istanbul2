import type { Metadata } from "next";
import HalalPageClient from "./halal-client";
import BreadcrumbJsonLd from "@/components/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Halal Restaurant Las Vegas | 100% Zabiha at Istanbul Mediterranean 2",
  description:
    "100% Zabiha Halal restaurant in Downtown Las Vegas. Authentic Turkish & Mediterranean cuisine on Fremont Street. No pork, no alcohol — ever. Open daily at 505 Fremont Street.",
  keywords:
    "Halal restaurant Las Vegas, Halal Turkish food Downtown, Zabiha Halal Fremont Street, Halal food Las Vegas, Halal Mediterranean Las Vegas, pork-free restaurant Las Vegas",
  alternates: { canonical: "/halal-restaurant-las-vegas" },
  openGraph: {
    title: "Halal Restaurant Las Vegas | 100% Zabiha at Istanbul Mediterranean 2",
    description:
      "100% Zabiha Halal Turkish & Mediterranean restaurant on Fremont Street. Authentic doner kebab, pide, lahmacun, and Turkish breakfast. No pork or alcohol — ever.",
    url: "https://www.istanbul2.com/halal-restaurant-las-vegas",
    images: [
      {
        url: "https://www.istanbul2.com/images/2026-march/fremont/fremont-open-kitchen-doner.webp",
        width: 1200,
        height: 630,
        alt: "Halal doner kebab preparation at Istanbul Mediterranean 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halal Restaurant Las Vegas | 100% Zabiha at Istanbul Mediterranean 2",
    description:
      "100% Zabiha Halal Turkish & Mediterranean restaurant on Fremont Street. Authentic doner kebab, pide, lahmacun, and Turkish breakfast.",
    images: [
      "https://www.istanbul2.com/images/2026-march/fremont/fremont-open-kitchen-doner.webp",
    ],
  },
};

export default function HalalRestaurantPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Halal Restaurant Las Vegas", path: "/halal-restaurant-las-vegas" },
        ]}
      />
      <HalalPageClient />
    </>
  );
}
