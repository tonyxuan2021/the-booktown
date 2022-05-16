import React from "react";
import "./Button.scss";

const Button = ({ addToCart, dataObj }) => {
  // console.log(addToCart)
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          addToCart(dataObj.name, dataObj.price);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Button;
