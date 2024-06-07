import { toTitleCase } from "@/utils/functions";
import { IRecipe, ITag } from "@/utils/interfaces";
import Image from "next/image";
import styles from "./RecipeCard.module.css";
import { ReactElement } from "react";
import { createIconText, createTags } from "@/utils/uiFunctions";

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
    <a
      className={`${styles.container}`}
      href={`http://localhost:3000/recipe/id/${id}`}
    >
      <div className={`${styles.card}`}>
        <div className={styles.imgContainer}>
          {img ? (
            <Image
              src={img}
              alt={`A photo of ${name}`}
              fill={true}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.heading}>
          <h6 className={``}>{toTitleCase(name)}</h6>
        </div>
        <div className="">
          <ul className={styles.tagsContainer}>
            {tags ? createTags(name, tags) : <div></div>}
          </ul>
        </div>
        <div className={styles.description}>
          <p className="">{description}</p>
        </div>
        <div className={styles.iconText}>
          {/* MATERIAL UI? ICON LIBRARY NEEDED */}
          {createIconText("user.svg", user_name)}
          {createIconText("star.svg", `${rating.toString()}/5`)}
          {createIconText("fullCook.svg", `${fullCookTime.toString()} mins`)}
          {createIconText("plate.svg", `${serving_size.toString()} servings`)}
        </div>
      </div>
    </a>
  );
}
