// import React from "react";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
      .get(`https://hapi-books.p.rapidapi.com/search/${search}`, {
        headers: {
          "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
          "X-RapidAPI-Key":
            "f95dacf387msh6f0d149205e4e5ap1fd2a5jsn211e1f8ce304",
        },
      })
      .then((data) => {
        // console.log(data)
        setBooksData(data);
        history.push(`/search/${search}`);
      });

    e.target.reset();
  };

  // console.log(booksData);

  return (
    <div className="header__wrapper">
      <div className="header--top">
        <Link to="/" className="header__link">
          <img src={logo} className="header__img"></img>
        </Link>
        <div className="header--right__wrapper">
          <div className="header--right">
            <p>Login</p>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="header--btm">
            <Link to="/checkout" className="header--right">
              <p>Cart</p>
              <FontAwesomeIcon icon={faCartShopping} className="header__cart" />
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
        {/* <Link
          to={{
            pathname: "/search",
            state: {
              booksData,
            },
          }}
        >
          <FontAwesomeIcon icon={faSearch} className="search__icon" />
        </Link> */}
        {/* <Link
          to={{
            pathname: "/search",
            state: {
              booksData,
            },
          }}
        > */}
        <button onSubmit={handleSubmit}>Search</button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Header;
