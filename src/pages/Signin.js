import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { API_URL_LOGIN } from "../config/index";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  console.log(email, password);
  const handleSubmit = () => {
    axios
      .post(`${API_URL_LOGIN}`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res)
        sessionStorage.setItem("token", res.data.token);
        setSuccess(true);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <Box
      display="flex"
      sx={{ mt: 8 }}
      flexDirection="column"
      alignItems="center"
    >
      <Paper sx={{ height: 330, width: 250 }} elevation={5}>
        <Typography variant="h5" textAlign="center" sx={{ mt: 2 }}>
          SIGN IN TO YOUR BOOK TOWN ACCOUNT
        </Typography>
        <Box sx={{ p: 1 }} display="flex" flexDirection="column" gap={1}>
          <Typography variant="h6">email address</Typography>
          <TextField
            inputProps={{
              style: {
                padding: 8,
              },
            }}
            sx={{ p: 0 }}
            fullWidth
            required
            autoFocus
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></TextField>
          <Typography variant="h6">password</Typography>
          <TextField
            inputProps={{
              style: {
                padding: 8,
              },
            }}
            fullWidth
            required
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></TextField>
          <Typography>Forgot your password?</Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{ height: 40, mb: 2 }}
            onClick={handleSubmit}
          >
            <Typography variant="h5">SIGN IN</Typography>
          </Button>
          <Typography textAlign="center">
            <Link to="/signup">Don't have an account? Create one now</Link>
          </Typography>
        </Box>
      </Paper>
      {success && <Redirect to="/dashboard" />}
      {error && <p>{error}</p>}
    </Box>
  );
};

export default Signin;
