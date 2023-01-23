import React from "react";
import { NavLink } from "react-router-dom";

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
	return (
		<div className="Navbar">
			<div className="Navbar_main">
				<img src="starwars.png" alt="logo" width="350px" height="150px" />
			</div>
			<nav className="Navbar_nav">
				{pages.map((page) => (
					<NavLink
						className={({ isActive }) =>
							`Navbar_link ${isActive && "Navbar_link_active"}`
						}
						to={page.to}
					>
						{page.label}
					</NavLink>
				))}
			</nav>
		</div>
	);
}

export default Navbar;
