export interface CateringPackage {
  id: string;
  name: string;
  tagline: string;
  guestRange: string;
  priceNote: string;
  includes: string[];
  highlight?: boolean;
}

export interface CateringServiceStyle {
  id: string;
  title: string;
  description: string;
  bestFor: string;
  icon: "box" | "tray" | "buffet" | "moon";
}

export interface CateringMarket {
  id: string;
  title: string;
  description: string;
}

export const CATERING_MARKETS: CateringMarket[] = [
  {
    id: "construction",
    title: "Construction & Job Sites",
    description:
      "Reliable crew lunches delivered on schedule. Individually packaged meals keep the line moving — no mess, no downtime.",
  },
  {
    id: "corporate",
    title: "Offices & Corporate Lunches",
    description:
      "Impress clients and energize your team with fresh Mediterranean food. Healthy options, Halal-certified, always on time.",
  },
  {
    id: "conventions",
    title: "Conventions & Trade Shows",
    description:
      "Feed exhibitors, attendees, and booth staff at the LVCC, Sands Expo, or Downtown venues. Large-group capacity.",
  },
  {
    id: "private",
    title: "Private Events",
    description:
      "House parties, celebrations, and gatherings of any size. Family-style trays or individually boxed — your choice.",
  },
  {
    id: "birthday",
    title: "Birthday Parties",
    description:
      "Something different from the usual pizza run. Doner, pide, falafel, and baklava that guests actually remember.",
  },
  {
    id: "bachelor",
    title: "Bachelor & Bachelorette Parties",
    description:
      "Late-night crew fuel for Fremont and Downtown party weekends. We stay open until 2 AM Sun–Thu, 5 AM Fri–Sat.",
  },
  {
    id: "large-group",
    title: "Large Group Events",
    description:
      "50, 100, 200+ guests — we scale. Full-service setup, disposable serviceware, and dedicated coordination.",
  },
];

export const CATERING_SERVICE_STYLES: CateringServiceStyle[] = [
  {
    id: "boxed",
    title: "Individually Packaged Meals",
    description:
      "Each guest receives a complete meal in its own container — perfect for offices, construction sites, and events where people eat at different times.",
    bestFor: "Offices, job sites, conventions",
    icon: "box",
  },
  {
    id: "family-style",
    title: "Family-Style Trays",
    description:
      "Large sharing platters of doner, rice, salads, pide, and sides. Guests serve themselves — ideal for parties and team gatherings.",
    bestFor: "Private events, birthdays, team lunches",
    icon: "tray",
  },
  {
    id: "buffet",
    title: "Hot Buffet Setup",
    description:
      "Full hot buffet with chafing dishes, setup, and breakdown. Our team delivers, sets up, and can stay for service on larger events.",
    bestFor: "Corporate events, weddings, large celebrations",
    icon: "buffet",
  },
  {
    id: "late-night",
    title: "Late-Night Crew Catering",
    description:
      "Hospitality workers, production crews, and after-hours events. We are one of the few caterers in Las Vegas open past midnight.",
    bestFor: "Bachelor parties, shift crews, late events",
    icon: "moon",
  },
];

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: "office-lunch",
    name: "Office Lunch Box",
    tagline: "Individual boxed meals — ready to grab and go",
    guestRange: "10 – 50 guests",
    priceNote: "Starting at $16.95 / person",
    includes: [
      "Choice of Beef & Lamb, Chicken, or Falafel",
      "Turkish pita or lavash wrap with fresh toppings",
      "Side of hummus or rice",
      "Individually packaged with utensils & napkins",
    ],
  },
  {
    id: "mediterranean-spread",
    name: "Mediterranean Spread",
    tagline: "Family-style trays for sharing",
    guestRange: "15 – 75 guests",
    priceNote: "Starting at $18.95 / person",
    includes: [
      "Doner kebab tray (beef & lamb or chicken)",
      "Turkish rice or bulgur pilaf",
      "Hummus, babaganoush, and fresh pita",
      "Mixed green salad with sumac dressing",
      "Baklava assortment for dessert",
    ],
    highlight: true,
  },
  {
    id: "turkish-feast",
    name: "Turkish Feast",
    tagline: "Our signature full-spread catering package",
    guestRange: "25 – 150+ guests",
    priceNote: "Custom quote — call for pricing",
    includes: [
      "Iskender kebab or Beyti doner (carved to order)",
      "Assorted Turkish pide (sujuk, cheese, doner & cheese)",
      "Lahmacun station with fresh herbs & lemon",
      "Appetizer sampler: falafel, borek, grape leaves",
      "Turkish tea service or ayran",
      "Full setup, serviceware, and breakdown included",
    ],
  },
  {
    id: "late-night-crew",
    name: "Late-Night Crew Pack",
    tagline: "Fuel for hospitality workers and night crews",
    guestRange: "10 – 100 guests",
    priceNote: "Starting at $15.95 / person",
    includes: [
      "Doner box or pita platters",
      "French fries or rice bowls",
      "Individually packaged for shift handoffs",
      "Delivery as late as 1 AM (Fri–Sat until 4 AM)",
    ],
  },
];

