import mongoose from "mongoose";

// Schema for recipes
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// //example recipe
// const recipe = {
//   name: "pizza",
//   ingredients: ["tomato", "cheese", "sauce"],
//   instructions: "cook",
//   category: "main",
//   image:
//     "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
// };

// Model for recipes
const RecipeModel = mongoose.model("recipes", recipeSchema);

export default RecipeModel;
