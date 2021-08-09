import React from "react";
import Logo from "../../images/LogoB.png";
import searchIcon from "../../images/search-icon-black.svg";
import { Link } from "react-router-dom";

const NavbarBlack = () => {
  return (
    <div className="container">
      <nav
        style={{
          color: "black",
          backgroundColor: "white",
          borderBottom: "2px solid rgba(0,0,0,0.15)",
        }}
      >
        <img src={Logo} alt="logo" />

        <div className="search">
          <img src={searchIcon} alt="search-icon" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search your Destination"
            style={{ color: "black", border: "2px solid gray" }}
          />
        </div>

        <ul className="navlist">
          <li>
            <Link to="/" style={{ color: "black" }}>
              News
            </Link>
          </li>
          <li>Hotels</li>
          <li>Blog</li>
          <li>Contact</li>
          <Link to="/login">
            <button className="btn" style={{ color: "black" }}>
              Log in
            </button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarBlack;
