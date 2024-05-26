import Image from "next/image";
import styles from "./page.module.css";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import { testRecipe } from "@/utils/interfaces";
import { ListrecipeCard } from "@/components/ListRecipeCard/ListRecipeCard";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";

export default function Home() {
  let testLinks: string[] = ["home", "about"];
  return (
    <main className={styles.container}>
      <SiteHeader links={testLinks} />
      <div className={styles.description}>
        {/* <RecipeCard recipe={testRecipe} /> */}
        <ListrecipeCard recipe={testRecipe} />
      </div>
    </main>
  );
}
