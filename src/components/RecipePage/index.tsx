import { useParams, Link } from "react-router-dom";
import RecipesService from "../../services/recipes.service";
import "./styles.css";

export default function RecipePage() {
  const { id } = useParams<{ id: string }>();
  const recipe = RecipesService.getRecipeById(id || "");

  if (!recipe) {
    return (
      <main className="recipe-page">
        <div className="recipe-not-found">
          <h2>Receptet kunde inte hittas</h2>
          <Link to="/" className="back-link">
            Tillbaka till alla recept
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="recipe-page">
      <div className="recipe-container">
        <Link to="/" className="back-link">
          ← Tillbaka till alla recept
        </Link>

        <h1 className="recipe-title">{recipe.title}</h1>

        {recipe.description && (
          <p className="recipe-description">{recipe.description}</p>
        )}

        <section className="recipe-section">
          <h2>Ingredienser</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="ingredient-quantity">
                  {ingredient.quantity}
                </span>{" "}
                {ingredient.name}
              </li>
            ))}
          </ul>
        </section>

        <section className="recipe-section">
          <h2>Instruktioner</h2>
          <ol className="instructions-list">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
