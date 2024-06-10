import { RecipeById } from "@/db/schema/queries/selectRecipeById";
import { NextResponse } from "next/server";
const GET = async (req: any, { params }: { params: any }) => {
  try {
    const recipe = await RecipeById(params.id);
    if (!recipe) {
      return new NextResponse("not found", { status: 404 });
    }
    return NextResponse.json(recipe);
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export { GET };
