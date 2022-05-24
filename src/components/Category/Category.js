import React, { Component } from "react";
import "./Category.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Category extends Component {
  render() {
    return (
      <div className="category__main__wrapper">
        <h3 className="category__title">Book Categories</h3>
        <ul className="category__wrapper">
          <div className="category__list__wrapper">
            <Link to="/adventure" className="category__link">
              <li>Adventure</li>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <Link to="/business" className="category__link">
              <li>Business</li>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <Link to="/child" className="category__link">
              <li>Child</li>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <Link to="/fantasy" className="category__link">
              <li>Fantasy</li>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <Link to="/food" className="category__link">
              <li>Food</li>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <Link to="/horror" className="category__link">
              <li>Horror</li>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <Link to="/romance" className="category__link">
              <li>Romance</li>
            </Link>{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <Link to="/travel" className="category__link">
              <li>Travel</li>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
        </ul>
      </div>
    );
  }
}

export default Category;
