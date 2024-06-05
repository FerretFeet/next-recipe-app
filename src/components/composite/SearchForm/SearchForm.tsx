"use client";
import styles from "./SearchForm.module.css";

export default function SearchForm() {
  return (
    <div className={`${styles.container}`}>
      <form action="GET">
        <input
          className={`${styles.inputTxt}`}
          type="text"
        />
        <input
          className={`${styles.inputBtn}`}
          type="button"
          value="popular"
        />
        <input
          className={`${styles.inputBtn}`}
          type="button"
          value="most viewed"
        />
        <input
          className={`${styles.inputBtn}`}
          type="button"
          value="breakfast"
        />
        <input
          className={`${styles.inputBtn}`}
          type="button"
          value="italian"
        />
        <input
          className={`${styles.inputBtn}`}
          type="button"
          value="salad"
        />
      </form>
    </div>
  );
}
