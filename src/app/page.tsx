import Image from "next/image";
import styles from "./page.module.css";
import { SiteHeader } from "@/components/framework/SiteHeader/SiteHeader";
import Carousel from "@/components/framework/FeaturedCarousel/FeaturedCarousel";
import { MinorCarousel } from "@/components/framework/MinorCarousel/MinorCarousel";
import SearchBar from "@/components/framework/SearchBar/SearchBar";

export default function Home() {
  let testLinks: string[] = ["home", "about"];
  return (
    <main className={styles.container}>
      <section
        aria-label="page header"
        className={styles.body}
      >
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
        <h3>Featured Recipes:</h3>
        <Carousel />
      </section>
      <section
        aria-label="More recipes"
        className={`${styles.moreRecipes}`}
      >
        <h5 className="">Search</h5>
        <SearchBar />
        {/* SEARCH BAR */}
        {/* Many Minor Carousels showing categories */}
        <h5 className={styles.catHeader}>Category</h5>

        <MinorCarousel />
        {/* PAGINATION */}
      </section>
      <footer></footer>
    </main>
  );
}
