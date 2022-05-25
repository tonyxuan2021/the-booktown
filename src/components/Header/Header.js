// import React from "react";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import CartContext from "../../CartContext";
import axios from "axios";

const Header = () => {
  const { items } = useContext(CartContext);
  const [booksData, setBooksData] = useState([]);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    // console.log(search);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}`)
      .then((data) => {
        console.log(data);
        setBooksData(data);
        history.push(`/search/${search}`);
      });

    e.target.reset();
  };

  return (
    <div>
      <div className="header__wrapper">
        <div className="header--top">
          <Link to="/" className="header__link">
            <img src={logo} className="header__img"></img>
          </Link>
          <div className="header--right__wrapper">
            <div className="header--top">
              <p>Login</p>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="header--btm">
              <Link to="/checkout" className="header--right">
                <p>Cart</p>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="header__cart"
                />
                <span className="header__cart__num">{items.length}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="header__bar">
          <Link to="/" className="header__home">
            <p>Home</p>
          </Link>
          <Link to="/used" className="header__used">
            <p>Sell Used</p>
          </Link>
        </div>
        <form className="search__form__wrapper" onSubmit={handleSubmit}>
          <input
            className="search__input"
            placeholder="Search over millions of books..."
            name="search"
          ></input>
          <button className="header__search" onSubmit={handleSubmit}>
            Search
          </button>
        </form>
      </div>
      <div className="header__banner">
        <p className="header__banner__text">FREE shipping on orders over $50</p>
      </div>
    </div>
  );
};

export default Header;
