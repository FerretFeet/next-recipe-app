import { SiteHeader } from "@/components/framework/SiteHeader/SiteHeader";
import { IIngredient, IRecipe, testRecipe } from "@/utils/interfaces";
import styles from "./page.module.css";
import Image from "next/image";
import { createIconText, createTags } from "@/utils/uiFunctions";
import * as util from "util";

// const test_recipe: IRecipe = testRecipe;

async function getData() {
  const res = await fetch("http://localhost:3000/api/recipe/2");

  console.log(res);
  console.log(util.inspect(res, false, null, true));

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
  let recipe_arr = await getData();
  const recipe = recipe_arr[0];
  console.log(util.inspect(recipe_arr, false, null, true));

  console.log(util.inspect(recipe, false, null, true));
  recipe.tags = recipe.tags.split(";");
  recipe.instructions = recipe.instructions.split(";");
  // REPLACE DEV ONLY BELOW#######################################
  // ################VVVVVVVVVVVVVVVVVV
  recipe.img = "/";

  function parseIngredients(ingredientString: string): IIngredient[] {
    // Take string of form
    // 'ingredient_id, name, quantity, unit;repeat,'
    let temp: IIngredient[];
    console.log(`${ingredientString} ######### ITEM ITEM`);

    temp = ingredientString.split(";").map((item) => {
      const [strId, name, strQuantity, unit] = item.split(",");
      console.log(`${item} ######### ITEM ITEM`);
      const id = Number(strId);
      const quantity = Number(strQuantity);
      return { id, name, quantity, unit };
    });
    return temp;
  }

  recipe.ingredients = parseIngredients(recipe.ingredients);

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
