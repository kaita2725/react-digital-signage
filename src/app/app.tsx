import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import Signage from "../pages/Signage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Signage />
  </StrictMode>,
);
