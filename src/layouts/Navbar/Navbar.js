import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_main">
        <img src="starwars.png" alt="logo" width="350px" height="150px" />
      </div>
      <nav className="Navbar_nav">
        <NavLink
          className={({ isActive }) =>
            `Navbar_link ${isActive && "Navbar_link_active"}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `Navbar_link ${isActive && "Navbar_link_active"}`
          }
          to="/newsblog"
        >
          News+Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `Navbar_link ${isActive && "Navbar_link_active"}`
          }
          to="/series"
        >
          Series
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `Navbar_link ${isActive && "Navbar_link_active"}`
          }
          to="/community"
        >
          Community
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
