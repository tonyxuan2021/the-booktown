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
            <Link to="/adventure">
              <li>Adventure</li>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <li>Business</li>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <li>Child</li>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <li>Fantasy</li>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <Link to="/food">
              <li>Food</li>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <Link to="/horror">
              <li>Horror</li>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <li>Romance</li>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="category__list__icon"
            />
          </div>
          <div className="category__list__wrapper">
            <Link to="/travel">
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
