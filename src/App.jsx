import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Lesson1 from "./pages/Lesson1";
// importe outras lições que criar...

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/lesson1">Lição 1</Link>
        {/* Adicione links para outras lições */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson1" element={<Lesson1 />} />
        {/* Adicione rotas para outras lições */}
      </Routes>
    </Router>
  );
}

export default App;


