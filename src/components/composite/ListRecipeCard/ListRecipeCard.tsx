import { IRecipe } from "@/lib/utils/interfaces";
import { createIconText, createTags } from "@/lib/utils/uiFunctions";
import Image from "next/image";
import styles from "./ListRecipeCard.module.css";

export function ListrecipeCard({ recipe }: { recipe: IRecipe }) {
  const {
    id,
    name,
    user_name,
    user_id,
    description,
    prep_time,
    cook_time,
    serving_size,
    rating,
    tags,
    img,
  } = recipe;
  const fullCookTime = prep_time + cook_time;

  return (
    <a
      href={`http://localhost:3000/recipe/id/${id}`}
      className={styles.container}
    >
      <div className={styles.card}>
        <div className={`${styles.top}`}>
          <h6>{name}</h6>
        </div>
        <div className={styles.middle}>
          <div className={styles.imgContainer}>
            {img ? (
              <Image
                src={img}
                alt={`A photo of ${name}`}
                fill={true}
              />
            ) : (
              <div
                style={{ width: 96, height: 96, background: "#000000" }}
              ></div>
            )}
          </div>
          <div className={styles.iconText}>
            {createIconText("user.svg", user_name)}
            {createIconText("star.svg", `${rating ? rating.toString() : 0}/5`)}
            {createIconText("fullCook.svg", `${fullCookTime.toString()} mins`)}
            {createIconText("plate.svg", `${serving_size.toString()} srvs`)}
          </div>
        </div>
        <ul className={styles.bottom}>
          {tags ? createTags(name, tags) : <div></div>}
        </ul>
      </div>
    </a>
  );
}
