import React from "react";
import "./Category.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  return (
    <ul className="category__wrapper">
      <div className="category__list__wrapper">
        <li>Adventure</li>
        <FontAwesomeIcon icon={faArrowRight} className="category__list__icon" />
      </div>
      <div className="category__list__wrapper">
        <li>Business</li>
        <FontAwesomeIcon icon={faArrowRight} className="category__list__icon" />
      </div>
      <div className="category__list__wrapper">
        <li>Child</li>
        <FontAwesomeIcon icon={faArrowRight} className="category__list__icon" />
      </div>
      <div className="category__list__wrapper">
        <li>Fantasy</li>
        <FontAwesomeIcon icon={faArrowRight} className="category__list__icon" />
      </div>
      <div className="category__list__wrapper">
        <li>Food</li>
        <FontAwesomeIcon icon={faArrowRight} className="category__list__icon" />
      </div>
      <div className="category__list__wrapper">
        <li>Horror</li>
        <FontAwesomeIcon icon={faArrowRight} className="category__list__icon" />
      </div>
      <div className="category__list__wrapper">
        <li>Romance</li>
        <FontAwesomeIcon icon={faArrowRight} className="category__list__icon" />
      </div>
      <div className="category__list__wrapper">
        <li>Travel</li>
        <FontAwesomeIcon icon={faArrowRight} className="category__list__icon" />
      </div>
    </ul>
  );
};

export default Category;
