// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Style
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

document.getElementById("root").className = "body-layout";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
