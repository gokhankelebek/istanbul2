import type { Metadata } from "next";
import StoryPageClient from "./story-client";

export const metadata: Metadata = {
  title: "Our Story | Istanbul Mediterranean Restaurant-2 (Halal)",
  description:
    "The story behind Istanbul Mediterranean Restaurant-2 on Fremont Street. A family-owned Turkish restaurant bringing the soul of Istanbul to Downtown Las Vegas.",
};

export default function StoryPage() {
  return <StoryPageClient />;
}
