import { RecipeById } from "@/db/schema/queries/selectRecipeById";

const GET = async () => {
  const res = await RecipeById(2);
  console.log(res);
  //   const parsedData = await res.json();
  return Response.json(res);
};

export { GET };

// import { RecipeById } from "@/db/schema/queries/selectRecipeById";

// export default async function handler(req: any, res: any) {
//   const { id } = req.query;

//   try {
//     const recipe = await RecipeById(id);
//     return res.status(200).json(recipe);
//   } catch (err) {
//     console.error("Error fetching RecipeById from api", err);
//     throw err;
//   }
// }
