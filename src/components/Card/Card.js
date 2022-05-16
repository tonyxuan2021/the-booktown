import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Card.scss";
import axios from "axios";
import Rating from "../Rating/Rating";

const Card = ({ dataObj, isbn }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [data2, setData2] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
      .then((data2) => {
        setImgUrl(data2.data.items[0].volumeInfo.imageLinks.thumbnail);
        setData2(data2);
      });
  }, []);

  if (!data2) {
    return (
      <section>
        <p>... Loading your bookData ...</p>
      </section>
    );
  }

  let ratingScore = data2.data.items[0].volumeInfo.averageRating;
  let ratingCount = data2.data.items[0].volumeInfo.ratingsCount;

  // console.log(data2.data.items[0].volumeInfo.ratingsCount);

  return (
    <div className="card__wrapper">
      <img src={imgUrl} className="card__img"></img>
      <p className="card__name">{dataObj.title}</p>
      <p className="card__author">{dataObj.author}</p>

      {dataObj.price === "0.00" ? (dataObj.price = "20.00") : dataObj.price}
      <div className="card__review__wrapper">
        {/* <p>{ratingScore === undefined ? (ratingScore = 3) : ratingScore}</p> */}

        <Rating value={ratingScore} text={ratingCount} />
      </div>

      <Button />
    </div>
  );
};

export default Card;
