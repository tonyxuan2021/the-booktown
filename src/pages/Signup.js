import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL_REGISTER } from "../config/index";
import { styled } from "@mui/system";

const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    height: 330,
    width: 550,
  },
}));

const Signup = () => {
  const [email, setEmail] = useState("");
  const [errorNoValidEmail, setErrorNoValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [errorNoPassword, setErrorNoPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // signin and signup validation
  const isValidEmail = (emailAddress) => {
    return /\S+@\S+\.\S+/.test(emailAddress);
  };

  const handleSubmit = () => {
    if (!email || !isValidEmail(email)) {
      setErrorNoValidEmail(true);
      return;
    }

    if (!password) {
      setErrorNoPassword(true);
      return;
    }
    axios
      .post(`${API_URL_REGISTER}`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setSuccess(true);
        setError("");
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.response.data);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ mt: 8 }}
      flexDirection="column"
      alignItems="center"
    >
      <Wrapper elevation={5}>
        <Typography variant="h5" textAlign="center" sx={{ mt: 2, mb: 3 }}>
          SET YOUR EMAIL AND PASSWORD
        </Typography>
        <Divider></Divider>
        <Box sx={{ p: 3 }} display="flex" flexDirection="column" gap={1}>
          <Typography variant="h5">email address</Typography>
          <TextField
            type="email"
            inputProps={{
              style: {
                padding: 8,
                fontSize: 15,
              },
            }}
            sx={{ p: 0 }}
            fullWidth
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errorNoValidEmail}
            helperText={
              errorNoValidEmail ? "Please enter a valid email address" : ""
            }
          ></TextField>
          <Typography variant="h5">password</Typography>
          <TextField
            inputProps={{
              style: {
                padding: 8,
                fontSize: 15,
              },
            }}
            fullWidth
            required
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            error={errorNoPassword}
            helperText={errorNoPassword ? "Please enter your password" : ""}
          ></TextField>
          <Typography variant="h6">Forgot your password?</Typography>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              fullWidth
              sx={{ height: 40, width: 200, mb: 2 }}
              onClick={handleSubmit}
            >
              <Typography variant="h5">CONTINUE</Typography>
            </Button>
          </Box>
        </Box>
        <Box sx={{ p: 3 }}>
          <Typography sx={{ mb: 2 }} variant="h5">
            EMAIL PREFERENCES
          </Typography>
          <Divider></Divider>
          <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
            <Checkbox size="large" />
            <Typography variant="h6">
              Join our email list to get exclusive offers, the best in books,
              and more. You may unsubscribe at any time.
            </Typography>
          </Box>
          <Typography textAlign="center" variant="h5">
            <Link style={{ color: "black" }} to="/signin">
              Already have an account?{" "}
              <span style={{ textDecoration: "underline" }}>Sign In</span>
            </Link>
          </Typography>
        </Box>
      </Wrapper>
      {success && <div className="signup__notice">Signed up!</div>}
      {error && <div className="signup__notice">{error}</div>}
    </Box>
  );
};

export default Signup;
