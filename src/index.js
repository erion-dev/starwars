import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Starships from "./pages/Starships/Starships";
import Character from "./pages/Character/Character";
import Planets from "./pages/Planets/Planets";
import Home from "./pages/Home/Home";
import Film from "./pages/Home-card/Film";

const root = ReactDOM.createRoot(document.getElementById("root"));

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
        path: "character",
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

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
