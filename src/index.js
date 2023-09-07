import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Camera from "./components/media/camera/Camera";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/media",
    element: <Camera />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.render(<App />, document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
