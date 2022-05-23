import React, { Component } from "react";
import axios from "axios";
import uniqid from "uniqid";
import "./SearchPage.scss";
import Loader from "../components/Loader/Loader";

class SearchPage extends Component {
  state = {
    bookSearchData: [],
    loader: true,
  };

  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${this.props.match.params.query}`
      )
      .then((response) => {
        this.setState({
          bookSearchData: response.data.items,
          loader: false,
        });
      });
  }

  render() {
    // console.log(this.state.bookSearchData);

    // console.log(this.props.match.params.query)
    if (this.state.bookSearchData.length === 0) {
      return (
        <section>
          <Loader>Loading...</Loader>
        </section>
      );
    }

    return (
      <div className="search__wrapper">
        {this.state.bookSearchData.map((bookObj) => {
          return (
            <div className="search__card__wrapper" key={uniqid()}>
              <img
                src={
                  bookObj.volumeInfo.imageLinks
                    ? bookObj.volumeInfo.imageLinks.smallThumbnail
                    : "https://picsum.photos/128/195"
                }
                className="search__card__img"
              ></img>
              <h3>{bookObj.volumeInfo.title}</h3>
              <p>
                {bookObj.volumeInfo.authors
                  ? bookObj.volumeInfo.authors[0]
                  : ""}
              </p>
              <h3>$19.99</h3>
              <button className="btn">Add to cart</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchPage;
