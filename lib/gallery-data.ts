export type GalleryCategory =
  | "all"
  | "food"
  | "interior"
  | "exterior"
  | "opening";

export interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  width: number;
  height: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // Exterior
  {
    src: "/images/2026-march/fremont/fremont-exterior-night-505.webp",
    alt: "Istanbul Mediterranean Fremont Street exterior at night with 505 signage",
    category: "exterior",
    width: 1200,
    height: 800,
  },

  // Interior
  {
    src: "/images/fremont/d24561c8-8aea-4681-b32b-26c5f0de5ec6.JPG",
    alt: "Full restaurant view showing doner station and seating",
    category: "interior",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/2026-march/fremont/fremont-dining-room-wide.webp",
    alt: "Busy dining room with living green walls, arched windows, and mosaic tile floors",
    category: "interior",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/ambiance/dining-room-tea.webp",
    alt: "Guests enjoying dinner in the warmly lit dining room",
    category: "interior",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/ambiance/istanbul-coffee-cart.webp",
    alt: "Istanbul coffee cart corner with cozy booth seating",
    category: "interior",
    width: 1200,
    height: 800,
  },

  // Kitchen & Food
  {
    src: "/images/2026-march/fremont/fremont-open-kitchen-doner.webp",
    alt: "Open kitchen counter with doner kebab spit and guests ordering",
    category: "interior",
    width: 1200,
    height: 800,
  },

  // Food Photography
  {
    src: "/images/2026-march/food/lahmacun-pide-table.webp",
    alt: "Lahmacun and pide spread with Turkish tea at the table",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/food/lahmacun-closeup.webp",
    alt: "Fresh lahmacun closeup with toppings",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/food/doner-salad-plate.webp",
    alt: "Doner salad plate",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/food/iskender-hummus-table.webp",
    alt: "Iskender and hummus table spread",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/food/sucuk-pide-slices.webp",
    alt: "Sucuk pide slices",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/food/iskender-plate.webp",
    alt: "Iskender kebab plate",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/food/lahmacun-pide-spread.webp",
    alt: "Lahmacun and pide spread",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/food/appetizer-sampler.webp",
    alt: "Appetizer sampler plate",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/food/doner-bulgur-plate.webp",
    alt: "Doner with bulgur plate",
    category: "food",
    width: 1200,
    height: 800,
  },

  // Bakery & Desserts
  {
    src: "/images/2026-march/bakery/bakery-display-case-1.webp",
    alt: "Bakery display case showing Turkish pastries",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/bakery/bakery-display-case-2.webp",
    alt: "Bakery display case with baklava and desserts",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/bakery/baklava-tea.webp",
    alt: "Baklava served with Turkish tea",
    category: "food",
    width: 1200,
    height: 800,
  },

  // Breakfast
  {
    src: "/images/2026-march/breakfast/turkish-breakfast-spread.webp",
    alt: "Full Turkish breakfast spread with eggs, cheese, and fresh bread",
    category: "food",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/2026-march/breakfast/sucuk-eggs-skillet.webp",
    alt: "Sucuk and eggs in skillet",
    category: "food",
    width: 1200,
    height: 800,
  },

  // Grand Opening
  {
    src: "/images/opening/06c92965-511f-478e-a59a-b824f1dbcbe9.JPG",
    alt: "Grand Opening at Fremont Street",
    category: "opening",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/opening/2bd0c493-3509-4062-ac37-7b1b758333f5.JPG",
    alt: "Guests enjoying Turkish cuisine on opening day",
    category: "opening",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/opening/3c76e5b6-1673-48b3-b522-5ebc9e9af4cc.JPG",
    alt: "Fremont Street location interior on opening day",
    category: "opening",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/opening/46256f64-401e-4ce2-a956-9fa8b6ae24f3.JPG",
    alt: "Fresh Turkish food on opening day",
    category: "opening",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/opening/82b5fcd3-00da-4860-8436-43ab54666547.JPG",
    alt: "Istanbul Mediterranean Restaurant-2 Fremont Street",
    category: "opening",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/opening/c171bfca-e366-4596-8ebb-845f4bdd1921.JPG",
    alt: "Opening day celebrations",
    category: "opening",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/opening/cd4fa12d-9ce0-48b4-a712-bd859b98f6a6.JPG",
    alt: "Turkish cuisine at Fremont Street",
    category: "opening",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/opening/e873a69d-28ea-43d9-8e57-97669e985be9.JPG",
    alt: "Turkish restaurant Fremont Street",
    category: "opening",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/opening/IMG_5785.JPG",
    alt: "Opening day celebrations",
    category: "opening",
    width: 1200,
    height: 900,
  },
];

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "food", label: "Food & Drinks" },
  { id: "interior", label: "Interior" },
  { id: "exterior", label: "Exterior" },
  { id: "opening", label: "Grand Opening" },
];

export const OPENING_VIDEO_SRC =
  "/images/opening/c3b8e9b3-924e-4ebd-b6a1-48970feb9120.MP4";
