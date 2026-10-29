import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@useorbits/analytics/react";
import { SpeedInsights } from "@useorbits/speed-insights/react";
import "./orbit.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
);
