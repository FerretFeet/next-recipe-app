import { RecipeByTag } from "@/db/schema/queries/selectRecipeByTag";
import { NextResponse } from "next/server";
const GET = async (req: any, { params }: { params: any }) => {
  const pageLim = { page: 1, limit: 20 };
  console.log("ROUTE DEBUGGING");
  console.log(params);
  try {
    const recipe = await RecipeByTag(params.tag, pageLim);
    console.log(params.tag);
    if (recipe && recipe.length === 0) {
      return new NextResponse("not found", { status: 404 });
    }
    return NextResponse.json(recipe);
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export { GET };
