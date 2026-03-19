import Hero from "@/components/hero";
import InfoBar from "@/components/info-bar";
import TurkishPatternDivider from "@/components/turkish-pattern-divider";
import Highlights from "@/components/highlights";
import FeaturedDishes from "@/components/featured-dishes";
import GalleryPreview from "@/components/gallery-preview";
import QuoteBlock from "@/components/quote-block";
import Reviews from "@/components/reviews";
import FaqAccordion from "@/components/faq-accordion";
import LocationSection from "@/components/location-section";
import PromoVideo from "@/components/promo-video";
import { HOMEPAGE_FAQ_JSON_LD } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_FAQ_JSON_LD) }}
      />
      <Hero />
      <InfoBar />
      <TurkishPatternDivider variant="light" />
      <Highlights />
      <PromoVideo variant="dark" />
      <TurkishPatternDivider variant="light" />
      <FeaturedDishes />
      <TurkishPatternDivider />
      <GalleryPreview />
      <TurkishPatternDivider variant="light" />
      <QuoteBlock />
      <TurkishPatternDivider />
      <Reviews />
      <TurkishPatternDivider />
      <FaqAccordion />
      <TurkishPatternDivider variant="light" />
      <LocationSection />
      <TurkishPatternDivider variant="light" />
    </>
  );
}
