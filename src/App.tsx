import './App.css'
import RecipesService from './services/recipes.service'

function App() {
  const recipes = RecipesService.getAllRecipes()

  return (
    <div className="app-container">
      <header className="header">
        <h1>🍳 Våra recept</h1>
      </header>
      
      <main className="main-content">
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <article key={recipe.id} className="recipe-card">
              <div className="recipe-header">
                <h2>{recipe.title}</h2>
              </div>
              <p className="recipe-description">{recipe.description}</p>
              
              <div className="recipe-section">
                <h3>Ingredienser</h3>
                <ul className="ingredients-list">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={`${recipe.id}-ingredient-${index}`}>
                      <span className="ingredient-quantity">{ingredient.quantity}</span>
                      {' '}
                      <span className="ingredient-name">{ingredient.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="recipe-section">
                <h3>Instruktioner</h3>
                <ol className="instructions-list">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={`${recipe.id}-instruction-${index}`}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </main>
      
      <footer className="footer">
        <p>Copyright Mikael Strid</p>
      </footer>
    </div>
  )
}

export default App
