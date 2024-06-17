import RecipeCard from "@/components/composite/RecipeCard/RecipeCard";
import { testRecipe1 } from "@/lib/utils/interfaces";

export default function Test() {
  return (
    <div className="">
      <RecipeCard recipe={testRecipe1} />
    </div>
  );
}
