import React from "react";
import "./Home.css";
import Navbar from "./Navbar.js";
import Body from "./Body.js";

const Home = () => {
  return (
    <div className="home">
      <div className="home-overlay">
        <div className="container">
          <Navbar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Home;
