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
        <Link to="/">
          <img src={logo} className="header__img"></img>
        </Link>
        <div>
          <div className="header--right">
            <p>Login</p>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>
            <Link to="/checkout" className="header--right">
              <p>Cart</p>
              <FontAwesomeIcon icon={faCartShopping} />
              <span>{items.length}</span>
            </Link>
          </div>
        </div>
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
