import React, { Component } from "react";
import "./Genre.scss";
import uniqid from "uniqid";
import axios from "axios";
import Loader from "../Loader/Loader";

class Fantasy extends Component {
  state = {
    bookDataFantasy: [],
  };

  componentDidMount() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=fantasy")
      .then((response) => {
        this.setState({
          bookDataFantasy: response.data.items,
        });
      });
  }

  render() {
    if (this.state.bookDataFantasy === 0) {
      return (
        <section>
          <Loader>Loading...</Loader>
        </section>
      );
    }

    return (
      <div className="genre__wrapper">
        {this.state.bookDataFantasy.map((bookObj) => {
          return (
            <div className="genre__card__wrapper" key={uniqid()}>
              <img src={bookObj.volumeInfo.imageLinks.smallThumbnail} className="genre__card__img"></img>
              <h3>{bookObj.volumeInfo.title}</h3>
              <p>{bookObj.volumeInfo.authors}</p>
              <h3>$20</h3>
              <button className="genre__btn">Add to cart</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Fantasy;
