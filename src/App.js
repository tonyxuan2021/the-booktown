import "./App.scss";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Card from "./components/Card/Card";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Category />
        <Card />
      </div>
    );
  }
}

export default App;
