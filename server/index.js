import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getRecipeFromMistral } from "./mistral.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recipe", async (req, res) => {
  try {
    const { ingredients } = req.body;
    const recipe = await getRecipeFromMistral(ingredients);
    res.json({ recipe });
  } catch (err) {
    console.error("🔥 BACKEND ERROR:", err.message);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

app.listen(3001, () => {
  console.log("✅ Backend running on http://localhost:3001");
});
