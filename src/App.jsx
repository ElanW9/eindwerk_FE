import { useState } from "react";
import Home from "./pages/index";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Challenges from "./pages/Challenges";
import Account from "./pages/Account";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Search" element={<Search />} />
        <Route path="Challenges" element={<Challenges />} />
        <Route path="Account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
