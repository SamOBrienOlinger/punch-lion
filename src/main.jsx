import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/600.css";
import "@fontsource/archivo/700.css";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/permanent-marker/400.css";
import "./styles.css";

const assetUrl = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`;

document.documentElement.style.setProperty(
  "--paper-texture",
  `url("${assetUrl("paper-texture.webp")}")`,
);
document.documentElement.style.setProperty(
  "--ink-texture",
  `url("${assetUrl("ink-texture.webp")}")`,
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
