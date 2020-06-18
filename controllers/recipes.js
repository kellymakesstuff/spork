const Recipe = require("../models/recipe");
const db = require("../db/connection");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (recipe) {
      return res.json(recipe);
    }
    res.status(404).json({ message: "Recipe not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createRecipe = async (req, res) => {
  try {
    const recipe = await new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
const updateRecipe = async (req, res) => {
  const { id } = req.params;
  await Recipe.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, recipe) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!recipe) {
        return res.status(404).json({ message: "Recipe not found!" });
      }
      res.status(200).json(recipe);
    }
  );
};
const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Recipe.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Recipe deleted");
    }
    throw new Error("Recipes not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
};
