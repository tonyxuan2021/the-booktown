import React, { Component } from "react";
import "./Genre.scss";
import uniqid from "uniqid";
import axios from "axios";
import Loader from "../Loader/Loader";

class Child extends Component {
  state = {
    bookDataFood: [],
  };

  componentDidMount() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=food")
      .then((response) => {
        this.setState({
          bookDataFood: response.data.items,
        });
      });
  }

  render() {
    if (this.state.bookDataFood === 0) {
      return (
        <section>
          <Loader>Loading...</Loader>
        </section>
      );
    }

    return (
      <div className="genre__wrapper">
        {this.state.bookDataFood.map((bookObj) => {
          return (
            <div className="genre__card__wrapper" key={uniqid()}>
              <img src={bookObj.volumeInfo.imageLinks.smallThumbnail} className="genre__card__img"></img>
              <h3>{bookObj.volumeInfo.title}</h3>
              <p>{bookObj.volumeInfo.authors}</p>
              <h3>{`$ ${19.99}`}</h3>
              <button className="genre__btn">Add to cart</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Child;
