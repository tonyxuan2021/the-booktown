import HomePage from "./pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Hero />
          <Category />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
