import "./App.scss";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Category />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default App;
