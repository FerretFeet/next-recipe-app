import { IRecipe } from "./interfaces/interfaces";

export const recipe1: IRecipe = {
  name: "Scrambled Eggs",
  user_id: 2,
  description: "Classic scrambled eggs for a hearty breakfast.",
  instructions:
    "Beat eggs; Heat skillet; Add eggs to skillet; Scramble until cooked.",
  prep_time: 10,
  cook_time: 5,
  serving_size: 2,
  rating: 4.7,
  ingredients: [
    { name: "Eggs", quantity: 4, unit: "pcs" },
    { name: "Butter", quantity: 1, unit: "tbsp" },
    { name: "Salt", quantity: 0.5, unit: "tsp" },
  ],
  tags: [{ name: "Breakfast" }, { name: "Quick" }, { name: "Simple" }],
  img: "@/public/saladtest.jpeg",
};

export const recipe2: IRecipe = {
  name: "Pancakes",
  user_id: 3,
  description: "Fluffy pancakes perfect for a weekend brunch.",
  instructions:
    "Mix batter; Heat griddle; Pour batter onto griddle; Flip when bubbles form.",
  prep_time: 15,
  cook_time: 15,
  serving_size: 6,
  rating: 4.9,
  ingredients: [
    { name: "Flour", quantity: 1.5, unit: "cup" },
    { name: "Milk", quantity: 1, unit: "cup" },
    { name: "Eggs", quantity: 2, unit: "pcs" },
  ],
  tags: [{ name: "Breakfast" }, { name: "Brunch" }, { name: "Homemade" }],
  img: "@/public/saladtest.jpeg",
};

export const recipe3: IRecipe = {
  name: "Grilled Chicken Salad",
  user_id: 4,
  description: "A healthy and delicious salad with grilled chicken.",
  instructions:
    "Marinate chicken; Grill chicken; Chop vegetables; Assemble salad.",
  prep_time: 20,
  cook_time: 15,
  serving_size: 4,
  rating: 4.6,
  ingredients: [
    { name: "Chicken Breast", quantity: 2, unit: "pcs" },
    { name: "Lettuce", quantity: 1, unit: "head" },
    { name: "Tomatoes", quantity: 2, unit: "pcs" },
  ],
  tags: [{ name: "Salad" }, { name: "Healthy" }, { name: "Grilled" }],
  img: "@/public/saladtest.jpeg",
};

export const recipe4: IRecipe = {
  name: "Spaghetti Carbonara",
  user_id: 5,
  description: "A creamy and flavorful pasta dish.",
  instructions:
    "Boil pasta; Cook bacon; Mix eggs and cheese; Combine all ingredients.",
  prep_time: 10,
  cook_time: 20,
  serving_size: 4,
  rating: 4.8,
  ingredients: [
    { name: "Spaghetti", quantity: 8, unit: "oz" },
    { name: "Bacon", quantity: 4, unit: "slices" },
    { name: "Parmesan Cheese", quantity: 0.5, unit: "cup" },
  ],
  tags: [{ name: "Pasta" }, { name: "Italian" }, { name: "Creamy" }],
  img: "@/public/saladtest.jpeg",
};

export const recipe5: IRecipe = {
  name: "Banana Bread",
  user_id: 6,
  description: "A moist and delicious banana bread recipe.",
  instructions:
    "Mash bananas; Mix wet ingredients; Combine dry ingredients; Bake in oven.",
  prep_time: 15,
  cook_time: 60,
  serving_size: 8,
  rating: 4.7,
  ingredients: [
    { name: "Bananas", quantity: 3, unit: "pcs" },
    { name: "Flour", quantity: 2, unit: "cups" },
    { name: "Sugar", quantity: 0.75, unit: "cup" },
  ],
  tags: [{ name: "Baking" }, { name: "Dessert" }, { name: "Snack" }],
  img: "@/public/saladtest.jpeg",
};

export const testRecipes: IRecipe[] = [
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe5,
];
