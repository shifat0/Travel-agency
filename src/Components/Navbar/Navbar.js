import React from "react";
import "./Navbar.css";
import Logo from "../../images/Logo.png";
import searchIcon from "../../images/search-icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <img src={Logo} alt="logo" />

        <div className="search">
          <img src={searchIcon} alt="search-icon" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search your Destination"
          />
        </div>

        <ul className="navlist">
          <li>
            <Link to="/">News</Link>
          </li>
          <li>Hotels</li>
          <li>Blog</li>
          <li>Contact</li>
          <Link to="login">
            <button className="btn">Log in</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
