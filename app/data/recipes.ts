export type Recipe = {
  id: string;
  title: string;
  description: string;
  minutes: number;
  cuisine: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  emoji: string;
};

export const recipes: Recipe[] = [
  { id: "creamy-tomato-pasta", title: "Creamy Tomato Pasta", description: "A silky, garlic-kissed sauce that comes together while the pasta boils.", minutes: 25, cuisine: "Italian", difficulty: "Easy", emoji: "🍝" },
  { id: "miso-salmon-bowl", title: "Miso Salmon Bowl", description: "Glazed salmon, warm rice, crunchy cucumber, and a bright sesame dressing.", minutes: 30, cuisine: "Japanese-inspired", difficulty: "Medium", emoji: "🍣" },
  { id: "roasted-veg-tacos", title: "Roasted Veggie Tacos", description: "Smoky roasted vegetables with black beans, avocado, and lime crema.", minutes: 35, cuisine: "Mexican-inspired", difficulty: "Easy", emoji: "🌮" },
  { id: "coconut-chickpea-curry", title: "Coconut Chickpea Curry", description: "A cozy one-pan curry with spinach, ginger, and a squeeze of fresh lime.", minutes: 40, cuisine: "Indian-inspired", difficulty: "Easy", emoji: "🍛" },
  { id: "lemon-herb-chicken", title: "Lemon Herb Chicken", description: "Golden chicken with crisp potatoes and tender greens from one sheet pan.", minutes: 45, cuisine: "Mediterranean", difficulty: "Medium", emoji: "🍋" },
  { id: "berry-yogurt-parfait", title: "Berry Yogurt Parfait", description: "Layers of Greek yogurt, seasonal berries, toasted oats, and honey.", minutes: 10, cuisine: "Breakfast", difficulty: "Easy", emoji: "🫐" },
];
