import db from "./dbConfig";
import fs from "fs";
import { insertRecipe } from "./schema/queries/insertRecipe";
import { testRecipes } from "./seed-data";
import { IRecipe } from "./interfaces/interfaces";

// //bootstrap DB so we can drop and reset when wanted
// import pgPromise from "pg-promise";
// // const pgp = require('pg-promise')()
// // import pgp from "pg-promise";

// //prepare connection details
// const connectionString = "postgres://postgres:password@localhost:5432/postgres";

// const initOptions = {};

// const pgp = pgPromise({});

// //create a new db instance
// const bootstrapdb = pgp(connectionString);

// async function bootstrapDatabase() {
//   try {
//     await bootstrapdb.none(`
//     DROP DATABASE IF EXISTS recipe_app;
//     CREATE DATABASE recipe_app;`);
//     console.log("Database recipe_app dropped and created successfully");
//   } catch (error) {
//     console.log("Error during database bootstrap", error);
//   }
// }

async function executeSqlCreationFiles(sqlPaths: string[]) {
  try {
    for (const sqlPath of sqlPaths) {
      const fullPath = partialPath + sqlPath;
      const sql = await fs.promises.readFile(fullPath, "utf8");
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

const partialPath = "src/db/schema/";
const sqlPaths = [
  "tables/ingredient.sql",
  "tables/recipe_x_ingredient.sql",
  "tables/recipe_x_tag.sql",
  "tables/recipe.sql",
  "tables/tag.sql",
  "tables/unit.sql",
  "tables/user_account.sql",
  "tables/_relations.sql",
];

// bootstrapDatabase().then(() => {
executeSqlCreationFiles(sqlPaths)
  .then(() => {
    console.log("All SQL Creation files executed successfully");
    db.none(`INSERT INTO user_account (username) VALUES ('baw')`);
    db.none(`INSERT INTO unit (name) VALUES 
    ('teaspoon'),
    ('tablespoon'),
    ('cup'),
    ('pint'),
    ('quart'),
    ('gallon'),
    ('milliliter'),
    ('liter'),
    ('deciliter'),
    ('gram'),
    ('kilogram'),
    ('ounce'),
    ('pound'),
    ('milligram'),
    ('microgram'),
    ('fluid ounce'),
    ('dash'),
    ('pinch'),
    ('drop'),
    ('piece');`);
  })
  .then(() => {
    console.log("unit table populated");
    insertSeed(testRecipes).then(() =>
      console.log("All seed data added successfully")
    );
  })
  .catch((error) => console.error("An error occurred:", error));
// });
