import "../App.scss";
import React, { Component } from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Card from "../components/Card/Card";
import axios from "axios";
import "../components/Card/Card.scss";
import uniqid from "uniqid";
import Loader from "../components/Loader/Loader";

const API_KEY_NYT = process.env.REACT_APP_API_KEY_NYT;

class HomePage extends Component {
  state = {
    bookData: [],
    selectedBook: null,
    bookImg: {},
    results: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${API_KEY_NYT}&list=Combined Print and E-Book Fiction`
      )
      .then((data) => {
        this.setState({
          bookData: data.data.results,
          selectedBook: data.data.results[0],
        });
      });
  }

  render() {
    if (this.state.bookData.length === 0 || !this.state.bookImg) {
      return (
        <section>
          <Loader>Loading...</Loader>
        </section>
      );
    }

    console.log(this.state.bookData);

    return (
      <div>
        <Hero />
        <Category />
        <h3 className="card__title">Best Sellers</h3>
        <div className="card__each__wrapper">
          {this.state.bookData.map((bookData) => (
            <div className="card__main__wrapper" key={uniqid()}>
              <Card
                dataObj={bookData.book_details[0]}
                isbn={bookData.isbns[0].isbn13}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
