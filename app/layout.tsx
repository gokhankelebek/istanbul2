import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MobileCtaBar from "@/components/mobile-cta-bar";
import ConditionalChrome from "@/components/conditional-chrome";
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
      "Now Open: Istanbul Mediterranean Restaurant-2 (Halal) on Fremont Street. Expanded menu with Turkish breakfast, pizza, boats, and pastries. Open 10 AM - 2 AM (5 AM Fri-Sat).",
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
      "Now Open: Istanbul Mediterranean Restaurant-2 (Halal) on Fremont Street. Expanded menu with Turkish breakfast, pizza, boats, and pastries. Open 10 AM - 2 AM (5 AM Fri-Sat).",
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
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Istanbul Mediterranean 2 Blog"
          href="https://www.istanbul2.com/feed.xml"
        />
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
                // Conversion clicks (calls, directions, Cash App orders) as GA4 events.
                // Delegated so it covers links rendered after hydration; never blocks navigation.
                document.addEventListener('click', function (e) {
                  if (!(e.target instanceof Element)) return;
                  var a = e.target.closest('a[href]');
                  if (!a) return;
                  var u = new URL(a.href, location.href);
                  if (u.protocol === 'tel:') {
                    gtag('event', 'click_to_call', { link_url: a.href });
                  } else if (u.hostname === 'cash.app') {
                    var last = u.pathname.split('/').filter(Boolean).pop();
                    var type = last === 'delivery' || last === 'pickup' ? last : 'menu';
                    gtag('event', 'order_online_click', { platform: 'cash_app', order_type: type, link_url: a.href });
                  } else if (u.hostname === 'maps.app.goo.gl' || u.hostname === 'maps.google.com' ||
                             ((u.hostname === 'www.google.com' || u.hostname === 'google.com') && u.pathname.indexOf('/maps') === 0)) {
                    gtag('event', 'get_directions', { link_url: a.href });
                  }
                }, { capture: true, passive: true });
              `}
            </Script>
          </>
        )}
        <ConditionalChrome>
          <Navbar />
        </ConditionalChrome>
        <main className="relative pb-16 md:pb-0">{children}</main>
        <ConditionalChrome>
          <Footer />
          <MobileCtaBar />
        </ConditionalChrome>
      </body>
    </html>
  );
}
