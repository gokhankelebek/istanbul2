/** Dishes shown in the homepage "Most ordered" grid. Prices mirror lib/menu-data.ts. */
export type HomeDish = {
  name: string;
  description: string;
  price: string;
  image: string;
  /** Optional dish landing page */
  href?: string;
  tag?: string;
};

export const MOST_ORDERED: HomeDish[] = [
  {
    name: "Beef & Lamb Döner Turkish Pita",
    description: "Fresh-baked Turkish pita, carved döner, tomato, onion, house sauce.",
    price: "$15.95",
    image: "/images/Beef-and-Lamb-Doner-Shawarma-Turkish-Pita.webp",
    href: "/doner-kebab-las-vegas",
    tag: "Best seller",
  },
  {
    name: "Beef & Lamb Döner Rice Bowl",
    description: "Carved beef & lamb döner, Turkish rice, shepherd salad, garlic sauce.",
    price: "$21.95",
    image: "/images/menu/beef-lamb-doner-rice-bowl.webp",
  },
  {
    name: "Lahmacun",
    description: "Paper-thin crust, spiced minced meat, parsley and lemon to roll.",
    price: "$12.95",
    image: "/images/2026-march/food/lahmacun-pide-spread.webp",
    href: "/lahmacun",
    tag: "New to Vegas",
  },
  {
    name: "Sujuk & Cheese Pide",
    description: "Boat-shaped flatbread, spicy sujuk, melted cheese, baked hot.",
    price: "$19.95",
    image: "/images/2026-march/food/sucuk-pide-slices.webp",
    href: "/turkish-pide",
  },
  {
    name: "Iskender Kebab",
    description: "Döner over pita with tomato butter sauce and yogurt.",
    price: "$26.95",
    image: "/images/2026-march/food/iskender-plate.webp",
    href: "/iskender-kebab",
  },
  {
    name: "Double Breakfast Plate",
    description: "Cheeses, olives, honey, jams, eggs and fresh bread. Turkish tea pairs well.",
    price: "$44.95",
    image: "/images/DOUBLE BREAKFAST PLATE.webp",
    href: "/turkish-breakfast",
    tag: "Serves two",
  },
  {
    name: "Künefe",
    description: "Crisp shredded pastry, melted cheese, warm syrup.",
    price: "$11.95",
    image: "/images/menu/kunefe.webp",
    tag: "Served hot",
  },
  {
    name: "Double Pistachio Baklava",
    description: "Handmade from our bakery case, per piece.",
    price: "$2.45",
    image: "/images/menu/double-pistachio-baklava.webp",
  },
];
