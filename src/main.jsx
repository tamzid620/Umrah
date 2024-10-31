import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import UserUmrahPackages from "./Components/Pages/UserUmrahPackages/UserUmrahPackages";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";

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
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
