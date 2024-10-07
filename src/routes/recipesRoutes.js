import { Router } from "express";
import { RecipesController } from "../controllers/recipesController.js";

// Create express router for recipes
const recipesRoutes = Router();

//Get All Recipes
recipesRoutes.get("/getAllRecipes", RecipesController.getAllRecipes);

//getRecipeById
recipesRoutes.get("/getRecipeById", RecipesController.getRecipeById);

//searchRecipe
recipesRoutes.get("/searchRecipe", RecipesController.searchRecipe);

//Add One Recipe
recipesRoutes.post("/addOneRecipe", RecipesController.addOneRecipe);

//Add Many Recipes
recipesRoutes.post("/addManyRecipes", RecipesController.addManyRecipes);

//updateRecipe
recipesRoutes.put("/updateRecipe", RecipesController.updateRecipe);

//deleteRecipe
recipesRoutes.delete("/deleteRecipe", RecipesController.deleteRecipe);

//export routes
export default recipesRoutes;
