import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Starships from "./pages/Starships/Starships";
import Character from "./pages/Character/Character";
import Planets from "./pages/Planets/Planets";
import Home from "./pages/Home/Home";
import Film from "./pages/Home-card/Film";
import Login from "./pages/Login/Login";
import App from "./App";
import { useUserContext } from "./UserContextProvider";
import Signup from "./pages/Login/Signup";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "starships",
				element: <Starships />,
			},
			{
				path: "characters",
				element: <Character />,
			},
			{
				path: "planets",
				element: <Planets />,
			},

			{
				path: "film/:id",
				element: <Film />,
			},
		],
	},
]);
const publicRoutes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <Signup />,
			},
		],
	},
]);

export const PublicRoutes = () => {
	const authContext = useUserContext();
	return (
		<RouterProvider
			router={authContext.user?.username ? router : publicRoutes}
		/>
	);
};
