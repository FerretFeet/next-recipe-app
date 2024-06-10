"use client";
import { useRef } from "react";
import styles from "./SearchForm.module.css";
// import SearchFormHandler from "./SearchFormHandler";
import router from "next/router";
import Image from "next/image";

export default function SearchForm() {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let inputValue = formData.get("query") as string;
    inputValue = inputValue.toLowerCase();
    try {
      if (inputValue.length > 30) {
        const err = new Error("Search must be less than 30 characters");
        throw err;
      }
      const actionUrl = `/recipe/search/${encodeURIComponent(inputValue)}`;
      window.location.href = actionUrl;
    } catch (err) {
      console.error("Error submitting search form", err);
    }
  };

  return (
    <div className={styles.container}>
      <form
        action="GET"
        onSubmit={handleSearch}
      >
        <div className={styles.posContainer}>
          <input
            className={`${styles.inputTxt}`}
            type="text"
            name="query"
          />
          <button
            type="submit"
            className={styles.btn}
          >
            <Image
              src="/"
              width={16}
              height={16}
              alt=""
            />
          </button>
        </div>
      </form>
    </div>
  );
}
