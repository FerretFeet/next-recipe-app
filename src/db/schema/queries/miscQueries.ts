import { getDB } from "@/db/dbConfig";
const { db, pgp } = getDB();

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
