import { SiteHeader } from "@/components/framework/SiteHeader/SiteHeader";
import { IIngredient, IRecipe, ITag, testRecipe } from "@/utils/interfaces";
import styles from "./page.module.css";
import Image from "next/image";
import { createIconText, createTags } from "@/utils/uiFunctions";
import * as util from "util";
import { parseIngredients, parseTags } from "@/utils/functions";

async function getData(id: number) {
  console.log(id);
  try {
    const res = await fetch(`http://localhost:3000/api/recipe/id/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    console.error("Error fetching recipeById", err);
  }
}

export default async function RecipePage({
  params,
}: {
  params: { id: number };
}) {
  let recipe = await getData(params.id);
  recipe.ingredients = parseIngredients(recipe.ingredients);
  recipe.tags = parseTags(recipe.tags);
  const fullCookTime = recipe.prep_time + recipe.cook_time;

  recipe.instructions = recipe.instructions.split(";");
  // REPLACE DEV ONLY BELOW#######################################
  // ################VVVVVVVVVVVVVVVVVV
  recipe.img = "/";
  recipe.rating = 0;
  let testLinks: string[] = ["home", "about"];

  // UI Functions
  const listIngredients = (ingredients: IIngredient[]) => {
    return (
      <>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li
              key={index}
              className={styles.ingredients}
            >{`${ingredient.quantity} ${ingredient.unit}s of ${ingredient.name}`}</li>
          ))}
        </ul>
      </>
    );
  };

  const listInstructions = (instructions: string[]) => {
    return (
      <>
        <ol>
          {instructions.map((el, index) => (
            <li
              key={index}
              className={styles.instruction}
            >
              {el}
            </li>
          ))}
        </ol>
      </>
    );
  };

  return (
    <>
      <header>
        <h1 className={styles.title}>{recipe.name}</h1>
        <div className={styles.imgContainer}>
          {recipe.img ? "" : (recipe.img = "")}
          <Image
            src={recipe.img}
            alt={`an image of ${recipe.name}`}
            width={320}
            height={320}
          />
        </div>
      </header>

      <section aria-label="Recipe details">
        <p>{recipe.description}</p>
        {recipe.tags ? "" : (recipe.tags = [])}

        {createTags(recipe.name, recipe.tags)}

        <div className={styles.iconText}>
          {/* MATERIAL UI? ICON LIBRARY NEEDED */}
          {createIconText("user.svg", recipe.username)}
          {createIconText("star.svg", `${recipe.rating.toString()}/5`)}
          {createIconText("fullCook.svg", `${fullCookTime.toString()} mins`)}
          {createIconText(
            "plate.svg",
            `${recipe.serving_size.toString()} servings`
          )}
        </div>
      </section>
      <section aria-label="Ingredients and Instructions">
        <div className={styles.ingredients}>
          <h5>Ingredients </h5>
          {recipe.ingredients ? "" : (recipe.ingredients = [])}

          {listIngredients(recipe.ingredients)}
        </div>
        <div className={styles.instructions}>
          <h5>Instructions: </h5>
          {listInstructions(recipe.instructions)}
        </div>
      </section>
    </>
  );
}
