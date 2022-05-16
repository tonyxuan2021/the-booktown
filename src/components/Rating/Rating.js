import React from "react";
import "./Rating.scss";

const Rating = ({ value, text, color }) => {

    // console.log(text)

  return (
    <div className="rating">
      <i
        style={{ color }}
        className={
          value >= 1
            ? "fas fa-star"
            : value >= 0.5
            ? "fas fa-star-haf-alt"
            : "far fa-star"
        }
      ></i>
      <i
        style={{ color }}
        className={
          value >= 2
            ? "fas fa-star"
            : value >= 1.5
            ? "fas fa-star-haf-alt"
            : "far fa-star"
        }
      ></i>
      <i
        style={{ color }}
        className={
          value >= 3
            ? "fas fa-star"
            : value >= 2.5
            ? "fas fa-star-haf-alt"
            : "far fa-star"
        }
      ></i>
      <i
        style={{ color }}
        className={
          value >= 4
            ? "fas fa-star"
            : value >= 3.5
            ? "fas fa-star-haf-alt"
            : "far fa-star"
        }
      ></i>
      <i
        style={{ color }}
        className={
          value >= 5
            ? "fas fa-star"
            : value >= 4.5
            ? "fas fa-star-haf-alt"
            : "far fa-star"
        }
      ></i>
      <span className="rating__text">{text === undefined ? (text = 0 + " reviews") : text + " reviews"}</span>
      <p>
      </p>
    </div>
  );
};

Rating.defaultProps = {
  color: "#FFA41C",
};

export default Rating;
