import db from "@/db/dbConfig";

export async function RecipeById(id: number) {
  const recipe = await db.any(
    `
  SELECT r.id, r.name, r.description, r.img, r.instructions, r.prep_time, r.cook_time, r.serving_size, r.views, r.adds,
    u.username,
    COALESCE(ingredients.ingredient_list, '') AS ingredients,
    COALESCE(tags.tag_list, '') AS tags
  FROM recipe r
  INNER JOIN user_account u ON r.user_id = u.id
  RIGHT JOIN (
    SELECT rxi.recipe_id, string_agg(i.name, ';') AS ingredient_list
      FROM recipe_x_ingredient rxi
      INNER JOIN ingredient i ON rxi.ingr_id = i.id
      GROUP BY rxi.recipe_id
  ) AS ingredients ON r.id = ingredients.recipe_id
  RIGHT JOIN (
    SELECT rxt.recipe_id, string_agg(t.name, ';') AS tag_list
      FROM recipe_x_tag rxt
      INNER JOIN tag t ON rxt.tag_id = t.id
      GROUP BY rxt.recipe_id
  ) AS tags ON r.id = tags.recipe_id
  WHERE r.id = $1
  GROUP BY r.id, u.username, ingredients.ingredient_list, tags.tag_list;
    `,
    [id]
  );
  return recipe;
}
