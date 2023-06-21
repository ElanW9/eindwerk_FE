import React from "react";
import Grid from "@mui/material/Grid";
import Opponents from "../components/Opponents";
import Fighter from "../components/Fighter";
import vs from "../assets/vs.png";

const Search = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} textAlign={"center"}>
        <Fighter />
      </Grid>
      <Grid item xs={4} marginTop={20} textAlign={"center"}>
        <img src={vs} alt="vs" />
      </Grid>
      <Grid item xs={4} textAlign={"center"}>
        <Opponents />
      </Grid>
    </Grid>
  );
};

export default Search;
