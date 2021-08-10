import React, { useContext } from "react";
import Logo from "../../images/LogoB.png";
import searchIcon from "../../images/search-icon-black.svg";
import { NavLink } from "react-router-dom";
import { userContext } from "../../App";
import user from "../../images/user.svg";

const NavbarBlack = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <div className="container">
      <nav
        style={{
          color: "black",
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

        <ul className="navlist" style={{ backgroundColor: "white" }}>
          <NavLink
            exact
            to="/"
            className="navlink"
            activeClassName="active"
            style={{ color: "black" }}
          >
            News
          </NavLink>

          <NavLink
            exact
            to="/destination"
            className="navlink"
            activeClassName="active"
            style={{ color: "black" }}
          >
            Destination
          </NavLink>
          <NavLink
            exact
            to="/blog"
            className="navlink"
            activeClassName="active"
            style={{ color: "black" }}
          >
            Blog
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="navlink"
            activeClassName="active"
            style={{ color: "black" }}
          >
            Contact
          </NavLink>
          {loggedInUser.email ? (
            <NavLink exact to="/" className="navlink" activeClassName="active">
              <button
                className="btn"
                onClick={() => setLoggedInUser({})}
                style={{ color: "black" }}
              >
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
              <button className="btn" style={{ color: "black" }}>
                Log In
              </button>
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarBlack;
