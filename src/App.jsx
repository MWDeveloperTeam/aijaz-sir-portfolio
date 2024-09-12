import React from "react";
import "./app.css";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Layout from "./components/Layout";
import Work from "./pages/work/Work";

const App = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "work",
          element: <Work />,
        },
      ],
    },
  ]);
  return elements;
};

export default App;
