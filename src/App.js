import HomePage from "./pages/HomePage";
import SellUsedPage from "./pages/SellUsedPage";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Upload from "./components/Upload/Upload";
import Horror from "./components/Category/Horror";
import Food from "./components/Category/Food";
import Adventure from "./components/Category/Adventure";
import Travel from "./components/Category/Travel";
import SearchPage from "./pages/SearchPage";
import Business from "./components/Category/Business";
import Child from "./components/Category/Child";
import Fantasy from "./components/Category/Fantasy";
import Romance from "./components/Category/Romance";
import SingleBook from "./pages/SingleBook";

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
            <Route path="/horror" component={Horror} />
            <Route path="/food" component={Food} />
            <Route path="/adventure" component={Adventure} />
            <Route path="/business" component={Business} />
            <Route path="/child" component={Child} />
            <Route path="/fantasy" component={Fantasy} />
            <Route path="/romance" component={Romance} />
            <Route path="/travel" component={Travel} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/used" exact component={SellUsedPage} />
            <Route path="/used/upload" component={Upload} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
