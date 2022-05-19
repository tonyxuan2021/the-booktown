import React, { Component } from "react";
import "./Genre.scss";
import uniqid from "uniqid";
import axios from "axios";

class Adventure extends Component {
  state = {
    bookDataHorror: [],
  };

  componentDidMount() {
    axios
      .get(`https://hapi-books.p.rapidapi.com/week/adventure`, {
        headers: {
          "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
          "X-RapidAPI-Key":
            "f95dacf387msh6f0d149205e4e5ap1fd2a5jsn211e1f8ce304",
        },
      })
      .then((response) => {
        this.setState({
          bookDataHorror: response.data.slice(85),
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

    // console.log(this.state.bookDataHorror);
    return (
      <div className="genre__wrapper">
        {this.state.bookDataHorror.map((bookObj) => {
          return (
            <div className="genre__card__wrapper" key={uniqid()}>
              <img src={bookObj.cover} className="genre__card__img"></img>
              <h3>{bookObj.name}</h3>
              <h3>$20</h3>
              <button className="genre__btn">Add to cart</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Adventure;
