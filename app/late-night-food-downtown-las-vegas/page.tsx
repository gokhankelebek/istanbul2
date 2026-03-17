import type { Metadata } from "next";
import LateNightPageClient from "./late-night-client";
import BreadcrumbJsonLd from "@/components/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Late Night Food Downtown Las Vegas | Open Until 5 AM | Istanbul Mediterranean 2",
  description:
    "Late night food in Downtown Las Vegas. Turkish restaurant open until 2 AM Sun–Wed, 5 AM Thu–Sat on Fremont Street. Doner kebab, pide, lahmacun after midnight. 100% Halal.",
  keywords:
    "Late night food Downtown Las Vegas, food open late Fremont Street, late night restaurant Las Vegas, food after midnight Las Vegas, Turkish food late night, Halal late night Las Vegas",
  alternates: { canonical: "/late-night-food-downtown-las-vegas" },
  openGraph: {
    title: "Late Night Food Downtown Las Vegas | Open Until 5 AM | Istanbul Mediterranean 2",
    description:
      "Turkish restaurant on Fremont Street open until 5 AM Thu–Sat. Doner kebab, pide, lahmacun, and more. Late night Halal food in Downtown Las Vegas.",
    url: "https://www.istanbul2.com/late-night-food-downtown-las-vegas",
    images: [
      {
        url: "https://www.istanbul2.com/images/2026-march/fremont/fremont-exterior-night-505.webp",
        width: 1200,
        height: 630,
        alt: "Istanbul Mediterranean 2 on Fremont Street at night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Late Night Food Downtown Las Vegas | Open Until 5 AM",
    description: "Turkish restaurant on Fremont Street open until 5 AM Thu–Sat. Doner kebab, pide, lahmacun.",
    images: [
      "https://www.istanbul2.com/images/2026-march/fremont/fremont-exterior-night-505.webp",
    ],
  },
};

export default function LateNightFoodPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          {
            name: "Late Night Food Downtown Las Vegas",
            path: "/late-night-food-downtown-las-vegas",
          },
        ]}
      />
      <LateNightPageClient />
    </>
  );
}
