import db from "@/db/dbConfig";
import { IRecipe } from "@/lib/utils/interfaces";
import { error } from "console";
import * as util from "util";

interface IRecipeTransaction {
  many(query: string, values?: any[]): Promise<void>; // For queries that don't return data
  one<T>(query: string, values?: any[]): Promise<T>; // Generic for various record types
  none(query: string, values?: any[]): Promise<void>; // For queries that don't return data
}

async function insertRecipe({
  name,
  user_id,
  description,
  img,
  instructions,
  prep_time,
  cook_time,
  serving_size,
}: IRecipe) {
  const query = `
  INSERT INTO recipe (name, user_id, description, instructions, prep_time, cook_time, serving_size, img)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING id, name, user_id, description, instructions, prep_time, cook_time, serving_size, img
  `;
  try {
    const recipe = await db.one(query, [
      name,
      user_id,
      description,
      instructions,
      prep_time,
      cook_time,
      serving_size,
      img,
    ]);
    console.log(`Recipe successfully inserted: ${recipe.name} ${recipe.id}`);
    return recipe;
  } catch (err) {
    console.error("Error inserting recipe", err);
    throw err;
  }
}

async function insertIngredient(name: string) {
  const query = `
  INSERT INTO ingredient (name)
  VALUES ($1)
  RETURNING id
  `;
  try {
    const ingredient = await db.one(query, [name]);
    return ingredient;
  } catch (err) {
    console.error("Error inserting ingredient", err);
    throw err;
  }
}

async function selectIngredientByName(name: string) {
  const query = `
  SELECT id
  FROM ingredient
  WHERE name = $1
    `;
  try {
    const ingredient = await db.any(query, [name]);
    if (ingredient[0]) return ingredient[0];
  } catch (err) {
    console.error("Error selecting ingredient", err);
    throw err;
  }
}

async function selectOrInsertIngredient(name: string) {
  try {
    const ingredient = await selectIngredientByName(name);

    console.log(`ingredient selected ${ingredient.id} ${name}`);
    return ingredient;
  } catch (err) {
    try {
      const ingredient = await insertIngredient(name);
      console.log(`ingredient inserted ${ingredient.id} ${name}`);
      return ingredient;
    } catch (err) {
      console.error("Error selecting or inserting ingredient", err);
      throw err;
    }
  }
}

async function linkRecipeIngredient(id: number, recipeName: string) {
  const query1 = `
  SELECT id FROM ingredient
  WHERE name = $1
  `;
  const query2 = `
  UPDATE ingredient
  SET recipe_id = $2
  WHERE id = $1
  `;
  console.log(`LINKRECIPE FUNCTION ${id}, ${recipeName}`);
  const testingrId = await db.any(query1, [recipeName]);

  try {
    const ingrId = await db.any(query1, [recipeName]);
    if (ingrId[0]) {
      console.log(`LINKRECIPEINGREDIENT ${!ingrId[0].id}`);
      await db.none(query2, [id, ingrId[0].id as Number]);
      console.log("linked ingredient to recipe");
      return true;
    }
    console.log("No matching recipe for ingredient");
    return false;
  } catch (err) {
    console.error("Error LinkRecipeIngredient", err);
    throw err;
  }
}

async function insertTag(name: string) {
  const query = `
  INSERT INTO tag (name)
  VALUES ($1)
  RETURNING id
  `;
  try {
    const tag = await db.one(query, [name]);
    return tag;
  } catch (err) {
    console.error("Error inserting tag", err);
    throw err;
  }
}

async function selectTagByName(name: string) {
  const query = `
  SELECT id
  FROM tag
  WHERE name = $1
    `;
  try {
    const tag = await db.any(query, [name]);
    if (tag[0]) return tag[0];
  } catch (err) {
    console.error("Error selecting tag", err);
    throw err;
  }
}

async function selectOrInsertTag(name: string) {
  try {
    const tag = await selectTagByName(name);
    console.log(`Tag selected ${tag.id}`);
    return tag;
  } catch (err) {
    try {
      const tag = await insertTag(name);
      console.log(`Tag inserted ${tag.id}`);
      return tag;
    } catch (err) {
      console.error("Error selecting or inserting tag", err);
      throw err;
    }
  }
}

async function insertRxI(
  recipe_id: number,
  ingredient_id: number,
  quantity: number,
  unit_name: string
) {
  const query = `
    INSERT INTO recipe_x_ingredient (recipe_id, ingr_id, quantity, unit_id)
    SELECT $1, $2, $3, (SELECT id FROM unit WHERE LOWER(name) = $4)
    `;
  try {
    await db.none(query, [recipe_id, ingredient_id, quantity, unit_name]);
  } catch (err) {
    console.error("Error inserting into RxI", err);
    throw err;
  }
}

async function insertRxT(recipe_id: number, tag_id: number) {
  const query = `
  INSERT INTO recipe_x_tag (recipe_id, tag_id)
  SELECT $1, $2
`;
  try {
    await db.none(query, [recipe_id, tag_id]);
  } catch (err) {
    console.error("Error inserting into RxT", err);
    throw err;
  }
}

export async function insertRecipeWithRelations({
  name,
  user_id,
  description,
  instructions,
  prep_time,
  cook_time,
  serving_size,
  ingredients,
  tags,
  img,
}: IRecipe) {
  // Format all inputs to lowercase
  console.log(name);
  name = name.toLowerCase();
  description = description.toLowerCase();
  instructions = instructions.toLowerCase();
  ingredients?.forEach(
    (ingredient) => (ingredient.name = ingredient.name.toLowerCase())
  );
  tags?.forEach((tag) => (tag.name = tag.name.toLowerCase()));
  console.log("INSERTRECIPE.ts DEBUG");
  try {
    const recipe = await insertRecipe({
      name,
      user_id,
      description,
      img,
      instructions,
      prep_time,
      cook_time,
      serving_size,
    });

    ingredients?.forEach(async (ingredient) => {
      const temp = await selectOrInsertIngredient(ingredient.name);
      ingredient.id = temp.id;
      ingredient.id
        ? await insertRxI(
            recipe.id,
            ingredient.id,
            ingredient.quantity,
            ingredient.unit
          )
        : () => {
            throw new Error("Ingredient.id is undefined in insertRxi");
          };
    });
    recipe.ingredients = ingredients;

    tags?.forEach(async (tag) => {
      const temp = await selectOrInsertTag(tag.name);
      tag.id = temp.id;
      tag.id
        ? await insertRxT(recipe.id, tag.id)
        : () => {
            throw new Error("tag.id is undefined in insertRxT");
          };
    });
    recipe.tags = tags;

    try {
      console.log(recipe.id);
      console.log(recipe.name);
      await linkRecipeIngredient(recipe.id, recipe.name);
    } catch (err) {
      console.error("no matching ingredient for recipe", err);
    }
    console.log(
      `################# FULL RECIPE CREATED: ${recipe.name} ######################## `
    );
    return recipe;
  } catch (err) {
    console.error("Error inserting recipe with relations");
    throw err;
  }
}
