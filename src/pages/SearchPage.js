import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import uniqid from "uniqid";
import "./SearchPage.scss";
import Loader from "../components/Loader/Loader";
import { Link, useParams } from "react-router-dom";
import CartContext from "../CartContext";

const SearchPage = () => {
  const { query } = useParams();

  const { addToCart } = useContext(CartContext);

  const [bookSearchData, setBookSearchDate] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`)
      .then((response) => {
        setBookSearchDate(response.data.items);
        setLoader(false);
      });
  }, []);

  if (bookSearchData.length === 0) {
    return (
      <section>
        <Loader>Loading...</Loader>
      </section>
    );
  }

  return (
    <div className="search__wrapper">
      {bookSearchData.map((bookObj) => {
        return (
          <div className="search__card__wrapper" key={uniqid()}>
            <Link
              to={`/single/${bookObj.volumeInfo.industryIdentifiers[1].identifier}`}
            >
              <img
                src={
                  bookObj.volumeInfo.imageLinks
                    ? bookObj.volumeInfo.imageLinks.smallThumbnail
                    : "https://picsum.photos/128/195"
                }
                className="search__card__img"
              ></img>
            </Link>
            <h3>{bookObj.volumeInfo.title}</h3>
            <p>
              {bookObj.volumeInfo.authors ? bookObj.volumeInfo.authors[0] : ""}
            </p>
            <h3>$19.99</h3>
            <button
              onClick={() => {
                addToCart(
                  bookObj.volumeInfo.title,
                  19.99,
                  bookObj.volumeInfo.imageLinks.smallThumbnail,
                  bookObj.volumeInfo.authors[0]
                );
              }}
              className="btn"
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SearchPage;
