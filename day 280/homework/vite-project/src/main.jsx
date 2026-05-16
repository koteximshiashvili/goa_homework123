import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import Categories from "./pages/Categories";
import "./index.css";
import CodeTester from "./pages/CodeTester";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/notes",
    element: (
      <Layout>
        <Notes />
      </Layout>
    ),
  },
  {
    path: "/create",
    element: (
      <Layout>
        <CreateNote />
      </Layout>
    ),
  },
  {
    path: "/categories",
    element: (
      <Layout>
        <Categories />
      </Layout>
    ),
  },
  {
    path: "/codetester",
    element: (
      <Layout>
        <CodeTester />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);