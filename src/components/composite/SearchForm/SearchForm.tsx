"use client";
import { useRef } from "react";
import styles from "./SearchForm.module.css";
import SearchFormHandler from "./SearchFormHandler";
import router from "next/router";

export default function SearchForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);
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
  //   @ts-ignore
  const handleClick = (e) => {
    if (formRef.current && textInputRef.current) {
      //   const hiddenInput = document.createElement("input");
      //   console.log(`HANDLE CLICK`);
      //   hiddenInput.type = "hidden";
      //   hiddenInput.name = "query";
      //   hiddenInput.value = (e.target as HTMLInputElement).value;
      //   formRef.current.appendChild(hiddenInput);
      //   formRef.current.submit();
      textInputRef.current.value = (e.target as HTMLInputElement).value;
      const event = new Event("submit", { bubbles: true, cancelable: true });
      formRef.current.dispatchEvent(event);
      //   formRef.current.removeChild(hiddenInput);
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
          ref={textInputRef}
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
