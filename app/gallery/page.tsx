import type { Metadata } from "next";
import GalleryPageClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery | Istanbul Mediterranean Restaurant-2 (Halal)",
  description:
    "Photo gallery of Istanbul Mediterranean Restaurant-2 on Fremont Street. See our dining room, food, bakery, and grand opening photos.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
