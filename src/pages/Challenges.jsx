import React from "react";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Challenges = () => {
  return (
    <div>
      <h2 className="titleChallenge">Challenges</h2>
      <Box textAlign="center" marginTop={10}>
        <Item style={{ minHeight: 100, maxWidth: 600 }} textAlign="center">
          <h3 className="challengeitem">Elan has challenged you</h3>
          <div>
            <Button
              style={{
                backgroundColor: "green",
                color: "white",
                marginRight: "1rem",
              }}
            >
              accept
            </Button>
            <Button
              style={{
                backgroundColor: "red",
                color: "white",
                marginLeft: "1rem",
              }}
            >
              decline
            </Button>
          </div>
        </Item>
      </Box>
    </div>
  );
};

export default Challenges;
