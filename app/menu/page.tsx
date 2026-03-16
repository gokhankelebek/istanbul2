import type { Metadata } from "next";
import MenuPageClient from "./menu-client";
import BreadcrumbJsonLd from "@/components/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Menu | Istanbul Mediterranean Restaurant-2 (Halal)",
  description:
    "Full menu for Istanbul Mediterranean Restaurant-2 on Fremont Street. Doner kebab, Turkish pide, lahmacun, breakfast, pastries, and desserts. 100% Zabiha Halal.",
  keywords:
    "Turkish menu Las Vegas, Halal menu Fremont Street, doner kebab, pide, lahmacun, Turkish breakfast, Istanbul Mediterranean menu",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
        ]}
      />
      <MenuPageClient />
    </>
  );
}
