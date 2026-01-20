import { Link } from "react-router-dom";
import RecipesService from "../../services/recipes.service";
import "./styles.css";

export default function HomePage() {
  const recipes = RecipesService.getAllRecipes();

  return (
    <main className="main-content">
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recept/${recipe.id}`}
            className="recipe-card-link"
          >
            <article className="recipe-card">
              <h2>{recipe.title}</h2>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
