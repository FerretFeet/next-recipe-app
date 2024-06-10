import { ListrecipeCard } from "@/components/composite/ListRecipeCard/ListRecipeCard";
import { parseTags } from "@/lib/utils/functions";
import { IRecipe } from "@/lib/utils/interfaces";
import styles from "./page.module.css";

async function getData(search: string) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/recipe/search/${search}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    console.error("Error fetching recipeByTag", err);
  }
}

export default async function SearchPage({
  params,
}: {
  params: { search: string };
}) {
  const createRecipes = (recipes: any[]) => {
    return (
      <ul>
        {recipes.map((recipe: any, idx: any) => {
          const fullCookTime = recipe.prep_time + recipe.cook_time;

          // REPLACE DEV ONLY BELOW#######################################
          // ################VVVVVVVVVVVVVVVVVV
          recipe.img = "/";
          return (
            <li
              className={styles.searchItem}
              key={idx + "searchItem"}
            >
              <ListrecipeCard
                recipe={recipe}
                key={idx + recipe.name}
              />
            </li>
          );
        })}
      </ul>
    );
  };
  try {
    const recipes = await getData(params.search);
    recipes.forEach((recipe: any) => {
      recipe.tags ? (recipe.tags = parseTags(recipe.tags)) : "";
    });

    {
    }

    return <div className="">{createRecipes(recipes)}</div>;
  } catch (err) {
    console.error("Error fetching data:", err);
    return <div className="">Error fetching data. Please try again</div>;
  }
}
