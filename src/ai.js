export async function getRecipe(ingredients) {
  console.log("📤 Sending ingredients to backend:", ingredients);

  const response = await fetch("http://localhost:3001/recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients }),
  });

  console.log("📥 Response status:", response.status);

  const data = await response.json();
  console.log("📥 Recipe from backend:", data);

  return data.recipe;
}
