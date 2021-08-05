import React from "react";
import "./Navbar.css";
import Logo from "../../images/Logo.png";
import searchIcon from "../../images/search-icon.svg";

const Navbar = () => {
  return (
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
        <li>News</li>
        <li>Destination</li>
        <li>Blog</li>
        <li>Contact</li>
        <button className="btn">Log in</button>
      </ul>
    </nav>
  );
};

export default Navbar;
