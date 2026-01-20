import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/recipes">
      <div className="app-container">
        <header className="header">
          <h1>Våra recept</h1>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recept/:id" element={<RecipePage />} />
        </Routes>

        <footer className="footer">
          <p>Copyright Mikael Strid</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
