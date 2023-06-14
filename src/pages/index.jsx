import React from "react";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
const Home = () => {
  return (
    <Box textAlign={"center"} marginTop={20}>
      <h1>SparClub</h1>
      <p>Look for your ideal sparring partner!</p>
      <Button variant="contained" type="large">
        <Link
          to="/New"
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
