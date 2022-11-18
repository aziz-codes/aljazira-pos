import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ItemsContextProvider } from "./context/ItemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ItemsContextProvider>
    <App />
  </ItemsContextProvider>
);
