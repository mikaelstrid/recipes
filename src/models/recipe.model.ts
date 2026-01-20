export interface IRecipe {
  id: string;
  title: string;
  description: string;
  ingredients: IIngredient[];
  instructions: string[];
  // prepTime: number; // in minutes
  // cookTime: number; // in minutes
  // servings: number;
  // authorId: string;
  // createdAt: Date;
  // updatedAt: Date;
}

export interface IIngredient {
  name: string;
  quantity: string;
}
