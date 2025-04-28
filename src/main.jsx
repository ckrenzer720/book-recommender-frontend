import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles/index.css";
import AppRouter from "./router/AppRouter";
import "./styles/tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
