import { MenuCategory } from "@/types/menu";

export const menuData: MenuCategory[] = [
  {
    id: "appetizers",
    name: "Appetizers",
    items: [
      {
        id: "app1",
        name: "Crispy Calamari",
        description: "Fresh squid rings served with marinara sauce and lemon wedges",
        price: 12.99,
        image: "/placeholder.svg",
        category: "appetizers",
      },
      {
        id: "app2",
        name: "Buffalo Wings",
        description: "Spicy chicken wings with celery sticks and blue cheese dressing",
        price: 10.99,
        image: "/placeholder.svg",
        category: "appetizers",
      },
      {
        id: "app3",
        name: "Mozzarella Sticks",
        description: "Golden fried mozzarella with marinara dipping sauce",
        price: 8.99,
        image: "/placeholder.svg",
        category: "appetizers",
      },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    items: [
      {
        id: "burger1",
        name: "Classic Cheeseburger",
        description: "Juicy beef patty with cheese, lettuce, tomato, pickles on brioche bun",
        price: 15.99,
        image: "/placeholder.svg",
        category: "burgers",
      },
      {
        id: "burger2",
        name: "BBQ Bacon Burger",
        description: "Beef patty with BBQ sauce, crispy bacon, onion rings, and cheddar",
        price: 17.99,
        image: "/placeholder.svg",
        category: "burgers",
      },
      {
        id: "burger3",
        name: "Veggie Burger",
        description: "Plant-based patty with avocado, sprouts, and herb aioli",
        price: 14.99,
        image: "/placeholder.svg",
        category: "burgers",
      },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    items: [
      {
        id: "pasta1",
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta with pancetta, eggs, and parmesan",
        price: 16.99,
        image: "/placeholder.svg",
        category: "pasta",
      },
      {
        id: "pasta2",
        name: "Chicken Alfredo",
        description: "Fettuccine with grilled chicken in creamy alfredo sauce",
        price: 18.99,
        image: "/placeholder.svg",
        category: "pasta",
      },
      {
        id: "pasta3",
        name: "Penne Arrabbiata",
        description: "Spicy tomato sauce with garlic, red peppers, and herbs",
        price: 15.99,
        image: "/placeholder.svg",
        category: "pasta",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: "dessert1",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
        price: 7.99,
        image: "/placeholder.svg",
        category: "desserts",
      },
      {
        id: "dessert2",
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
        price: 6.99,
        image: "/placeholder.svg",
        category: "desserts",
      },
      {
        id: "dessert3",
        name: "Cheesecake",
        description: "New York style cheesecake with berry compote",
        price: 6.99,
        image: "/placeholder.svg",
        category: "desserts",
      },
    ],
  },
];