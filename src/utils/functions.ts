import { IIngredient, ITag } from "./interfaces";

export function toTitleCase(str: string) {
  if (!str) return str; // Handle empty string

  return str
    .toLowerCase()
    .replace(
      /([^\W_]+[^\s-]*)*/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
}

export function parseIngredients(ingredientString: string): IIngredient[] {
  // Take string of form
  // 'ingredient_id, name, quantity, unit;repeat,'
  let temp: IIngredient[];

  temp = ingredientString.split(";").map((item) => {
    const [strId, name, strQuantity, unit] = item.split(",");
    const id = Number(strId);
    const quantity = Number(strQuantity);
    return { id, name, quantity, unit };
  });
  return temp;
}

export function parseTags(tagString: string): ITag[] {
  let temp: ITag[];
  console.log(`PARSE TAGS DEBUG \n ${tagString}`);
  temp = tagString.split(";").map((item) => {
    const [strId, name] = item.split(",");
    const id = Number(strId);
    return { id, name };
  });
  return temp;
}
