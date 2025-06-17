import ProgressBar from "./Components/ProgressBar";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Lesson1 from "./pages/Lesson1";
import Lesson2 from "./pages/Lesson2";
import Lesson3 from "./pages/Lesson3";
import Lesson4 from "./pages/Lesson4";
import Lesson5 from "./pages/Lesson5";
import Lesson6 from "./pages/Lesson6";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Curso de Inglês do Alanderson A1</h1>
      <ProgressBar />

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/lesson1" style={{ marginRight: "10px" }}>Lição 1</Link>
        <Link to="/lesson2" style={{ marginRight: "10px" }}>Lição 2</Link>
        <Link to="/lesson3" style={{ marginRight: "10px" }}>Lição 3</Link>
        <Link to="/lesson4" style={{ marginRight: "10px" }}>Lição 4</Link>
        <Link to="/lesson5" style={{ marginRight: "10px" }}>Lição 5</Link>
        <Link to="/lesson6" style={{ marginRight: "10px" }}>Lição 6</Link>
      </nav>

      <Routes>
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        <Route path="/lesson3" element={<Lesson3 />} />
        <Route path="/lesson4" element={<Lesson4 />} />
        <Route path="/lesson5" element={<Lesson5 />} />
        <Route path="/lesson6" element={<Lesson6 />} />
        <Route path="*" element={<p>Selecione uma lição para começar.</p>} />
      </Routes>
    </div>
  );
}

export default App;



