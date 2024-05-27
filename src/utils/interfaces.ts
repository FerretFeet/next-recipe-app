export interface IIngredient {
  id?: number;
  ingr_name: string;
  quantity: number;
  unit: string;
}

export interface ITag {
  id: number;
  tag_name: string;
}

export interface IRecipe {
  id?: number;
  recipe_name: string;
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
  recipe_name: "My Delicious Recipe",
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
      ingr_name: "Eggs",
      quantity: 2,
      unit: "pcs",
    },
    {
      ingr_name: "Flour",
      quantity: 1,
      unit: "cup",
    },
  ],
  tags: [
    {
      id: 1,
      tag_name: "Breakfast",
    },
    {
      id: 2,
      tag_name: "Easy",
    },
    {
      id: 11,
      tag_name: "Breakfast",
    },
    {
      id: 23,
      tag_name: "Easy",
    },
    {
      id: 16,
      tag_name: "Breakfast",
    },
    {
      id: 212,
      tag_name: "Easy",
    },
  ],
  // Optional image property
  img: "/saladtest.jpeg",
};

export const testRecipe1: IRecipe = {
  recipe_name: "My yummy Recipe",
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
      ingr_name: "Eggs",
      quantity: 2,
      unit: "pcs",
    },
    {
      ingr_name: "Flour",
      quantity: 1,
      unit: "cup",
    },
  ],
  tags: [
    {
      id: 1,
      tag_name: "Breakfast",
    },
    {
      id: 2,
      tag_name: "Easy",
    },
    {
      id: 11,
      tag_name: "Breakfast",
    },
    {
      id: 23,
      tag_name: "Easy",
    },
    {
      id: 16,
      tag_name: "Breakfast",
    },
    {
      id: 212,
      tag_name: "Easy",
    },
  ],
  // Optional image property
  img: "/saladtest.jpeg",
};
export const testRecipe2: IRecipe = {
  recipe_name: "My tasty Recipe",
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
      ingr_name: "Eggs",
      quantity: 2,
      unit: "pcs",
    },
    {
      ingr_name: "Flour",
      quantity: 1,
      unit: "cup",
    },
  ],
  tags: [
    {
      id: 1,
      tag_name: "Breakfast",
    },
    {
      id: 2,
      tag_name: "Easy",
    },
    {
      id: 11,
      tag_name: "Breakfast",
    },
    {
      id: 23,
      tag_name: "Easy",
    },
    {
      id: 16,
      tag_name: "Breakfast",
    },
    {
      id: 212,
      tag_name: "Easy",
    },
  ],
  // Optional image property
  img: "/saladtest.jpeg",
};
export const testRecipe3: IRecipe = {
  recipe_name: "My yucky Recipe",
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
      ingr_name: "Eggs",
      quantity: 2,
      unit: "pcs",
    },
    {
      ingr_name: "Flour",
      quantity: 1,
      unit: "cup",
    },
  ],
  tags: [
    {
      id: 1,
      tag_name: "Breakfast",
    },
    {
      id: 2,
      tag_name: "Easy",
    },
    {
      id: 11,
      tag_name: "Breakfast",
    },
    {
      id: 23,
      tag_name: "Easy",
    },
    {
      id: 16,
      tag_name: "Breakfast",
    },
    {
      id: 212,
      tag_name: "Easy",
    },
  ],
  // Optional image property
  img: "/saladtest.jpeg",
};
