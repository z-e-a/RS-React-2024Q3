import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.scss";
import ErrorBoundary from "./app/ErrorBoundary.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="search" replace />,
    errorElement: <NotFound />,
  },
  {
    path: "search/*",
    element: <App />,
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
