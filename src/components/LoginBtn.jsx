import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  const [BtnName, setBtnName] = useState("Login");

  return (
    <>
      <Button
        variant="contained"
        type="large"
        style={{ backgroundColor: "#1976d2" }}
      >
        <Link
          to="/Login"
          className="link"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          {BtnName}
        </Link>
      </Button>
    </>
  );
};

export default LoginBtn;
