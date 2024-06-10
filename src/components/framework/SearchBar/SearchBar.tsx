"use client";
import { useRef } from "react";
import styles from "./SearchBar.module.css";
// import SearchFormHandler from "./SearchFormHandler";
import router from "next/router";
import SearchForm from "@/components/composite/SearchForm/SearchForm";
import Link from "next/link";

const Featured_Tags = [
  "popular",
  "most viewed",
  "breakfast",
  "italian",
  "salad",
];
export default function SearchBar() {
  return (
    <div className={`${styles.container}`}>
      <SearchForm />
      {Featured_Tags.map((tag) => (
        <Link
          key={tag}
          href={`/recipe/search/${tag}`}
        >
          <button className={styles.btn}>{tag}</button>
        </Link>
      ))}
    </div>
  );
}
