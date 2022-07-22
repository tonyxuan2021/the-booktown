import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      gap={2}
      sx={{ mt: 10 }}
    >
      <h1>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <Link to="/" className="btn">
        back home
      </Link>
    </Box>
  );
};

export default Error;
