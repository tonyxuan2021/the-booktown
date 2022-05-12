import HomePage from "./pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/recipe/:recipeId" component={SingleRecipePage}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
