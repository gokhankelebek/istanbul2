import type { Metadata } from "next";
import CateringPageClient from "./catering-client";
import BreadcrumbJsonLd from "@/components/breadcrumb-json-ld";

export const metadata: Metadata = {
  title:
    "Catering Las Vegas | Halal Mediterranean & Turkish | Istanbul Mediterranean 2",
  description:
    "Las Vegas catering for corporate lunches, construction crews, conventions, and private events. Individually packaged meals, family-style trays, and hot buffets. 100% Zabiha Halal. Call (702) 861-6905 or request a quote.",
  keywords:
    "catering Las Vegas, Halal catering Las Vegas, Mediterranean catering Las Vegas, corporate lunch catering Las Vegas, office catering Las Vegas, construction crew lunch Las Vegas, convention catering Las Vegas, Turkish catering Las Vegas, individually packaged meals Las Vegas, late night catering Las Vegas, bachelor party catering Las Vegas, private event catering Downtown Las Vegas",
  alternates: { canonical: "/catering" },
  openGraph: {
    title:
      "Catering Las Vegas | Halal Mediterranean & Turkish | Istanbul Mediterranean 2",
    description:
      "Corporate, construction, convention, and private event catering across Las Vegas. Individually packaged or family-style. Beef & lamb doner, chicken, falafel. 100% Zabiha Halal.",
    url: "https://www.istanbul2.com/catering",
    images: [
      {
        url: "https://www.istanbul2.com/images/catering/halal-catering-trays-spread-las-vegas.webp",
        width: 1600,
        height: 900,
        alt: "Halal catering trays from Istanbul Mediterranean 2 Las Vegas ready for delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catering Las Vegas | Istanbul Mediterranean 2",
    description:
      "Halal Turkish & Mediterranean catering for corporate, construction, conventions, and private events across Las Vegas.",
    images: [
      "https://www.istanbul2.com/images/catering/halal-catering-trays-spread-las-vegas.webp",
    ],
  },
};

export default function CateringPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Catering Las Vegas", path: "/catering" },
        ]}
      />
      <CateringPageClient />
    </>
  );
}
