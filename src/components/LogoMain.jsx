import React from "react";
import { Button, Box } from "@mui/material";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const LogoMain = () => {
  return (
    <Box textAlign={"center"} marginTop={10}>
      <img src={logo} alt="SparClub Logo" id="logo" />
      <p>Look for your ideal sparring partner!</p>
      <Button
        variant="contained"
        type="large"
        to="/Search"
        style={{
          backgroundColor: "#FF7300",
        }}
        className="btnmain"
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

export default LogoMain;
