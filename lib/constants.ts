export const RESTAURANT = {
  name: "Istanbul Mediterranean Restaurant-2 (Halal)",
  shortName: "Istanbul Mediterranean 2",
  tagline: "The Heart of Istanbul, Now in Downtown Las Vegas",
  ownerQuote:
    '"More than just food, we\'re bringing Turkish Hospitality." — Zane Atlas Muslu, Owner',
  address: "505 Fremont Street, Las Vegas, NV 89101",
  neighborhood: "Fremont East District, Downtown Las Vegas",
  building: "The Inspire building",
  phone: "(702) 861-6905",
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
  orderOnline: "https://istanbullasvegas.square.site",
  instagram: "https://www.instagram.com/istanbul_mediterranean/",
  googleMaps:
    "https://maps.google.com/?q=505+Fremont+Street,+Las+Vegas,+NV+89101",
  press:
    "https://whatnow.com/las-vegas/restaurants/istanbul-mediterranean-to-set-up-shop-on-fremont-street/",
} as const;

/** Primary CTA copy for Istanbul 2 Square ordering (pickup & delivery from Fremont) */
export const ORDER_ONLINE_COPY = {
  label: "Order Pickup & Delivery",
  /** Shorter label for tight mobile UI */
  labelShort: "Pickup & Delivery",
  promo:
    "Pickup and delivery are live — order direct from Istanbul 2 on Fremont, same Halal menu as the dining room.",
  ariaLabel:
    "Order pickup or delivery from Istanbul Mediterranean 2 — opens secure checkout in a new tab",
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

/** Dining in Las Vegas — SEO landing pages for local search */
export const FOOTER_DINING_LINKS = [
  { label: "Halal Restaurant Las Vegas", href: "/halal-restaurant-las-vegas" },
  {
    label: "Late Night Food Downtown",
    href: "/late-night-food-downtown-las-vegas",
  },
  { label: "Doner Kebab Las Vegas", href: "/doner-kebab-las-vegas" },
] as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Story", href: "/our-story" },
  { label: "Blog", href: "/blog" },
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
      "We're open daily from 10 AM. Sunday through Wednesday we close at 2 AM, and Thursday through Saturday we stay open until 5 AM. We serve breakfast, lunch, dinner, and late-night dining.",
  },
  {
    question: "What makes the Fremont location different from the Strip?",
    answer:
      "The Fremont location features full table service, an expanded menu with Kahvalti (Turkish breakfast), Lahmacun (Turkish pizza), Pide (Turkish boats), and a full bakery case with Turkish pastries. A larger dining room with living green walls, cozy booths, and an open kitchen.",
  },
  {
    question: "Is the food Halal certified?",
    answer:
      "Yes, absolutely. We maintain 100% Zabiha Halal certification. All meats are hand-slaughtered according to strict Islamic dietary laws, with no pork or alcohol in any preparation. Our kitchen maintains strict separation from any non-halal items.",
  },
  {
    question: "Do you serve Turkish breakfast every day?",
    answer:
      "Yes — Kahvalti (Turkish breakfast) is served every day starting at 10 AM. It's a traditional spread of fresh cheeses, olives, honey, jams, eggs, simit bread, and endless Turkish tea. Perfect for a slow morning or weekend brunch.",
  },
  {
    question: "Do you have vegetarian options?",
    answer:
      "Absolutely. We offer a wide range of vegetarian dishes including Menemen (Turkish scrambled eggs), Hummus, Falafel plates and wraps, Stuffed Grape Leaves, French Fries, and vegetarian Pide varieties. All prepared in our 100% pork-free and alcohol-free kitchen.",
  },
  {
    question: "Do you take reservations or group bookings?",
    answer:
      "Yes — for parties of 6 or more, we recommend calling ahead at (702) 861-6905 to reserve seating. We also accommodate larger groups and private events in our spacious dining room. Walk-ins are always welcome.",
  },
  {
    question: "Is there parking nearby?",
    answer:
      "Yes. There is metered street parking on Fremont Street and surrounding blocks, plus several parking garages within a short walk including the Fremont East lot. Rideshare drop-off is easy at our 505 Fremont Street entrance.",
  },
  {
    question: "Can I order online for pickup or delivery from Istanbul 2?",
    answer:
      "Yes — Istanbul Mediterranean 2 on Fremont now offers online ordering for pickup and delivery. Place your order at istanbullasvegas.square.site (our official Square store) for the full Halal menu straight from our kitchen. We're also on major delivery apps. For large catering, call (702) 861-6905.",
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
      alternateName: [
        "Istanbul Mediterranean Restaurant-2",
        "Turkish Restaurant Las Vegas",
        "Halal Restaurant Fremont Street",
        "Turkish Restaurant Fremont Street",
      ],
      description:
        "Turkish restaurant in Downtown Las Vegas serving doner kebab, Turkish breakfast, pide, and lahmacun. 100% Zabiha Halal. Late night dining on Fremont Street. Open until 5 AM Thu–Sat.",
      image:
        "https://www.istanbul2.com/images/2026-march/fremont/fremont-exterior-night-505.webp",
      telephone: "(702) 861-6905",
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
  ],
};

/** Homepage FAQ schema - used only on / to avoid duplicate FAQPage on pages with their own FAQ */
export const HOMEPAGE_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the Fremont Street location hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're open daily from 10 AM. Sunday through Wednesday we close at 2 AM, Thursday through Saturday we stay open until 5 AM.",
      },
    },
    {
      "@type": "Question",
      name: "What makes the Fremont location different from the Strip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Fremont location features full table service, an expanded menu including Kahvalti (Turkish breakfast), Lahmacun (Turkish pizza), Pide (Turkish boats), and a full bakery case. A larger dining room with living green walls, cozy booths, and an open kitchen.",
      },
    },
    {
      "@type": "Question",
      name: "Is the food Halal certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We maintain 100% Zabiha Halal certification. All meats are hand-slaughtered according to strict Islamic dietary laws, with no pork or alcohol in any preparation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have vegetarian options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer Menemen, Hummus, Falafel plates and wraps, Stuffed Grape Leaves, and vegetarian Pide varieties, all prepared in our 100% pork-free and alcohol-free kitchen.",
      },
    },
    {
      "@type": "Question",
      name: "Do you take reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For parties of 6 or more, call ahead at (702) 861-6905 to reserve. Walk-ins are always welcome. We also accommodate larger groups and private events.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order online for pickup or delivery from Istanbul 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Istanbul Mediterranean 2 on Fremont offers online ordering for pickup and delivery at istanbullasvegas.square.site — the full Halal menu from our kitchen. Major delivery apps also carry us. For catering, call (702) 861-6905.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the best Turkish restaurant in Downtown Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Istanbul Mediterranean 2 at 505 Fremont Street in the Fremont East District. We offer full table service, doner kebab, Turkish breakfast, pide, lahmacun, and 100% Zabiha Halal cuisine. Open daily until 2 AM Sun–Wed, 5 AM Thu–Sat.",
      },
    },
    {
      "@type": "Question",
      name: "Is there Halal Turkish food on Fremont Street?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Istanbul Mediterranean 2 serves 100% Zabiha Halal Turkish and Mediterranean food at 505 Fremont Street. Doner kebab, pide, lahmacun, Turkish breakfast, and more. No pork or alcohol in any preparation.",
      },
    },
  ],
};
