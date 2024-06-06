"use client";
import { useRef } from "react";
import styles from "./SearchForm.module.css";
import SearchFormHandler from "./SearchFormHandler";

export default function SearchForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
  };
  //   @ts-ignore
  const handleClick = (e) => {
    if (formRef.current) {
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "query";
      hiddenInput.value = (e.target as HTMLInputElement).value;
      formRef.current.appendChild(hiddenInput);
      formRef.current.submit();
      formRef.current.removeChild(hiddenInput);
    }
  };
  return (
    <div className={`${styles.container}`}>
      <form
        ref={formRef}
        action="GET"
        onSubmit={handleSearch}
      >
        <input
          className={`${styles.inputTxt}`}
          type="text"
          name="query"
        />
        <input
          className={`${styles.inputBtn}`}
          type="button"
          value="popular"
          name="query"
          onClick={handleClick}
        />
        <input
          className={`${styles.inputBtn}`}
          type="button"
          value="most viewed"
          name="query"
          onClick={handleClick}
        />
        <input
          className={`${styles.inputBtn}`}
          type="button"
          value="breakfast"
          name="query"
          onClick={handleClick}
        />
        <input
          className={`${styles.inputBtn}`}
          type="button"
          value="italian"
          name="query"
          onClick={handleClick}
        />
        <input
          className={`${styles.inputBtn}`}
          type="button"
          value="salad"
          name="query"
          onClick={handleClick}
        />
      </form>
    </div>
  );
}
