import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Favorites } from "./pages";
import { NavBar } from "./components";

function App() {
  const movieNumber = 1;
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
