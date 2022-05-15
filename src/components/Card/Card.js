import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Card.scss";
import uniqid from "uniqid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Card = ({ dataObj, isbn }) => {
  const [imgUrl, setImgUrl] = useState("");

  console.log(isbn)

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
      .then((data2) => {

        // console.log(data2.data.items[0].volumeInfo.imageLinks.thumbnail)
        setImgUrl(data2.data.items[0].volumeInfo.imageLinks.thumbnail);
      });
  }, []);

  return (
    <div key={uniqid()}>
      {/* <FontAwesomeIcon icon={faChevronLeft} className="card__chevron--left" /> */}
      <div className="card__wrapper">
        <img
          // src="https://via.placeholder.com/90x120"
          src={imgUrl}
          className="card__img"
        ></img>
        <p>{dataObj.title}</p>
        <p>{dataObj.author}</p>
        <p>
          {dataObj.price === "0.00" ? (dataObj.price = "20.00") : dataObj.price}
        </p>
        <Button />
      </div>
      {/* <FontAwesomeIcon icon={faChevronRight} className="card__chevron--right" /> */}
    </div>
  );
};

export default Card;
