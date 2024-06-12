import { getDB } from "@/db/dbConfig";
const { db, pgp } = getDB();

export async function RecipeByTag(
  tag: string,
  { page, limit }: { page: number; limit: number }
) {
  console.log(`RecipeByTag Debug \n ${tag}`);
  try {
    const recipe = await db.manyOrNone(
      `
      SELECT r.id, r.name, r.description, r.img, r.prep_time, r.cook_time, r.serving_size, r.views, r.adds,
      u.username,
      COALESCE(tags.tag_list, '') AS tags
  FROM recipe r
  INNER JOIN user_account u ON r.user_id = u.id
  INNER JOIN (
      SELECT rxt.recipe_id, string_agg(t.id || ',' || t.name, ';') AS tag_list
      FROM recipe_x_tag rxt
      INNER JOIN tag t ON rxt.tag_id = t.id
      GROUP BY rxt.recipe_id
  ) AS tags ON r.id = tags.recipe_id
  INNER JOIN recipe_x_tag rxt_filter ON r.id = rxt_filter.recipe_id
  INNER JOIN tag t_filter ON rxt_filter.tag_id = t_filter.id
  WHERE t_filter.name = $1
  GROUP BY r.id, u.username, tags.tag_list
  LIMIT $2 OFFSET $3;
  
    `,
      [tag, limit, (page - 1) * limit]
    );
    console.log(recipe);
    return recipe;
  } catch (err) {
    console.error("Error Query Recipe By Tag", err);
  }
}
//   SELECT r.id, r.name, r.description, r.img, r.prep_time, r.cook_time, r.serving_size, r.views, r.adds,
//   u.username,
//   COALESCE(tags.tag_list, '') AS tags
// FROM recipe r
// INNER JOIN user_account u ON r.user_id = u.id
// RIGHT JOIN (
//   SELECT rxt.recipe_id, string_agg(t.id || ',' || t.name, ';') AS tag_list
//     FROM recipe_x_tag rxt
//     INNER JOIN tag t ON rxt.tag_id = t.id
//     GROUP BY rxt.recipe_id
// ) AS tags ON r.id = tags.recipe_id
// WHERE r.id = $1
// GROUP BY r.id, u.username, ingredients.ingredient_list, tags.tag_list
// LIMIT $2 OFFSET $3;
