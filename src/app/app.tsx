import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import AppProvider from "./AppProvider";
import Router from "../routes/Router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>
  </StrictMode>,
);
