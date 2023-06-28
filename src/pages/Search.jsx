import React from "react";
import Grid from "@mui/material/Grid";
import Opponents from "../components/Opponents";
import Fighter from "../components/Fighter";
import vs from "../assets/vs.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Challenges");
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} textAlign="center">
          <Fighter />
        </Grid>
        <Grid item xs={12} sm={4} marginTop={20} textAlign="center">
          <img src={vs} alt="vs" onClick={handleClick} />
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <Opponents />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Search;
