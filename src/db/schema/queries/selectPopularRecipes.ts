// import db from "@/db/dbConfig";

// async function selectPopularRecipes(page: number, limit: number) {
//   // QUERIES
//   const query = `
//     SELECT r.name, r.id, r.user_id, r.description, r.prep_time, r.cook_time, r.serving_size, t.name
//     FROM recipe r
//     INNER JOIN recipe_x_tag rt ON r.id = rt.recipe_id
//     INNER JOIN tag t ON rt.tag_id = t.id
//     ORDER BY r.views DESC
//     LIMIT $2 OFFSET $3;
//     `;

//   const updateViews = `
//     UPDATE recipe
//     SET views += 1
//     WHERE id = $1
//     `;
//   let selectedRecipes;
//   const offset = (page - 1) * limit;
//   try {
//     return await db.tx(async (t) => {
//       try {
//         selectedRecipes = await t.many(query, [limit, offset]);
//         if (selectedRecipes == null) {
//           throw new Error("Error selecting recipes");
//         }

//         selectedRecipes.forEach(async (recipe) => {
//           let temp = await t.one(updateViews, [recipe.id]);
//           console.log(temp);
//         });
//       } catch (err) {
//         console.error("Error selecting recipes", err);
//         throw err;
//       }
//       return selectedRecipes;
//     });
//   } catch (err) {
//     console.error("error finishing SelectByTag tx");
//     throw err;
//   }
// }
