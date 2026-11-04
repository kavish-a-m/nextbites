export type Recipe = {
  id: string;
  title: string;
  description: string;
  minutes: number;
  cuisine: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  emoji: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "creamy-tomato-pasta", title: "Creamy Tomato Pasta", description: "A silky, garlic-kissed sauce that comes together while the pasta boils.", minutes: 25, cuisine: "Italian", difficulty: "Easy", emoji: "🍝",
    ingredients: ["250g pasta", "2 tbsp olive oil", "2 garlic cloves", "400g crushed tomatoes", "120ml cream", "40g parmesan", "Fresh basil"],
    steps: ["Cook the pasta in salted water until al dente, reserving a little pasta water.", "Sauté garlic in olive oil for 30 seconds.", "Add tomatoes and simmer for 10 minutes.", "Stir in cream and parmesan, loosening with pasta water if needed.", "Toss in pasta, season, and finish with basil."],
  },
  {
    id: "miso-salmon-bowl", title: "Miso Salmon Bowl", description: "Glazed salmon, warm rice, crunchy cucumber, and a bright sesame dressing.", minutes: 30, cuisine: "Japanese-inspired", difficulty: "Medium", emoji: "🍣",
    ingredients: ["2 salmon fillets", "2 tbsp white miso", "1 tbsp soy sauce", "1 tbsp honey", "2 cups cooked rice", "1 cucumber", "2 spring onions"],
    steps: ["Mix miso, soy sauce, and honey into a glaze.", "Brush salmon with half the glaze and rest for 10 minutes.", "Bake at 200°C for 12 to 15 minutes.", "Brush with remaining glaze for the final 2 minutes.", "Serve over rice with cucumber and spring onions."],
  },
  {
    id: "roasted-veg-tacos", title: "Roasted Veggie Tacos", description: "Smoky roasted vegetables with black beans, avocado, and lime crema.", minutes: 35, cuisine: "Mexican-inspired", difficulty: "Easy", emoji: "🌮",
    ingredients: ["1 sweet potato", "1 red pepper", "1 can black beans", "1 tsp smoked paprika", "8 corn tortillas", "1 avocado", "1 lime"],
    steps: ["Toss diced sweet potato and pepper with oil and paprika.", "Roast at 220°C for 20 minutes.", "Warm black beans in a small pan with a splash of water.", "Heat tortillas in a dry skillet.", "Fill tortillas with vegetables, beans, avocado, and lime."],
  },
  {
    id: "coconut-chickpea-curry", title: "Coconut Chickpea Curry", description: "A cozy one-pan curry with spinach, ginger, and a squeeze of fresh lime.", minutes: 40, cuisine: "Indian-inspired", difficulty: "Easy", emoji: "🍛",
    ingredients: ["1 tbsp oil", "1 onion", "1 tbsp grated ginger", "2 tsp curry powder", "1 can chickpeas", "400ml coconut milk", "2 handfuls spinach", "1 lime"],
    steps: ["Soften the onion in oil over medium heat.", "Add ginger and curry powder and cook for one minute.", "Add chickpeas and coconut milk, then simmer for 20 minutes.", "Stir in spinach until wilted.", "Season and brighten with a squeeze of lime."],
  },
  {
    id: "lemon-herb-chicken", title: "Lemon Herb Chicken", description: "Golden chicken with crisp potatoes and tender greens from one sheet pan.", minutes: 45, cuisine: "Mediterranean", difficulty: "Medium", emoji: "🍋",
    ingredients: ["4 chicken thighs", "1 lemon", "2 tbsp olive oil", "2 garlic cloves", "1 tsp oregano", "500g baby potatoes", "Fresh parsley"],
    steps: ["Mix lemon zest and juice, oil, garlic, oregano, and salt.", "Coat chicken with marinade and rest for 15 minutes.", "Roast potatoes at 210°C for 15 minutes.", "Add chicken and roast another 20 to 25 minutes.", "Rest briefly and finish with parsley."],
  },
  {
    id: "berry-yogurt-parfait", title: "Berry Yogurt Parfait", description: "Layers of Greek yogurt, seasonal berries, toasted oats, and honey.", minutes: 10, cuisine: "Breakfast", difficulty: "Easy", emoji: "🫐",
    ingredients: ["2 cups Greek yogurt", "1 cup mixed berries", "1 cup toasted oats", "2 tbsp honey", "1 tsp vanilla", "Mint leaves"],
    steps: ["Stir vanilla through the yogurt.", "Spoon yogurt into two glasses.", "Layer with berries and toasted oats.", "Repeat the layers.", "Drizzle with honey and garnish with mint."],
  },
];

export function getRecipe(id: string) {
  return recipes.find((recipe) => recipe.id === id);
}
