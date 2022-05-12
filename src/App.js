import "./App.scss";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Category />
      </div>
    );
  }
}

export default App;
