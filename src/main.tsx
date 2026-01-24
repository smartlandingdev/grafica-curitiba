import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-TLZ5PW2R",
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
