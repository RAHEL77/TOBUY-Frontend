import "./App.css";
// import Main from "./Components/Main";
// import Categories from "./Components/Categories";
// import RecipesInCategory from "./Components/RecipesInCategory";
// import Menu from "./Components/Menu";
// import RecipeDetails from "./Components/RecipeDetails";
// import Todo from "./Components/Todo";
import Ex from "./Components/EX-L/Ex";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Ex/>
      {/* <BrowserRouter>
        <div>
          <Menu />
          <Route path="/" exact component={Main} />
          <Route path="/categories/:categoryName" exact component={RecipesInCategory} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/recipes/:id" exact component={RecipeDetails} />
          <Route path="/todo" exact component={Todo} />
        </div>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
