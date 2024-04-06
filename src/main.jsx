import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes.jsx";
import Root from "./components/Root/Root.jsx";
import AuthContextProvider from "./components/Provider/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}>
        <Root></Root>
      </RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
