import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./pages/popup/Popup";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);