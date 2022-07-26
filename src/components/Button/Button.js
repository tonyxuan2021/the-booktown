import React from "react";
import "./Button.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Button = ({ addToCart, dataObj, bookImgUrl }) => {
  const notify = () =>
    toast.success("Added to cart!", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1000,
    });

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          addToCart(dataObj.title, dataObj.price, bookImgUrl, dataObj.author);
          notify();
        }}
      >
        ADD TO CART
      </button>
      <ToastContainer />
    </div>
  );
};

export default Button;
