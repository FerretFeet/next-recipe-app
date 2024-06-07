export interface IIngredient {
  id?: number;
  name: string;
  quantity: number;
  unit: string;
}

export interface ITag {
  id?: number;
  name: string;
}

export interface IRecipe {
  id?: number;
  name: string;
  user_id: number;
  user_name: string;
  description: string;
  instructions: string;
  prep_time: number;
  cook_time: number;
  serving_size: number;
  rating: number;
  ingredients?: Array<IIngredient>;
  tags?: Array<ITag>;
  img?: string;
}

export const testRecipe: IRecipe = {
  name: "My Delicious Recipe",
  user_id: 1,
  user_name: "John Doe",
  description:
    "A short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipe",
  instructions:
    "Step-by-step instructions for cooking the recipe; step2; srltj3",
  prep_time: 30, // prep time in minutes
  cook_time: 60, // cook time in minutes
  serving_size: 4,
  rating: 4.5,
  ingredients: [
    {
      name: "Eggs",
      quantity: 2,
      unit: "pcs",
    },
    {
      name: "Flour",
      quantity: 1,
      unit: "cup",
    },
  ],
  tags: [
    {
      name: "Breakfast",
    },
    {
      name: "Easy",
    },
    {
      name: "Breakfast",
    },
    {
      name: "Easy",
    },
    {
      name: "Breakfast",
    },
    {
      name: "Easy",
    },
  ],
  // Optional image property
  img: "/saladtest.jpeg",
};

export const testRecipe1: IRecipe = {
  id: 55,
  name: "My yummy Recipe",
  user_id: 1,
  user_name: "John Doe",
  description:
    "A short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipe",
  instructions: "Step-by-step instructions for cooking the recipe",
  prep_time: 30, // prep time in minutes
  cook_time: 60, // cook time in minutes
  serving_size: 4,
  rating: 4.5,
  ingredients: [
    {
      name: "Eggs",
      quantity: 2,
      unit: "pcs",
    },
    {
      name: "Flour",
      quantity: 1,
      unit: "cup",
    },
  ],
  tags: [
    {
      id: 1,
      name: "Breakfast",
    },
    {
      id: 2,
      name: "Easy",
    },
    {
      id: 11,
      name: "Breakfast",
    },
    {
      id: 23,
      name: "Easy",
    },
    {
      id: 16,
      name: "Breakfast",
    },
    {
      id: 212,
      name: "Easy",
    },
  ],
  // Optional image property
  img: "/saladtest.jpeg",
};
export const testRecipe2: IRecipe = {
  id: 56,

  name: "My tasty Recipe",
  user_id: 1,
  user_name: "John Doe",
  description:
    "A short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipe",
  instructions: "Step-by-step instructions for cooking the recipe",
  prep_time: 30, // prep time in minutes
  cook_time: 60, // cook time in minutes
  serving_size: 4,
  rating: 4.5,
  ingredients: [
    {
      name: "Eggs",
      quantity: 2,
      unit: "pcs",
    },
    {
      name: "Flour",
      quantity: 1,
      unit: "cup",
    },
  ],
  tags: [
    {
      id: 1,
      name: "Breakfast",
    },
    {
      id: 2,
      name: "Easy",
    },
    {
      id: 11,
      name: "Breakfast",
    },
    {
      id: 23,
      name: "Easy",
    },
    {
      id: 16,
      name: "Breakfast",
    },
    {
      id: 212,
      name: "Easy",
    },
  ],
  // Optional image property
  img: "/saladtest.jpeg",
};
export const testRecipe3: IRecipe = {
  name: "My yucky Recipe",
  id: 58,

  user_id: 1,
  user_name: "John Doe",
  description:
    "A short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipe",
  instructions: "Step-by-step instructions for cooking the recipe",
  prep_time: 30, // prep time in minutes
  cook_time: 60, // cook time in minutes
  serving_size: 4,
  rating: 4.5,
  ingredients: [
    {
      name: "Eggs",
      quantity: 2,
      unit: "pcs",
    },
    {
      name: "Flour",
      quantity: 1,
      unit: "cup",
    },
  ],
  tags: [
    {
      id: 1,
      name: "Breakfast",
    },
    {
      id: 2,
      name: "Easy",
    },
    {
      id: 11,
      name: "Breakfast",
    },
    {
      id: 23,
      name: "Easy",
    },
    {
      id: 16,
      name: "Breakfast",
    },
    {
      id: 212,
      name: "Easy",
    },
  ],
  // Optional image property
  img: "/saladtest.jpeg",
};
export const testRecipe4: IRecipe = {
  id: 59,
  name: "My Other Recipe",
  user_id: 1,
  user_name: "John Doe",
  description:
    "A short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipe",
  instructions: "Step-by-step instructions for cooking the recipe",
  prep_time: 30, // prep time in minutes
  cook_time: 60, // cook time in minutes
  serving_size: 4,
  rating: 4.5,
  ingredients: [
    {
      name: "Eggs",
      quantity: 2,
      unit: "pcs",
    },
    {
      name: "Flour",
      quantity: 1,
      unit: "cup",
    },
  ],
  tags: [
    {
      id: 1,
      name: "Breakfast",
    },
    {
      id: 2,
      name: "Easy",
    },
    {
      id: 11,
      name: "Breakfast",
    },
    {
      id: 23,
      name: "Easy",
    },
    {
      id: 16,
      name: "Breakfast",
    },
    {
      id: 212,
      name: "Easy",
    },
  ],
  // Optional image property
  img: "/saladtest.jpeg",
};

export const testRecipe5: IRecipe = {
  id: 60,
  name: "My Final Recipe",
  user_id: 1,
  user_name: "John Doe",
  description:
    "A short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipeA short description of the recipe",
  instructions: "Step-by-step instructions for cooking the recipe",
  prep_time: 30, // prep time in minutes
  cook_time: 60, // cook time in minutes
  serving_size: 4,
  rating: 4.5,
  ingredients: [
    {
      name: "Eggs",
      quantity: 2,
      unit: "pcs",
    },
    {
      name: "Flour",
      quantity: 1,
      unit: "cup",
    },
  ],
  tags: [
    {
      id: 1,
      name: "Breakfast",
    },
    {
      id: 2,
      name: "Easy",
    },
    {
      id: 11,
      name: "Breakfast",
    },
    {
      id: 23,
      name: "Easy",
    },
    {
      id: 16,
      name: "Breakfast",
    },
    {
      id: 212,
      name: "Easy",
    },
  ],
  // Optional image property
  img: "/saladtest.jpeg",
};
