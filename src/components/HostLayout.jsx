import React from "react";
import { Link, NavLink,Outlet } from "react-router-dom";

export default function HostLayout(){
    const activeStyle={
        texDecoration: "none",
      fontWeight: "bold",
      color:"rgb(226, 43, 147)"
      }
    return(
        <>
            <nav className="host-nav">


            {/* <Link to="/host">Dashboard</Link>
            <Link to="/host/income">income</Link>
            <Link to="/host/reviews">Reviews</Link> */}
        <NavLink to="." end
        style={({isActive})=>isActive? activeStyle : null}>Dashboard</NavLink>
        <NavLink  to="/host/income"
        style={({isActive})=>isActive? activeStyle : null}>Income </NavLink>
       
       <NavLink  to="/host/reviews"
        style={({isActive})=>isActive? activeStyle : null}>Reviews</NavLink>
         <NavLink  to="/host/vans"
        style={({isActive})=>isActive? activeStyle : null}>Vans</NavLink>
      </nav>
      <Outlet />
        </>

    )
}