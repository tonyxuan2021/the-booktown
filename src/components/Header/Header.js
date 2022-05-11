import React from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="header--top">
        <img src={logo}></img>
        <div className="header--right">
          <p>Login</p>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      <div className="search__wrapper">
        <input className="search__input"></input>
        <FontAwesomeIcon icon={faSearch} className="search__icon" />
      </div>
    </div>
  );
};

export default Header;
