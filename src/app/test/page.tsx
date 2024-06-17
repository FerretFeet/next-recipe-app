import RecipeCard from "@/components/composite/RecipeCard/RecipeCard";
import { testRecipe1 } from "@/lib/utils/interfaces";

export default function Test() {
  return (
    <div className="">
      <div style={{ width: "400px", height: "650px", padding: "3rem" }}>
        <RecipeCard recipe={testRecipe1} />
      </div>
      <div style={{ width: "980px", height: "600px", padding: "3rem" }}>
        <RecipeCard recipe={testRecipe1} />
      </div>
      <div style={{ width: "400px", height: "550px", padding: "3rem" }}>
        <RecipeCard recipe={testRecipe1} />
      </div>
    </div>
  );
}
