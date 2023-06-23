import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import GroupIcon from "@mui/icons-material/Group";
import SendIcon from "@mui/icons-material/Send";

const Info = () => {
  return (
    <Box
      sx={{ height: "100%" }}
      marginTop={"50px"}
      marginBottom={"0"}
      className="info"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} textAlign="center">
          <GroupIcon
            fontSize="large"
            style={{ fontSize: 60, color: "white" }}
          />
          <h3>Connect</h3>
          <p className="infop">
            Look for your ideal sparring partner for the best sparring
            experience
          </p>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <SendIcon fontSize="large" style={{ fontSize: 60, color: "white" }} />
          <h3>Challenge</h3>
          <p className="infop">
            Challenge people to a sparringmatch within the sport of your choice
          </p>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <SportsMmaIcon
            fontSize="large"
            style={{ fontSize: 60, color: "white" }}
          />
          <h3>Spar</h3>
          <p className="infop">
            Meet up with your new sparring partner and reach a higher level
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
