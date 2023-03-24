import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../UserContextProvider";
import logo from "../Navbar/starwars.png";
import "./Navbar.css";

function Navbar() {
  const authContext = useUserContext();

  return (
    <div className="Navbar">
      <div className="Navbar_main">
        <img src={logo} alt="logo" width="350px" height="150px" />
      </div>
      <nav className="Navbar_nav">
        {authContext.user.username ? (
          <>
            {" "}
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
              to="/starships"
            >
              Starships
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `Navbar_link ${isActive && "Navbar_link_active"}`
              }
              to="/character"
            >
              Character
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `Navbar_link ${isActive && "Navbar_link_active"}`
              }
              to="/planets"
            >
              Planets
            </NavLink>
          </>
        ) : (
          <NavLink
            className={({ isActive }) =>
              `Navbar_link ${isActive && "Navbar_link_active"}`
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
