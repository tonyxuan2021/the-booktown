import HomePage from "./pages/HomePage";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
