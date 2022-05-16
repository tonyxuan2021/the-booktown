import React, { useContext } from "react";
import CartContext from "../../CartContext";
import uniqid from "uniqid";
import "./Checkout.scss";

const Checkout = () => {
  const { items } = useContext(CartContext);
  // console.log(items)
  return (
    <div>
      <h1 className="checkout__title">Your Books Shopping Cart</h1>
      <div className="checkout__wrapper">
        {items.map((item) => {
          return (
            <div className="checkout__book__wrapper" key={uniqid()}>
              <img className="checkout__img" src={item.img}></img>
              <div className="checkout__book__flex">
                <div className="checkout__book__title__wrapper">
                  <h2 className="checkout__book__name">{item.name}</h2>
                  <p className="checkout__book__author">{`by ${item.author}`}</p>
                </div>
                <h2 className="checkout__book__price">{`$ ${item.price}`}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
