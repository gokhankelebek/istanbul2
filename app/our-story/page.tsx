import type { Metadata } from "next";
import StoryPageClient from "./story-client";
import BreadcrumbJsonLd from "@/components/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Our Story | Turkish Restaurant Las Vegas | Istanbul Mediterranean 2",
  description:
    "The story behind Istanbul Mediterranean Restaurant-2 on Fremont Street. A family-owned Turkish restaurant bringing the soul of Istanbul to Downtown Las Vegas.",
  keywords:
    "Istanbul Mediterranean story, Turkish restaurant Las Vegas, Fremont Street restaurant, halal family restaurant, Zane Atlas Muslu, Chef Adem",
  alternates: {
    canonical: "/our-story",
  },
};

export default function StoryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Our Story", path: "/our-story" },
        ]}
      />
      <StoryPageClient />
    </>
  );
}
