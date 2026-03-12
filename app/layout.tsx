import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { JSON_LD } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Turkish Restaurant Fremont Street | Istanbul Mediterranean Restaurant-2 (Halal)",
  description:
    "Istanbul Mediterranean Restaurant-2 (Halal) on Fremont Street, Downtown Las Vegas. Expanded Turkish menu with Kahvalti, Lahmacun, Pide, and Turkish pastries. Now open at 505 Fremont Street.",
  keywords:
    "Turkish restaurant Fremont Street, Downtown Las Vegas halal food, Fremont Street Mediterranean, Turkish breakfast Las Vegas, Kahvalti Las Vegas, Pide Las Vegas, Lahmacun Las Vegas",
  openGraph: {
    title:
      "Turkish Restaurant Fremont Street | Istanbul Mediterranean Restaurant-2 (Halal)",
    description:
      "Now Open: Istanbul Mediterranean Restaurant-2 (Halal) on Fremont Street. Expanded menu with Turkish breakfast, pizza, boats, and pastries. Open 10 AM - 2 AM (5 AM Thu-Sat).",
    url: "https://www.istanbullv.com/fremont-street",
    siteName: "Istanbul Mediterranean",
    images: [
      {
        url: "https://www.istanbullv.com/images/2026-march/fremont/fremont-exterior-night-505.webp",
        width: 1200,
        height: 630,
        alt: "Istanbul Mediterranean Restaurant-2 on Fremont Street at night",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://www.istanbullv.com"),
  alternates: {
    canonical: "/fremont-street",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="bg-cream text-stone antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
