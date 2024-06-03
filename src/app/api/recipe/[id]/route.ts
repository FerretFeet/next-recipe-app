import { RecipeById } from "@/db/schema/queries/selectRecipeById";
import { NextResponse } from "next/server";
// import { useRouter } from "next/router";
import * as util from "util";
const GET = async (req: any, { params }: { params: any }) => {
  // const router = useRouter();
  // const { id } = router.query;
  console.log(params);
  console.log(params.id);
  try {
    const recipe = await RecipeById(params.id);
    console.log(`recipe ############### ${recipe}`);
    if (!recipe) {
      return new NextResponse("not found", { status: 404 });
    }
    return NextResponse.json(recipe);
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
  // console.log("router test");
  // console.log(req.query);
  // const res = await RecipeById(2);

  // return Response.json(res);
};

export { GET };
