import { ListrecipeCard } from "@/components/composite/ListRecipeCard/ListRecipeCard";
import { parseTags } from "@/utils/functions";
import { IRecipe } from "@/utils/interfaces";

async function getData(search: string) {
  console.log(`GET DATA ${search}`);
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
  const recipes = await getData(params.search);
  recipes.forEach((recipe: any) => {
    recipe.tags ? (recipe.tags = parseTags(recipe.tags)) : "";
    console.log(recipe);
  });
  const createRecipes = (recipes: any[]) => {
    console.log(`SSSSSSSEARCH PAGE`);
    return (
      <>
        {recipes.map((recipe: any, idx: any) => {
          const fullCookTime = recipe.prep_time + recipe.cook_time;

          // REPLACE DEV ONLY BELOW#######################################
          // ################VVVVVVVVVVVVVVVVVV
          recipe.img = "/";
          return (
            <ListrecipeCard
              recipe={recipe}
              key={idx + recipe.name}
            />
          );
        })}
      </>
    );
  };
  {
    console.log(createRecipes(recipes));
  }

  return <div className="">{createRecipes(recipes)}</div>;
}
