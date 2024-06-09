"use client";

import { useState } from "react";
import styles from "./CreateRecipeForm.module.css";

export default function CreateRecipeForm() {
  const [inputs, setInputs] = useState({});

  // @ts-expect-error
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
    console.log(inputs);
  };
  //@ts-expect-error
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputs);
  };
  return (
    <div className={styles.container}>
      <form
        action={`/`}
        method="post"
      >
        <div className="">
          <label htmlFor="rName">Recipe Name: </label>
          <input
            id="recipe-name"
            type="text"
            name="name"
            onChange={handleChange}
            maxLength={32}
            required
          />
        </div>
        <div className="">
          {/* could be user id */}
          <label htmlFor="rUser">Username: </label>
          <input
            id="user-name"
            type="text"
            name="username"
            onChange={handleChange}
            maxLength={16}
            required
          />
        </div>
        <div className="">
          <label htmlFor="rImg">Image: </label>
          <input
            id="image"
            type="file"
            name="img"
            required

            // accept=
          />
        </div>
        <div className="">
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            rows={3}
            cols={24}
            name="description"
            // What should this maxLength be
            maxLength={300}
            required
          />
        </div>
        <div className="">
          {/* DO LIKE TAGS, Duplicate rows then concat on submit */}
          <label htmlFor="instructions">Instructions: </label>
          <textarea
            id="instructions"
            rows={3}
            cols={24}
            name="instructions"
            // What should this maxLength be
            maxLength={300}
            required
          />
        </div>

        <div className="">
          <label htmlFor="prep-time">Prep Time: </label>
          <input
            id="prep-time"
            type="number"
            name="prepTime"
            max={999}
            min={1}
            required
          />
        </div>
        <div className="">
          <label htmlFor="cook-time">Cook Time: </label>
          <input
            id="cook-time"
            type="number"
            name="cookTime"
            max={999}
            min={1}
            required
          />
        </div>
        <div className="">
          <label htmlFor="servings">Servings: </label>
          <input
            id="servings"
            type="number"
            name="servings"
            max={99}
            min={1}
            required
          />
        </div>
        <div className="">
          {/* HOW TO GROUP< TAGS FIRST */}
          <label htmlFor="ingredients">Ingredients: </label>
          <input
            id="ingredients"
            type="text"
            name="ingredient"
            required
          />
          {/* datalist for measurement unit pull from db */}
        </div>
        <div className="">
          <label htmlFor="tags">Tags: </label>
          {/* HOW TO GROUP SIMPLER< START HERE */}
          {/* PATTERN? */}
          <input
            id="tags"
            type="text"
            name="tags"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
