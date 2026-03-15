export const RESTAURANT = {
  name: "Istanbul Mediterranean Restaurant-2 (Halal)",
  shortName: "Istanbul Mediterranean 2",
  tagline: "The Heart of Istanbul, Now in Downtown Las Vegas",
  ownerQuote:
    '"More than just food, we\'re bringing Turkish Hospitality." — Zane Atlas Muslu, Owner',
  address: "505 Fremont Street, Las Vegas, NV 89101",
  neighborhood: "Fremont East District, Downtown Las Vegas",
  building: "The Inspire building",
  phone: "(702) 812-4598",
  coordinates: { lat: 36.1711, lng: -115.1441 },
  opened: "January 21, 2026",
} as const;

export const HOURS = [
  { days: "Sunday – Wednesday", hours: "10 AM – 2 AM" },
  { days: "Thursday – Saturday", hours: "10 AM – 5 AM" },
] as const;

export const LINKS = {
  website: "https://www.istanbul2.com",
  fremontPage: "https://www.istanbul2.com",
  fremontMenu: "https://www.istanbul2.com/menu",
  orderOnline: "https://orderdoner.com",
  instagram: "https://www.instagram.com/istanbul_mediterranean/",
  googleMaps:
    "https://maps.google.com/?q=Istanbul+Mediterranean+Fremont+Street+505+Fremont+Las+Vegas",
  press:
    "https://whatnow.com/las-vegas/restaurants/istanbul-mediterranean-to-set-up-shop-on-fremont-street/",
} as const;

/** SEO landing pages for footer links — helps crawlability and internal linking */
export const FOOTER_SEO_LINKS = [
  { label: "Turkish Breakfast", href: "/turkish-breakfast" },
  { label: "Lahmacun", href: "/lahmacun" },
  { label: "Iskender Kebab", href: "/iskender-kebab" },
  { label: "Turkish Pide", href: "/turkish-pide" },
  { label: "Menemen", href: "/menemen" },
  { label: "Gozleme", href: "/gozleme" },
  { label: "Simit", href: "/simit" },
  { label: "Su Borek", href: "/su-borek" },
  { label: "Kunefe", href: "/kunefe" },
  { label: "Turkish Baklava", href: "/turkish-baklava" },
  { label: "Rice Pudding", href: "/rice-pudding" },
  { label: "Turkish Tea", href: "/turkish-tea" },
  { label: "Turkish Coffee", href: "/turkish-coffee" },
] as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Story", href: "/our-story" },
] as const;

export const HIGHLIGHTS = [
  {
    title: "Full Table Service",
    description:
      "Unlike our Strip location's quick-serve model, Fremont offers full table service. Dine in, sit down, and relax.",
    icon: "UtensilsCrossed" as const,
  },
  {
    title: "Expanded Menu",
    description:
      "Celebrating the full spectrum of Turkish cuisine — breakfast, lunch, dinner, and late-night options.",
    icon: "BookOpen" as const,
  },
  {
    title: "100% Zabiha Halal",
    description:
      "All meats hand-slaughtered according to strict Islamic dietary laws. No pork or alcohol in any preparation.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Full-Day Destination",
    description:
      "From morning Kahvalti to late-night Pide — we're open from 10 AM serving authentic Turkish flavors.",
    icon: "Clock" as const,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What are the Fremont Street location hours?",
    answer:
      "We're open daily from 10 AM — until 2 AM Sunday through Wednesday, and until 5 AM Thursday through Saturday. We serve breakfast, lunch, dinner, and late-night dining.",
  },
  {
    question: "What makes the Fremont location different from the Strip?",
    answer:
      "The Fremont location features full table service, an expanded menu with Kahvalti (Turkish breakfast), Lahmacun (Turkish pizza), Pide (Turkish boats), and a full bakery case with Turkish pastries. A larger dining room with living green walls, cozy booths, and an open kitchen.",
  },
  {
    question: "Is the food Halal certified?",
    answer:
      "Yes, absolutely. We maintain 100% Zabiha Halal certification. All meats are hand-slaughtered according to strict Islamic dietary laws, with no pork or alcohol in any preparation.",
  },
  {
    question: "What is Kahvalti?",
    answer:
      "Kahvalti is a traditional Turkish breakfast experience featuring fresh cheeses, olives, honey, jams, eggs, and freshly baked breads. Enjoyed slowly with friends and family over endless cups of Turkish tea — exclusive to our Fremont location.",
  },
] as const;

