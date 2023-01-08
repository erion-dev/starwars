import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Newsblog from "./pages/News+blog";
import Series from "./pages/Series";
import Community from "./pages/Community";
import Home from "./pages/Home/Home";

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
        path: "newsblog",
        element: <Newsblog />,
      },
      {
        path: "series",
        element: <Series />,
      },
      {
        path: "community",
        element: <Community />,
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
