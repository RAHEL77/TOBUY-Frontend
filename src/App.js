import "./App.css";
import Main from "./Components/Main";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Menu />
          <Route path="/" exact component={Main} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/recipe/:id" exact component={() => <div>I am a single recipe</div>} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
