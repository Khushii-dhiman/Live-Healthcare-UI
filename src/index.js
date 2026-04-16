import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";   // IMPORTANT: CSS yahin se load hoti hai

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
