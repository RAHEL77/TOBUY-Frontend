import "./App.css";
import Main from "./Components/Main";
import Categories from "./Components/Categories";
import RecipeCategories from "./Components/RecipeCategories";
import Menu from "./Components/Menu";
import RecipeDetails from "./Components/RecipeDetails";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Menu />
          <Route path="/" exact component={Main} />
          <Route path="/categories/:categoryName" exact component={RecipeCategories} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/recipes/:id" exact component={RecipeDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
