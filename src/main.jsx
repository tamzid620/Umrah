import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import UserUmrahPackages from "./Components/Pages/UserUmrahPackages/UserUmrahPackages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // user section --------------------
      {
        path: "/umrah-packages",
        element: <UserUmrahPackages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
