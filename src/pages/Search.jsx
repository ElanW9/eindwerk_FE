import React from "react";
import Grid from "@mui/material/Grid";
import Opponents from "../components/Opponents";

const Search = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} textAlign={"center"}>
        <h1>Links</h1>
      </Grid>
      <Grid item xs={4} marginTop={25}>
        <h2 className="versus">VS</h2>
      </Grid>
      <Grid item xs={4} textAlign={"center"}>
        <Opponents />
      </Grid>
    </Grid>
  );
};

export default Search;
