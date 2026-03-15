export interface DishStorySection {
  title: string;
  content: string;
  image: string;
  imageAlt: string;
}

export interface DishFaqItem {
  question: string;
  answer: string;
}

export interface DishMenuItem {
  name: string;
  description?: string;
  price: string;
  image?: string;
}

export interface DishMenuSection {
  title: string;
  subtitle?: string;
  items: DishMenuItem[];
}

export interface RelatedDish {
  name: string;
  slug: string;
  image: string;
}

export interface DishPageData {
  slug: string;
  turkishName: string;
  englishName: string;

  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogDescription: string;

  heroTag: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  heroCtaLabel: string;

  storyTag: string;
  storyHeading: string;
  storySubheading: string;
  storySections: DishStorySection[];

  menuSections: DishMenuSection[];

  faq: DishFaqItem[];

  relatedDishes: RelatedDish[];

  jsonLd: object;
}

function buildJsonLd(config: {
  slug: string;
  pageTitle: string;
  pageDescription: string;
  menuSectionName: string;
  menuItems: { name: string; description: string; price: string }[];
  faq: { question: string; answer: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.istanbul2.com/${config.slug}`,
        name: config.pageTitle,
        description: config.pageDescription,
        url: `https://www.istanbul2.com/${config.slug}`,
        isPartOf: { "@id": "https://www.istanbul2.com/#website" },
      },
      {
        "@type": "Restaurant",
        "@id": "https://www.istanbul2.com/#restaurant-fremont",
        name: "Istanbul Mediterranean Restaurant-2 (Halal)",
        servesCuisine: ["Turkish", "Mediterranean", "Halal"],
        hasMenu: {
          "@type": "Menu",
          hasMenuSection: {
            "@type": "MenuSection",
            name: config.menuSectionName,
            hasMenuItem: config.menuItems.map((item) => ({
              "@type": "MenuItem",
              name: item.name,
              description: item.description,
              offers: {
                "@type": "Offer",
                price: item.price,
                priceCurrency: "USD",
              },
              suitableForDiet: "https://schema.org/HalalDiet",
            })),
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: config.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

const RELATED: Record<string, RelatedDish> = {
  lahmacun: { name: "Lahmacun", slug: "lahmacun", image: "/images/2026-march/food/lahmacun-closeup.webp" },
  iskender: { name: "Iskender Kebab", slug: "iskender-kebab", image: "/images/2026-march/food/iskender-plate.webp" },
  pide: { name: "Turkish Pide", slug: "turkish-pide", image: "/images/2026-march/food/sucuk-pide-slices.webp" },
  kunefe: { name: "Kunefe", slug: "kunefe", image: "/images/2026-march/bakery/bakery-display-case-3.webp" },
  baklava: { name: "Turkish Baklava", slug: "turkish-baklava", image: "/images/2026-march/bakery/baklava-tea.webp" },
  menemen: { name: "Menemen", slug: "menemen", image: "/images/2026-march/breakfast/sucuk-eggs-skillet.webp" },
  gozleme: { name: "Gozleme", slug: "gozleme", image: "/images/2026-march/bakery/bakery-display-case-1.webp" },
  simit: { name: "Simit", slug: "simit", image: "/images/2026-march/bakery/bakery-display-case-1.webp" },
  suBorek: { name: "Su Borek", slug: "su-borek", image: "/images/2026-march/bakery/bakery-display-case-3.webp" },
  tea: { name: "Turkish Tea", slug: "turkish-tea", image: "/images/2026-march/ambiance/dining-room-tea.webp" },
  coffee: { name: "Turkish Coffee", slug: "turkish-coffee", image: "/images/2026-march/ambiance/istanbul-coffee-cart.webp" },
  ricePudding: { name: "Rice Pudding", slug: "rice-pudding", image: "/images/2026-march/bakery/bakery-display-case-3.webp" },
  breakfast: { name: "Turkish Breakfast", slug: "turkish-breakfast", image: "/images/2026-march/breakfast/turkish-breakfast-spread.webp" },
};

/* ────────────────────────────────────────────────────
   LAHMACUN
   ──────────────────────────────────────────────────── */

const lahmacun: DishPageData = {
  slug: "lahmacun",
  turkishName: "Lahmacun",
  englishName: "Lahmacun",

  metaTitle: "Lahmacun Las Vegas | Turkish Pizza at Istanbul Mediterranean 2",
  metaDescription:
    "Authentic Lahmacun (Turkish pizza) in Downtown Las Vegas. Paper-thin crispy dough with seasoned minced meat, fresh herbs, and lemon. Served daily at 505 Fremont Street. 100% Halal.",
  metaKeywords:
    "lahmacun Las Vegas, Turkish pizza Las Vegas, halal lahmacun near me, best lahmacun Fremont Street, Turkish flatbread Las Vegas, Mediterranean food Downtown Las Vegas",
  ogDescription:
    "Paper-thin, crispy, and bursting with flavor. Authentic Lahmacun — Turkey's beloved flatbread — now at 505 Fremont Street, Downtown Las Vegas. 100% Halal.",

  heroTag: "Turkey's Favorite Flatbread",
  heroTitle: "Lahmacun",
  heroHighlight: "in Downtown Las Vegas",
  heroSubtitle:
    "Paper-thin dough, seasoned minced meat, fresh herbs, a squeeze of lemon — the Turkish flatbread that puts pizza to shame.",
  heroImage: "/images/2026-march/food/lahmacun-closeup.webp",
  heroImageAlt: "Freshly baked Lahmacun at Istanbul Mediterranean 2 on Fremont Street",
  heroCtaLabel: "See Our Menu",

  storyTag: "Centuries of flavor",
  storyHeading: "What is Lahmacun?",
  storySubheading:
    "A crispy, paper-thin flatbread from southeastern Turkey that has conquered the entire country — and now, Las Vegas",

  storySections: [
    {
      title: "The Pride of Southeastern Turkey",
      content:
        "Lahmacun — literally \"meat with dough\" in Arabic — was born in the kitchens of Gaziantep and Şanlıurfa, where centuries of spice-trade culture created one of Turkey's most iconic street foods. Unlike pizza, lahmacun is rolled impossibly thin, spread with a fragrant mixture of hand-minced lamb or beef, tomatoes, peppers, onions, and a proprietary blend of spices, then fired in a blazing stone oven for barely two minutes.\n\nThe result is a crispy, almost cracker-like base with an intensely savory topping. Turks roll it around fresh parsley, sumac onions, and a generous squeeze of lemon — eating it by hand, standing at the counter, or gathered around a family table.",
      image: "/images/fremont/lahmacun.JPG",
      imageAlt: "Traditional Lahmacun being prepared at Istanbul Mediterranean 2",
    },
    {
      title: "Stone-Oven Fired at Fremont",
      content:
        "At Istanbul Mediterranean 2, every lahmacun is prepared fresh to order. The dough is rolled by hand to translucent thinness, topped with our seasoned meat blend, and fired at high heat until the edges curl and crisp. It arrives at your table within minutes — the way it's meant to be eaten.\n\nServed with a plate of fresh parsley, onion, and lemon wedges, our lahmacun at $12.95 is one of the best values on Fremont Street. Pair it with a cup of Turkish tea for the complete experience.",
      image: "/images/fremont/chef-lahmacun-oven.png",
      imageAlt: "Chef preparing Lahmacun in the stone oven at Istanbul Mediterranean 2",
    },
  ],

  menuSections: [
    {
      title: "Lahmacun",
      subtitle: "Traditional Turkish flatbreads baked fresh to order",
      items: [
        {
          name: "Lahmacun",
          description:
            "Flatbread with minced meat, tomatoes, peppers, herbs. Served with parsley, onion, lemon",
          price: "$12.95",
        },
      ],
    },
    {
      title: "Also from Our Oven",
      subtitle: "More Turkish flatbreads to explore",
      items: [
        {
          name: "Diced Meat & Cheese Pide",
          description: "Turkish flatbread topped with tender diced beef and melted cheese",
          price: "$17.95",
        },
        {
          name: "Sujuk & Cheese Pide",
          description: "Turkish flatbread topped with spicy sujuk sausage and melted cheese",
          price: "$17.95",
        },
        {
          name: "Doner & Cheese Pide",
          description: "Fan favorite — beef & lamb doner and melted cheese, baked fresh",
          price: "$19.95",
        },
      ],
    },
  ],

  faq: [
    {
      question: "What is Lahmacun?",
      answer:
        "Lahmacun is a traditional Turkish flatbread often called \"Turkish pizza,\" though it's quite different. It features paper-thin dough topped with seasoned minced meat, tomatoes, peppers, onions, and herbs, baked in a stone oven. It's served with fresh parsley, sumac onions, and lemon — rolled up and eaten by hand.",
    },
    {
      question: "Where can I get Lahmacun in Las Vegas?",
      answer:
        "Istanbul Mediterranean 2 at 505 Fremont Street serves authentic Lahmacun daily from 10 AM. Our lahmacun is prepared fresh to order and baked in our stone oven. We are one of the only restaurants in Las Vegas serving traditional Turkish lahmacun. 100% Zabiha Halal certified.",
    },
    {
      question: "Is Lahmacun like pizza?",
      answer:
        "While sometimes called \"Turkish pizza,\" Lahmacun is very different. The dough is rolled paper-thin (much thinner than any pizza), there's no cheese, and the topping is a finely minced meat-and-herb mixture. It's eaten rolled with fresh herbs and lemon, not sliced. Think of it as Turkey's answer to a crispy flatbread wrap.",
    },
    {
      question: "Is the Lahmacun at Istanbul Mediterranean 2 Halal?",
      answer:
        "Yes. All meat at Istanbul Mediterranean 2 is 100% Zabiha Halal certified. Our lahmacun is made with hand-slaughtered halal beef, with no pork or alcohol in any preparation.",
    },
  ],

  relatedDishes: [RELATED.pide, RELATED.iskender, RELATED.gozleme, RELATED.tea],

  jsonLd: buildJsonLd({
    slug: "lahmacun",
    pageTitle: "Lahmacun Las Vegas | Turkish Pizza at Istanbul Mediterranean 2",
    pageDescription:
      "Authentic Lahmacun in Downtown Las Vegas. Paper-thin crispy dough with seasoned minced meat, fresh herbs, and lemon. 100% Halal.",
    menuSectionName: "Lahmacun & Flatbreads",
    menuItems: [
      {
        name: "Lahmacun",
        description: "Flatbread with minced meat, tomatoes, peppers, herbs. Served with parsley, onion, lemon",
        price: "12.95",
      },
    ],
    faq: [
      { question: "What is Lahmacun?", answer: "Lahmacun is a traditional Turkish flatbread with paper-thin dough topped with seasoned minced meat, tomatoes, peppers, and herbs, baked in a stone oven and served with fresh parsley and lemon." },
      { question: "Where can I get Lahmacun in Las Vegas?", answer: "Istanbul Mediterranean 2 at 505 Fremont Street serves authentic Lahmacun daily from 10 AM. 100% Zabiha Halal certified." },
      { question: "Is the Lahmacun Halal?", answer: "Yes. All meat at Istanbul Mediterranean 2 is 100% Zabiha Halal certified." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   ISKENDER KEBAB
   ──────────────────────────────────────────────────── */

const iskender: DishPageData = {
  slug: "iskender-kebab",
  turkishName: "İskender Kebap",
  englishName: "Iskender Kebab",

  metaTitle: "Iskender Kebab Las Vegas | Istanbul Mediterranean 2 Fremont St",
  metaDescription:
    "Authentic Iskender Kebab in Downtown Las Vegas. Sliced doner over pita, tomato sauce, yoghurt, and melted butter. Served at 505 Fremont Street. 100% Halal.",
  metaKeywords:
    "Iskender kebab Las Vegas, Turkish kebab Las Vegas, halal kebab near me, best kebab Fremont Street, doner kebab Las Vegas, Turkish food Downtown Las Vegas",
  ogDescription:
    "The crown jewel of Turkish cuisine — sliced doner over pita, drenched in tomato butter sauce and creamy yoghurt. Now at 505 Fremont Street.",

  heroTag: "The Crown Jewel of Bursa",
  heroTitle: "Iskender Kebab",
  heroHighlight: "on Fremont Street",
  heroSubtitle:
    "Thinly sliced doner layered over warm pita, drenched in tomato butter sauce and creamy yoghurt — Turkey's most iconic plate.",
  heroImage: "/images/2026-march/food/iskender-plate.webp",
  heroImageAlt: "Iskender Kebab plate at Istanbul Mediterranean 2",
  heroCtaLabel: "See Our Menu",

  storyTag: "Born in Bursa",
  storyHeading: "What is Iskender Kebab?",
  storySubheading:
    "A 160-year-old masterpiece invented in Bursa — layers of doner, pita, sauce, and butter that define Turkish cuisine",

  storySections: [
    {
      title: "Invented in 1860s Bursa",
      content:
        "The Iskender Kebab was created by Iskender Efendi in the northwestern city of Bursa during the 1860s. His innovation was deceptively simple: take thinly sliced vertical-spit doner, lay it over pieces of fresh pide bread, ladle on a bright tomato sauce, add a generous dollop of creamy yoghurt, and finish with sizzling melted butter poured tableside.\n\nThe result was an entirely new category of Turkish cuisine — a dish so perfect that it became the signature meal of an entire city. To this day, Bursa restaurants serve Iskender on sizzling copper plates, and families make special trips just for this one dish.",
      image: "/images/fremont/iskender.JPG",
      imageAlt: "Iskender Kebab served on a traditional plate at Istanbul Mediterranean 2",
    },
    {
      title: "Our Iskender Experience",
      content:
        "At Istanbul Mediterranean 2, our Iskender Kebab ($26.95) is prepared with care that honors the original. We slice our fresh beef and lamb doner over warm, oven-baked pide bread, top it with our house tomato sauce, add a generous swirl of thick yoghurt, and finish with melted butter.\n\nEvery element matters — the quality of the doner, the freshness of the bread, the balance of tang from the yoghurt against the richness of the butter. It's a dish that rewards every bite, and it's one of the most-ordered items at our Fremont location.",
      image: "/images/2026-march/food/iskender-hummus-table.webp",
      imageAlt: "Iskender Kebab table setting with sides at Istanbul Mediterranean 2",
    },
  ],

  menuSections: [
    {
      title: "Istanbul Specials",
      subtitle: "Chef's signature dishes from the heart of Istanbul",
      items: [
        {
          name: "Iskender Kebab",
          description: "Sliced doner kebab over pita, topped with tomato sauce, yoghurt and melted butter",
          price: "$26.95",
        },
        {
          name: "Beyti Doner Kebab",
          description: "Seasoned doner wrapped in lavash, grilled, sliced and topped with tomato sauce and yoghurt",
          price: "$26.95",
        },
        {
          name: "Doner Box",
          description: "Sliced doner over crispy fries with lettuce, tomatoes and sumac onions",
          price: "$16.95",
        },
      ],
    },
  ],

  faq: [
    {
      question: "What is Iskender Kebab?",
      answer:
        "Iskender Kebab is a legendary Turkish dish from the city of Bursa, invented in the 1860s. It features thinly sliced doner kebab layered over warm pide bread, topped with a bright tomato sauce, creamy yoghurt, and finished with sizzling melted butter. It's one of Turkey's most celebrated dishes.",
    },
    {
      question: "Where can I get Iskender Kebab in Las Vegas?",
      answer:
        "Istanbul Mediterranean 2 at 505 Fremont Street serves authentic Iskender Kebab for $26.95. We prepare it daily with freshly sliced beef and lamb doner, house tomato sauce, yoghurt, and melted butter over warm pide bread. 100% Zabiha Halal certified.",
    },
    {
      question: "How is Iskender different from regular doner?",
      answer:
        "While regular doner is served in wraps, pitas, or bowls, Iskender is a plated dish. The doner is sliced over pieces of warm pide bread, then covered in tomato sauce, yoghurt, and melted butter. It's richer, more complex, and traditionally eaten with a knife and fork.",
    },
    {
      question: "Is the Iskender Kebab Halal?",
      answer:
        "Yes. All meats at Istanbul Mediterranean 2 are 100% Zabiha Halal certified, hand-slaughtered according to strict Islamic dietary laws. No pork or alcohol in any preparation.",
    },
  ],

  relatedDishes: [RELATED.lahmacun, RELATED.pide, RELATED.baklava, RELATED.tea],

  jsonLd: buildJsonLd({
    slug: "iskender-kebab",
    pageTitle: "Iskender Kebab Las Vegas | Istanbul Mediterranean 2",
    pageDescription: "Authentic Iskender Kebab in Downtown Las Vegas at 505 Fremont Street. 100% Halal.",
    menuSectionName: "Istanbul Specials",
    menuItems: [
      { name: "Iskender Kebab", description: "Sliced doner kebab over pita, topped with tomato sauce, yoghurt and melted butter", price: "26.95" },
      { name: "Beyti Doner Kebab", description: "Seasoned doner wrapped in lavash, grilled, sliced and topped with tomato sauce and yoghurt", price: "26.95" },
    ],
    faq: [
      { question: "What is Iskender Kebab?", answer: "Iskender Kebab features thinly sliced doner over warm pide bread, topped with tomato sauce, yoghurt, and melted butter. Created in 1860s Bursa." },
      { question: "Where can I get Iskender Kebab in Las Vegas?", answer: "Istanbul Mediterranean 2 at 505 Fremont Street serves Iskender Kebab daily. 100% Zabiha Halal." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   PIDE
   ──────────────────────────────────────────────────── */

const pide: DishPageData = {
  slug: "turkish-pide",
  turkishName: "Pide",
  englishName: "Turkish Pide",

  metaTitle: "Turkish Pide Las Vegas | Pide at Istanbul Mediterranean 2",
  metaDescription:
    "Authentic Turkish Pide in Downtown Las Vegas. Boat-shaped flatbread with six filling options — cheese, meat, sujuk, spinach, and more. 505 Fremont Street. 100% Halal.",
  metaKeywords:
    "Turkish pide Las Vegas, pide near me, Turkish flatbread Las Vegas, halal pide Las Vegas, best pide Fremont Street, Turkish pizza boat Las Vegas",
  ogDescription:
    "Boat-shaped, golden, and loaded with your choice of fillings. Authentic Turkish Pide baked fresh at 505 Fremont Street, Downtown Las Vegas.",

  heroTag: "Fresh from Our Oven",
  heroTitle: "Turkish Pide",
  heroHighlight: "Baked to Perfection",
  heroSubtitle:
    "Golden, boat-shaped flatbread loaded with your choice of fillings — six varieties, each baked fresh in our oven.",
  heroImage: "/images/2026-march/food/sucuk-pide-slices.webp",
  heroImageAlt: "Freshly baked Turkish Pide slices at Istanbul Mediterranean 2",
  heroCtaLabel: "See Our Pide Menu",

  storyTag: "A Turkish staple",
  storyHeading: "What is Pide?",
  storySubheading:
    "Turkey's beloved boat-shaped flatbread — a regional treasure from the Black Sea coast now baked fresh on Fremont Street",

  storySections: [
    {
      title: "The Boats of the Black Sea",
      content:
        "Pide originates from Turkey's Black Sea region, where bakers shape dough into elegant boat forms and fill them with everything from minced meat to local cheeses. The name comes from the Greek \"pita\" — but Turkish pide has evolved into something entirely its own: a thick, chewy flatbread with raised edges that cradle generous fillings.\n\nEvery region of Turkey has its own pide tradition. In Bafra, it's filled with minced meat; in Trabzon, the dough is closed like a calzone. At Istanbul Mediterranean 2, we honor these traditions while making pide accessible to Las Vegas diners with six distinct varieties.",
      image: "/images/fremont/pide.JPG",
      imageAlt: "Turkish Pide fresh from the oven at Istanbul Mediterranean 2",
    },
    {
      title: "Six Varieties, One Tradition",
      content:
        "Our pide menu ranges from the classic Cheese Pide ($14.95) — a simple celebration of melted cheese in golden dough — to our fan-favorite Doner & Cheese Pide ($19.95), which combines sliced beef and lamb doner with melted cheese for an unforgettable combination.\n\nFor something with a kick, try the Sujuk & Cheese Pide ($17.95), featuring spicy Turkish sausage. Each pide is hand-shaped and baked fresh to order, arriving at your table golden and bubbling.",
      image: "/images/2026-march/food/lahmacun-pide-table.webp",
      imageAlt: "Variety of Turkish Pide and flatbreads at Istanbul Mediterranean 2",
    },
  ],

  menuSections: [
    {
      title: "Turkish Pide",
      subtitle: "Traditional Turkish flatbreads baked fresh to order",
      items: [
        { name: "Cheese Pide", description: "Golden baked Turkish flatbread with melted cheese — crispy outside, soft inside", price: "$14.95" },
        { name: "Diced Meat & Cheese Pide", description: "Turkish flatbread topped with tender diced beef and melted cheese, baked to perfection", price: "$17.95" },
        { name: "Spinach & Feta Pide", description: "Traditional flatbread topped with sauteed spinach and creamy feta cheese", price: "$17.95" },
        { name: "Sujuk & Cheese Pide", description: "Turkish flatbread topped with spicy sujuk sausage and melted cheese", price: "$17.95" },
        { name: "Doner & Cheese Pide", description: "Fan favorite — beef & lamb doner and melted cheese, baked fresh", price: "$19.95" },
        { name: "Lahmacun", description: "Paper-thin flatbread with minced meat, tomatoes, peppers, herbs", price: "$12.95" },
      ],
    },
  ],

  faq: [
    {
      question: "What is Turkish Pide?",
      answer:
        "Pide is a traditional Turkish flatbread shaped like a boat, with raised edges that hold generous fillings. Think of it as Turkey's answer to pizza — but with thicker, chewier dough and a distinctive shape. Common fillings include cheese, minced meat, sujuk (Turkish sausage), spinach, and doner.",
    },
    {
      question: "Where can I get Turkish Pide in Las Vegas?",
      answer:
        "Istanbul Mediterranean 2 at 505 Fremont Street offers six varieties of authentic Turkish Pide, baked fresh to order daily from 10 AM. Prices range from $14.95 to $19.95. 100% Zabiha Halal certified.",
    },
    {
      question: "What is the most popular Pide?",
      answer:
        "Our Doner & Cheese Pide ($19.95) is the fan favorite — combining sliced beef and lamb doner with melted cheese on freshly baked flatbread. The Sujuk & Cheese Pide ($17.95) with spicy Turkish sausage is a close second.",
    },
    {
      question: "Is Pide different from pizza?",
      answer:
        "Yes. Turkish Pide has a thicker, chewier dough shaped into a boat form with raised edges. It uses different toppings (sujuk, Turkish cheeses, doner) and is baked at very high heat. There's no tomato sauce base — the fillings sit directly on the dough.",
    },
  ],

  relatedDishes: [RELATED.lahmacun, RELATED.iskender, RELATED.tea, RELATED.kunefe],

  jsonLd: buildJsonLd({
    slug: "turkish-pide",
    pageTitle: "Turkish Pide Las Vegas | Istanbul Mediterranean 2",
    pageDescription: "Authentic Turkish Pide in Downtown Las Vegas. Six varieties baked fresh at 505 Fremont Street. 100% Halal.",
    menuSectionName: "Turkish Pide",
    menuItems: [
      { name: "Cheese Pide", description: "Golden Turkish flatbread with melted cheese", price: "14.95" },
      { name: "Diced Meat & Cheese Pide", description: "Flatbread with diced beef and melted cheese", price: "17.95" },
      { name: "Sujuk & Cheese Pide", description: "Flatbread with spicy sujuk sausage and cheese", price: "17.95" },
      { name: "Doner & Cheese Pide", description: "Flatbread with doner and melted cheese", price: "19.95" },
    ],
    faq: [
      { question: "What is Turkish Pide?", answer: "Pide is a traditional Turkish boat-shaped flatbread with various fillings, baked in a stone oven." },
      { question: "Where can I get Turkish Pide in Las Vegas?", answer: "Istanbul Mediterranean 2 at 505 Fremont Street offers six varieties of Pide daily. 100% Halal." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   KUNEFE
   ──────────────────────────────────────────────────── */

const kunefe: DishPageData = {
  slug: "kunefe",
  turkishName: "Künefe",
  englishName: "Kunefe",

  metaTitle: "Kunefe Las Vegas | Turkish Dessert at Istanbul Mediterranean 2",
  metaDescription:
    "Warm, crispy Kunefe with melted cheese and sweet syrup in Downtown Las Vegas. Classic and pistachio varieties. 505 Fremont Street. 100% Halal.",
  metaKeywords:
    "kunefe Las Vegas, Turkish dessert Las Vegas, kunafa near me, best kunefe Downtown Las Vegas, halal dessert Las Vegas, Middle Eastern dessert Fremont Street",
  ogDescription:
    "Golden, crispy shredded pastry hiding a heart of melted cheese, soaked in sweet syrup. Warm Kunefe served daily at 505 Fremont Street.",

  heroTag: "Turkish Dessert Royalty",
  heroTitle: "Kunefe",
  heroHighlight: "Warm, Golden, Unforgettable",
  heroSubtitle:
    "Crispy shredded pastry, a molten cheese center, drenched in sweet syrup — Turkey's most spectacular dessert.",
  heroImage: "/images/2026-march/bakery/bakery-display-case-3.webp",
  heroImageAlt: "Turkish desserts including Kunefe at Istanbul Mediterranean 2",
  heroCtaLabel: "See Our Menu",

  storyTag: "A Hatay masterpiece",
  storyHeading: "What is Kunefe?",
  storySubheading:
    "A warm dessert from Turkey's Hatay province — crispy kadayif pastry, stretchy melted cheese, and golden syrup",

  storySections: [
    {
      title: "Born in Hatay",
      content:
        "Kunefe (also spelled kunafa or kanafeh) traces its origins to Hatay province in southeastern Turkey, where the blending of Turkish, Arabic, and Levantine cuisines created one of the world's great desserts. The concept is brilliantly simple: shredded kadayif pastry is layered around a special unsalted cheese, cooked until golden and crispy, then soaked in sweet syrup.\n\nThe magic is in the contrast. The exterior shatters with crunch, while the interior reveals stretchy, molten cheese. A drizzle of syrup unifies everything with sweetness, and a shower of crushed pistachios adds color and nuttiness. It must be eaten warm — this is a dessert that waits for no one.",
      image: "/images/2026-march/bakery/bakery-display-case-1.webp",
      imageAlt: "Freshly prepared Turkish desserts at Istanbul Mediterranean 2 bakery",
    },
    {
      title: "Two Ways at Fremont",
      content:
        "At Istanbul Mediterranean 2, we offer two kunefe experiences. Our Classic Kunefe ($11.95) is the traditional preparation — golden shredded pastry, melted cheese, and sweet syrup, served warm on a plate. For something extra special, our Kunefe Pistachio ($12.95) adds a generous layer of premium crushed pistachios for added richness and crunch.\n\nBoth are prepared to order and served immediately — because kunefe at its best is kunefe at its warmest. Pair it with a Turkish coffee for the perfect ending to your meal.",
      image: "/images/2026-march/ambiance/dining-room-tea.webp",
      imageAlt: "Warm dining atmosphere at Istanbul Mediterranean 2",
    },
  ],

  menuSections: [
    {
      title: "Kunefe",
      subtitle: "Served warm — prepared to order",
      items: [
        { name: "Kunefe", description: "Warm, cheesy kunefe with crispy shredded pastry, soaked in sweet syrup", price: "$11.95" },
        { name: "Kunefe Pistachio", description: "Golden, crispy kunefe filled with melted cheese, sweet syrup and crunchy pistachios", price: "$12.95" },
      ],
    },
    {
      title: "More Turkish Desserts",
      items: [
        { name: "Double Pistachio Baklava", description: "Flaky baklava loaded with pistachio filling and sweet syrup", price: "$2.45" },
        { name: "Rice Pudding", description: "Classic Turkish rice pudding, rich and creamy, lightly sweetened", price: "$7.95" },
      ],
    },
  ],

  faq: [
    {
      question: "What is Kunefe?",
      answer:
        "Kunefe (also called kunafa or kanafeh) is a traditional Turkish warm dessert made from shredded kadayif pastry layered around a special melted cheese, cooked until golden and crispy, then soaked in sweet syrup and topped with crushed pistachios. It's served warm for the best experience.",
    },
    {
      question: "Where can I get Kunefe in Las Vegas?",
      answer:
        "Istanbul Mediterranean 2 at 505 Fremont Street serves fresh Kunefe daily — both classic ($11.95) and pistachio ($12.95) varieties. Prepared to order and served warm. 100% Halal.",
    },
    {
      question: "Is Kunefe served warm or cold?",
      answer:
        "Kunefe is always served warm at Istanbul Mediterranean 2. It's prepared to order so you get it at its best — crispy on the outside with stretchy melted cheese on the inside. We recommend eating it immediately for the full experience.",
    },
    {
      question: "Is Kunefe Halal?",
      answer:
        "Yes. All food at Istanbul Mediterranean 2 is 100% Halal certified. Our Kunefe is made with halal-certified ingredients and no alcohol is used in any preparation.",
    },
  ],

  relatedDishes: [RELATED.baklava, RELATED.ricePudding, RELATED.coffee, RELATED.tea],

  jsonLd: buildJsonLd({
    slug: "kunefe",
    pageTitle: "Kunefe Las Vegas | Istanbul Mediterranean 2",
    pageDescription: "Warm, crispy Kunefe in Downtown Las Vegas at 505 Fremont Street. 100% Halal.",
    menuSectionName: "Desserts",
    menuItems: [
      { name: "Kunefe", description: "Warm kunefe with crispy shredded pastry and melted cheese, soaked in sweet syrup", price: "11.95" },
      { name: "Kunefe Pistachio", description: "Golden kunefe with melted cheese, sweet syrup and crushed pistachios", price: "12.95" },
    ],
    faq: [
      { question: "What is Kunefe?", answer: "Kunefe is a warm Turkish dessert made from shredded kadayif pastry, melted cheese, and sweet syrup, topped with pistachios." },
      { question: "Where can I get Kunefe in Las Vegas?", answer: "Istanbul Mediterranean 2 at 505 Fremont Street serves Kunefe daily. 100% Halal." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   BAKLAVA
   ──────────────────────────────────────────────────── */

const baklava: DishPageData = {
  slug: "turkish-baklava",
  turkishName: "Baklava",
  englishName: "Turkish Baklava",

  metaTitle: "Turkish Baklava Las Vegas | Istanbul Mediterranean 2 Fremont St",
  metaDescription:
    "Handcrafted Turkish Baklava in Downtown Las Vegas. Nine varieties with pistachios, walnuts, and chocolate. Fresh daily at 505 Fremont Street. 100% Halal.",
  metaKeywords:
    "Turkish baklava Las Vegas, baklava near me, best baklava Las Vegas, pistachio baklava Las Vegas, halal baklava, Mediterranean dessert Downtown Las Vegas",
  ogDescription:
    "Nine varieties of handcrafted Turkish Baklava — from classic pistachio to chocolate to Diyarbakir Burma. Fresh daily at 505 Fremont Street.",

  heroTag: "Handcrafted Daily",
  heroTitle: "Turkish Baklava",
  heroHighlight: "Nine Varieties, One Tradition",
  heroSubtitle:
    "Layers of flaky phyllo, premium nuts, and golden syrup — the world's most famous dessert, handcrafted fresh every day.",
  heroImage: "/images/2026-march/bakery/baklava-tea.webp",
  heroImageAlt: "Turkish Baklava served with tea at Istanbul Mediterranean 2",
  heroCtaLabel: "Explore Our Baklava",

  storyTag: "An Ottoman legacy",
  storyHeading: "The Art of Baklava",
  storySubheading:
    "From the palace kitchens of the Ottoman Empire to your table at 505 Fremont Street",

  storySections: [
    {
      title: "Perfected in Ottoman Palaces",
      content:
        "Baklava's history stretches across centuries and empires, but it was perfected in the palace kitchens of Istanbul's Topkapi. Ottoman pastry chefs competed to roll phyllo dough to translucent thinness — legend says a master baker could roll sheets thin enough to read a newspaper through. Layer after layer of this impossibly thin dough was brushed with butter, filled with ground pistachios or walnuts, and baked to golden perfection.\n\nThe finishing touch — a generous pour of sugar syrup or honey — transforms the crispy layers into a glistening, aromatic dessert. Turkish baklava is distinguished from other regional versions by its lighter syrup (never honey-heavy) and its emphasis on premium Gaziantep pistachios.",
      image: "/images/fremont/baklava.jpg",
      imageAlt: "Assortment of Turkish Baklava at Istanbul Mediterranean 2",
    },
    {
      title: "Nine Varieties, Fresh Daily",
      content:
        "At Istanbul Mediterranean 2, we don't settle for one style of baklava. Our bakery case features nine distinct varieties, each handcrafted fresh. Start with our Double Pistachio or Double Walnut classics ($2.45 each) — pure expressions of the art. Try the elegant Mussel Baklava ($3.95), shaped like a shell and filled with pistachios, or the Diyarbakir Burma ($7.95), a hand-rolled spiral from Turkey's southeast.\n\nFor something different, our Chocolate Baklava ($2.45) adds a modern twist, while the Shobyet ($3.95) features velvety semolina cream between flaky layers. Every piece is made with real butter, premium nuts, and golden syrup — never shortcuts.",
      image: "/images/baklava_.webp",
      imageAlt: "Close-up of handcrafted Turkish Baklava pieces",
    },
  ],

  menuSections: [
    {
      title: "Baklava Selection",
      subtitle: "Handcrafted daily — all prices per piece unless noted",
      items: [
        { name: "Double Pistachio Baklava", description: "Flaky baklava loaded with pistachio filling and sweet syrup", price: "$2.45" },
        { name: "Double Walnut Baklava", description: "Layered baklava packed with rich walnut filling and golden syrup", price: "$2.45" },
        { name: "Chocolate Baklava", description: "Rich chocolate baklava with nut filling and chocolate drizzle", price: "$2.45" },
        { name: "Carrot Baklava", description: "Delicate carrot-shaped baklava with pistachio filling", price: "$7.95" },
        { name: "Shobyet Pistachio Baklava", description: "Flaky phyllo with velvety semolina cream and pistachios", price: "$3.95" },
        { name: "Mussel Baklava", description: "Shell-shaped phyllo filled with ground pistachios", price: "$3.95" },
        { name: "Pistachio Roll", description: "Sponge cake rolled with pistachio cream and light syrup", price: "$3.95" },
        { name: "Kadayif Baklava", description: "Crispy shredded phyllo filled with pistachios, soaked in syrup", price: "$7.95" },
        { name: "Diyarbakir Burma", description: "Hand-rolled phyllo with pistachio filling, golden and sweet", price: "$7.95" },
      ],
    },
  ],

  faq: [
    {
      question: "What makes Turkish Baklava different?",
      answer:
        "Turkish baklava is distinguished by its lighter sugar syrup (rather than heavy honey), impossibly thin phyllo layers, real butter (never oil), and the use of premium Gaziantep pistachios or walnuts. It's crispier and less cloyingly sweet than other regional versions.",
    },
    {
      question: "How many types of Baklava does Istanbul Mediterranean 2 offer?",
      answer:
        "We offer nine varieties: Double Pistachio, Double Walnut, Chocolate, Carrot, Shobyet Pistachio, Mussel, Pistachio Roll, Kadayif, and Diyarbakir Burma. Prices range from $2.45 to $7.95. All handcrafted fresh daily.",
    },
    {
      question: "Is the Baklava fresh?",
      answer:
        "Yes. All baklava at Istanbul Mediterranean 2 is handcrafted fresh daily at our Fremont Street bakery. We use real butter, premium nuts, and traditional recipes. What you see in our bakery case was made that day.",
    },
    {
      question: "Is the Baklava Halal?",
      answer:
        "Yes. All food at Istanbul Mediterranean 2 is 100% Halal certified. Our baklava is made with halal-certified butter and ingredients, with no alcohol in any preparation.",
    },
  ],

  relatedDishes: [RELATED.kunefe, RELATED.coffee, RELATED.tea, RELATED.ricePudding],

  jsonLd: buildJsonLd({
    slug: "turkish-baklava",
    pageTitle: "Turkish Baklava Las Vegas | Istanbul Mediterranean 2",
    pageDescription: "Nine varieties of handcrafted Turkish Baklava in Downtown Las Vegas. Fresh daily at 505 Fremont Street.",
    menuSectionName: "Baklava",
    menuItems: [
      { name: "Double Pistachio Baklava", description: "Flaky baklava with pistachio filling", price: "2.45" },
      { name: "Double Walnut Baklava", description: "Layered baklava with walnut filling", price: "2.45" },
      { name: "Diyarbakir Burma", description: "Hand-rolled phyllo with pistachio filling", price: "7.95" },
    ],
    faq: [
      { question: "What makes Turkish Baklava different?", answer: "Turkish baklava uses lighter syrup, thinner phyllo, real butter, and premium Gaziantep pistachios. It's crispier and less sweet than other versions." },
      { question: "Is the Baklava fresh?", answer: "Yes. All baklava is handcrafted fresh daily at Istanbul Mediterranean 2." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   MENEMEN
   ──────────────────────────────────────────────────── */

const menemen: DishPageData = {
  slug: "menemen",
  turkishName: "Menemen",
  englishName: "Menemen",

  metaTitle: "Menemen Las Vegas | Turkish Eggs at Istanbul Mediterranean 2",
  metaDescription:
    "Authentic Menemen — Turkish scrambled eggs with tomatoes, peppers, and onions — in Downtown Las Vegas. Served daily at 505 Fremont Street. 100% Halal.",
  metaKeywords:
    "menemen Las Vegas, Turkish eggs Las Vegas, Turkish breakfast eggs, halal breakfast Las Vegas, best breakfast Fremont Street, menemen near me",
  ogDescription:
    "Sizzling eggs scrambled with tomatoes, green peppers, and onions — Turkey's beloved morning classic. Served daily at 505 Fremont Street.",

  heroTag: "The Turkish Morning Classic",
  heroTitle: "Menemen",
  heroHighlight: "Sizzling at Fremont Street",
  heroSubtitle:
    "Eggs scrambled with tomatoes, green peppers, and onions — Turkey's most beloved breakfast dish, served sizzling from the skillet.",
  heroImage: "/images/2026-march/breakfast/sucuk-eggs-skillet.webp",
  heroImageAlt: "Sizzling egg dish in a skillet at Istanbul Mediterranean 2",
  heroCtaLabel: "See the Breakfast Menu",

  storyTag: "A breakfast institution",
  storyHeading: "What is Menemen?",
  storySubheading:
    "Named after a town in Izmir — a simple, soul-warming dish that every Turkish family makes their own way",

  storySections: [
    {
      title: "Named After a Town in Izmir",
      content:
        "Menemen takes its name from a small town near Izmir on Turkey's Aegean coast. The dish is beautifully simple: eggs are scrambled in a pan with sauteed tomatoes, green peppers, and onions, seasoned with Turkish red pepper flakes and a touch of salt. It's cooked in a shallow copper or cast-iron pan and served sizzling, with crusty bread for dipping.\n\nThe great Turkish debate? Whether menemen should include onions. Purists from the Menemen region insist on no onions. At Istanbul Mediterranean 2, we include them — and we're not sorry. The sweetness of caramelized onions adds depth that makes our version irresistible.",
      image: "/images/fremont/kahvalti.JPG",
      imageAlt: "Turkish breakfast setting at Istanbul Mediterranean 2",
    },
    {
      title: "Fresh from the Skillet",
      content:
        "Our Menemen ($13.95) arrives at your table still sizzling in the pan, with a side of fresh bread for dipping and scooping. It's the kind of dish that makes you slow down — tearing off pieces of bread, scooping up eggs and tomatoes, and sipping Turkish tea between bites.\n\nIt's also the perfect gateway to Turkish breakfast. If you're new to the cuisine, menemen is familiar enough to feel like home — scrambled eggs, after all — but distinctive enough to show you just how much more breakfast can be.",
      image: "/images/2026-march/fremont/fremont-open-kitchen-doner.webp",
      imageAlt: "Open kitchen at Istanbul Mediterranean 2 Fremont Street",
    },
  ],

  menuSections: [
    {
      title: "Breakfast Favorites",
      subtitle: "Traditional Turkish breakfast — exclusive to the Fremont location",
      items: [
        { name: "Menemen", description: "Sauteed tomatoes, green peppers, onions and eggs — Turkish breakfast classic with bread", price: "$13.95" },
        { name: "Sujuk & Eggs", description: "Spicy Turkish beef sausage pan fried with eggs served with bread", price: "$13.95" },
        { name: "Single Breakfast Plate", description: "Full Turkish breakfast — honey, cream, eggs, olives, pastirma, cheese, simit", price: "$20.95" },
        { name: "Feta Mozzarella Omelette", description: "Feta and mozzarella cheese omelette served with bread", price: "$13.95" },
      ],
    },
  ],

  faq: [
    {
      question: "What is Menemen?",
      answer:
        "Menemen is a traditional Turkish breakfast dish of eggs scrambled with sauteed tomatoes, green peppers, and onions, seasoned with Turkish spices. It's named after the town of Menemen near Izmir and is served sizzling in a pan with fresh bread for dipping.",
    },
    {
      question: "Where can I get Menemen in Las Vegas?",
      answer:
        "Istanbul Mediterranean 2 at 505 Fremont Street serves authentic Menemen for $13.95, prepared fresh and served sizzling. Available daily from 10 AM. 100% Zabiha Halal certified.",
    },
    {
      question: "Is Menemen the same as Shakshuka?",
      answer:
        "While similar in concept, Menemen and Shakshuka are different dishes. Menemen uses scrambled (not poached) eggs, typically includes green peppers, and has a lighter consistency. Shakshuka features whole eggs poached in a heavier tomato sauce, often with cumin and paprika. Both are delicious — but Menemen is distinctly Turkish.",
    },
    {
      question: "Is Menemen available all day?",
      answer:
        "Yes. While Menemen is traditionally a breakfast dish, our breakfast menu is available throughout the day at our Fremont Street location. Hours: Sunday-Wednesday 10 AM to 2 AM, Thursday-Saturday 10 AM to 5 AM.",
    },
  ],

  relatedDishes: [RELATED.breakfast, RELATED.simit, RELATED.suBorek, RELATED.gozleme],

  jsonLd: buildJsonLd({
    slug: "menemen",
    pageTitle: "Menemen Las Vegas | Istanbul Mediterranean 2",
    pageDescription: "Authentic Menemen in Downtown Las Vegas. Served daily at 505 Fremont Street. 100% Halal.",
    menuSectionName: "Breakfast",
    menuItems: [
      { name: "Menemen", description: "Sauteed tomatoes, green peppers, onions and eggs with bread", price: "13.95" },
    ],
    faq: [
      { question: "What is Menemen?", answer: "Turkish eggs scrambled with tomatoes, green peppers, and onions, served sizzling with bread." },
      { question: "Where can I get Menemen in Las Vegas?", answer: "Istanbul Mediterranean 2 at 505 Fremont Street serves Menemen daily. 100% Halal." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   GOZLEME
   ──────────────────────────────────────────────────── */

const gozleme: DishPageData = {
  slug: "gozleme",
  turkishName: "Gözleme",
  englishName: "Gozleme",

  metaTitle: "Gozleme Las Vegas | Turkish Flatbread at Istanbul Mediterranean 2",
  metaDescription:
    "Authentic Gozleme — hand-rolled Turkish flatbread with six filling options — in Downtown Las Vegas. Cheese, spinach, meat, potato, and more. 505 Fremont Street. 100% Halal.",
  metaKeywords:
    "gozleme Las Vegas, Turkish flatbread Las Vegas, gozleme near me, halal gozleme, Turkish pastry Las Vegas, best gozleme Fremont Street",
  ogDescription:
    "Hand-rolled Turkish flatbread filled with your choice of cheese, spinach, ground beef, potato, or eggplant. Fresh at 505 Fremont Street.",

  heroTag: "Anatolian Village Tradition",
  heroTitle: "Gozleme",
  heroHighlight: "Six Fillings, One Love",
  heroSubtitle:
    "Hand-rolled flatbread cooked on a griddle with your choice of fillings — a centuries-old village tradition from the heart of Anatolia.",
  heroImage: "/images/2026-march/bakery/bakery-display-case-1.webp",
  heroImageAlt: "Fresh Turkish pastries at Istanbul Mediterranean 2 bakery",
  heroCtaLabel: "See Our Menu",

  storyTag: "Village roots",
  storyHeading: "What is Gozleme?",
  storySubheading:
    "Generations of Anatolian women have rolled yufka dough on a sac griddle — now their tradition lives on at Fremont Street",

  storySections: [
    {
      title: "The Taste of Rural Turkey",
      content:
        "Gozleme is one of Turkey's most beloved comfort foods, born in the villages of Anatolia where women would gather to roll paper-thin yufka dough, fill it with whatever was fresh — cheese from the morning milking, spinach from the garden, potatoes from the cellar — and cook it on a convex iron griddle called a sac.\n\nThe name comes from the Turkish word \"göz\" (eye), referring to the way the dough puffs up with \"eyes\" as it cooks. The result is crispy on the outside, soft and filled on the inside — a handheld meal that's been sustaining Turkish families for centuries.",
      image: "/images/fremont/dining-room-green-wall.png",
      imageAlt: "Dining room with living green walls at Istanbul Mediterranean 2",
    },
    {
      title: "Choose Your Filling",
      content:
        "At Istanbul Mediterranean 2, our Gozleme ($7.95) comes with six filling options: White Cheese, Mozzarella, Potato, Spinach and Cheese, Ground Beef, or Eggplant. Each is prepared with hand-rolled dough, filled generously, and cooked until golden and crispy on both sides.\n\nWhether you grab one as a quick snack or pair it with a cup of Turkish tea for a light meal, gozleme is one of the best values on our menu — and one of the most authentic Turkish experiences we offer.",
      image: "/images/2026-march/bakery/bakery-display-case-3.webp",
      imageAlt: "Fresh baked goods at Istanbul Mediterranean 2 bakery",
    },
  ],

  menuSections: [
    {
      title: "Gozleme",
      subtitle: "Hand-rolled Turkish flatbread — choose your filling",
      items: [
        { name: "Gozleme", description: "White Cheese, Mozzarella, Potato, Spinach and Cheese, Ground Beef, Eggplant", price: "$7.95" },
      ],
    },
    {
      title: "More from Our Bakery",
      items: [
        { name: "Su Borek", description: "Flaky layers of thin pastry filled with creamy cheese and herbs", price: "$8.95" },
        { name: "Simit", description: "Sesame crusted Turkish bread ring, crisp outside, soft inside", price: "$3.95" },
        { name: "Pogaca", description: "Classic, Cheese, Mozzarella, Potato, Olive", price: "$3.95" },
      ],
    },
  ],

  faq: [
    {
      question: "What is Gozleme?",
      answer:
        "Gozleme is a traditional Anatolian Turkish flatbread made from hand-rolled yufka dough, filled with various ingredients, and cooked on a griddle until golden and crispy. Common fillings include cheese, spinach, potato, ground beef, and eggplant. It's one of Turkey's most popular street foods.",
    },
    {
      question: "What fillings are available for Gozleme?",
      answer:
        "Istanbul Mediterranean 2 offers six Gozleme fillings: White Cheese, Mozzarella, Potato, Spinach and Cheese, Ground Beef, and Eggplant. All options are $7.95. The cheese and spinach-cheese varieties are vegetarian-friendly.",
    },
    {
      question: "Where can I get Gozleme in Las Vegas?",
      answer:
        "Istanbul Mediterranean 2 at 505 Fremont Street serves authentic Gozleme daily from 10 AM. Fresh-made with hand-rolled dough and your choice of six fillings for $7.95. 100% Zabiha Halal certified.",
    },
    {
      question: "Is Gozleme vegetarian-friendly?",
      answer:
        "Yes. Several of our Gozleme fillings are vegetarian: White Cheese, Mozzarella, Potato, Spinach and Cheese, and Eggplant. Only the Ground Beef option contains meat.",
    },
  ],

  relatedDishes: [RELATED.simit, RELATED.suBorek, RELATED.lahmacun, RELATED.menemen],

  jsonLd: buildJsonLd({
    slug: "gozleme",
    pageTitle: "Gozleme Las Vegas | Istanbul Mediterranean 2",
    pageDescription: "Authentic Gozleme with six filling options in Downtown Las Vegas. 505 Fremont Street. 100% Halal.",
    menuSectionName: "Pastries",
    menuItems: [
      { name: "Gozleme", description: "Hand-rolled Turkish flatbread with choice of filling", price: "7.95" },
    ],
    faq: [
      { question: "What is Gozleme?", answer: "Gozleme is a Turkish flatbread made from hand-rolled dough, filled and cooked on a griddle until golden." },
      { question: "What fillings are available?", answer: "White Cheese, Mozzarella, Potato, Spinach and Cheese, Ground Beef, and Eggplant. All $7.95." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   SIMIT
   ──────────────────────────────────────────────────── */

const simit: DishPageData = {
  slug: "simit",
  turkishName: "Simit",
  englishName: "Simit",

  metaTitle: "Simit Las Vegas | Turkish Sesame Bread at Istanbul Mediterranean 2",
  metaDescription:
    "Fresh Simit — Turkey's iconic sesame bread ring — baked daily in Downtown Las Vegas. Crisp, golden, and covered in sesame. 505 Fremont Street. 100% Halal.",
  metaKeywords:
    "simit Las Vegas, Turkish sesame bread Las Vegas, simit near me, Turkish bread Las Vegas, halal bakery Las Vegas, Turkish bakery Fremont Street",
  ogDescription:
    "Istanbul's most iconic street bread — crisp, golden, and covered in sesame seeds. Baked fresh daily at 505 Fremont Street, Downtown Las Vegas.",

  heroTag: "Istanbul's Street Icon",
  heroTitle: "Simit",
  heroHighlight: "Fresh Daily in Las Vegas",
  heroSubtitle:
    "Turkey's most iconic bread — a golden ring covered in sesame seeds, crisp on the outside, soft on the inside. Baked fresh every day.",
  heroImage: "/images/2026-march/bakery/bakery-display-case-1.webp",
  heroImageAlt: "Fresh baked Turkish pastries including simit at Istanbul Mediterranean 2",
  heroCtaLabel: "See Our Menu",

  storyTag: "Istanbul's beloved bread",
  storyHeading: "What is Simit?",
  storySubheading:
    "The unmistakable sesame bread ring that defines Istanbul's streets — now baked fresh at Fremont",

  storySections: [
    {
      title: "The Sound of Istanbul Mornings",
      content:
        "If you've ever walked the streets of Istanbul at dawn, you've heard it: vendors calling out \"Simit! Simit!\" while carrying towering stacks of golden bread rings on their heads or in glass-fronted carts. Simit is to Istanbul what the baguette is to Paris — the city's daily bread, its edible identity, its most democratic food.\n\nThe recipe hasn't changed in centuries. Dough is shaped into rings, dipped in grape molasses (pekmez), coated generously in sesame seeds, and baked until golden. The result is crispy on the outside, chewy on the inside, with a nutty depth from the toasted sesame. Turks eat more than 2.5 million simit per day.",
      image: "/images/2026-march/ambiance/dining-room-tea.webp",
      imageAlt: "Turkish tea service at Istanbul Mediterranean 2",
    },
    {
      title: "From Our Bakery to Your Table",
      content:
        "At Istanbul Mediterranean 2, our simit is baked fresh every morning in our Fremont Street bakery. At just $3.95, it's a taste of Istanbul that fits in your hand. Enjoy it on its own, with a cup of Turkish tea, or as part of our full Turkish breakfast where it comes alongside fresh cheeses, olives, honey, and cream.\n\nSimit is also the perfect companion to our breakfast plates — tear off pieces and dip them into honey, spread them with butter, or use them to scoop up menemen. It's the bread that makes Turkish breakfast complete.",
      image: "/images/fremont/dining-room-2.png",
      imageAlt: "Interior dining room at Istanbul Mediterranean 2",
    },
  ],

  menuSections: [
    {
      title: "Simit & Bakery Favorites",
      subtitle: "Fresh-baked Turkish pastries from our bakery",
      items: [
        { name: "Simit", description: "Sesame crusted Turkish bread ring, crisp outside, soft inside", price: "$3.95" },
        { name: "Pogaca", description: "Classic, Cheese, Mozzarella, Potato, Olive", price: "$3.95" },
        { name: "Acma", description: "Olive, Chocolate, Classic", price: "$3.95" },
        { name: "Gozleme", description: "Turkish flatbread with choice of filling", price: "$7.95" },
      ],
    },
  ],

  faq: [
    {
      question: "What is Simit?",
      answer:
        "Simit is Turkey's iconic sesame bread ring — a circular bread dipped in grape molasses and coated generously in sesame seeds, then baked until golden. It's crispy on the outside, soft and chewy on the inside. Turks eat over 2.5 million simit per day, making it the country's most popular bread.",
    },
    {
      question: "Where can I get Simit in Las Vegas?",
      answer:
        "Istanbul Mediterranean 2 at 505 Fremont Street bakes fresh simit daily. Available from 10 AM for just $3.95. Perfect on its own with Turkish tea or as part of our full Turkish breakfast experience.",
    },
    {
      question: "Is Simit like a bagel?",
      answer:
        "While similar in shape, simit and bagels are quite different. Simit uses grape molasses and sesame seeds, resulting in a lighter, crispier texture with a nutty sweetness. Bagels are boiled before baking, giving them a denser, chewier texture. Simit is also typically lighter and thinner.",
    },
    {
      question: "How is Simit traditionally eaten?",
      answer:
        "Simit is eaten throughout the day in Turkey, but it's most popular at breakfast. Turks enjoy it with Turkish tea, fresh white cheese, olives, and tomatoes. At Istanbul Mediterranean 2, you can enjoy it on its own or as part of our Turkish breakfast plates.",
    },
  ],

  relatedDishes: [RELATED.gozleme, RELATED.suBorek, RELATED.tea, RELATED.breakfast],

  jsonLd: buildJsonLd({
    slug: "simit",
    pageTitle: "Simit Las Vegas | Istanbul Mediterranean 2",
    pageDescription: "Fresh Simit baked daily in Downtown Las Vegas at 505 Fremont Street.",
    menuSectionName: "Bakery",
    menuItems: [
      { name: "Simit", description: "Sesame crusted Turkish bread ring", price: "3.95" },
    ],
    faq: [
      { question: "What is Simit?", answer: "Turkey's iconic sesame bread ring — crispy, golden, and baked fresh daily." },
      { question: "Where can I get Simit in Las Vegas?", answer: "Istanbul Mediterranean 2 at 505 Fremont Street. Fresh daily from 10 AM." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   SU BOREK
   ──────────────────────────────────────────────────── */

const suBorek: DishPageData = {
  slug: "su-borek",
  turkishName: "Su Böreği",
  englishName: "Su Borek",

  metaTitle: "Su Borek Las Vegas | Turkish Pastry at Istanbul Mediterranean 2",
  metaDescription:
    "Authentic Su Borek — flaky layers of Turkish pastry with creamy cheese filling — in Downtown Las Vegas. Fresh daily at 505 Fremont Street. 100% Halal.",
  metaKeywords:
    "su borek Las Vegas, Turkish borek Las Vegas, borek near me, Turkish pastry Las Vegas, halal pastry Las Vegas, Mediterranean bakery Downtown Las Vegas",
  ogDescription:
    "Flaky, buttery layers of thin pastry filled with creamy cheese and herbs. Authentic Su Borek fresh daily at 505 Fremont Street.",

  heroTag: "The Queen of Turkish Pastry",
  heroTitle: "Su Borek",
  heroHighlight: "Handmade at Fremont",
  heroSubtitle:
    "Impossibly thin layers of pastry, each one boiled then layered with creamy cheese — the most refined pastry in Turkish cuisine.",
  heroImage: "/images/2026-march/bakery/bakery-display-case-3.webp",
  heroImageAlt: "Turkish pastries at Istanbul Mediterranean 2 bakery display",
  heroCtaLabel: "See Our Menu",

  storyTag: "Ottoman craftsmanship",
  storyHeading: "What is Su Borek?",
  storySubheading:
    "\"Water pastry\" — thin dough sheets boiled before layering, creating the lightest, most delicate borek in Turkish tradition",

  storySections: [
    {
      title: "The Art of Water Pastry",
      content:
        "Su Böreği — literally \"water pastry\" — is the most refined member of Turkey's vast borek family. What makes it special is the technique: sheets of yufka dough are briefly boiled in salted water before being layered with butter and a mixture of fresh cheese, parsley, and herbs. This boiling step is what gives su borek its signature tender, almost silky texture that no other pastry can replicate.\n\nThe technique dates back to Ottoman court kitchens, where it was considered an art form. Making proper su borek requires patience, skill, and a feel for the dough that only comes with practice. Each layer must be paper-thin, properly boiled, and carefully stacked — shortcuts produce an entirely different (and inferior) result.",
      image: "/images/2026-march/bakery/bakery-display-case-1.webp",
      imageAlt: "Fresh pastries in the bakery display at Istanbul Mediterranean 2",
    },
    {
      title: "Fresh from Our Bakery",
      content:
        "At Istanbul Mediterranean 2, our Su Borek ($8.95) is prepared using the traditional method — thin pastry sheets boiled until just tender, layered with a creamy blend of cheese and fresh herbs, then baked until the top turns golden and the edges crisp. Each piece is cut fresh from a whole tray, ensuring you get those beautiful, visible layers.\n\nSu Borek is traditionally a breakfast pastry in Turkey, and it pairs perfectly with our Turkish tea. But it's equally satisfying as an afternoon snack or a light accompaniment to any meal.",
      image: "/images/fremont/dining-room-green-wall.png",
      imageAlt: "Cozy dining atmosphere at Istanbul Mediterranean 2",
    },
  ],

  menuSections: [
    {
      title: "Su Borek & Pastries",
      subtitle: "Fresh-baked Turkish pastries from our bakery",
      items: [
        { name: "Su Borek", description: "Flaky layers of thin pastry filled with creamy cheese and herbs", price: "$8.95" },
        { name: "Cigar Borek (4 pcs)", description: "Crispy Turkish filo rolls filled with feta cheese and fresh parsley", price: "$7.95" },
        { name: "Simit", description: "Sesame crusted Turkish bread ring, crisp outside, soft inside", price: "$3.95" },
        { name: "Gozleme", description: "Hand-rolled flatbread with choice of filling", price: "$7.95" },
      ],
    },
  ],

  faq: [
    {
      question: "What is Su Borek?",
      answer:
        "Su Böreği (water pastry) is a traditional Turkish layered pastry where sheets of thin dough are boiled in water before being layered with butter, cheese, and herbs, then baked until golden. The boiling technique gives it a uniquely tender, silky texture that sets it apart from other pastries.",
    },
    {
      question: "Where can I get Su Borek in Las Vegas?",
      answer:
        "Istanbul Mediterranean 2 at 505 Fremont Street serves authentic Su Borek ($8.95) baked fresh daily. Available from 10 AM. 100% Halal certified.",
    },
    {
      question: "What is inside Su Borek?",
      answer:
        "Our Su Borek is filled with a creamy blend of fresh cheese and herbs, layered between sheets of thin pastry that have been boiled for tenderness and baked until golden. It's a savory pastry — not sweet.",
    },
    {
      question: "Is Su Borek a breakfast food?",
      answer:
        "Traditionally, yes — Su Borek is one of Turkey's most popular breakfast pastries. At Istanbul Mediterranean 2, it's available all day, making it perfect for breakfast, a snack, or an accompaniment to your meal.",
    },
  ],

  relatedDishes: [RELATED.gozleme, RELATED.simit, RELATED.menemen, RELATED.tea],

  jsonLd: buildJsonLd({
    slug: "su-borek",
    pageTitle: "Su Borek Las Vegas | Istanbul Mediterranean 2",
    pageDescription: "Authentic Su Borek in Downtown Las Vegas. Fresh daily at 505 Fremont Street. 100% Halal.",
    menuSectionName: "Pastries",
    menuItems: [
      { name: "Su Borek", description: "Flaky layers of thin pastry filled with creamy cheese and herbs", price: "8.95" },
    ],
    faq: [
      { question: "What is Su Borek?", answer: "A traditional Turkish layered pastry with boiled dough, cheese, and herbs, baked until golden." },
      { question: "Where can I get Su Borek in Las Vegas?", answer: "Istanbul Mediterranean 2 at 505 Fremont Street. Fresh daily. 100% Halal." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   TURKISH TEA
   ──────────────────────────────────────────────────── */

const turkishTea: DishPageData = {
  slug: "turkish-tea",
  turkishName: "Çay",
  englishName: "Turkish Tea",

  metaTitle: "Turkish Tea Las Vegas | Cay at Istanbul Mediterranean 2",
  metaDescription:
    "Authentic Turkish tea (Çay) in Downtown Las Vegas. Rize black tea brewed in a traditional double teapot, served in tulip glasses. 505 Fremont Street.",
  metaKeywords:
    "Turkish tea Las Vegas, cay Las Vegas, Turkish tea near me, Turkish tea service Las Vegas, tea thermos Las Vegas, Mediterranean tea Downtown Las Vegas",
  ogDescription:
    "Rich, ruby-red Rize black tea brewed in a double teapot and served in tulip glasses. Turkish tea service daily at 505 Fremont Street.",

  heroTag: "More Than a Drink",
  heroTitle: "Turkish Tea",
  heroHighlight: "A Way of Life",
  heroSubtitle:
    "Ruby-red, brewed in a double teapot, served in tulip glasses — Turkey drinks more tea per capita than any country on earth.",
  heroImage: "/images/2026-march/ambiance/dining-room-tea.webp",
  heroImageAlt: "Turkish tea service at Istanbul Mediterranean 2",
  heroCtaLabel: "See Our Menu",

  storyTag: "The heartbeat of Turkey",
  storyHeading: "Why Turkish Tea?",
  storySubheading:
    "Turkey is the world's largest tea consumer per capita — and the ritual of çay is woven into every moment of daily life",

  storySections: [
    {
      title: "300 Million Cups a Day",
      content:
        "Turkey consumes more tea per person than any country in the world — roughly 300 million cups every single day. Turkish tea (çay) isn't just a beverage; it's the social glue of an entire nation. It's offered to guests as a sign of welcome, shared between shopkeepers and customers during negotiations, and poured endlessly at family breakfast tables on lazy weekend mornings.\n\nThe tea itself comes from the Rize province on Turkey's Black Sea coast, where misty mountain slopes produce a distinctive black tea. It's brewed using a çaydanlık — a stacked double teapot where a strong concentrate steeps on top while water boils below. Each cup is poured to strength, and always in a tulip-shaped glass that shows off the tea's jewel-like ruby color.",
      image: "/images/2026-march/bakery/baklava-tea.webp",
      imageAlt: "Turkish tea served alongside baklava at Istanbul Mediterranean 2",
    },
    {
      title: "Tea Service at Fremont",
      content:
        "At Istanbul Mediterranean 2, Turkish tea is a cornerstone of the experience. Order a single cup ($2.45) to accompany your meal, or settle in with a full Tea Thermos ($9.95) — enough for several cups, refilled with hot water so you can brew to your preferred strength.\n\nOur tea is brewed traditionally using a double teapot, served in authentic tulip glasses, and poured with care. Pair it with a simit for the most Istanbul breakfast possible, or enjoy it with a plate of baklava in the afternoon. No sugar is added — but sugar cubes are always on the table.",
      image: "/images/2026-march/ambiance/istanbul-coffee-cart.webp",
      imageAlt: "Istanbul-style coffee and tea cart at Istanbul Mediterranean 2",
    },
  ],

  menuSections: [
    {
      title: "Turkish Tea",
      subtitle: "Brewed traditionally in a double teapot",
      items: [
        { name: "Turkish Tea Cup", description: "Single tulip glass of Rize black tea", price: "$2.45" },
        { name: "Tea Thermos", description: "Full thermos for the table — multiple cups", price: "$9.95" },
      ],
    },
    {
      title: "More Beverages",
      items: [
        { name: "Turkish Coffee", description: "Traditional Turkish coffee brewed in a cezve", price: "$3.95" },
        { name: "Ayran", description: "Traditional Turkish yogurt drink", price: "$4.95" },
        { name: "Salgam", description: "Fermented turnip juice — a Turkish classic", price: "$4.95" },
      ],
    },
  ],

  faq: [
    {
      question: "What is Turkish Tea?",
      answer:
        "Turkish tea (çay) is a rich, ruby-red black tea from Turkey's Rize province. It's brewed in a çaydanlık (double teapot) — a strong concentrate steeps on top while water boils below. Served in tulip-shaped glasses without milk, it can be adjusted to taste from strong to light. Turkey is the world's largest tea consumer per capita.",
    },
    {
      question: "Can I get a Tea Thermos at Istanbul Mediterranean 2?",
      answer:
        "Yes. We offer a single Turkish Tea Cup for $2.45 or a full Tea Thermos for $9.95 — enough for several cups at the table. The thermos comes with hot water so you can brew to your preferred strength.",
    },
    {
      question: "What goes well with Turkish Tea?",
      answer:
        "Turkish tea pairs perfectly with everything on our menu. Traditional pairings include simit (sesame bread), baklava, su borek, and our full Turkish breakfast. It's also wonderful alongside savory dishes like pide and lahmacun.",
    },
    {
      question: "Is Turkish Tea caffeinated?",
      answer:
        "Yes. Turkish tea is a black tea and contains caffeine, similar to English breakfast or Earl Grey. The strength can be adjusted by adding more hot water to your cup — \"açık\" (light) or \"demli\" (strong).",
    },
  ],

  relatedDishes: [RELATED.coffee, RELATED.baklava, RELATED.simit, RELATED.kunefe],

  jsonLd: buildJsonLd({
    slug: "turkish-tea",
    pageTitle: "Turkish Tea Las Vegas | Istanbul Mediterranean 2",
    pageDescription: "Authentic Turkish tea brewed in a double teapot, served in tulip glasses. 505 Fremont Street.",
    menuSectionName: "Tea & Beverages",
    menuItems: [
      { name: "Turkish Tea Cup", description: "Single tulip glass of Rize black tea", price: "2.45" },
      { name: "Tea Thermos", description: "Full thermos for the table", price: "9.95" },
    ],
    faq: [
      { question: "What is Turkish Tea?", answer: "Ruby-red black tea from Rize province, brewed in a double teapot and served in tulip glasses." },
      { question: "Can I get a thermos?", answer: "Yes. Tea Thermos is $9.95 — enough for several cups." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   TURKISH COFFEE
   ──────────────────────────────────────────────────── */

const turkishCoffee: DishPageData = {
  slug: "turkish-coffee",
  turkishName: "Türk Kahvesi",
  englishName: "Turkish Coffee",

  metaTitle: "Turkish Coffee Las Vegas | Istanbul Mediterranean 2 Fremont St",
  metaDescription:
    "UNESCO-recognized Turkish Coffee in Downtown Las Vegas. Brewed in a traditional cezve, served with lokum. Plus Menenguc pistachio coffee. 505 Fremont Street.",
  metaKeywords:
    "Turkish coffee Las Vegas, turk kahvesi Las Vegas, Turkish coffee near me, cezve coffee Las Vegas, menenguc pistachio coffee, best coffee Fremont Street",
  ogDescription:
    "UNESCO Intangible Heritage in your cup. Turkish Coffee brewed in a cezve, served with foam, grounds, and tradition. Daily at 505 Fremont Street.",

  heroTag: "UNESCO Intangible Heritage",
  heroTitle: "Turkish Coffee",
  heroHighlight: "Brewed at Fremont Street",
  heroSubtitle:
    "500 years of tradition in every cup. Finely ground, slowly brewed in a cezve, served with foam and fortune — coffee the way it was meant to be.",
  heroImage: "/images/2026-march/ambiance/istanbul-coffee-cart.webp",
  heroImageAlt: "Turkish coffee cart at Istanbul Mediterranean 2",
  heroCtaLabel: "See Our Menu",

  storyTag: "500 years of tradition",
  storyHeading: "What is Turkish Coffee?",
  storySubheading:
    "The world's oldest coffee brewing method — recognized by UNESCO as an Intangible Cultural Heritage of Humanity",

  storySections: [
    {
      title: "The World's First Coffee Culture",
      content:
        "Turkish coffee isn't just a brewing method — it's a cultural institution that UNESCO inscribed as an Intangible Cultural Heritage of Humanity in 2013. Coffee first arrived in Istanbul from Yemen in the 15th century, and the Ottomans transformed it into an art form. The beans are ground to an impossibly fine powder, combined with cold water (and sugar to taste) in a small copper pot called a cezve, and slowly heated until a thick foam rises.\n\nThe coffee is poured unfiltered, grounds and all, into small cups. You sip slowly, and the grounds settle to the bottom — where, in Turkish tradition, they can be used to read your fortune. The saying goes: \"A cup of coffee commits one to forty years of friendship.\"",
      image: "/images/2026-march/ambiance/dining-room-tea.webp",
      imageAlt: "Beverage service area at Istanbul Mediterranean 2",
    },
    {
      title: "Our Coffee Menu",
      content:
        "At Istanbul Mediterranean 2, we offer traditional Turkish Coffee ($3.95) brewed to order in a cezve. Tell us your sugar preference: sade (no sugar), az şekerli (a little sugar), orta (medium), or çok şekerli (sweet). Each cup comes with the care and patience the tradition demands.\n\nFor something unique, try our Menenguc ($4.95) — a specialty pistachio coffee that blends finely ground pistachios with coffee for a nutty, aromatic experience unique to southeastern Turkey. It's one of the most unusual beverages you'll find in Las Vegas.",
      image: "/images/2026-march/fremont/fremont-open-kitchen-doner.webp",
      imageAlt: "Open kitchen at Istanbul Mediterranean 2",
    },
  ],

  menuSections: [
    {
      title: "Turkish Coffee & More",
      subtitle: "Traditional Turkish beverages brewed to order",
      items: [
        { name: "Turkish Coffee", description: "Brewed in a cezve — tell us your sugar preference", price: "$3.95" },
        { name: "Menenguc", description: "Pistachio coffee — a specialty from southeastern Turkey", price: "$4.95" },
        { name: "Single Shot Espresso", description: "For those who prefer Italian-style", price: "$4.95" },
        { name: "Double Shot Espresso", description: "Double the intensity", price: "$5.95" },
      ],
    },
  ],

  faq: [
    {
      question: "What is Turkish Coffee?",
      answer:
        "Turkish Coffee is the world's oldest coffee brewing method, recognized by UNESCO as an Intangible Cultural Heritage. Finely ground coffee is brewed slowly in a small copper pot (cezve) with water and optional sugar, producing a rich, foamy coffee served unfiltered. The grounds settle to the bottom of the cup.",
    },
    {
      question: "What is Menenguc coffee?",
      answer:
        "Menenguc (Menengiç) is a specialty pistachio coffee from southeastern Turkey. It's made from roasted wild pistachio (terebinth) nuts, creating a nutty, caffeine-free beverage. At Istanbul Mediterranean 2, we serve it for $4.95 — a unique drink you won't find at many places in Las Vegas.",
    },
    {
      question: "Where can I get Turkish Coffee in Las Vegas?",
      answer:
        "Istanbul Mediterranean 2 at 505 Fremont Street brews authentic Turkish Coffee ($3.95) to order in a traditional cezve. We also offer Menenguc pistachio coffee ($4.95). Available daily from 10 AM.",
    },
    {
      question: "How strong is Turkish Coffee?",
      answer:
        "Turkish Coffee is more concentrated than drip coffee but served in smaller portions (about 2-3 oz). You control the sweetness: sade (no sugar), az şekerli (a little), orta (medium), or çok şekerli (sweet). It's rich, aromatic, and meant to be sipped slowly.",
    },
  ],

  relatedDishes: [RELATED.tea, RELATED.baklava, RELATED.kunefe, RELATED.ricePudding],

  jsonLd: buildJsonLd({
    slug: "turkish-coffee",
    pageTitle: "Turkish Coffee Las Vegas | Istanbul Mediterranean 2",
    pageDescription: "UNESCO-recognized Turkish Coffee brewed in a cezve. 505 Fremont Street, Downtown Las Vegas.",
    menuSectionName: "Coffee",
    menuItems: [
      { name: "Turkish Coffee", description: "Traditional Turkish coffee brewed in a cezve", price: "3.95" },
      { name: "Menenguc", description: "Pistachio coffee from southeastern Turkey", price: "4.95" },
    ],
    faq: [
      { question: "What is Turkish Coffee?", answer: "The world's oldest coffee brewing method — finely ground coffee brewed in a cezve, served unfiltered with foam." },
      { question: "What is Menenguc?", answer: "A specialty pistachio coffee from southeastern Turkey made from roasted wild pistachio nuts." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   RICE PUDDING
   ──────────────────────────────────────────────────── */

const ricePudding: DishPageData = {
  slug: "rice-pudding",
  turkishName: "Sütlaç",
  englishName: "Rice Pudding",

  metaTitle: "Rice Pudding Las Vegas | Sutlac at Istanbul Mediterranean 2",
  metaDescription:
    "Authentic Turkish Rice Pudding (Sütlaç) in Downtown Las Vegas. Rich, creamy, and lightly sweetened with vanilla. Served daily at 505 Fremont Street. 100% Halal.",
  metaKeywords:
    "rice pudding Las Vegas, sutlac Las Vegas, Turkish rice pudding near me, halal dessert Las Vegas, Turkish dessert Las Vegas, best rice pudding Fremont Street",
  ogDescription:
    "Rich, creamy Turkish rice pudding (Sütlaç) — lightly sweetened with vanilla, served chilled. A timeless comfort dessert at 505 Fremont Street.",

  heroTag: "Turkey's Comfort Dessert",
  heroTitle: "Rice Pudding",
  heroHighlight: "Rich, Creamy, Timeless",
  heroSubtitle:
    "Sütlaç — Turkey's beloved rice pudding. Slow-cooked with milk, lightly sweetened with vanilla, and served as the perfect end to any meal.",
  heroImage: "/images/2026-march/bakery/bakery-display-case-3.webp",
  heroImageAlt: "Turkish desserts at Istanbul Mediterranean 2",
  heroCtaLabel: "See Our Menu",

  storyTag: "A national treasure",
  storyHeading: "What is Sütlaç?",
  storySubheading:
    "Turkey's most comforting dessert — simple ingredients, slow cooking, and generations of love in every spoonful",

  storySections: [
    {
      title: "Sütlaç: Simple and Perfect",
      content:
        "Sütlaç (pronounced SOOT-latch) is Turkish rice pudding — but if you think you know rice pudding, this will change your mind. Unlike the instant, grainy versions found elsewhere, Turkish sütlaç is slow-cooked with whole milk until the rice breaks down into a creamy, velvety texture. It's lightly sweetened, perfumed with vanilla, and served either chilled from a cup or baked until a golden skin forms on top.\n\nThe dish has been a staple of Turkish cuisine for centuries, appearing in Ottoman palace records and village kitchens alike. It's the dessert that every Turkish grandmother makes, the one that children request after school, and the one that adults order when they need something comforting and familiar.",
      image: "/images/2026-march/bakery/bakery-display-case-1.webp",
      imageAlt: "Dessert display at Istanbul Mediterranean 2 bakery",
    },
    {
      title: "Homemade at Fremont",
      content:
        "Our Rice Pudding ($7.95) is prepared in-house with a simple recipe that lets the quality of the ingredients shine: whole milk, short-grain rice, sugar, and real vanilla. No artificial flavors, no shortcuts. It's served chilled in a cup — creamy, smooth, and satisfying.\n\nIt's the perfect closer after a hearty meal of iskender or pide, a sweet companion to Turkish coffee, or a standalone treat any time of day. For those who want to explore more Turkish desserts, pair it with a piece of baklava for the full experience.",
      image: "/images/2026-march/ambiance/dining-room-tea.webp",
      imageAlt: "Relaxed dining atmosphere at Istanbul Mediterranean 2",
    },
  ],

  menuSections: [
    {
      title: "Rice Pudding & Desserts",
      subtitle: "Handcrafted Turkish sweets",
      items: [
        { name: "Rice Pudding", description: "Classic Turkish rice pudding, rich and creamy, lightly sweetened with vanilla", price: "$7.95" },
        { name: "Kunefe", description: "Warm, cheesy kunefe with crispy shredded pastry, soaked in sweet syrup", price: "$11.95" },
        { name: "Double Pistachio Baklava", description: "Flaky baklava loaded with pistachio filling", price: "$2.45" },
        { name: "Dubai Cheesecake", description: "Creamy cheesecake with pistachio, kunafa, and chocolate", price: "Market" },
      ],
    },
  ],

  faq: [
    {
      question: "What is Sütlaç?",
      answer:
        "Sütlaç is traditional Turkish rice pudding — slow-cooked with whole milk, short-grain rice, sugar, and vanilla until rich and creamy. It's one of Turkey's most beloved desserts, served chilled. The name literally means \"with milk\" in Turkish.",
    },
    {
      question: "Where can I get Turkish Rice Pudding in Las Vegas?",
      answer:
        "Istanbul Mediterranean 2 at 505 Fremont Street serves homemade Turkish Rice Pudding (Sütlaç) daily for $7.95. Made in-house with whole milk and real vanilla. 100% Halal certified.",
    },
    {
      question: "Is the Rice Pudding gluten-free?",
      answer:
        "Our Rice Pudding is made with rice, milk, sugar, and vanilla — no flour or wheat products. However, it is prepared in a kitchen that also handles wheat and gluten-containing products, so we cannot guarantee a fully gluten-free environment.",
    },
    {
      question: "Is the Rice Pudding served warm or cold?",
      answer:
        "Our Sütlaç is served chilled — the traditional way most Turkish rice pudding is enjoyed. It's a refreshing dessert that's perfect after a warm meal.",
    },
  ],

  relatedDishes: [RELATED.kunefe, RELATED.baklava, RELATED.coffee, RELATED.tea],

  jsonLd: buildJsonLd({
    slug: "rice-pudding",
    pageTitle: "Rice Pudding Las Vegas | Sutlac at Istanbul Mediterranean 2",
    pageDescription: "Authentic Turkish Rice Pudding (Sütlaç) in Downtown Las Vegas. 505 Fremont Street. 100% Halal.",
    menuSectionName: "Desserts",
    menuItems: [
      { name: "Rice Pudding", description: "Classic Turkish rice pudding, rich and creamy, lightly sweetened with vanilla", price: "7.95" },
    ],
    faq: [
      { question: "What is Sütlaç?", answer: "Traditional Turkish rice pudding slow-cooked with whole milk, rice, sugar, and vanilla." },
      { question: "Where can I get Turkish Rice Pudding in Las Vegas?", answer: "Istanbul Mediterranean 2 at 505 Fremont Street. Homemade daily. 100% Halal." },
    ],
  }),
};

/* ────────────────────────────────────────────────────
   EXPORT MAP
   ──────────────────────────────────────────────────── */

export const DISH_PAGES: Record<string, DishPageData> = {
  lahmacun,
  "iskender-kebab": iskender,
  "turkish-pide": pide,
  kunefe,
  "turkish-baklava": baklava,
  menemen,
  gozleme,
  simit,
  "su-borek": suBorek,
  "turkish-tea": turkishTea,
  "turkish-coffee": turkishCoffee,
  "rice-pudding": ricePudding,
};

export const ALL_DISH_SLUGS = Object.keys(DISH_PAGES);
