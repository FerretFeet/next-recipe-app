import RecipeCard from "@/components/composite/RecipeCard/RecipeCard";
import Carousel from "@/components/framework/Carousel/Carousel";
import FeaturedCarousel from "@/components/framework/FeaturedCarousel/FeaturedCarousel";
import {
  testRecipe,
  testRecipe1,
  testRecipe2,
  testRecipe3,
} from "@/lib/utils/interfaces";

const list = [testRecipe, testRecipe1, testRecipe2, testRecipe3];
export default function Test() {
  return (
    <div className="">
      <Carousel
        recipes={list}
        big={false}
      />
      <Carousel
        recipes={list}
        big={true}
      />
    </div>
  );
}
