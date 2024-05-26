import { ReactElement } from "react";
import { ITag } from "./interfaces";
import styles from "./uiFunctions.module.css";

export function createTags(recipe_name: string, tags: ITag[]) {
  if (!tags) return <div className=""></div>;
  let temp: Array<ReactElement> = [];
  tags.forEach((tag) => {
    temp.push(
      <li
        key={recipe_name + tag.id}
        className={styles.tag}
      >
        {/* CREATE LINK TO SEARCH BY TAG */}
        <p>{tag.tag_name}</p>
      </li>
    );
  });
  return temp;
}

export function createIconText(iconLink: string, infoTxt: string) {
  /* MATERIAL UI? ICON LIBRARY NEEDED */
  return (
    <div className={styles.infoItem}>
      <div
        style={{ width: 24, height: 24, backgroundColor: "#000000" }}
        className={styles.infoicon}
      >
        {/* ICON HERE */}
      </div>
      <div className={styles.infoItemTxt}>{infoTxt}</div>
    </div>
  );
}
