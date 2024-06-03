import db from "@/db/dbConfig";

export async function RecipeById(id: number) {
  const recipe = await db.one(
    `
    SELECT * FROM recipe
    WHERE id = $1
    `,
    [id]
  );
  return recipe;
}