export const CATERING_MENU_SECTIONS = [
  {
    title: "Proteins",
    items: [
      "Beef & Lamb Doner Kebab",
      "Chicken Doner",
      "Falafel (vegetarian)",
      "Iskender Kebab (carved)",
      "Beyti Doner Kebab",
    ],
  },
  {
    title: "Build-Your-Own Stations",
    items: [
      "Turkish Pita Bar (pita, doner, toppings, sauces)",
      "Lavash Wrap Bar",
      "Rice Bowl Station",
      "Salad Bowl Station",
    ],
  },
  {
    title: "Turkish Specialties",
    items: [
      "Lahmacun (Turkish pizza)",
      "Assorted Pide (sujuk, cheese, spinach & feta, doner & cheese)",
      "Turkish Breakfast Spread (Kahvalti)",
      "Menemen & Sujuk & Eggs",
    ],
  },
  {
    title: "Appetizers & Sides",
    items: [
      "Hummus & Pita",
      "Falafel Platter",
      "Cigar Borek",
      "Stuffed Grape Leaves",
      "Red Lentil Soup",
      "Mixed Green Salad",
      "French Fries",
    ],
  },
  {
    title: "Desserts & Beverages",
    items: [
      "Assorted Baklava",
      "Kunefe (hot, made to order for 20+ guests)",
      "Turkish Tea Service",
      "Ayran (yogurt drink)",
      "Bottled water & soft drinks",
    ],
  },
];

export const CATERING_WHY_US = [
  {
    title: "100% Zabiha Halal",
    description:
      "Every protein is hand-slaughtered Halal. No pork, no alcohol — ever. Safe for your entire team and every guest.",
  },
  {
    title: "Fresh, Never Frozen",
    description:
      "Doner is carved daily from our vertical rotisseries. Pide is baked to order. Nothing sits under a heat lamp.",
  },
  {
    title: "Healthy Options",
    description:
      "Salad bowls, grilled proteins, hummus, and fresh vegetables alongside indulgent favorites. Something for every diet.",
  },
  {
    title: "Fast & Reliable",
    description:
      "We know Las Vegas runs on deadlines. On-time delivery is non-negotiable — construction crews and convention schedules depend on it.",
  },
  {
    title: "Flexible Formats",
    description:
      "Individually boxed, family-style trays, or full buffet setup. Mix and match proteins and formats for your event.",
  },
  {
    title: "Late-Night Available",
    description:
      "Open until 2 AM Sun–Thu and 5 AM Fri–Sat. One of the only caterers in Las Vegas serving past midnight.",
  },
];

export const CATERING_PROCESS = [
  {
    step: "1",
    title: "Tell Us About Your Event",
    description:
      "Fill out the inquiry form below or call us. Share your date, guest count, venue, and any dietary needs.",
  },
  {
    step: "2",
    title: "Receive a Custom Quote",
    description:
      "Our catering team responds within 24 hours (often same day) with menu options and pricing tailored to your event.",
  },
  {
    step: "3",
    title: "Confirm & Pay Deposit",
    description:
      "Lock in your date with a deposit. We finalize the menu, delivery time, and setup details.",
  },
  {
    step: "4",
    title: "We Deliver & Set Up",
    description:
      "Fresh food arrives on time, beautifully presented. We handle setup — you focus on your event.",
  },
];

