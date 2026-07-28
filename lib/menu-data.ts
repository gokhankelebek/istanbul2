export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  image?: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "doner-shawarma",
    title: "Döner & Shawarma",
    subtitle:
      "Authentic Turkish döner (shawarma) carved fresh — sauces: tzatziki, tahini, house, garlic or chili",
    items: [
      // Turkish Pita
      {
        name: "Beef & Lamb Döner (Shawarma) Turkish Pita",
        description:
          "Served in warm, oven-baked Turkish pita with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$15.95",
        image: "/images/beef-and-lamb-turkish-pita.webp",
      },
      {
        name: "Chicken Döner (Shawarma) Turkish Pita",
        description:
          "Served in warm, oven-baked Turkish pita with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$15.95",
        image: "/images/Chicken-Doner-Shawarma-Turkish-Pita.webp",
      },
      {
        name: "Mixed Döner (Shawarma) Turkish Pita",
        description:
          "Beef & Lamb + Chicken in warm Turkish pita with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$16.95",
        image: "/images/Mixed-Doner-Beef-and-Lamb-and-Chicken-Shawarma-Turkish-Pita.webp",
      },
      {
        name: "Falafel Turkish Pita",
        description:
          "Crispy falafel in warm Turkish pita with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$15.95",
        image: "/images/Falafel-Turkish-Pita.webp",
      },
      // Pita
      {
        name: "Beef & Lamb Döner (Shawarma) Pita",
        description:
          "Served with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$14.95",
        image: "/images/beef-and-lamb-pita.webp",
      },
      {
        name: "Chicken Döner (Shawarma) Pita",
        description:
          "Served with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$14.95",
        image: "/images/chicken-pita.webp",
      },
      {
        name: "Mixed Döner (Shawarma) Pita",
        description:
          "Beef & Lamb + Chicken with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$15.95",
        image: "/images/Mixed-Doner-Beef-and-Lamb-and-Chicken-Shawarma-Pita.webp",
      },
      {
        name: "Falafel Pita",
        description:
          "Served with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$14.95",
        image: "/images/falafel-pita.webp",
      },
      // Wraps
      {
        name: "Beef & Lamb Döner (Shawarma) Wrap",
        description:
          "Wrapped in lavash with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$14.95",
        image: "/images/beef-and-lamb-wrap.webp",
      },
      {
        name: "Chicken Döner (Shawarma) Wrap",
        description:
          "Wrapped in lavash with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$14.95",
        image: "/images/chicken-wrap.webp",
      },
      {
        name: "Mixed Döner (Shawarma) Wrap",
        description:
          "Beef & Lamb + Chicken wrapped in lavash with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$15.95",
        image: "/images/Mixed-Doner-Beef-and-Lamb-and-Chicken-Shawarma-Lavash-Wrap.webp",
      },
      {
        name: "Falafel Wrap",
        description:
          "Wrapped in lavash with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$14.95",
        image: "/images/falafel-wrap.webp",
      },
      {
        name: "Chikofte Wrap",
        description:
          "Spicy bulgur balls wrapped in lavash with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and your choice of sauce",
        price: "$14.95",
        image: "/images/chikofte-wrap.webp",
      },
      // Rice Bowl
      {
        name: "Beef & Lamb Döner (Shawarma) Rice Bowl",
        description:
          "Your choice of protein over fluffy rice with lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$21.95",
        image: "/images/Beef-and-Lamb-Doner-Shawarma-Rice-Bowl.webp",
      },
      {
        name: "Chicken Döner (Shawarma) Rice Bowl",
        description:
          "Chicken doner over fluffy rice with lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$21.95",
        image: "/images/Chicken-Doner-Shawarma-Rice-Bowl.webp",
      },
      {
        name: "Mixed Döner (Shawarma) Rice Bowl",
        description:
          "Beef & Lamb + Chicken over fluffy rice with lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$22.95",
        image: "/images/Mixed-Doner-Beef-and-Lamb-and-Chicken-Shawarma-Rice-Bowl.webp",
      },
      {
        name: "Falafel Rice Bowl",
        description:
          "Falafel over fluffy rice with lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$21.95",
        image: "/images/falafel-rice-bowl.webp",
      },
      // Fries Bowl
      {
        name: "Beef & Lamb Döner (Shawarma) Fries Bowl",
        description:
          "Your choice of protein over crispy fries with lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$21.95",
        image: "/images/beef-and-lamb-fries-bowl.webp",
      },
      {
        name: "Chicken Döner (Shawarma) Fries Bowl",
        description:
          "Chicken doner over crispy fries with lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$21.95",
        image: "/images/Chicken-Doner-Shawarma-French-Fries-Bowl.webp",
      },
      {
        name: "Mixed Döner (Shawarma) Fries Bowl",
        description:
          "Beef & Lamb + Chicken over crispy fries with lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$22.95",
        image: "/images/mixed-fries-bowl.webp",
      },
      {
        name: "Falafel Fries Bowl",
        description:
          "Falafel over crispy fries with lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$21.95",
        image: "/images/Falafel-French-Fries-Bowl.webp",
      },
      // Salad Bowl
      {
        name: "Beef & Lamb Döner (Shawarma) Salad Bowl",
        description:
          "A lighter option with doner over lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$21.95",
        image: "/images/beef-and-lamb-salad-bowl.webp",
      },
      {
        name: "Chicken Döner (Shawarma) Salad Bowl",
        description:
          "Chicken doner over lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$21.95",
        image: "/images/Chicken-Doner-Shawarma-Salad-Bowl.webp",
      },
      {
        name: "Mixed Döner (Shawarma) Salad Bowl",
        description:
          "Beef & Lamb + Chicken over lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$22.95",
        image: "/images/mixed-salad-bowl.webp",
      },
      {
        name: "Falafel Salad Bowl",
        description:
          "Falafel over lettuce, tomatoes, onions, red cabbage, cucumbers, fresh bread and your choice of sauce",
        price: "$21.95",
        image: "/images/falafel-salad-bowl.webp",
      },
    ],
  },
  {
    id: "pide",
    title: "Fresh from the Oven",
    subtitle: "Traditional Turkish flatbreads baked fresh to order",
    image: "/images/2026-march/food/sucuk-pide-slices.webp",
    items: [
      {
        name: "Diced Meat & Cheese Pide",
        description:
          "Turkish style flatbread topped with tender diced beef and melted cheese, baked to perfection",
        price: "$19.95",
        image: "/images/diced-meat-cheese-pide.webp",
      },
      {
        name: "Cheese Pide",
        description:
          "Golden baked Turkish flatbread with melted cheese — crispy outside, soft inside",
        price: "$19.95",
        image: "/images/cheese-pide.webp",
      },
      {
        name: "Spinach & Cheese Pide",
        description:
          "Turkish flatbread topped with sauteed spinach and creamy cheese, baked fresh",
        price: "$19.95",
        image: "/images/spinach-and-feta-pide.webp",
      },
      {
        name: "Sujuk & Cheese Pide",
        description:
          "Turkish flatbread topped with spicy sujuk sausage and melted cheese, baked fresh",
        price: "$19.95",
        image: "/images/sujuk-and-cheese-pide.webp",
      },
      {
        name: "Lahmacun",
        description:
          "Crispy, stone oven thin crust topped with a savory, spiced blend of minced meat. Served traditional style with fresh parsley, sumac onions and lemon wedge for rolling",
        price: "$12.95",
        image: "/images/lahmacun.webp",
      },
      {
        name: "Doner & Cheese Pide",
        description:
          "Turkish flatbread filled with beef & lamb doner and melted cheese, baked fresh",
        price: "$19.95",
        image: "/images/doner-cheese-pide.webp",
      },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers & Sides",
    subtitle: "Start your meal with authentic Turkish flavors",
    image: "/images/2026-march/food/appetizer-sampler.webp",
    items: [
      {
        name: "Cigar Borek (4 pcs)",
        description:
          "Crispy golden pastry rolls filled with savory cheese, served with a side of smoky homemade babaganoush for dipping",
        price: "$7.95",
      },
      {
        name: "Falafel (4 pcs)",
        description:
          "House-made falafel, fried fresh to order and served with a side of creamy hummus",
        price: "$7.95",
        image: "/images/Falafel-Side.webp",
      },
      {
        name: "Kibbeh (2 pcs)",
        description:
          "Golden-fried cracked wheat shells stuffed with seasoned ground beef, served with tzatziki sauce and a lemon wedge",
        price: "$7.95",
      },
      {
        name: "Babaganoush",
        description:
          "Smoky roasted eggplant dip blended with yogurt, garlic, and lemon, served with fresh bread",
        price: "$6.95",
        image: "/images/babaganoush.webp",
      },
      {
        name: "Tzatziki Dip",
        description:
          "Creamy homemade yogurt, cucumber, garlic, and herb dip paired with freshly baked bread. Great for dipping",
        price: "$6.95",
        image: "/images/tzatziki-dip.webp",
      },
      {
        name: "Hummus",
        description:
          "Creamy chickpea dip blended with garlic, lemon, and olive oil. Served with freshly baked bread",
        price: "$6.95",
        image: "/images/hummus.webp",
      },
      {
        name: "French Fries",
        description: "Crispy golden fries",
        price: "$5.95",
        image: "/images/french-fries.webp",
      },
      {
        name: "Mozzarella Sticks (4 pcs)",
        description:
          "Crispy breaded mozzarella, fried until golden and served with marinara sauce",
        price: "$7.95",
        image: "/images/mozzarella-sticks.webp",
      },
      {
        name: "Stuffed Grape Leaves (4 pcs)",
        description:
          "Tender grape leaves stuffed with seasoned rice and herbs, served with a side of creamy tzatziki sauce",
        price: "$7.95",
        image: "/images/Stuffed-Grape-Leaves.webp",
      },
      {
        name: "Chikofte (4 pcs)",
        description:
          "Turkish-style seasoned bulgur made with herbs and spices, served with crisp romaine lettuce, fresh lemon, and pomegranate molasses",
        price: "$7.95",
        image: "/images/chikofte-side.webp",
      },
      {
        name: "Red Lentil Soup",
        description:
          "Traditional Turkish red lentil soup with hint of spices, served with homemade pita bread",
        price: "$7.95",
        image: "/images/red-lentil-soup.webp",
      },
    ],
  },
  {
    id: "specials",
    title: "Istanbul Specials",
    subtitle: "Chef's signature dishes from the heart of Istanbul",
    image: "/images/2026-march/food/iskender-plate.webp",
    items: [
      {
        name: "Iskender Kebab",
        description:
          "Sliced doner kebab over pita, topped with tomato sauce, yoghurt and melted butter",
        price: "$26.95",
        image: "/images/iskender-kebab.webp",
      },
      {
        name: "Beyti Doner Kebab",
        description:
          "Seasoned doner wrapped in warm lavash, grilled and sliced, served over smoky babaganoush and topped with rich tomato sauce and melted butter",
        price: "$26.95",
        image: "/images/beyti-doner-kebab.webp",
      },
      {
        name: "Doner Box",
        description:
          "Sliced doner over crispy fries with lettuce, tomatoes, sumac onions and signature house and tzatziki sauce (add feta $1)",
        price: "$19.95",
        image: "/images/doner-box.webp",
      },
      {
        name: "Doner Cheese Burger",
        description:
          "Fresh baked bread filled with beef & lamb doner and melted cheese blend, dusted with sesame and black cumin. Served with tzatziki and house sauce",
        price: "$19.95",
        image: "/images/doner-cheese-burger.webp",
      },
      {
        name: "Lahmacun Doner",
        description:
          "Fresh baked lahmacun filled with red cabbage, onion, lettuce and tzatziki sauce, with beef & lamb doner",
        price: "$21.95",
        image: "/images/lahmacun-doner.webp",
      },
      {
        name: "Mediterranean Greek Salad",
        description:
          "Tomatoes, cucumbers, onions, capers, feta cheese, olive oil & pomegranate molasses",
        price: "$14.95",
      },
      {
        name: "Doner & Cheese Pide",
        description:
          "Turkish flatbread filled with beef & lamb doner and melted cheese, baked fresh",
        price: "$19.95",
        image: "/images/doner-cheese-pide.webp",
      },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    subtitle:
      "Breakfast flavors from the Mediterranean — served 10 AM to 2 PM, exclusive to the Fremont location",
    image: "/images/2026-march/breakfast/turkish-breakfast-spread.webp",
    items: [
      {
        name: "Single Breakfast Plate",
        description:
          "A classic Turkish breakfast featuring your choice of eggs, olives, pastirma, Ezine cheese, kaymak & honey, tomatoes, cucumbers, jam, Nutella, acuka breakfast spread, freshly baked bread, simit, and a personal tea thermos",
        price: "$24.95",
        image: "/images/single-breakfast-plate.webp",
      },
      {
        name: "Double Breakfast Plate",
        description:
          "A classic Turkish breakfast for two featuring 2 eggs, olives, pastirma, Ezine cheese, kaymak & honey, tomatoes, cucumbers, jam, Nutella, acuka, fresh borek, freshly baked bread, simit, and a tea thermos for two",
        price: "$44.95",
        image: "/images/double-breakfast-plate.webp",
      },
      {
        name: "Menemen",
        description:
          "A traditional Turkish breakfast of softly scrambled eggs gently simmered in a rich, savory sauce of ripe tomatoes, green peppers, onions, and olive oil. Served hot in a traditional pan with freshly baked bread",
        price: "$14.95",
      },
      {
        name: "Sujuk & Eggs",
        description:
          "Sizzling spiced Turkish beef sausage fried with 3 sunny-side-up eggs. Served hot in a skillet with freshly baked bread",
        price: "$14.95",
        image: "/images/2026-march/breakfast/sucuk-eggs-skillet.webp",
      },
      {
        name: "Sunny Egg",
        description:
          "Three sunny-side-up eggs with rich, runny yolks. Served with freshly baked bread",
        price: "$12.95",
        image: "/images/sunny-egg.webp",
      },
      {
        name: "Spinach Cheese Omelet",
        description:
          "Three fluffy eggs folded with fresh spinach and melted cheese. Served with freshly baked bread",
        price: "$14.95",
        image: "/images/feta-spinach-omelette.webp",
      },
    ],
  },
  {
    id: "pastries",
    title: "Breakfast Pastries",
    subtitle: "Fresh-baked Turkish pastries from our bakery",
    image: "/images/2026-march/bakery/bakery-display-case-1.webp",
    items: [
      {
        name: "Su Borek",
        description:
          "Flaky layers of thin pastry filled with creamy cheese and herbs",
        price: "$8.95",
      },
      {
        name: "Simit",
        description:
          "Sesame crusted Turkish bread ring, crisp outside, soft inside",
        price: "$3.95",
        image: "/images/simit.webp",
      },
      {
        name: "Gozleme",
        description:
          "Freshly made Turkish stuffed flatbread grilled to crispy perfection with your choice of filling — white cheese, mozzarella or potato",
        price: "$7.95",
        image: "/images/gozleme.webp",
      },
      {
        name: "Almond Croissant",
        description:
          "Buttery, flaky croissant filled with rich almond cream and topped with sliced almonds and powdered sugar",
        price: "$3.95",
      },
      {
        name: "Pogaca",
        description:
          "Soft, freshly baked Turkish pastry with your choice of savory filling — white cheese, mozzarella or potato",
        price: "$3.95",
        image: "/images/cheese-pogaca.webp",
      },
      {
        name: "Acma",
        description: "Olive, Chocolate, Classic",
        price: "$3.95",
        image: "/images/chocolate-acma.webp",
      },
      {
        name: "Chocolate Croissant",
        description:
          "Golden, flaky pastry filled with smooth, premium chocolate",
        price: "$3.95",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Handcrafted Turkish sweets and international favorites",
    image: "/images/2026-march/bakery/baklava-tea.webp",
    items: [
      {
        name: "Double Walnut Baklava",
        description:
          "Layered, flaky baklava packed with rich walnut filling and drizzled with golden syrup",
        price: "$2.45",
      },
      {
        name: "Double Pistachio Baklava",
        description:
          "Flaky, buttery baklava loaded with pistachio filling and soaked in sweet syrup",
        price: "$2.45",
      },
      {
        name: "Carrot Baklava",
        description:
          "Delicate carrot-shaped baklava with sweet pistachio filling and golden syrup",
        price: "$7.95",
        image: "/images/carrot-baklava.webp",
      },
      {
        name: "Chocolate Baklava",
        description:
          "Rich chocolate baklava with layers of flaky pastry, nut filling and a chocolate drizzle",
        price: "$2.45",
        image: "/images/chocolate-baklava.webp",
      },
      {
        name: "Shobyet Pistachio Baklava",
        description:
          "Flaky phyllo with velvety semolina cream and pistachios, baked golden in sweet syrup",
        price: "$3.95",
        image: "/images/shobiyet-baklava.webp",
      },
      {
        name: "Mussel Baklava",
        description:
          "Elegant, shell-shaped phyllo filled with ground pistachios and fragrant syrup",
        price: "$3.95",
      },
      {
        name: "Pistachio Roll",
        description:
          "Fluffy sponge cake rolled with pistachio cream and light sweet syrup",
        price: "$3.95",
      },
      {
        name: "Kadayif Baklava",
        description:
          "Crispy shredded phyllo filled with pistachios, baked to perfection and soaked in light syrup",
        price: "$7.95",
      },
      {
        name: "Diyarbakir Burma",
        description:
          "Traditional hand-rolled phyllo with pistachio filling, baked golden and finished with sweet syrup",
        price: "$7.95",
      },
      {
        name: "Kunefe",
        description:
          "Golden, crispy shredded pastry baked in the oven with stretchy melted cheese, finished with warm syrup. Add one slice of Marash ice cream $3",
        price: "$11.95",
      },
      {
        name: "Kunefe Pistachio",
        description:
          "Golden, crispy shredded pastry with stretchy melted cheese and crunchy pistachios, finished with warm syrup. Add one slice of Marash ice cream $3",
        price: "$12.95",
        image: "/images/pistachio-kunefe.webp",
      },
      {
        name: "Rice Pudding",
        description:
          "Oven-baked Turkish rice pudding (sutlac) with a silky texture and caramelized crust. Add walnuts for an extra crunch",
        price: "$7.95",
      },
      {
        name: "Marash Ice Cream",
        description:
          "Maras ice cream is a rich, stretchy Turkish ice cream known for its creamy texture and unique flavor",
        price: "$7.95",
      },
      {
        name: "Lemon Cheesecake",
        description:
          "Creamy lemon cheesecake with a bright citrus finish on a buttery crust",
        price: "$7.95",
      },
      {
        name: "Pistachio Dream Cake",
        description:
          "Decadent pistachio cake with creamy frosting and crunchy pistachios",
        price: "$7.95",
      },
      {
        name: "Red Velvet Cake",
        description:
          "Moist red velvet cake layered with creamy smooth frosting",
        price: "$7.95",
        image: "/images/red-velvet-cake.webp",
      },
      {
        name: "Devils Fudge",
        description:
          "Decadent fudge cake with rich, gooey chocolate layers and luscious frosting",
        price: "$7.95",
      },
      {
        name: "Tiramisu",
        description:
          "Layered espresso-soaked ladyfingers with rich mascarpone cream",
        price: "$7.95",
        image: "/images/tiramisu.webp",
      },
      {
        name: "Tres Leches Cake",
        description:
          "Light sponge cake soaked in three milks and finished with soft whipped cream",
        price: "$7.95",
        image: "/images/tres-leches-cake.webp",
      },
      {
        name: "Dubai Cheesecake",
        description:
          "Creamy cheesecake with pistachio and kunafa topped with chocolate",
        price: "Market",
      },
      {
        name: "Sheker-Pare",
        description:
          "Soft semolina cookies baked until golden, soaked in a light, sweet syrup",
        price: "Market",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks, Tea & Coffee",
    subtitle: "Traditional Turkish beverages and refreshments",
    items: [
      { name: "Nestle Water", price: "$1.95" },
      { name: "Perrier Sparkling Water", price: "$3.95" },
      {
        name: "Hibiscus Lemonade",
        price: "$3.95",
        image: "/images/hibiscus-lemonade.webp",
      },
      {
        name: "Soda Can",
        description: "Coke, Diet, Zero, Sprite, Dr. Pepper",
        price: "$2.95",
      },
      {
        name: "Ayran",
        description: "Traditional yogurt drink",
        price: "$4.95",
        image: "/images/ayran.webp",
      },
      {
        name: "Salgam",
        description: "Fermented turnip juice",
        price: "$4.95",
      },
      {
        name: "Turkish Tea Cup",
        price: "$2.45",
        image: "/images/turkish-tea-cup.webp",
      },
      { name: "Assorted Teas", price: "$3.95" },
      { name: "Tea Thermos", price: "$9.95" },
      {
        name: "Turkish Coffee",
        price: "$4.95",
        image: "/images/turkish-coffee.webp",
      },
      {
        name: "Menenguc",
        description: "Pistachio Coffee",
        price: "$4.95",
      },
      { name: "Single Shot Espresso", price: "$4.95" },
      { name: "Double Shot Espresso", price: "$5.95" },
    ],
  },
];