export const FEATURED_DISHES = [
  {
    name: "Iskender Kebab",
    description: "Sliced doner over pita with tomato sauce, yoghurt & butter",
    price: "$26.95",
    image: "/images/2026-march/food/iskender-plate.webp",
    href: "/iskender-kebab",
  },
  {
    name: "Lahmacun",
    description: "Paper-thin crispy dough with minced meat & herb blend",
    price: "$12.95",
    image: "/images/2026-march/food/lahmacun-closeup.webp",
    href: "/lahmacun",
  },
  {
    name: "Turkish Breakfast",
    description: "Fresh cheeses, olives, honey, jams, eggs & baked breads",
    price: "$20.95",
    image: "/images/2026-march/breakfast/turkish-breakfast-spread.webp",
    href: "/turkish-breakfast",
  },
  {
    name: "Sujuk & Cheese Pide",
    description: "Spicy sujuk sausage & melted cheese on Turkish flatbread",
    price: "$17.95",
    image: "/images/2026-march/food/sucuk-pide-slices.webp",
    href: "/turkish-pide",
  },
  {
    name: "Baklava Selection",
    description: "Handmade with flaky phyllo, pistachios & golden syrup",
    price: "from $2.45",
    image: "/images/2026-march/bakery/baklava-tea.webp",
    href: "/turkish-baklava",
  },
] as const;

export const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": "https://www.istanbul2.com/#restaurant-fremont",
      name: "Istanbul Mediterranean Restaurant-2 (Halal)",
      alternateName: "Istanbul Mediterranean Restaurant-2",
      description:
        "Turkish restaurant now open on Fremont Street, Downtown Las Vegas. Expanded menu with Kahvalti, Lahmacun, Pide, and Turkish pastries. 100% Zabiha Halal certified.",
      image:
        "https://www.istanbul2.com/images/2026-march/fremont/fremont-exterior-night-505.webp",
      telephone: "(702) 812-4598",
      url: "https://www.istanbul2.com",
      servesCuisine: ["Turkish", "Mediterranean", "Halal"],
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "505 Fremont Street",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89101",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.1711,
        longitude: -115.1441,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday"],
          opens: "10:00",
          closes: "02:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "05:00",
        },
      ],
      founder: {
        "@type": "Person",
        name: "Zane Atlas Muslu",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the Fremont Street location hours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Istanbul Mediterranean Restaurant-2 (Halal) is now open at 505 Fremont Street, Las Vegas, NV 89101. We're open daily from 10 AM (until 2 AM Sun-Wed, 5 AM Thu-Sat).",
          },
        },
        {
          "@type": "Question",
          name: "What makes the Fremont location different from the Strip?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Fremont location features an expanded menu including Kahvalti (Turkish breakfast), Lahmacun (Turkish pizza), Pide (Turkish boats), and a full bakery case. Designed as a full-day destination with a larger dining room, living green walls, cozy booths, and an open kitchen.",
          },
        },
        {
          "@type": "Question",
          name: "Is the food Halal certified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Fremont location maintains 100% Zabiha Halal certification. All meats are hand-slaughtered according to strict Islamic dietary laws.",
          },
        },
        {
          "@type": "Question",
          name: "What is Kahvalti?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kahvalti is a traditional Turkish breakfast featuring fresh cheeses, olives, honey, jams, eggs, and freshly baked breads, enjoyed with Turkish tea. Exclusive to the Fremont location.",
          },
        },
      ],
    },
  ],
};
