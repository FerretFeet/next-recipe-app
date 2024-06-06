async function getData(search: string) {
  console.log(`GET DATA ${search}`);
  try {
    const res = await fetch(
      `http://localhost:3000/api/recipe/search/${search}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    console.error("Error fetching recipeByTag", err);
  }
}

export default async function RecipePage({
  params,
}: {
  params: { search: string };
}) {
  const recipe = await getData(params.search);
  console.log(`SEARCH PAGE DEBUG`);
  console.log(recipe);
  console.log(params);

  return <div className=""></div>;
}
