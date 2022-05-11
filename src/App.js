import "./App.scss";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
      </div>
    );
  }
}

export default App;
