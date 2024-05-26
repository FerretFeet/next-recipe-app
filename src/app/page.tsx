import Image from "next/image";
import styles from "./page.module.css";
import { testRecipe } from "@/utils/interfaces";
import { ListrecipeCard } from "@/components/composite/ListRecipeCard/ListRecipeCard";
import { SiteHeader } from "@/components/framework/SiteHeader/SiteHeader";
import { alegreya } from "@/fonts";
import Carousel from "@/components/framework/Carousel/Carousel";

export default function Home() {
  let testLinks: string[] = ["home", "about"];
  return (
    <main className={styles.container}>
      <section
        aria-label="page header"
        className={styles.body}
      >
        <SiteHeader links={testLinks} />
        <div className={styles.hero}>
          <div className={styles.hImg}>
            <Image
              src="/saladtest.jpeg"
              alt=""
              width={360}
              height={360}
            />
          </div>
          <div className={`${styles.hText} `}>
            {/* ${alegreya.className} */}
            <h1>Online Grocery Shopping - Made Easy</h1>
            <p>
              Add recipes and food items to your basket, then import into your
              preffered online grocer.
            </p>
          </div>
        </div>
      </section>
      <section
        aria-label="Explainer"
        className={styles.explainer}
      >
        <h3>How It Works:</h3>
        <ol className={styles.explanation}>
          <li>Add recipes and food items to your basket</li>
          <li>View and adjust items in your grocery basket</li>
          <li>Import grocery basket into Walmart/Kroger</li>
          <li>Place your order on your grocer&apos;s website</li>
        </ol>
      </section>
      <section aria-label="Featured recipes">
        <Carousel />
      </section>
      <section aria-label="All recipes">
        {/* SEARCH BAR */}
        {/* SEARCH PAGE */}
      </section>
      <footer></footer>
    </main>
  );
}
