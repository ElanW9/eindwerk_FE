import React from "react";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <Box textAlign={"center"} marginTop={10}>
      <img src={logo} alt="SparClub Logo" />
      <p>Look for your ideal sparring partner!</p>
      <Button
        variant="contained"
        type="large"
        to="/Search"
        style={{ backgroundColor: "#FFA500" }}
      >
        <Link
          to="/Search"
          className="link"
          style={{ textDecoration: "none", color: "white" }}
        >
          Fight
        </Link>
      </Button>
    </Box>
  );
};

export default Home;
