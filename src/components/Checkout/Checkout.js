import React, { useContext } from "react";
import CartContext from "../../CartContext";
import uniqid from "uniqid";
import "./Checkout.scss";
import Footer from "../Footer/Footer";

const Checkout = () => {
  const { items } = useContext(CartContext);
  // console.log(items)
  return (
    <div>
      <h1 className="checkout__title">Your Books Shopping Cart</h1>
      <div className="checkout__page__wrapper">
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
        <div className="order__summary">
          <h1 className="order__title">Order Summary</h1>
          <div className="order__subtotal">
            <p>Subtotal</p>
            <p>$139.92</p>
          </div>
          <div className="order__shipping">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="order__tax">
            <p>Tax</p>
            <p>TBD</p>
          </div>
          <div className="order__total__wrapper">
            <h3 className="order__total">Total</h3>
            <h3 className="order__total__amt">$200</h3>
          </div>
          <button className="order__button">Proceed to Checkout</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
