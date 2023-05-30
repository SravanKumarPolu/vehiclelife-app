import React from "react";
import { BsPersonCircle } from 'react-icons/bs';
import { Link,NavLink } from "react-router-dom";

export default function Header() {
  
  return (
<header>

  {/* <Link  className="site-logo"to="/">#VANSLIFE</Link>
  <nav>
  <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/vans">Vans</Link>
    <Link to="/host">Host</Link>
  </nav> */}
 
      <Link className="site-logo" to="/" >
        #VANLIFE
      </Link>
      <nav>
      <NavLink to="/about"
        className={({isActive})=>isActive? "active-link" : null}
        >About </NavLink>
          <NavLink to="/" className={({isActive})=>isActive? "active-link" : null}
        >Home</NavLink>
      <NavLink  to="/host"
className={({isActive})=>isActive? "active-link" : null}>Host</NavLink>

        <NavLink to="/vans"
        className={({isActive})=>isActive? "active-link" : null}>Vans</NavLink>
      

      <Link to="login" className="login-link"> 
       
      <BsPersonCircle className="login-icon" size={22} />

       </Link>
      </nav>
    

    </header>
    

  )
  
}
