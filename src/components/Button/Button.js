import React from "react";
import "./Button.scss";

const Button = ({ addToCart, dataObj, bookImgUrl }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          addToCart(dataObj.title, dataObj.price, bookImgUrl, dataObj.author);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Button;
