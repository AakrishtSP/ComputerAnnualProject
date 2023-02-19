import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home/Home";
import LogIn from "./pages/Login/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import Products from "./pages/Products/Products";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/iPhone" element={<Products item="iPhone" />} />
          <Route path="/iPad" element={<Products item="iPad" />} />
          <Route path="/Macbook" element={<Products item="Macbook" />} />
          <Route
            path="/Accessories"
            element={<Products item="Accessories" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
