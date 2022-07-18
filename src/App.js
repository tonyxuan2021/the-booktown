import HomePage from "./pages/HomePage";
import SellUsedPage from "./pages/SellUsedPage";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Upload from "./components/Upload/Upload";
import SearchPage from "./pages/SearchPage";
import SingleBook from "./pages/SingleBook";
import Error from "./pages/Error";
import CategoryItems from "./components/Category/CategoryItems";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/single/:id" component={SingleBook} />
            <Route path="/search/:query" component={SearchPage} />
            <Route
              path="/horror"
              component={(props) => (
                <CategoryItems {...props} category="horror" />
              )}
            />
            <Route
              path="/food"
              component={(props) => (
                <CategoryItems {...props} category="food" />
              )}
            />
            <Route
              path="/adventure"
              component={(props) => (
                <CategoryItems {...props} category="advanture" />
              )}
            />
            <Route
              path="/business"
              component={(props) => (
                <CategoryItems {...props} category="business" />
              )}
            />
            <Route
              path="/child"
              component={(props) => (
                <CategoryItems {...props} category="child" />
              )}
            />
            <Route
              path="/fantasy"
              component={(props) => (
                <CategoryItems {...props} category="fantasy" />
              )}
            />
            <Route
              path="/romance"
              component={(props) => (
                <CategoryItems {...props} category="romance" />
              )}
            />
            <Route
              path="/travel"
              component={(props) => (
                <CategoryItems {...props} category="travel" />
              )}
            />
            <Route path="/checkout" component={Checkout} />
            <Route path="/used" exact component={SellUsedPage} />
            <Route path="/used/upload" component={Upload} />
            <Route path="*" component={Error} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
