import React, { Component } from "react";
import "./SellUsedPage.scss";
import "../components/Button/Button.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

class SellUsedPage extends Component {
  state = {
    bookdata: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:5050/usedbook/`).then((response) => {
      const booksResult = response.data;
      this.setState({ bookdata: booksResult });
    });
  }

  onRemove = (bookId) => {
    axios
      .delete(`http://localhost:5050/usedbook/${bookId}/`)
      .then((response) => {
        console.log(response);
        const bookdata = this.state.bookdata.filter(
          (book) => book.id !== bookId
        );
        this.setState({ bookdata: bookdata });
      });
  };

  render() {
    return (
      <div>
        <div className="upload__header">
          <h2>Used Book List</h2>
          <Link to="/used/upload" className="upload__button">
            <button className="upload__btn">UPLOAD</button>
          </Link>
        </div>
        <div className="upload__wrapper">
          {this.state.bookdata.map((bookObj) => {
            return (
              <div className="upload__card__wrapper" key={uniqid()}>
                <img src={bookObj.image} className="upload__card__img"></img>
                <h3>{bookObj.name}</h3>
                <p>{bookObj.author}</p>
                <h3>{`$ ${bookObj.price}`}</h3>
                <div className="btn__upload">
                  <button
                    className="btn__remove"
                    onClick={() => this.onRemove(bookObj.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SellUsedPage;
