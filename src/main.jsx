import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // se tiver mesmo o arquivo, senão pode remover

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
