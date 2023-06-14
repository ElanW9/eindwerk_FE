import { useState } from "react";
import Home from "./pages/index";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
