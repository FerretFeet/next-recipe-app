import { RecipeByTag } from "@/db/schema/queries/selectRecipeByTag";
import { NextResponse } from "next/server";
const GET = async (req: any, { params }: { params: any }) => {
  const pageLim = { page: 1, limit: 20 };
  console.log("ROUTE DEBUGGING BY TAG");
  console.log(params);
  console.log(params.search);

  try {
    const recipe = await RecipeByTag(params.search, pageLim);
    console.log(`TAG ROUTE DEBUG`);
    if (recipe && recipe.length === 0) {
      return new NextResponse("not found", { status: 404 });
    }
    return NextResponse.json(recipe);
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export { GET };
