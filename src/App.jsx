import React, { Suspense } from "react";
import "./app.css";
import { useRoutes } from "react-router-dom";
// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
import Layout from "./components/Layout";
// import Work from "./pages/work/Work";
import PageNotFound from "./pages/404/404";

const ContactLazy = React.lazy(() => import("./pages/contact/Contact"));
const HomeLazy = React.lazy(() => import("./pages/home/Home"));
const AboutLazy = React.lazy(() => import("./pages/about/About"));
const WorkLazy = React.lazy(() => import("./pages/work/Work"));

const App = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={"loading..."}>
              <HomeLazy />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={"loading..."}>
              <AboutLazy />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={"loading..."}>
              <ContactLazy />
            </Suspense>
          ),
        },
        {
          path: "/work",
          element: (
            <Suspense fallback={"loading..."}>
              <WorkLazy />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
  return elements;
};

export default App;
