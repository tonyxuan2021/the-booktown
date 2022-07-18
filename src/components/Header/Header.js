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
import Slider from "../Slider/Slider";
import SearchIcon from "@mui/icons-material/Search";
import { Button, TextField, InputProps } from "@mui/material";
import { Box } from "@mui/system";
import Error from "../../pages/Error";

const Header = () => {
  const { items } = useContext(CartContext);
  const [booksData, setBooksData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}`)
      .then((data) => {
        setBooksData(data);
        history.push(`/search/${search}`);
      })
      .catch(() => {
        setError(true);
      });
  };

  console.log(error);

  if (!booksData) {
    return <Error />;
  }

  return (
    <div>
      <div className="header__final">
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
        </div>
        <Box sx={{ height: 45, mb: 2 }} display="flex" className="header__box">
          <TextField
            placeholder="Search over millions of books"
            variant="outlined"
            value={search}
            autoFocus
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            // InputProps={{ style: { fontSize: 16 } }}
            sx={{ width: "70%" }}
          ></TextField>
          <Button
            className="header__search__btn"
            onClick={handleSubmit}
            variant="contained"
            endIcon={
              <SearchIcon
                sx={{
                  color: "black",
                  transform: "scale(1.2)",
                }}
              />
            }
            sx={{
              width: "30%",
              height: "100%",
              background: "#b5e48c",
              "&:hover": { background: "#C7F9CC" },
            }}
          ></Button>
        </Box>
      </div>
      <Slider />
    </div>
  );
};

export default Header;
