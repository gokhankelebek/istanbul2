import OrderHero from "@/components/home/order-hero";
import MostOrdered from "@/components/home/most-ordered";
import { LateNight, WhyUs } from "@/components/home/late-night";
import Reviews from "@/components/reviews";
import CateringBanner from "@/components/catering-banner";
import BlogTeaser from "@/components/blog-teaser";
import FaqAccordion from "@/components/faq-accordion";
import LocationSection from "@/components/location-section";
import { HOMEPAGE_FAQ_JSON_LD } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_FAQ_JSON_LD) }}
      />
      <OrderHero />
      <MostOrdered />
      <LateNight />
      <WhyUs />
      <Reviews />
      <CateringBanner />
      <FaqAccordion />
      <BlogTeaser />
      <LocationSection />
    </>
  );
}
