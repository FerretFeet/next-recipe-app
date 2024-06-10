// @ts-nocheck
import { insertRecipeWithRelations } from "@/db/schema/queries/insertRecipe";
import { IRecipe } from "@/lib/utils/interfaces";
import { validateRecipeData } from "@/lib/validateRecipeData";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
  console.log("INSERTRECIPE ROUTE");
  const body = await req.json();
  const {
    name,
    userId,
    description,
    img,
    cookTime,
    prepTime,
    servings,
    tags,
    ingredients,
    instructions,
  } = body;
  console.log(body);
  console.log(name);

  //   ADD CHECK MAKE SURE CORRECTLY FORMATTED
  const formattedTags = tags;
  const formattedIngredients = ingredients;
  const formattedInstructions = instructions;

  const r: IRecipe = {
    name,
    user_id: Number(userId), // Ensure user_id is a number
    description,
    instructions: formattedInstructions,
    prep_time: Number(prepTime), // Ensure prep_time is a number
    cook_time: Number(cookTime), // Ensure cook_time is a number
    serving_size: Number(servings), // Ensure serving_size is a number
    rating: 0, // Default rating
    img,
    ingredients: formattedIngredients,
    tags: formattedTags,
  };
  console.log(r.name);
  console.log(r.instructions);
  // Validate data
  const validationError = validateRecipeData({
    name: r.name,
    user_id: r.user_id,
    description: r.description,
    instructions: r.instructions,
    prep_time: r.prep_time,
    cook_time: r.cook_time,
    serving_size: r.serving_size,
    ingredients: r.ingredients,
    tags: r.tags,
    img: r.img,
  });
  if (validationError) {
    return new NextResponse(`${validationError}`, { status: 400 });
  }

  try {
    // Insert data into the database
    const newRecipe = await insertRecipeWithRelations({
      name: r.name,
      user_id: r.user_id,
      description: r.description,
      instructions: r.instructions,
      prep_time: r.prep_time,
      cook_time: r.cook_time,
      serving_size: r.serving_size,
      ingredients: r.ingredients,
      tags: r.tags,
      img: r.img,
    });
    console.log(newRecipe);
  } catch (error) {
    console.error("Error creating recipe:", error);
    return NextResponse.json("Internal server error", { status: 500 });
  } finally {
    return NextResponse.json(
      { message: "recipe created successfully" },
      {
        status: 201,
      }
    );
  }
};
