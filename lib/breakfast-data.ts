export interface BreakfastStorySection {
  title: string;
  content: string;
  image: string;
  imageAlt: string;
}

export const BREAKFAST_STORY: BreakfastStorySection[] = [
  {
    title: "The Ritual of Kahvalti",
    content:
      'In Turkish, kahvalti literally means "before coffee" — but it\'s so much more than a meal before your morning cup. It\'s a centuries-old ritual of gathering, sharing, and savoring. In Istanbul, families and friends spend hours at the breakfast table on weekends, passing plates of fresh cheese, dipping warm bread into honey, and pouring glass after glass of Turkish tea.\n\nThis isn\'t fast food. This isn\'t brunch with bottomless mimosas. Kahvalti is a deliberate, joyful pause — a moment to connect before the day begins.',
    image: "/images/fremont/kahvalti.JPG",
    imageAlt: "Traditional Turkish breakfast spread at Istanbul Mediterranean 2",
  },
  {
    title: "The Spread",
    content:
      "A true Turkish breakfast is a composed experience. Your table fills with small plates — each one a story of Turkish culinary tradition. Creamy ezine cheese from the Aegean. Briny olives cured in the Mediterranean sun. Golden honey drizzled over clotted cream (kaymak). Pastirma, the air-dried cured beef that's been perfected over centuries. Fresh-baked simit — the iconic sesame bread ring. And always, always, a tulip-shaped glass of Turkish tea.\n\nEvery ingredient is chosen with care. Every plate is placed with intention. The result is a breakfast that nourishes not just the body, but the soul.",
    image: "/images/2026-march/breakfast/turkish-breakfast-spread.webp",
    imageAlt:
      "Full Turkish breakfast spread with eggs, cheese, olives, and fresh bread",
  },
  {
    title: "From Istanbul to Fremont Street",
    content:
      "When we opened Istanbul Mediterranean 2 on Fremont Street, we knew we had to bring the full kahvalti experience to Downtown Las Vegas. Our Strip location serves incredible doner — but Fremont is where we could finally offer the complete Turkish dining experience, from morning to late night.\n\nOur breakfast is exclusive to the Fremont location, prepared fresh every morning by Chef Adem using recipes passed down through his family. Whether you choose the Single Breakfast Plate for a perfect introduction or the Double Plate to share with someone you love, you're experiencing the same breakfast that families enjoy in Istanbul's neighborhood cafes.",
    image: "/images/2026-march/breakfast/sucuk-eggs-skillet.webp",
    imageAlt: "Sujuk and eggs sizzling in a skillet at Istanbul Mediterranean 2",
  },
];

export const BREAKFAST_FAQ = [
  {
    question: "Where can I get Turkish breakfast in Las Vegas?",
    answer:
      "Istanbul Mediterranean 2 at 505 Fremont Street serves authentic Turkish breakfast (Kahvalti) daily from 10 AM. We are the only restaurant in Downtown Las Vegas offering a full traditional Turkish breakfast experience with fresh cheeses, olives, honey, kaymak, eggs, simit, and Turkish tea. 100% Zabiha Halal certified.",
  },
  {
    question: "What is included in a traditional Turkish breakfast?",
    answer:
      "A traditional Turkish breakfast (Kahvalti) at Istanbul Mediterranean 2 includes a spread of fresh ezine cheese, briny olives, golden honey with clotted cream (kaymak), pastirma (cured beef), breakfast sauce, tomatoes, cucumbers, a freshly baked simit, your choice of eggs, and unlimited Turkish tea. Our Double Breakfast Plate also includes a borek pastry.",
  },
  {
    question: "What time does Istanbul Mediterranean 2 serve breakfast?",
    answer:
      "We serve breakfast daily starting at 10 AM. Our full hours are Sunday through Wednesday 10 AM to 2 AM, and Thursday through Saturday 10 AM to 5 AM. The Turkish breakfast menu is available throughout the day.",
  },
  {
    question: "Is the Turkish breakfast halal?",
    answer:
      "Yes. Everything at Istanbul Mediterranean 2 is 100% Zabiha Halal certified. All meats, including the pastirma and sujuk in our breakfast, are hand-slaughtered according to strict Islamic dietary laws. No pork or alcohol is used in any preparation.",
  },
  {
    question: "Can I order Turkish breakfast for delivery?",
    answer:
      "Yes! You can order our breakfast items for delivery through OrderDoner.com. For the best experience, we recommend dining in — Turkish breakfast is meant to be savored slowly at the table with Turkish tea.",
  },
  {
    question:
      "What is the difference between single and double breakfast plates?",
    answer:
      "The Single Breakfast Plate ($20.95) is a complete Turkish breakfast for one person with honey & clotted cream, your choice of egg, breakfast sauce, olives, pastirma, ezine cheese, tomatoes, cucumbers, and simit. The Double Breakfast Plate ($38.95) is a generous spread for two people that includes everything in the single plate plus 2 eggs, a borek pastry, and larger portions of all accompaniments.",
  },
];

export const BREAKFAST_ATMOSPHERE_IMAGES = [
  {
    src: "/images/2026-march/ambiance/dining-room-tea.webp",
    alt: "Guests enjoying Turkish tea in the warmly lit dining room",
  },
  {
    src: "/images/2026-march/bakery/bakery-display-case-1.webp",
    alt: "Fresh Turkish pastries in the bakery display case",
  },
  {
    src: "/images/2026-march/ambiance/istanbul-coffee-cart.webp",
    alt: "Istanbul coffee cart with cozy booth seating",
  },
];

