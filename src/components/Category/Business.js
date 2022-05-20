import React, { Component } from "react";
import "./Genre.scss";
import uniqid from "uniqid";
import axios from "axios";

class Business extends Component {
  state = {
    bookDataHorror: [],
  };

  componentDidMount() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=business")
      .then((response) => {
        this.setState({
          bookDataHorror: response.data.items,
        });
      });
  }

  render() {
    if (this.state.bookDataHorror === 0) {
      return (
        <section>
          <p>... Loading your bookData ...</p>
        </section>
      );
    }

    console.log(this.state.bookDataHorror);
    return (
      <div className="genre__wrapper">
        {this.state.bookDataHorror.map((bookObj) => {
          return (
            <div className="genre__card__wrapper" key={uniqid()}>
              <img src={bookObj.volumeInfo.imageLinks.smallThumbnail} className="genre__card__img"></img>
              <h3>{bookObj.volumeInfo.imageLinks.title}</h3>
              <h3>$20</h3>
              <button className="genre__btn">Add to cart</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Business;
