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
    title: "Doner & Shawarma",
    subtitle: "Authentic Turkish doner kebab served your way",
    image: "/images/2026-march/food/doner-salad-plate.webp",
    items: [
      // Turkish Pita
      {
        name: "Beef & Lamb Turkish Pita",
        description:
          "Served in warm, oven-baked Turkish pita with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$15.95",
        image: "/images/Beef-and-Lamb-Doner-Shawarma-Turkish-Pita.webp",
      },
      {
        name: "Chicken Turkish Pita",
        description:
          "Served in warm, oven-baked Turkish pita with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$15.95",
        image: "/images/Chicken-Doner-Shawarma-Turkish-Pita.webp",
      },
      {
        name: "Mix Turkish Pita",
        description:
          "Beef & Lamb + Chicken in warm Turkish pita with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$16.95",
        image: "/images/Mixed-Doner-Beef-and-Lamb-and-Chicken-Shawarma-Turkish-Pita.webp",
      },
      {
        name: "Falafel Turkish Pita",
        description:
          "Crispy falafel in warm Turkish pita with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$15.95",
        image: "/images/Falafel-Turkish-Pita.webp",
      },
      // Pita
      {
        name: "Beef & Lamb Pita",
        description:
          "Served with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$14.95",
        image: "/images/Beef-and-Lamb-Doner-Shawarma-Pita.webp",
      },
      {
        name: "Chicken Pita",
        description:
          "Served with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$14.95",
        image: "/images/Chicken-Doner-Shawarma-Pita.webp",
      },
      {
        name: "Mix Pita",
        description:
          "Beef & Lamb + Chicken with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$15.95",
        image: "/images/Mixed-Doner-Beef-and-Lamb-and-Chicken-Shawarma-Pita.webp",
      },
      {
        name: "Falafel Pita",
        description:
          "Served with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$14.95",
        image: "/images/Falafel-Pita.webp",
      },
      // Wraps
      {
        name: "Beef & Lamb Wrap",
        description:
          "Wrapped in lavash with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$14.95",
        image: "/images/Beef-and-Lamb-Doner-Shawarma-Lavash-Wrap.webp",
      },
      {
        name: "Chicken Wrap",
        description:
          "Wrapped in lavash with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$14.95",
        image: "/images/Chicken-Doner-Shawarma-Lavash-Wrap.webp",
      },
      {
        name: "Falafel Wrap",
        description:
          "Wrapped in lavash with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$14.95",
        image: "/images/Falafel-Lavash-Wrap.webp",
      },
      {
        name: "Chikofte Wrap",
        description:
          "Spicy bulgur balls wrapped in lavash with greens, pickles, tomatoes, sumac onions, cucumbers, red cabbage and hummus spread",
        price: "$14.95",
      },
      // Rice Bowl
      {
        name: "Beef & Lamb Rice Bowl",
        description:
          "Your choice of protein over fluffy rice with lettuce, tomatoes, onions, red cabbage, cucumbers and hummus with fresh bread",
        price: "$21.95",
        image: "/images/Beef-and-Lamb-Doner-Shawarma-Rice-Bowl.webp",
      },
      {
        name: "Chicken Rice Bowl",
        description:
          "Chicken doner over fluffy rice with lettuce, tomatoes, onions, red cabbage, cucumbers and hummus with fresh bread",
        price: "$21.95",
        image: "/images/Chicken-Doner-Shawarma-Rice-Bowl.webp",
      },
      {
        name: "Mix Rice Bowl",
        description:
          "Beef & Lamb + Chicken over fluffy rice with lettuce, tomatoes, onions, red cabbage, cucumbers and hummus with fresh bread",
        price: "$22.95",
        image: "/images/Mixed-Doner-Beef-and-Lamb-and-Chicken-Shawarma-Rice-Bowl.webp",
      },
      {
        name: "Falafel Rice Bowl",
        description:
          "Falafel over fluffy rice with lettuce, tomatoes, onions, red cabbage, cucumbers and hummus with fresh bread",
        price: "$21.95",
        image: "/images/Falafel-Rice-Bowl.webp",
      },
      // Fries Bowl
      {
        name: "Beef & Lamb Fries Bowl",
        description:
          "Your choice of protein over crispy fries with lettuce, tomatoes, onions, red cabbage, cucumbers and hummus with bread",
        price: "$21.95",
        image: "/images/Beef-and-Lamb-Doner-Shawarma-French-Fries-Bowl.webp",
      },
      {
        name: "Chicken Fries Bowl",
        description:
          "Chicken doner over crispy fries with lettuce, tomatoes, onions, red cabbage, cucumbers and hummus with bread",
        price: "$21.95",
        image: "/images/Chicken-Doner-Shawarma-French-Fries-Bowl.webp",
      },
      // Salad Bowl
      {
        name: "Beef & Lamb Salad Bowl",
        description:
          "A lighter option with doner over lettuce, tomatoes, onions, red cabbage, cucumbers and hummus with fresh bread",
        price: "$21.95",
        image: "/images/Beef-and-Lamb-Doner-Shawarma-Salad-Bowl.webp",
      },
      {
        name: "Chicken Salad Bowl",
        description:
          "Chicken doner over lettuce, tomatoes, onions, red cabbage, cucumbers and hummus with fresh bread",
        price: "$21.95",
        image: "/images/Chicken-Doner-Shawarma-Salad-Bowl.webp",
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
        price: "$17.95",
      },
      {
        name: "Cheese Pide",
        description:
          "Golden baked Turkish flatbread with melted cheese — crispy outside, soft inside",
        price: "$14.95",
      },
      {
        name: "Spinach & Feta Pide",
        description:
          "Traditional Turkish flatbread topped with sauteed spinach and creamy feta cheese, baked fresh",
        price: "$17.95",
      },
      {
        name: "Sujuk & Cheese Pide",
        description:
          "Turkish flatbread topped with spicy sujuk sausage and melted cheese, baked fresh",
        price: "$17.95",
      },
      {
        name: "Lahmacun",
        description:
          "Flatbread with minced meat, tomatoes, peppers, herbs. Served with parsley, onion, lemon",
        price: "$12.95",
      },
      {
        name: "Doner & Cheese Pide",
        description:
          "Fan favorite Turkish flatbread topped with beef & lamb doner and melted cheese, baked fresh",
        price: "$19.95",
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
          "Crispy Turkish filo rolls filled with feta cheese and fresh parsley",
        price: "$7.95",
      },
      {
        name: "Falafel (4 pcs)",
        description: "Crispy chickpea fritters seasoned with herbs and spices",
        price: "$7.95",
        image: "/images/Falafel-Side.webp",
      },
      {
        name: "Kibbeh (2 pcs)",
        description:
          "Crispy bulgur shell filled with ground beef, spices and fried golden",
        price: "$7.95",
      },
      {
        name: "Babaganoush",
        description: "Smoky eggplant, garlic, yoghurt",
        price: "$6.95",
      },
      {
        name: "Tzatziki Dip",
        description: "Yoghurt with cucumber, garlic, olive oil and mint",
        price: "$6.95",
        image: "/images/Tzatziki-Dip.webp",
      },
      {
        name: "Hummus",
        description: "Creamy chickpea dip with garlic, lemon juice, olive oil",
        price: "$6.95",
        image: "/images/Hummus.webp",
      },
      {
        name: "French Fries",
        description: "Crispy golden fries",
        price: "$5.95",
        image: "/images/French-Fries.webp",
      },
      {
        name: "Mozzarella Sticks (4 pcs)",
        description:
          "Crispy breaded mozzarella, fried golden, served with marinara",
        price: "$7.95",
        image: "/images/Mozzarella-Sticks.webp",
      },
      {
        name: "Stuffed Grape Leaves (4 pcs)",
        description: "Vine leaves stuffed with rice, herbs and spices",
        price: "$7.95",
        image: "/images/Stuffed-Grape-Leaves.webp",
      },
      {
        name: "Chikofte (4 pcs)",
        description:
          "Spicy hand-shaped bulgur balls with herbs, served with lettuce, lemon",
        price: "$7.95",
      },
      {
        name: "Red Lentil Soup",
        description:
          "Traditional Turkish red lentil soup with hint of spices, served with homemade pita bread",
        price: "$6.95",
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
      },
      {
        name: "Beyti Doner Kebab",
        description:
          "Seasoned doner wrapped in lavash, grilled, sliced and topped with tomato sauce and yoghurt",
        price: "$26.95",
      },
      {
        name: "Doner Box",
        description:
          "Sliced doner over crispy fries with lettuce, tomatoes and sumac onions and signature house and white sauce",
        price: "$16.95",
      },
      {
        name: "Istanbul Salad",
        description:
          "Arugula, olives & cherry tomatoes, onions, ezine cheese with pomegranate dressing",
        price: "$14.95",
      },
      {
        name: "Doner & Cheese Pide",
        description:
          "Fan favorite Turkish flatbread topped with beef & lamb doner and melted cheese, baked fresh",
        price: "$19.95",
      },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    subtitle:
      "Traditional Turkish breakfast — exclusive to the Fremont location",
    image: "/images/2026-march/breakfast/turkish-breakfast-spread.webp",
    items: [
      {
        name: "Single Breakfast Plate",
        description:
          "Turkish breakfast with honey & clotted cream, choice of egg, breakfast sauce, olives, pastirma, ezine cheese, tomatoes, cucumbers and simit",
        price: "$20.95",
      },
      {
        name: "Double Breakfast Plate",
        description:
          "Turkish breakfast spread, honey & cream, cheese, breakfast sauce, olives, pastirma, ezine cheese, tomatoes, cucumbers, simit, choice of 2 eggs and 1 borek",
        price: "$38.95",
      },
      {
        name: "Menemen",
        description:
          "Sauteed tomatoes, green peppers, onions and eggs — Turkish breakfast classic with bread",
        price: "$13.95",
      },
      {
        name: "Sujuk & Eggs",
        description:
          "Spicy Turkish beef sausage pan fried with eggs served with bread",
        price: "$13.95",
        image: "/images/2026-march/breakfast/sucuk-eggs-skillet.webp",
      },
      {
        name: "Sunny Egg",
        description: "Perfectly cooked sunny side up eggs served with bread",
        price: "$10.95",
      },
      {
        name: "Feta Mozzarella Omelette",
        description:
          "Feta and mozzarella cheese omelette served with bread",
        price: "$13.95",
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
      },
      {
        name: "Almond Croissant",
        description:
          "Buttery, flaky croissant filled with rich almond cream and topped with sliced almonds and powdered sugar",
        price: "$3.95",
      },
      {
        name: "Pogaca",
        description: "Classic, Cheese, Mozzarella, Potato, Olive",
        price: "$3.95",
      },
      {
        name: "Acma",
        description: "Olive, Chocolate, Classic",
        price: "$3.95",
      },
      {
        name: "Gozleme",
        description:
          "White Cheese, Mozzarella, Potato, Spinach and Cheese, Ground Beef, Eggplant",
        price: "$7.95",
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
      },
      {
        name: "Chocolate Baklava",
        description:
          "Rich chocolate baklava with layers of flaky pastry, nut filling and a chocolate drizzle",
        price: "$2.45",
      },
      {
        name: "Shobyet Pistachio Baklava",
        description:
          "Flaky phyllo with velvety semolina cream and pistachios, baked golden in sweet syrup",
        price: "$3.95",
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
          "Warm, cheesy kunefe with crispy shredded pastry, soaked in sweet syrup",
        price: "$11.95",
      },
      {
        name: "Kunefe Pistachio",
        description:
          "Golden, crispy kunefe filled with melted cheese, sweet syrup and crunchy pistachios",
        price: "$12.95",
      },
      {
        name: "Rice Pudding",
        description:
          "Classic Turkish rice pudding, rich and creamy, lightly sweetened with vanilla",
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
      },
      {
        name: "Dubai Cheesecake",
        description:
          "Creamy cheesecake with pistachio and kunafa topped with chocolate",
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
      { name: "Hibiscus Lemonade", price: "$3.95" },
      {
        name: "Soda Can",
        description: "Coke, Diet, Zero, Sprite, Dr. Pepper",
        price: "$2.95",
      },
      { name: "Ayran", description: "Traditional yogurt drink", price: "$4.95" },
      {
        name: "Salgam",
        description: "Fermented turnip juice",
        price: "$4.95",
      },
      { name: "Turkish Tea Cup", price: "$2.45" },
      { name: "Tea Thermos", price: "$9.95" },
      { name: "Turkish Coffee", price: "$3.95" },
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