export const BREAKFAST_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.istanbullv.com/turkish-breakfast",
      name: "Turkish Breakfast Las Vegas | Kahvalti at Istanbul Mediterranean 2",
      description:
        "Authentic Turkish breakfast (Kahvalti) in Downtown Las Vegas. Traditional spread with fresh cheeses, olives, honey, eggs, simit, and Turkish tea. Served daily at 505 Fremont Street. 100% Halal.",
      url: "https://www.istanbullv.com/turkish-breakfast",
      isPartOf: {
        "@id": "https://www.istanbullv.com/#website",
      },
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.istanbullv.com/#restaurant-fremont",
      name: "Istanbul Mediterranean Restaurant-2 (Halal)",
      servesCuisine: ["Turkish", "Mediterranean", "Halal"],
      hasMenu: {
        "@type": "Menu",
        name: "Turkish Breakfast Menu",
        hasMenuSection: [
          {
            "@type": "MenuSection",
            name: "Breakfast Plates",
            hasMenuItem: [
              {
                "@type": "MenuItem",
                name: "Single Breakfast Plate",
                description:
                  "Turkish breakfast with honey & clotted cream, choice of egg, breakfast sauce, olives, pastirma, ezine cheese, tomatoes, cucumbers and simit",
                offers: {
                  "@type": "Offer",
                  price: "20.95",
                  priceCurrency: "USD",
                },
                suitableForDiet: "https://schema.org/HalalDiet",
              },
              {
                "@type": "MenuItem",
                name: "Double Breakfast Plate",
                description:
                  "Turkish breakfast spread for two with honey & cream, cheese, olives, pastirma, ezine cheese, tomatoes, cucumbers, simit, 2 eggs and borek",
                offers: {
                  "@type": "Offer",
                  price: "38.95",
                  priceCurrency: "USD",
                },
                suitableForDiet: "https://schema.org/HalalDiet",
              },
              {
                "@type": "MenuItem",
                name: "Menemen",
                description:
                  "Sauteed tomatoes, green peppers, onions and eggs — Turkish breakfast classic with bread",
                offers: {
                  "@type": "Offer",
                  price: "13.95",
                  priceCurrency: "USD",
                },
              },
              {
                "@type": "MenuItem",
                name: "Sujuk & Eggs",
                description:
                  "Spicy Turkish beef sausage pan fried with eggs served with bread",
                offers: {
                  "@type": "Offer",
                  price: "13.95",
                  priceCurrency: "USD",
                },
                suitableForDiet: "https://schema.org/HalalDiet",
              },
            ],
          },
          {
            "@type": "MenuSection",
            name: "Breakfast Pastries",
            hasMenuItem: [
              {
                "@type": "MenuItem",
                name: "Su Borek",
                description:
                  "Flaky layers of thin pastry filled with creamy cheese and herbs",
                offers: {
                  "@type": "Offer",
                  price: "8.95",
                  priceCurrency: "USD",
                },
              },
              {
                "@type": "MenuItem",
                name: "Simit",
                description:
                  "Sesame crusted Turkish bread ring, crisp outside, soft inside",
                offers: {
                  "@type": "Offer",
                  price: "3.95",
                  priceCurrency: "USD",
                },
              },
              {
                "@type": "MenuItem",
                name: "Gozleme",
                description:
                  "Traditional flatbread with fillings: cheese, potato, spinach, ground beef, or eggplant",
                offers: {
                  "@type": "Offer",
                  price: "7.95",
                  priceCurrency: "USD",
                },
              },
            ],
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I get Turkish breakfast in Las Vegas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Istanbul Mediterranean 2 at 505 Fremont Street serves authentic Turkish breakfast (Kahvalti) daily from 10 AM. We are the only restaurant in Downtown Las Vegas offering a full traditional Turkish breakfast experience. 100% Zabiha Halal certified.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in a traditional Turkish breakfast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A traditional Turkish breakfast (Kahvalti) includes fresh ezine cheese, olives, golden honey with clotted cream (kaymak), pastirma (cured beef), breakfast sauce, tomatoes, cucumbers, freshly baked simit, eggs, and unlimited Turkish tea.",
          },
        },
        {
          "@type": "Question",
          name: "What time does Istanbul Mediterranean 2 serve breakfast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Breakfast is served daily starting at 10 AM. Full hours: Sunday-Wednesday 10 AM to 2 AM, Thursday-Saturday 10 AM to 5 AM.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Turkish breakfast halal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Everything at Istanbul Mediterranean 2 is 100% Zabiha Halal certified. All meats are hand-slaughtered according to strict Islamic dietary laws. No pork or alcohol in any preparation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I order Turkish breakfast for delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, order breakfast for delivery through OrderDoner.com. For the best experience, we recommend dining in to enjoy the full Turkish breakfast ritual with Turkish tea.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between single and double breakfast plates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Single Plate ($20.95) is a complete Turkish breakfast for one. The Double Plate ($38.95) is a generous spread for two with larger portions, 2 eggs, and a borek pastry.",
          },
        },
      ],
    },
  ],
};
