import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// ----------------------------------------------------------
import { DataProvider } from "./context/DataContext.jsx";
import { router } from "./routes/AllRoutes.jsx";

// CSS
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
