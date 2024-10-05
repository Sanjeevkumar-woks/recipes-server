import express from "express";
import recipesRoutes from "./recipesRoutes.js";

//create express router for apis
const apis = express.Router();

//add routes for apis
apis.use("/recipes", recipesRoutes);

export default apis;
