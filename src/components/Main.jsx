import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipe as fetchRecipe } from "../ai"

export default function Main() {
    const [loading, setLoading] = React.useState(false)

    const [ingredients, setIngredients] = React.useState([
        "chicken",
        "all the main spices",
        "corn",
        "heavy cream",
        "pasta"
    ])
    const [recipe, setRecipe] = React.useState("")

  async function handleGetRecipe() {
    setLoading(true)
    const recipeFromAI = await fetchRecipe(ingredients)
    setRecipe(recipeFromAI)
    setLoading(false)
}

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length >= 5 && (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={handleGetRecipe}
                />
            )}
            {loading && <p>Generating recipe...</p>}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}
