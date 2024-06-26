import { toTitleCase } from "@/lib/utils/functions";
import { IRecipe, ITag } from "@/lib/utils/interfaces";
import Image from "next/image";
import styles from "./RecipeCard.module.css";
import { ReactElement } from "react";
import { createIconText, createTags } from "@/lib/utils/uiFunctions";
import { cookies } from "next/headers";

// HEIGHT <550PX WILL HIDE DESCRIPTION
//WIDTH > 900PX WILL SHIFT TO HORIZONTAL LAYOUT
// DEADZONES: WIDTH 480 - 900
//            HEIGHT 550-650

export default function RecipeCard({ recipe }: { recipe: IRecipe }) {
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
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.headContainer}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={img}
              alt={`A photo of ${name}`}
              fill={true}
            />
            {img ? (
              <div className={styles.imgShade}></div>
            ) : (
              <div className={styles.imgShade}></div>
            )}

            <div className={styles.imgInfo}>
              <div className={styles.imgLeftInfo}></div>
              <div className={styles.imgRightInfo}>
                {createIconText(
                  "fullCook.svg",
                  `${fullCookTime.toString()} mins`
                )}
                {user_name
                  ? createIconText("user.svg", user_name)
                  : createIconText("user.svg", "err")}
              </div>
            </div>
            <h3 className={`${styles.recipeLink}`}>
              <a href={`/recipe/id/${id}`}>VIEW RECIPE</a>
            </h3>
          </div>
        </div>
        <div className={styles.mainContainer}>
          <h4 className={styles.title}>
            <a href={`/recipe/id/${id}`}>{toTitleCase(name)}</a>
          </h4>
          <ul className={styles.tagsContainer}>
            {tags ? createTags(name, tags) : <div></div>}
          </ul>
          <p className={styles.description}>{description}</p>
          <button className={styles.button}>Add to Meal Plan</button>
        </div>
      </div>
    </div>
  );
}
