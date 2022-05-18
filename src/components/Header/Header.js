import React from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";
import { useContext } from "react";

const Header = () => {
  const { items } = useContext(CartContext);
  // console.log(items);

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
      <div className="search__wrapper">
        <input
          className="search__input"
          placeholder="Search over millions of books..."
        ></input>
        <FontAwesomeIcon icon={faSearch} className="search__icon" />
      </div>
    </div>
  );
};

export default Header;
