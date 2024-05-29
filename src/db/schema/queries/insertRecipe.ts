import db from "@/db/dbConfig";
import { IRecipe } from "@/db/interfaces/interfaces";

interface IRecipeTransaction {
  many(query: string, values?: any[]): Promise<void>; // For queries that don't return data
  one<T>(query: string, values?: any[]): Promise<T>; // Generic for various record types
  none(query: string, values?: any[]): Promise<void>; // For queries that don't return data
}

export async function insertRecipe({
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
}: IRecipe): Promise<IRecipe | undefined> {
  // Queries
  const insertIntoRecipe = `
    INSERT INTO recipe (name, user_id, description, instructions, prep_time, cook_time, serving_size, img)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    return *
    `;

  const getOrInsertIngr = `
    INSERT INTO ingredient (name)
    VALUES ($1)
    ON CONFLICT (name) DO NOTHING
    RETURNING id, name
    `;

  const isRecipeIngr = `
    UPDATE ingredient
    SET recipe_id = $1
    WHERE name = $2
    `;

  const insertRecipexIngredient = `
    INSERT INTO recipe_x_ingredient (recipe_id, ingr_id, quantity, unit_name)
    SELECT $1, $2, $3, (SELECT id FROM unit WHERE LOWER(name) = $4)
    `;
  const getOrInsertTag = `
    INSERT INTO tag (name)
    VALUES ($1)
    ON CONFLICT (name) DO NOTHING
    RETURNING id
  `;
  const insertRecipexTag = `
    INSERT INTO recipe_x_tags (recipe_id, tag_id)
    SELECT $1, $2
  `;

  //   VARIABLES
  let newRecipe: IRecipe;
  try {
    return await db.tx(async (t) => {
      try {
        newRecipe = {
          name: name,
          user_id: user_id,
          description: description,
          instructions: instructions,
          prep_time: prep_time,
          cook_time: cook_time,
          serving_size: serving_size,
        };
        const tempRecipe: Promise<IRecipe | undefined> = t.one(
          insertIntoRecipe,
          [
            name,
            user_id,
            description,
            instructions,
            prep_time,
            cook_time,
            serving_size,
            img,
          ]
        );
        //@ts-expect-error
        newRecipe.id = (await tempRecipe).id;
        // Check recipeID was set
        //@ts-expect-error
        if (newRecipe.id == false) {
          throw new Error("recipeID not set");
        }

        // @ts-expect-error
        ingredients.forEach(async (ingredient) => {
          // Find or create ingredient and pull id
          let ingr_id = t.one(getOrInsertIngr, ingredient.name);

          ingredient.id = await ingr_id;
          newRecipe.ingredients?.push(ingredient);

          //create recipe_x_ingredient entry
          let rec_ingr = t.none(insertRecipexIngredient, [
            newRecipe.id,
            ingredient.id,
            ingredient.quantity,
            ingredient.unit,
          ]);
          await rec_ingr;
        });
        // @ts-expect-error
        tags.forEach(async (tag) => {
          //find or create ingredient and pull id
          let tag_id = t.one(getOrInsertTag, tag.name);
          tag.id = await tag_id;
          newRecipe.tags?.push(tag);

          //create recipe_x_tag entry
          let rec_tag = t.none(insertRecipexTag, [newRecipe.id, tag.id]);
          await tag_id;
        });

        try {
          await t.none(isRecipeIngr, [newRecipe.id, newRecipe.name]);
        } catch (err) {
          console.error("Recipe is not existing ingredient", err);
        }
      } catch (err) {
        console.error("error creating recipe", err);
        throw err;
      }
      return newRecipe;
    });
  } catch (err) {
    console.error("error finished recipe_create transaction", err);
    throw err;
  }
}
