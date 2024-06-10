"use client";

import { useEffect, useState } from "react";
import styles from "./CreateRecipeForm.module.css";
import { getUnitNames } from "@/actions/getUnitNames";

export default function CreateRecipeForm() {
  const [inputs, setInputs] = useState({
    // name: null,
    // username: null,
    img: null,
    description: "",
    instructions: [{ name: "" }],
    // prepTime: null,
    // cookTime: null,
    // servings: null,
    ingredients: [{ name: "", quantity: 0, unit: { id: 0, name: "" } }],
    tags: [{ name: "" }],
  });
  const [units, setUnits] = useState([{ id: 0, name: "" }]);
  console.log("UNIT NAMES");

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const unitData = await getUnitNames();
        setUnits(unitData);
      } catch (err) {
        console.error("Error in useEffect fetching unitData", err);
        throw err;
      }
    };
    fetchUnits();
  }, []);

  console.log(units);

  // @ts-expect-error
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
    console.log({ ...inputs });
  };
  const handleAddInstruction = () => {
    setInputs((prevState) => ({
      ...prevState,
      instructions: [...inputs.instructions, { name: "" }],
    }));
  };
  const handleRemoveInstruction = () => {
    if (inputs.instructions.length <= 1) return;
    setInputs((prevState) => ({
      ...prevState,
      instructions: inputs.instructions.slice(0, -1),
    }));
  };
  // @ts-expect-error
  const handleInputChange = (index, e) => {
    // @ts-expect-error
    const newInstructions = [...inputs[e.target.name]];
    console.log(`handleINPUT debug ${newInstructions}`);
    newInstructions[index] = { name: e.target.value };
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: newInstructions,
    }));
    // @ts-expect-error
    console.log(inputs[e.target.name]);
  };
  // @ts-expect-error
  const handleIngredientInputChange = (index, e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newIngredients = inputs.ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [name]: value };
      }
      return ingredient;
    });
    setInputs((prevState) => ({
      ...prevState,
      ingredients: newIngredients,
    }));
    console.log(inputs.ingredients);
  };
  const handleAddIngredient = () => {
    setInputs((prevState) => ({
      ...prevState,
      ingredients: [
        ...inputs.ingredients,
        { name: "", quantity: 0, unit: { id: 0, name: "" } },
      ],
    }));
  };
  const handleRemoveIngredient = () => {
    if (inputs.ingredients.length <= 1) return;
    setInputs((prevState) => ({
      ...prevState,
      ingredients: inputs.ingredients.slice(0, -1),
    }));
  };
  const handleAddTag = () => {
    setInputs((prevState) => ({
      ...prevState,
      tags: [...inputs.tags, { name: "" }],
    }));
  };
  const handleRemoveTag = () => {
    if (inputs.tags.length <= 1) return;
    setInputs((prevState) => ({
      ...prevState,
      tags: inputs.tags.slice(0, -1),
    }));
  };

  // @ts-expect-error
  const validateImg = (e) => {
    if (e.target.name.size > 50000000) {
      return false;
    }
    // 50MB
    handleChange(e);
    // tinypng
    return true;
  };
  //@ts-expect-error
  const validateTextArea = (e) => {
    if (!e.target.value.match(/^[a-zA-Z&\-\(\)',; ]*$/)) {
      return false;
    }
    handleChange(e);
    return true;
  };
  //@ts-expect-error
  const handleSubmit = async (e) => {
    console.log("FORM SUBMIT DEBUG");
    e.preventDefault();
    // turn instructions from array into delimited string ';'
    // turn ingredients into obj arr', ; , , ;'
    // and tags obj arr
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const img = formData.get("img");
    const prepTime = formData.get("prepTime");
    const cookTime = formData.get("cookTime");
    const servings = formData.get("servings");
    const description = formData.get("description");
    const userId = formData.get("userId");

    const instructions = inputs.instructions.map((item) => item.name).join(";");
    console.log("RECIPE FORM DEBUG");
    console.log(instructions);
    const ingredients = inputs.ingredients;
    // ingredient.unit is name, without id attached; may change
    const tags = inputs.tags;

    const data = {
      name,
      userId,
      img,
      prepTime,
      cookTime,
      servings,
      instructions,
      ingredients,
      tags,
      description,
    };

    try {
      const response = await fetch("http://localhost:3000//api/createRecipe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      }
    } catch (err) {
      console.error("Error Posting recipe: ", err);
    }
    alert({ ...inputs });
  };
  return (
    <div className={styles.container}>
      <form
        // action={`/`}
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="">
          <label htmlFor="rName">Recipe Name: </label>
          {/* <p>Name contains invalid character(s) <br />
          Allowed Characters:</p> 
          <p>A-z <br />
          &, -, (, ), ', ,</p>*/}
          <input
            id="recipe-name"
            type="text"
            name="name"
            onChange={handleChange}
            maxLength={32}
            pattern="^[a-zA-Z&\-\(\)', ]*$"
            required
          />
        </div>
        <div className="">
          {/* could be user id */}
          {/* will eventually pull from cookie? */}
          {/* <label htmlFor="rUser">Username: </label> */}
          <input
            id="user-id"
            type="text"
            name="userId"
            maxLength={16}
            min={1}
            required
            hidden
            defaultValue={1}
          />
        </div>
        <div className="">
          <label htmlFor="rImg">Image: </label>
          <p className="">less than some amount of kb/mb</p>
          <input
            id="image"
            type="file"
            name="img"
            required
            accept=".jpeg, .jpg, .png, .webp"
            onChange={validateImg}
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
            onChange={validateTextArea}
          />
        </div>
        {inputs.instructions.map((instruction, index) => (
          <div
            className=""
            key={index}
          >
            {/* DO LIKE TAGS, Duplicate rows then concat on submit */}
            <label htmlFor="instructions">Instructions: </label>
            <input
              id="instructions"
              type="text"
              // name={`instruction-${index}`}
              name="instructions"
              // What should this maxLength be
              maxLength={120}
              required
              pattern="^[0-9a-zA-Z&\-\(\)', ]*$"
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddInstruction}
        >
          Add Step
        </button>
        <button
          type="button"
          onClick={handleRemoveInstruction}
        >
          Remove Step
        </button>
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
          <label htmlFor="">Ingredients: </label>
          {inputs.ingredients.map((ingredient, index) => (
            <div
              className=""
              key={index}
            >
              <div className="">
                <label htmlFor={`ingredient-name-${index}`}>Name:</label>
                <input
                  type="text"
                  id={`ingredient-name-${index}`}
                  // name={`ingr-name-${1}`}
                  name="name"
                  pattern="^[a-zA-Z\-', ]*$"
                  required
                  onChange={(e) => handleIngredientInputChange(index, e)}
                />
              </div>
              <div className="">
                <label htmlFor={`ingredient-quantity-${index}`}>
                  Quantity:
                </label>
                <input
                  type="number"
                  id={`ingredient-quantity-${index}`}
                  // name={`ingr-quantity-${1}`}
                  name="quantity"
                  max={99}
                  min={1}
                  required
                  onChange={(e) => handleIngredientInputChange(index, e)}
                />
              </div>
              <div className="">
                <label htmlFor={`ingredient-unit-${index}`}>Unit:</label>
                <input
                  list="unit-names"
                  id={`ingredient-unit-${index}`}
                  // name={`ingr-unit-${1}`}
                  name="unit"
                  required
                  pattern="^[a-zA-Z\-', ]*$"
                  onChange={(e) => handleIngredientInputChange(index, e)}
                />
                <datalist id="unit-names">
                  {units.map((unit, index) => (
                    <option
                      key={index}
                      value={unit.name}
                    ></option>
                  ))}
                </datalist>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddIngredient}
          >
            Add Ingredient
          </button>
          <button
            type="button"
            onClick={handleRemoveIngredient}
          >
            Remove Ingredient
          </button>

          {/* <input
            id="ingredients"
            type="text"
            name="ingredients"
            required
            pattern="^[a-zA-Z&\-\(\)', ]*$"
          /> */}
          {/* datalist for measurement unit pull from db */}

          {/* datalist for measurement unit pull from db */}
        </div>
        <div className="">
          <label htmlFor="tags">Tags: </label>

          {inputs.tags.map((tag, index) => (
            <div
              className=""
              key={index}
            >
              <input
                id="tags"
                type="text"
                // name={`tag-${index}`}
                name="tags"
                required
                pattern="^[a-zA-Z&\-\(\)', ]*$"
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTag}
          >
            Add Tag
          </button>
          <button
            type="button"
            onClick={handleRemoveTag}
          >
            Remove Tag
          </button>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
