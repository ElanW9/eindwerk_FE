import React from "react";
import { Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import gloves from "../assets/gloves.png";

const MakeAcc = () => {
  return (
    <Box sx={{ height: "100%" }} className="makeacc">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} textAlign="start" className="makeacctxt">
          <h3>Start your Spar Club journey</h3>
          <p>
            It doesn't matter if you are a lifelong martial artist or a
            beginner. Everyone can find just the right person that can help you
            elevate your martial arts level. Start now and make your own Spar
            Club account!
          </p>
          <Button
            variant="contained"
            type="large"
            to="/Register"
            style={{
              backgroundColor: "#FF7300",
            }}
            className="makeaccbtn"
            textAlign={"center"}
          >
            <Link
              to="/Register"
              className="link"
              style={{ textDecoration: "none", color: "white" }}
            >
              Get started now
            </Link>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} textAlign="end">
          <img src={gloves} alt="gloves" id="gloves" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MakeAcc;
