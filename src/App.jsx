import { useState } from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
