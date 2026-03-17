import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MobileCtaBar from "@/components/mobile-cta-bar";
import { JSON_LD } from "@/lib/constants";
import "./globals.css";

const gaId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-BRZ9K2JW3L";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

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
    "Turkish Restaurant Las Vegas | Fremont Street | Istanbul Mediterranean 2 (Halal)",
  description:
    "Istanbul Mediterranean Restaurant-2 (Halal) on Fremont Street, Downtown Las Vegas. Expanded Turkish menu with Kahvalti, Lahmacun, Pide, and Turkish pastries. Now open at 505 Fremont Street.",
  keywords:
    "Turkish restaurant Las Vegas, Turkish restaurant Fremont Street, best Turkish restaurant Downtown, Halal Turkish food Las Vegas, Downtown Las Vegas halal food, Fremont Street Mediterranean, Turkish breakfast Las Vegas, Kahvalti Las Vegas, Pide Las Vegas, Lahmacun Las Vegas",
  openGraph: {
    title:
      "Turkish Restaurant Las Vegas | Fremont Street | Istanbul Mediterranean 2 (Halal)",
    description:
      "Now Open: Istanbul Mediterranean Restaurant-2 (Halal) on Fremont Street. Expanded menu with Turkish breakfast, pizza, boats, and pastries. Open 10 AM - 2 AM (5 AM Thu-Sat).",
    url: "https://www.istanbul2.com",
    siteName: "Istanbul Mediterranean",
    images: [
      {
        url: "https://www.istanbul2.com/images/2026-march/fremont/fremont-exterior-night-505.webp",
        width: 1200,
        height: 630,
        alt: "Istanbul Mediterranean Restaurant-2 on Fremont Street at night",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Turkish Restaurant Las Vegas | Fremont Street | Istanbul Mediterranean 2 (Halal)",
    description:
      "Now Open: Istanbul Mediterranean Restaurant-2 (Halal) on Fremont Street. Expanded menu with Turkish breakfast, pizza, boats, and pastries. Open 10 AM - 2 AM (5 AM Thu-Sat).",
    images: [
      "https://www.istanbul2.com/images/2026-march/fremont/fremont-exterior-night-505.webp",
    ],
  },
  metadataBase: new URL("https://www.istanbul2.com"),
  alternates: {
    canonical: "/",
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
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
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-config" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
