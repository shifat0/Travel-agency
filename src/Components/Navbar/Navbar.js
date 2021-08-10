import React, { useContext } from "react";
import "./Navbar.css";
import Logo from "../../images/Logo.png";
import searchIcon from "../../images/search-icon.svg";
import { NavLink } from "react-router-dom";
import { userContext } from "../../App";
import user from "../../images/user.svg";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
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
          <NavLink exact to="/" className="navlink" activeClassName="active">
            News
          </NavLink>

          <NavLink
            exact
            to="/destination"
            className="navlink"
            activeClassName="active"
          >
            Destination
          </NavLink>
          <NavLink
            exact
            to="/blog"
            className="navlink"
            activeClassName="active"
          >
            Blog
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="navlink"
            activeClassName="active"
          >
            Contact
          </NavLink>

          {loggedInUser.email ? (
            <NavLink to="/" className="navlink" activeClassName="active">
              <button className="btn" onClick={() => setLoggedInUser({})}>
                {loggedInUser.photo ? (
                  <img src={loggedInUser.photo} alt="user" />
                ) : (
                  <img src={user} alt="user" />
                )}
                {loggedInUser.name}
              </button>
            </NavLink>
          ) : (
            <NavLink
              exact
              to="/login"
              className="navlink"
              activeClassName="active"
            >
              <button className="btn">Log In</button>
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
