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
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import EmptyCartPage from "./pages/EmptyCartPage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CartProvider>
          <BrowserRouter>
            <Header setIsAuth={setIsAuth} isAuth={isAuth} />
            <Switch>
              <Route path="/" exact component={HomePage} />
              {/* <Route path="/signin" component={Signin}  /> */}
              <Route
                path="/signin"
                render={() => <Signin setIsAuth={setIsAuth} isAuth={isAuth} />}
              />
              <Route path="/signup" component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/empty" component={EmptyCartPage} />
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
                path="/fiction"
                component={(props) => (
                  <CategoryItems {...props} category="fiction" />
                )}
              />
              <Route
                path="/race"
                component={(props) => (
                  <CategoryItems {...props} category="race" />
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
              <Route path="/error" component={Error} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
