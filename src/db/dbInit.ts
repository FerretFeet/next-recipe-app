import db from "./dbConfig";
import fs from "fs";
import { insertRecipe } from "./schema/queries/insertRecipe";
import { testRecipes } from "./seed-data";
import { IRecipe } from "./interfaces/interfaces";

async function executeSqlCreationFiles(sqlPaths: string[]) {
  try {
    await db.none(`DROP DATABASE IF EXISTS recipe_app
        CREATE DATABASE recipe_app;`);
    for (const sqlPath of sqlPaths) {
      const sql = await fs.promises.readFile(sqlPath, "utf8");
      await db.none(sql);
      console.log(`Executed SQL file: ${sqlPath}`);
    }
  } catch (error) {
    console.error("Error executing SQL files:", error);
    throw error; // Re-throw the error for further handling
  }
}

async function insertSeed(data: IRecipe[]) {
  try {
    for (const datum of data) {
      const recipe = await insertRecipe(datum);
      console.log(`Added Seed Recipe: ${recipe?.name}`);
    }
  } catch (err) {
    console.error("Error adding seed data", err);
    throw err;
  }
}

const sqlPaths = [
  "tables/ingredient.sql",
  "tables/recipe_x_ingredient.sql",
  "tables/recipe_x_tag.sql",
  "tables/recipe.sql",
  "tables/tag.sql",
  "tables/unit.sql",
];

executeSqlCreationFiles(sqlPaths)
  .then(() => console.log("All SQL Creation files executed successfully"))
  .catch((error) => console.error("An error occurred:", error));

insertSeed(testRecipes).then(() =>
  console.log("All seed data added successfully")
);
