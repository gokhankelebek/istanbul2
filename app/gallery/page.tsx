import type { Metadata } from "next";
import GalleryPageClient from "./gallery-client";
import BreadcrumbJsonLd from "@/components/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Turkish Restaurant Photos | Istanbul Mediterranean 2 Fremont Street",
  description:
    "Photo gallery of Istanbul Mediterranean Restaurant-2 on Fremont Street. See our dining room, food, bakery, and grand opening photos.",
  keywords:
    "Turkish restaurant photos Las Vegas, Istanbul Mediterranean photos, Fremont Street restaurant gallery, Turkish restaurant Las Vegas photos, dining room, halal restaurant",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />
      <GalleryPageClient />
    </>
  );
}
