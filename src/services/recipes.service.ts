import { testRecipes } from "../data/test.data";
import type { IRecipe } from "../models/recipe.model";

export default class RecipesService {
  public static getAllRecipes(): IRecipe[] {
    return testRecipes;
  }
}
