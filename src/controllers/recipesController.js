import RecipeModel from "../Models/recipesModel.js";

export class RecipesController {
  //Get All Recipes
  static async getAllRecipes(req, res) {
    //Get all recipes
    const recipes = await RecipeModel.find();
    console.log(recipes.length);

    //Send response
    res.status(200).json(recipes);
  }

  //searchRecipe
  static async searchRecipe(req, res) {
    //Get search query
    const query = req.query.search;

    //Check if search query is empty
    if (!query) {
      return res.status(400).send({ message: "Please provide search query" });
    }

    //Get recipes
    const recipes = await RecipeModel.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { ingredients: { $regex: query, $options: "i" } },
        { instructions: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });

    //Check if recipes are found
    if (!recipes.length > 0) {
      return res.status(404).send({ message: " No Recipe found" });
    }

    res.status(200).json(recipes);
  }

  //getRecipeById
  static async getRecipeById(req, res) {
    const id = req.query.id;

    //Get recipe by id
    const recipe = await RecipeModel.findById(req.query.id);

    //Check if recipe is found or not
    if (!recipe) {
      return res.status(404).send({ message: "Recipe not found" });
    }

    //Send response
    res.status(200).json(recipe);
  }

  //Add One Recipe
  static async addOneRecipe(req, res) {
    //Get data from request
    const recipe = req.body;

    //Save to database
    const newRecipe = await RecipeModel.create(recipe);

    //Check if recipe is added
    if (!newRecipe) {
      return res.status(400).send({ message: "Recipe not added" });
    }

    //Send response
    res.status(201).json({ message: "Recipe added successfully" });
  }

  //Add Many Recipes
  static async addManyRecipes(req, res) {
    //Get data from request
    const recipes = req.body;
    //Save to database
    const newRecipes = await RecipeModel.insertMany(recipes);

    //Check if recipes are added
    if (!newRecipes.length > 0) {
      return res.status(400).send({ message: "Recipes not added" });
    }

    //Send response
    res.status(201).json({ message: "Recipes added successfully" });
  }

  //updateRecipe
  static async updateRecipe(req, res) {
    //Get recipe by id
    const recipe = await RecipeModel.findById(req.query.id);

    //Check if recipe is found or not
    if (!recipe) {
      return res.status(404).send({ message: "Recipe not found" });
    }

    //Update recipe
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      req.query.id,
      req.body,
      { new: true }
    );

    //Check if recipe is updated
    if (!updatedRecipe) {
      return res.status(400).send({ message: "Recipe not updated" });
    }

    //Send response
    res.status(200).json(updatedRecipe);
  }

  //deleteRecipe
  static async deleteRecipe(req, res) {
    //Get recipe by id
    console.log(req.query.id);

    const recipe = await RecipeModel.findById(req.query.id);

    //Check if recipe is found or not
    if (!recipe) {
      return res.status(404).send({ message: "Recipe not found" });
    }

    //Delete recipe
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.query.id);

    //Check if recipe is deleted
    if (!deletedRecipe) {
      return res.status(400).send({ message: "Recipe not deleted" });
    }

    //Send response
    res.status(200).json({ message: "Recipe deleted successfully" });
  }
}
