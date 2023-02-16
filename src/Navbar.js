import React from "react";
import "./navbar.css";
import { useLogincontext } from "./CreateContext";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  let { loginLogout, setLoginLogout } = useLogincontext();

  function LoginHandler() {
    if (loginLogout === "Login") {
      setLoginLogout("Logout");
    } else {
      setLoginLogout("Login");
    }
  }
  return (
    <div className="nav">
      <div className="left-nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) => {
                return isActive ? "red" : "blue";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) => {
                return isActive ? "red" : "blue";
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) => {
                return isActive ? "red" : "blue";
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) => {
                return isActive ? "red" : "blue";
              }}
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <button onClick={LoginHandler}>{loginLogout}</button>
      </div>
    </div>
  );
};

export default Nav;
