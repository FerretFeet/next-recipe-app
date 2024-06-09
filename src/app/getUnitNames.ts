"use server";

import { selectAllUnits } from "@/db/schema/queries/selectAllUnits";

export const getUnitNames = async () => {
  try {
    const data = await selectAllUnits();
    return data;
  } catch (err) {
    console.error("Error getUnitNames", err);
    throw err;
  }
};
