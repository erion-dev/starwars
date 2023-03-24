import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../UserContextProvider";
import logo from "./starwars.png";
import "./Navbar.css";

const pages = [
	{
		label: "Home",
		to: "/",
	},
	{
		label: "Starships",
		to: "/starships",
	},

	{
		label: "Characters",
		to: "/characters",
	},
	{
		label: "Planets",
		to: "/planets",
	},
];

function Navbar() {
	const authContext = useUserContext();
	return (
		<div className="Navbar">
			<div className="Navbar_main">
				<img src={logo} alt="logo" width="350px" height="150px" />
			</div>
			<nav className="Navbar_nav">
				{authContext.user.username ? (
					pages.map((page) => (
						<NavLink
							className={({ isActive }) =>
								`Navbar_link ${isActive && "Navbar_link_active"}`
							}
							to={page.to}
						>
							{page.label}
						</NavLink>
					))
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
