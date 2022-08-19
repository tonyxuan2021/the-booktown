// import React from "react";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";
import CartContext from "../../CartContext";
import axios from "axios";
import Slider from "../Slider/Slider";
import SearchIcon from "@mui/icons-material/Search";
import { Button, TextField, InputProps, Badge, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Error from "../../pages/Error";
import { styled } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";

const SearchField = styled(TextField)({
  border: "none",
});

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
        setSearch("");
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div>
      <Slider />
      <div className="header__final">
        <div className="header__wrapper">
          <div className="header--top">
            <Link to="/" className="header__link">
              <img src={logo} className="header__img"></img>
            </Link>
            <div className="header--right__wrapper">
              <div className="header--top--2">
                <Link to="/signin" className="header__link">
                  <p>Login</p>
                </Link>
                <PersonIcon fontSize="large" />
              </div>
              <div className="header--btm">
                <Link to="/checkout" className="header--right">
                  <p>Cart</p>
                  <Badge badgeContent={items.length} color="error">
                    <ShoppingCartIcon fontSize="large" />
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
          <div className="header__bar">
            <Link to="/" className="header__home">
              <Grid item display="flex" gap={1}>
                <p>Home</p>
                <HomeIcon fontSize="large" />
              </Grid>
            </Link>
            <Link to="/dashboard" className="header__used">
              <Grid item display="flex" gap={1}>
                <p>Dashboard</p>
                <DashboardIcon fontSize="large" />
              </Grid>
            </Link>
          </div>
        </div>
        <Box sx={{ minHeight: 45 }} display="flex" className="header__box">
          <SearchField
            placeholder="Search over millions of books"
            variant="outlined"
            value={search}
            color="primary"
            autoFocus
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            InputProps={{ style: { fontSize: 16 } }}
            sx={{ width: "70%" }}
          ></SearchField>
          <Button
            className="header__search__btn"
            onClick={handleSubmit}
            variant="contained"
            endIcon={
              <SearchIcon
                sx={{
                  color: "white",
                  transform: "scale(1.6)",
                }}
              />
            }
            sx={{
              background: "#222",
              boxShadow: "none",
              "&:hover": { background: "#222", opacity: 0.75 },
              borderRadius: 0,
            }}
          ></Button>
        </Box>
      </div>
      {/* <Slider /> */}
    </div>
  );
};

export default Header;
