import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Camera from "./components/media/camera/Camera";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/blog",
    element: <Camera />,
  },
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
