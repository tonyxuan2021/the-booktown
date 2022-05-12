import "../App.scss";
import React, { Component } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const API_KEY_NYT = process.env.REACT_APP_API_KEY_NYT;

class HomePage extends Component {
  state = {
    bookData: [],
    selectedBook: null,
  };

  componentDidMount() {
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${API_KEY_NYT}&list=Hardcover Fiction`
      )
      .then((data) => {
        // console.log(data);
        this.setState({
          bookData: data.data.results[0],
        });
      });
  }

  render() {
    console.log(this.state.bookData);
    if (this.state.bookData.length === 0) {
      return (
        <section>
          <p>... Loading your bookData ...</p>
        </section>
      );
    }

    return (
      <div>
        <Header />
        <Hero />
        <Category />
        <Card data={this.state.bookData} />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
