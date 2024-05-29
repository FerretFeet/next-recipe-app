import db from "@/db/dbConfig";

async function RecipeById(id: number) {
  const recipe = await db.one(
    `
    SELECT * FROM recipe
    WHERE id = $1
    `,
    [id]
  );
  return recipe;
}
