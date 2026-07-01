import type { Metadata } from "next";
import InStoreMenu from "@/components/in-store-menu";

export const metadata: Metadata = {
  title: "In-Store Menu | Istanbul Mediterranean 2",
  description:
    "View the full Istanbul Mediterranean 2 menu with prices. Order at the register.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: {
    canonical: "/menu",
  },
};

export default function InStorePage() {
  return <InStoreMenu />;
}
