import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Card.scss";
import axios from "axios";
const Card = ({ dataObj, isbn }) => {
  const [imgUrl, setImgUrl] = useState("");

  console.log(isbn);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
      .then((data2) => {
        setImgUrl(data2.data.items[0].volumeInfo.imageLinks.thumbnail);
      });
  }, []);

  return (
    <div className="card__wrapper">
      <img src={imgUrl} className="card__img"></img>
      <p className="card__name">{dataObj.title}</p>
      <p className="card__author">{dataObj.author}</p>
      <p>
        {dataObj.price === "0.00" ? (dataObj.price = "20.00") : dataObj.price}
      </p>
      <Button />
    </div>
  );
};

export default Card;
