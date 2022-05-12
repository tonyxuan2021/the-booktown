import React from "react";
import Button from "../Button/Button";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
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
          <p>This is a book name</p>
          <p>This is an author name</p>
          <p>This is price</p>
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
