import db from "@/db/dbConfig";
import * as util from "util";

export async function RecipeByTag(tag: string) {
  const recipe = await db.many(
    `
  SELECT r.id, r.name, r.description, r.img, r.instructions, r.prep_time, r.cook_time, r.serving_size, r.views, r.adds,
    u.username,
    COALESCE(tags.tag_list, '') AS tags
  FROM recipe r
  INNER JOIN user_account u ON r.user_id = u.id
  RIGHT JOIN (
    SELECT rxt.recipe_id, string_agg(t.id || ',' || t.name, ';') AS tag_list
      FROM recipe_x_tag rxt
      INNER JOIN tag t ON rxt.tag_id = t.id
      GROUP BY rxt.recipe_id
  ) AS tags ON r.id = tags.recipe_id
  WHERE r.id = $1
  GROUP BY r.id, u.username, tags.tag_list;
    `,
    [tag]
  );
  return recipe;
}
