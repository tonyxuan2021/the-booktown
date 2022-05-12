import React from "react";
import Button from "../Button/Button";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => {
  let dataArr = data.book_details[0];
  console.log(data);
  return (
    <div className="card__main__wrapper">
      <h3 className="card__title">Best Sellers</h3>
      <div className="card__flex">
        <FontAwesomeIcon icon={faChevronLeft} className="card__chevron--left" />
        <div className="card__wrapper">
          <img
            src="https://via.placeholder.com/90x120"
            className="card__img"
          ></img>
          <p>{dataArr.title}</p>
          <p>{dataArr.author}</p>
          <p>{dataArr.price}</p>
          <Button />
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="card__chevron--right"
        />
      </div>
    </div>
  );
};

export default Card;
