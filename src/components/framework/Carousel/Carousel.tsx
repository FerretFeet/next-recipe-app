import RecipeCard from "@/components/composite/RecipeCard/RecipeCard";
import styles from "./Carousel.module.css";
import { testRecipe } from "@/utils/interfaces";

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <h3>Featured Recipes:</h3>
      <RecipeCard recipe={testRecipe} />
      <RecipeCard recipe={testRecipe} />
      <RecipeCard recipe={testRecipe} />
      <p> TEST</p>
    </div>
  );
}
