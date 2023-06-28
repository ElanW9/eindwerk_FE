import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import useFetch from "../components/UseFetch";
import { Auth } from "../components/Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(undefined);
  // const [login, setLogin] = useContext(Auth);
  const navigate = useNavigate();

  const { post } = useFetch();
  const handleSubmit = (e) => {
    e.preventDefault();
    post("login", { email: email, password: password })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLogin({ loggedin: true });
        }
      })
      .catch((error) => {
        console.log("error", error);
        error.json().then((data) => setValidation(data));
      });
  };

  const linkClick = () => {
    navigate("/Register");
  };
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
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            className="textfield"
            onChange={(e) => setEmail(e.target.value)}
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
            className="textfield"
            onChange={(e) => setPassword(e.target.value)}
          />
          {validation && <Alert severity="error">{validation.message}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ backgroundColor: "#FF7300" }}
          >
            Sign In
          </Button>
        </Box>
        <Typography component="p" variant="p">
          <Link
            onClick={linkClick}
            className="cursor"
            style={{ Color: "#FF7300" }}
          >
            Don't have an account yet? Register here!
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
