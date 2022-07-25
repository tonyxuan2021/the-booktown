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

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = () => {
    axios
      .post(`${API_URL_REGISTER}`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {});
  };

  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 8 }}>
      <Box sx={{ height: 330, width: 550 }} elevation={5}>
        <Typography variant="h5" textAlign="center" sx={{ mt: 2, mb: 3 }}>
          SET YOUR EMAIL AND PASSWORD
        </Typography>
        <Divider></Divider>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <Typography>Forgot your password?</Typography>
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
        <Box>
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
          <Typography textAlign="center">
            <Link to="/signin">Already have an account? Sign In</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
