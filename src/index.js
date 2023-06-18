import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "./pages/Intro";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Work from "./pages/Work";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import SidebarPage from "./pages/SidebarPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/sidebar",
    element: <SidebarPage />,
  },
  {
    path: "/about_me",
    element: <AboutMe />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
