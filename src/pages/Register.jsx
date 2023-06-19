import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Register() {
  return (
    <Container component="main" maxWidth="xs">
      {/* {login?.loggedin && <Navigate to="/" />} */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography component="h1" variant="h5" className="link">
          Register
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          {/* onSubmit={handleSubmit} */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={(e) => setName(e.target.value)}
            className="textfield"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            className="textfield"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            className="textfield"
          />
          {/* {validation && <Alert severity="error">{validation.message}</Alert>} */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="link"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
