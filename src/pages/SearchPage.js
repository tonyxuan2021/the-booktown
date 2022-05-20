import React, { Component } from "react";
import axios from "axios";
import uniqid from "uniqid";
import "./SearchPage.scss";

class SearchPage extends Component {
  state = {
    bookSearchData: [],
  };

  //   componentDidMount() {
  //     axios
  //       .get(
  //         `https://hapi-books.p.rapidapi.com/search/${this.props.match.params.query}`,
  //         {
  //           headers: {
  //             "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  //             "X-RapidAPI-Key":
  //               "f95dacf387msh6f0d149205e4e5ap1fd2a5jsn211e1f8ce304",
  //           },
  //         }
  //       )
  //       .then((data) => {
  //         // console.log(data);
  //         this.setState({
  //             bookSearchData: data.data,
  //         });
  //       });
  //   }

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
    console.log(this.state.bookSearchData);

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
          console.log(bookObj.volumeInfo.imageLinks);
          return (
            <div className="search__card__wrapper" key={uniqid()}>
              <img
                src={bookObj.volumeInfo.imageLinks.smallThumbnail}
                className="search__card__img"
              ></img>
              <h3>{bookObj.volumeInfo.title}</h3>
              <p>{bookObj.volumeInfo.authors[0]}</p>
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
