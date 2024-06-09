"use server";

import { selectAllUnits } from "@/db/schema/queries/selectAllUnits";

export const unitNames = async () => {
  const data = await selectAllUnits();
  console.log(`GETUNITNAMES DEBUG ${data}`);
  return data;
};