export const CATERING_FAQ = [
  {
    question: "What areas of Las Vegas do you cater to?",
    answer:
      "We deliver throughout the Las Vegas Valley — Downtown, the Strip, Henderson, Summerlin, North Las Vegas, and convention centers including LVCC. Delivery fees vary by distance; ask for a quote.",
  },
  {
    question: "What is the minimum order for catering?",
    answer:
      "Our minimum catering order is 10 guests. For smaller groups, we recommend ordering pickup from our Cash App ordering page or dining in at 505 Fremont Street.",
  },
  {
    question: "How far in advance should I book catering?",
    answer:
      "We recommend 48–72 hours for standard orders. For events of 50+ guests or full buffet setup, please book at least one week ahead. Last-minute requests are often possible — call us.",
  },
  {
    question: "Do you offer individually packaged meals?",
    answer:
      "Yes. Individually boxed meals are one of our most popular formats for offices, construction sites, and conventions. Each box includes a complete meal with utensils and napkins.",
  },
  {
    question: "Is your catering Halal certified?",
    answer:
      "Yes. All catering from Istanbul Mediterranean 2 is 100% Zabiha Halal. Beef, lamb, and chicken are hand-slaughtered according to Islamic dietary law. No pork or alcohol in any preparation.",
  },
  {
    question: "Can you cater late-night events?",
    answer:
      "Yes. We are open until 2 AM Sunday through Thursday and until 5 AM Friday and Saturday — making us one of the few caterers in Las Vegas available for late-night crew meals, bachelor parties, and after-hours events.",
  },
  {
    question: "What proteins and dietary options are available?",
    answer:
      "Beef & lamb doner, chicken doner, falafel (vegetarian), Iskender kebab, Beyti kebab, and assorted Turkish pide. We accommodate Halal, vegetarian, and many dairy-free requests.",
  },
  {
    question: "How do I get a catering quote?",
    answer:
      "Fill out the inquiry form on this page, email catering@istanbul2.com, or call (702) 861-6905. We respond within 24 hours with a custom quote.",
  },
];

export interface CateringVideo {
  /** YouTube video ID — the part after `watch?v=`, `/shorts/`, or `youtu.be/` */
  youtubeId: string;
  title: string;
  description: string;
  /** "portrait" for vertical Shorts (9:16), "landscape" for normal 16:9 */
  orientation?: "portrait" | "landscape";
}

// To add a video: upload to YouTube (public), copy the ID from the URL, and
// add an entry below. Set orientation to "portrait" for vertical Shorts.
//   • Normal video: youtube.com/watch?v=ABC123        → "ABC123"
//   • Short:        youtube.com/shorts/ABC123         → "ABC123" (portrait)
export const CATERING_VIDEOS: CateringVideo[] = [
  {
    youtubeId: "jEaHgAtEEVs",
    title: "Catering, On the Line",
    description: "Fresh Turkish catering off our Fremont Street kitchen.",
    orientation: "portrait",
  },
];

export const CATERING_EVENT_TYPES = [
  "Corporate / Office Lunch",
  "Construction / Job Site",
  "Convention / Trade Show",
  "Private Party",
  "Birthday Party",
  "Bachelor / Bachelorette Party",
  "Wedding / Reception",
  "Holiday Party",
  "Other",
] as const;

export const CATERING_SERVICE_TYPE_OPTIONS = [
  "Individually Packaged Meals",
  "Family-Style Trays",
  "Hot Buffet Setup",
  "Late-Night Crew Pack",
  "Not Sure — Need Recommendations",
] as const;

export const CATERING_GUEST_COUNTS = [
  "10 – 25",
  "26 – 50",
  "51 – 100",
  "101 – 200",
  "200+",
] as const;
