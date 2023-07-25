import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BsPersonCircle } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedin") === "true"
  );
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
    setIsLoggedIn(false);
  }

  // State to control the collapsible menu
  const [showMenu, setShowMenu] = useState(false);

  // Toggle the state to show/hide the menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        {/* Collapsible menu icon */}
        <input
          type="checkbox"
          id="check"
          className="menu-icon"
          checked={showMenu}
          onChange={toggleMenu}
        />
        <label htmlFor="check" className="menu-icon-label">
          <i>
            {" "}
            <FontAwesomeIcon icon={faBars} />
          </i>
        </label>
        {/* Navigation links */}
        <div className={`nav-links ${showMenu ? "show" : ""}`}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Vans
          </NavLink>
          {isLoggedIn && (
            <NavLink to="login">
              <button onClick={fakeLogOut} className="logout">
                Logout
              </button>
            </NavLink>
          )}
        </div>
        <Link to="login" className="login-link">
          <BsPersonCircle className="login-icon" size={22} />
        </Link>
      </nav>
    </header>
  );
}
