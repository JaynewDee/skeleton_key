import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      {Auth.loggedIn() ? (
        <>
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/create" className="nav-link">
            CREATE
          </Link>
          <Link to="/logout" className="nav-link">
            LOGOUT
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="nav-link">
            LOGIN
          </Link>
          <Link to="/signup" className="nav-link">
            SIGNUP
          </Link>{" "}
        </>
      )}
    </nav>
  );
};

export default Nav;
