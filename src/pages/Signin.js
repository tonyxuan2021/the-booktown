import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  InputProps,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 8 }}>
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
          ></TextField>
          <Typography>Forgot your password?</Typography>
          <Button variant="contained" fullWidth sx={{ height: 40, mb: 2 }}>
            <Typography variant="h5">SIGN IN</Typography>
          </Button>
          <Typography textAlign="center">
            <Link to="/signup">Don't have an account? Create one now</Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signin;
