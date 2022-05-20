import React, { Component } from "react";
import axios from "axios";
import uniqid from "uniqid";
import "./SearchPage.scss";

class SearchPage extends Component {
  state = {
    bookSearchData: [],
  };


  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${this.props.match.params.query}`
      )
      .then((response) => {
        this.setState({
          bookSearchData: response.data.items,
        });
      });
  }

  render() {
    // console.log(this.state.bookSearchData);

    // console.log(this.props.match.params.query)
    if (this.state.bookSearchData.length === 0) {
      return (
        <section>
          <p>... Loading your bookData ...</p>
        </section>
      );
    }

    return (
      <div className="search__wrapper">
        {this.state.bookSearchData.map((bookObj) => {
          console.log(bookObj.volumeInfo);
          return (
            <div className="search__card__wrapper" key={uniqid()}>
              {/* <img
                src={bookObj.volumeInfo.imageLinks.smallThumbnail}
                className="search__card__img"
              ></img> */}
              <img
                src={bookObj.volumeInfo.imageLinks? bookObj.volumeInfo.imageLinks.smallThumbnail : "Loading"}
                className="search__card__img"
              ></img>
              <h3>{bookObj.volumeInfo.title}</h3>
              <p>{bookObj.volumeInfo.authors? bookObj.volumeInfo.authors[0] : ""}</p>
              {/* <h3>$19.99</h3>
              <button className="btn">Add to cart</button> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchPage;
