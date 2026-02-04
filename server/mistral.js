export async function getRecipeFromMistral(ingredients) {
  const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: [
        {
          role: "user",
          content: `Create a recipe using these ingredients: ${ingredients.join(", ")}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Status ${response.status} → ${text}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}
