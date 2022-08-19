import React, { useContext, useState } from "react";
import CartContext from "../../CartContext";
import uniqid from "uniqid";
import "./Checkout.scss";
import StripeCheckout from "react-stripe-checkout";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import SelectQuantity from "./SelectQuantity";
import { theme } from "../../theme";
import { styled } from "@mui/system";

const Wrapper = styled(Grid)(({ theme }) => ({
  padding: 16,
  [theme.breakpoints.up("md")]: {
    padding: 30,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 100,
    paddingRight: 100,
  },
}));

const SecondWrapper = styled(Grid)(({ theme }) => ({
  flexDirection: "column",
  gap: 30,
  [theme.breakpoints.up("md")]: {
    gap: 60,
  },
  [theme.breakpoints.up("lg")]: {
    gap: 0,
    flexDirection: "row",
  },
}));

const BookInfoWrapper = styled(Grid)(({ theme }) => ({
  gap: 1,
  [theme.breakpoints.up("md")]: {
    gap: 20,
  },
}));

const ProceedBtn = styled(Button)(({ theme }) => ({
  padding: 16,
  [theme.breakpoints.up("md")]: {
    padding: 30,
  },
  [theme.breakpoints.up("lg")]: {
    padding: 20,
  },
}));

const ProceedText = styled(Typography)(({ theme }) => ({}));

const Checkout = () => {
  const { items } = useContext(CartContext);
  const { selectQty, setSelectQty } = useContext(CartContext);

  console.log(selectQty);
  const { removeFromCart } = useContext(CartContext);
  const history = useHistory();

  const itemPrice = parseFloat(
    items.reduce((a, c) => a + c.price, 0).toFixed(2)
  );
  const taxPrice = parseFloat((itemPrice * 0.12).toFixed(2));
  const shippingPrice = itemPrice > 50 ? 0 : 9.99;
  const totalPrice = parseFloat(
    (itemPrice + shippingPrice + taxPrice).toFixed(2)
  );

  const notify = () =>
    toast.error("Deleted from cart!", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1000,
    });

  const makePayment = (token) => {
    const body = {
      token,
      items,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("http://localhost:5050/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (items.length === 0) {
    history.push("/empty");
  }

  return (
    <Wrapper>
      <Typography variant="h3" fontWeight={700} sx={{ mb: 5 }}>
        Shopping Cart
      </Typography>
      <SecondWrapper container item display="flex">
        <Grid item lg={7}>
          {items.map((item) => {
            return (
              <Grid
                item
                key={uniqid()}
                display="flex"
                justifyContent="space-between"
                sx={{ p: 2 }}
              >
                <Grid item xs={3} md={2}>
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={item.img}
                  ></img>
                </Grid>
                <BookInfoWrapper
                  item
                  display="flex"
                  flexDirection="column"
                  xs={8}
                  md={9}
                >
                  <div className="checkout__book__title__wrapper">
                    <h3 className="checkout__book__name">{item.name}</h3>
                    <p className="checkout__book__author">{`by ${item.author}`}</p>
                  </div>
                  <Grid item display="flex" alignItems="center" gap={1}>
                    {/* <SelectQuantity
                      selectQty={selectQty}
                      setSelectQty={setSelectQty}
                    /> */}
                    <h3 className="checkout__book__price">{`$ ${item.price}`}</h3>
                  </Grid>
                  <Button
                    sx={{ color: theme.palette.secondary.main, width: "5%" }}
                    onClick={() => {
                      notify();
                      removeFromCart(item.name);
                    }}
                  >
                    <Typography variant="h5" fontWeight={700}>
                      remove
                    </Typography>
                  </Button>
                  <ToastContainer />
                </BookInfoWrapper>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          item
          lg={5}
          sx={{
            background: "rgba(245,242,233,0.701961)",
            p: 3,
            maxHeight: "310px",
          }}
        >
          <h2 className="order__title">Order Summary</h2>
          <div className="order__subtotal">
            <p>Subtotal</p>
            <p>{itemPrice}</p>
          </div>
          <div className="order__shipping">
            <p>Shipping</p>
            <p>{itemPrice ? shippingPrice : 0}</p>
          </div>
          <div className="order__tax">
            <p>Tax (12% - British Columbia)</p>
            <p>{taxPrice}</p>
          </div>
          <div className="order__total__wrapper">
            <h3 className="order__total">Total</h3>
            <h3 className="order__total__amt">{itemPrice ? totalPrice : 0}</h3>
          </div>

          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
            token={makePayment}
            name="Enter your shipping info"
            amount={totalPrice * 100}
            shippingAddress
            billingAddress
            style={{ margin: 0 }}
          >
            <ProceedBtn
              fullWidth
              sx={{
                color: theme.palette.white.main,
                background: theme.palette.primary.main,
                textTransform: "capitalize",
                ":hover": {
                  opacity: 0.8,
                  bgcolor: theme.palette.primary.main,
                  // color: "white",
                },
              }}
            >
              <ProceedText variant="h4">Proceed to Checkout</ProceedText>
            </ProceedBtn>
          </StripeCheckout>
        </Grid>
      </SecondWrapper>
    </Wrapper>
  );
};

export default Checkout;
