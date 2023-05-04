import React from "react";
import { Link,NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle={
    texDecoration: "none",
  fontWeight: "bold",
  color:"red"
  }
  return (
    <header>
      <Link className="site-logo" to="/" >
        #VANLIFE
      </Link>
      <nav>
        <NavLink to="/" className={({isActive})=>isActive? "active-link" : null}
        >Home</NavLink>
        <NavLink to="/about"
        className={({isActive})=>isActive? "active-link" : null}
        >About </NavLink>
        <NavLink to="/vans"
        className={({isActive})=>isActive? "active-link" : null}>Vans</NavLink>
        <NavLink  to="/host"
        style ={({isActive})=>isActive? activeStyle : null}>Host</NavLink>
      </nav>
    </header>
  );
}
