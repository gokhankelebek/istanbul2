import type { Metadata } from "next";
import MenuPageClient from "./menu-client";

export const metadata: Metadata = {
  title: "Menu | Istanbul Mediterranean Restaurant-2 (Halal)",
  description:
    "Full menu for Istanbul Mediterranean Restaurant-2 on Fremont Street. Doner kebab, Turkish pide, lahmacun, breakfast, pastries, and desserts. 100% Zabiha Halal.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
