import type { Metadata } from "next";
import Script from "next/script";
import { Oswald, Manrope } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MobileCtaBar from "@/components/mobile-cta-bar";
import ConditionalChrome from "@/components/conditional-chrome";
import { JSON_LD } from "@/lib/constants";
import "./globals.css";

const gaId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-BRZ9K2JW3L";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
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
    <html lang="en" className={`${oswald.variable} ${manrope.variable}`}>
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
                // Conversion clicks (calls, directions, online orders) as GA4 events.
                // Delegated so it covers every link, including ones rendered after hydration and
                // links inside blog posts; it never blocks navigation. Events go out by beacon so
                // they survive the page unloading as the visitor leaves for the ordering site.
                // Each event carries click_location (which button: header, footer, dish card…, from
                // the nearest data-ga-location) and item_name (from data-ga-item) when known.
                function track(e) {
                  if (e.type === 'auxclick' && e.button !== 1) return; // middle-click only
                  if (!(e.target instanceof Element)) return;
                  var a = e.target.closest('a[href]');
                  if (!a) return;
                  var u;
                  try { u = new URL(a.href, location.href); } catch (err) { return; }
                  var where = a.closest('[data-ga-location]');
                  var sec = a.closest('section[id]');
                  var item = a.closest('[data-ga-item]');
                  var base = {
                    link_url: a.href,
                    link_text: (a.textContent || '').trim().slice(0, 100),
                    click_location: where ? where.getAttribute('data-ga-location') : (sec ? sec.id : 'page'),
                    transport_type: 'beacon'
                  };
                  if (item) base.item_name = item.getAttribute('data-ga-item');
                  function send(name, extra) {
                    var p = {}; var k;
                    for (k in base) p[k] = base[k];
                    for (k in extra) p[k] = extra[k];
                    gtag('event', name, p);
                  }
                  if (u.protocol === 'tel:') {
                    send('click_to_call', {});
                  } else if (u.hostname === 'store.istanbul2.com' ||
                             (u.hostname === location.hostname && u.pathname.indexOf('/store') === 0)) {
                    send('order_online_click', { platform: 'hub', order_type: u.hash === '#delivery' ? 'delivery' : 'menu' });
                  } else if (u.hostname === 'cash.app') {
                    var last = u.pathname.split('/').filter(Boolean).pop();
                    send('order_online_click', { platform: 'cash_app', order_type: last === 'delivery' || last === 'pickup' ? last : 'menu' });
                  } else if (u.hostname === 'www.order.store' || u.hostname === 'order.store' || /(^|\\.)ubereats\\.com$/.test(u.hostname)) {
                    send('order_online_click', { platform: 'uber_eats', order_type: 'delivery' });
                  } else if (u.hostname === 'order.online' || /(^|\\.)doordash\\.com$/.test(u.hostname)) {
                    send('order_online_click', { platform: 'doordash', order_type: 'delivery' });
                  } else if (u.hostname === 'maps.app.goo.gl' || u.hostname === 'maps.google.com' ||
                             ((u.hostname === 'www.google.com' || u.hostname === 'google.com') && u.pathname.indexOf('/maps') === 0)) {
                    send('get_directions', {});
                  }
                }
                document.addEventListener('click', track, { capture: true, passive: true });
                document.addEventListener('auxclick', track, { capture: true, passive: true });
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
