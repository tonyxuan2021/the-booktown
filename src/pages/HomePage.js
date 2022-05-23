import "../App.scss";
import React, { Component, useContext } from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import "../components/Card/Card.scss";
import uniqid from "uniqid";
import Header from "../components/Header/Header";
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
        // console.log("book", data);
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

    return (
      <div>
        <Hero />
        <Category />
        <h3 className="card__title">Best Sellers</h3>
        <div className="card__each__wrapper">
          {this.state.bookData.map((bookData) => (
            <div className="card__main__wrapper" key={uniqid()}>
              <Card
                // dataInitObj={this.state.selectedBook}
                dataObj={bookData.book_details[0]}
                isbn={bookData.isbns[0].isbn13}
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
