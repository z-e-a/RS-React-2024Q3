import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Uncontrolled from "./pages/Uncontrolled/index.tsx";
import Controlled from "./pages/Controlled/index.tsx";
import ErrorBoundary from "./app/ErrorBoundary.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/uncontrolled",
    element: <Uncontrolled />,
    errorElement: <NotFound />,
  },
  {
    path: "/controlled",
    element: <Controlled />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
);
