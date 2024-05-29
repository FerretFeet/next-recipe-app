import db from "@/db/dbConfig";

async function usernameById(id: number) {
  const username = await db.one(
    `
    SELECT username FROM user
    WHERE id = $1
    `,
    [id]
  );
  return username;
}
