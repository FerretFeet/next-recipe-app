import db from "@/db/dbConfig";

export async function selectAllUnits() {
  const units = await db.many(`SELECT * FROM unit`);
  console.log(`SELECT ALL UNITS DEBUG ${units}`);
  return units;
}
