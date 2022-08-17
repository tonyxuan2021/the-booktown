import { Button, Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
  border: {
    borderBottom: "1px solid lightgrey",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  borderall: {
    border: "1px solid lightgrey",
  },
};

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setFailedAuth(true);
    }
  });

  if (failedAuth) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        // textAlign="center"
        gap={5}
        sx={{ mt: 10 }}
      >
        <h1>404</h1>
        <h2>You must be logged in.</h2>
        <Link to="/" className="btn" style={{ margin: 0, width: "200px" }}>
          <Button fullWidth>
            <Typography variant="h5">back homes</Typography>
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Grid container sx={{ p: 2 }}>
      <Grid
        container
        item
        display="flex"
        justifyContent="space-between"
        sx={[styles.border, { pb: 1, mb: 4 }]}
      >
        <Typography variant="h5">hello, dear user</Typography>
        <Typography variant="h5">continue shopping</Typography>
      </Grid>
      <Grid container item display="flex" justifyContent="space-between">
        <Grid item sx={styles.flexColumn} xs={3}>
          {list.map((item) => {
            return (
              <Typography
                key={item.id}
                variant="h5"
                sx={[styles.border, { mb: 2, pb: 2 }]}
              >
                {item.title}
              </Typography>
            );
          })}
        </Grid>
        <Grid item xs={8.6} display="flex" justifyContent="space-between">
          <Grid item sx={[styles.flexColumn, { gap: 2 }]} xs={3.8}>
            <Grid
              item
              sx={[styles.flexColumn, styles.borderall, { gap: 2, p: 2 }]}
            >
              <Typography variant="h4">ORDER HISTORY</Typography>
              <Typography variant="h5" fontWeight={700}>
                You have no order history
              </Typography>
              <Typography variant="h6">
                Orders placed using Guest checkout are not displayed here. Check
                Guest Order Status for your order details.
              </Typography>
            </Grid>
            <Grid
              item
              sx={[styles.flexColumn, styles.borderall, { gap: 2, p: 2 }]}
            >
              <Typography variant="h4">PAYMENT OPTIONS</Typography>
              <Typography variant="h5" fontWeight={700}>
                Set up a preferred payment option to enjoy faster checkout
              </Typography>
              <Button
                variant="contained"
                sx={{ height: 40, background: "black" }}
              >
                Set Payment Option
              </Button>
              <Button
                variant="contained"
                sx={{ height: 40, background: "black" }}
              >
                Manage Gift Card
              </Button>
            </Grid>
            <Grid
              item
              sx={[styles.flexColumn, styles.borderall, { gap: 2, p: 2 }]}
            >
              <Typography variant="h4">MY INTERESTS</Typography>
              <Grid
                item
                display="flex"
                alignItems="center"
                sx={[styles.borderall, { gap: 2, p: 1 }]}
              >
                <FavoriteIcon fontSize="large" sx={{ m: 0 }} />
                <Typography variant="h5">Fiction Books</Typography>
              </Grid>
              <Button
                variant="contained"
                sx={{ height: 40, background: "black" }}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
          <Grid item sx={[styles.flexColumn, { gap: 2 }]} xs={3.8}>
            <Grid
              item
              sx={[styles.flexColumn, styles.borderall, { gap: 2, p: 2 }]}
            >
              <Typography variant="h4">MY REWARDS</Typography>
              <Typography variant="h5" fontWeight={700}>
                Booktown Reward Number:123456
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                Current Balance: 0 point
              </Typography>
              <Button
                variant="contained"
                sx={{ height: 40, background: "black" }}
              >
                See More
              </Button>
            </Grid>
            <Grid
              item
              sx={[styles.flexColumn, styles.borderall, { gap: 2, p: 2 }]}
            >
              <Typography variant="h4">MY OFFERS</Typography>
              <Typography variant="h5" fontWeight={700}>
                Get 1 booktown point every time you rate a recommendation
              </Typography>
              <Button
                variant="contained"
                sx={{ height: 40, background: "black" }}
              >
                See Details
              </Button>
            </Grid>
          </Grid>
          <Grid item sx={[styles.flexColumn]} xs={3.8}>
            <Grid
              item
              sx={[styles.flexColumn, styles.borderall, { gap: 2, p: 2 }]}
            >
              <Typography variant="h4">ACCOUNT DETAILS</Typography>
              <Grid item display="flex" gap={2}>
                <Typography variant="h5" fontWeight={700}>
                  NAME
                </Typography>
                <Typography variant="h5">User1</Typography>
              </Grid>
              <Grid item display="flex" gap={2}>
                <Typography variant="h5" fontWeight={700}>
                  EMAIL
                </Typography>
                <Typography variant="h5">user1@gmail.com</Typography>
              </Grid>
              <Grid item display="flex" gap={2}>
                <Typography variant="h5" fontWeight={700}>
                  PASSWORD
                </Typography>
                <Typography variant="h5">******</Typography>
              </Grid>
              <Grid item display="flex" gap={2}>
                <Typography variant="h5" fontWeight={700}>
                  PHONE
                </Typography>
                <Typography variant="h5">778***1234</Typography>
              </Grid>
              <Grid item display="flex" gap={2}>
                <Typography variant="h5" fontWeight={700}>
                  LANGUAGE
                </Typography>
                <Typography variant="h5">English</Typography>
              </Grid>
              <Grid item display="flex" gap={2}>
                <Typography variant="h5" fontWeight={700}>
                  ADDRESS
                </Typography>
                <Typography variant="h5">123 Test Street</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const list = [
  { id: 1, title: "Dashboard" },
  {
    id: 2,
    title: "Order History",
  },
  {
    id: 3,
    title: "Account Details",
  },
  {
    id: 4,
    title: "Payment Options",
  },
  {
    id: 5,
    title: "My Rewards",
  },
  {
    id: 6,
    title: "Email Preferences",
  },
  {
    id: 7,
    title: "My Offers",
  },
  {
    id: 8,
    title: "My Interest",
  },
];

export default Dashboard;
