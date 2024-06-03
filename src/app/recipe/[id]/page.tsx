import { SiteHeader } from "@/components/framework/SiteHeader/SiteHeader";
import { IIngredient, IRecipe, testRecipe } from "@/utils/interfaces";
import styles from "./page.module.css";
import Image from "next/image";
import { createIconText, createTags } from "@/utils/uiFunctions";
import * as util from "util";

// const test_recipe: IRecipe = testRecipe;

async function getData() {
  const res = await fetch("http://localhost:3000/api/recipe/2");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function RecipePage({
  params,
}: {
  params: { id: number };
}) {
  let testLinks: string[] = ["home", "about"];
  // const recipe = test_recipe;
  let temp = await getData();
  const recipe = temp[0];
  recipe.ingredients = recipe.ingredients.split(";");
  recipe.tags = recipe.tags.split(";");
  recipe.instructions = recipe.instructions.split(";");
  // REPLACE DEV ONLY BELOW#######################################
  // ################VVVVVVVVVVVVVVVVVV
  recipe.img = "/";

  console.log(util.inspect(recipe, false, null, true));

  const fullCookTime = recipe.prep_time + recipe.cook_time;

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
        <SiteHeader links={testLinks} />
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
          {createIconText("user.svg", recipe.user_name)}
          {recipe.rating ? "" : (recipe.rating = 0)}
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
