import "./App.css";
import RecipesService from "./services/recipes.service";

function App() {
  const recipes = RecipesService.getAllRecipes();

  return (
    <div className="app-container">
      <header className="header">
        <h1>Våra recept</h1>
      </header>

      <main className="main-content">
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <article key={recipe.id} className="recipe-card">
              <h2>{recipe.title}</h2>
            </article>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>Copyright Mikael Strid</p>
      </footer>
    </div>
  );
}

export default App;
