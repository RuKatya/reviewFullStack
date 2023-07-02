import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Typography variant="h6" component="div" sx={{ margin: 2 }}>
        <Link to="/">Home</Link>
      </Typography>
    </AppBar>
  );
};

export default Navbar;
