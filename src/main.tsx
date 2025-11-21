import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";

// Use Vite's BASE_URL so the router works both locally ("/") and when
// deployed to a subpath (e.g. "/express-course/").
const base = import.meta.env.BASE_URL || "/";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
