import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Navigation from "./navigation/Navigation";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation />
  </StrictMode>
);
