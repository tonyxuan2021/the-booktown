import HomePage from "./pages/HomePage";
import SellUsedPage from "./pages/SellUsedPage";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Header from "./components/Header/Header";
import Upload from "./components/Upload/Upload";
import Horror from "./components/Category/Horror";
import Food from "./components/Category/Food";
import Adventure from "./components/Category/Adventure";
import Travel from "./components/Category/Travel";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search/:query" component={SearchPage} />
            <Route path="/horror" component={Horror} />
            <Route path="/food" component={Food} />
            <Route path="/adventure" component={Adventure} />
            <Route path="/travel" component={Travel} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/used" exact component={SellUsedPage} />
            <Route path="/used/upload" component={Upload} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
