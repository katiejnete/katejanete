import React, { useState, StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NightModeContext from "./context/NightModeContext.jsx";
import App from "./App.jsx";
import "./stylesheets/index.css";

const Root = () => {
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    document.getElementById("root").className = nightMode ? "night" : "";
    document.body.className = nightMode ? "night" : "";
  }, [nightMode]);

  return (
    <StrictMode>
      <NightModeContext.Provider value={{ nightMode, setNightMode }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NightModeContext.Provider>
    </StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
