import React, { useState, useEffect, useContext } from "react";
import "./Genre.scss";
import uniqid from "uniqid";
import axios from "axios";
import Loader from "../Loader/Loader";
import CartContext from "../../CartContext";
import { Link } from "react-router-dom";

const CategoryItems = (props) => {
  const { category } = props;
  const [bookDataAdventure, setBookDataAdventure] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${category}`)
      .then((response) => {
        setBookDataAdventure(response.data.items);
      });
  }, []);

  if (bookDataAdventure.length === 0) {
    return (
      <section>
        <Loader>Loading...</Loader>
      </section>
    );
  }

  return (
    <div className="genre__wrapper">
      {bookDataAdventure.map((bookObj) => {
        const { volumeInfo } = bookObj;
        return (
          <div className="genre__card__wrapper" key={uniqid()}>
            <Link
              to={`/single/${volumeInfo.industryIdentifiers[0].identifier}`}
            >
              <img
                src={
                  bookObj.volumeInfo.imageLinks?.smallThumbnail ||
                  bookObj.volumeInfo.imageLinks?.thumbnail
                }
                className="genre__card__img"
              ></img>
            </Link>
            <h3>{bookObj.volumeInfo.title}</h3>
            <p>{bookObj.volumeInfo.authors}</p>
            <h3>{`$ ${19.99}`}</h3>
            <button
              onClick={() => {
                addToCart(
                  volumeInfo.title,
                  19.99,
                  volumeInfo.imageLinks.smallThumbnail,
                  volumeInfo.authors[0] || ""
                );
              }}
              className="genre__btn"
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItems;
