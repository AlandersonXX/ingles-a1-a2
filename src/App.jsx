// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";

import Lesson1 from "./Lessons/Lesson1";
import Lesson2 from "./Lessons/Lesson2";
import Lesson3 from "./Lessons/Lesson3";
import Lesson4 from "./Lessons/Lesson4";
import Lesson5 from "./Lessons/Lesson5";
import Lesson6 from "./Lessons/Lesson6";
import Lesson7 from "./Lessons/Lesson7";
import Lesson8 from "./Lessons/Lesson8";
import Lesson9 from "./Lessons/Lesson9";
import Lesson10 from "./Lessons/Lesson10";
import Lesson11 from "./Lessons/Lesson11";
import Lesson12 from "./Lessons/Lesson12";
import Lesson13 from "./Lessons/Lesson13";
import Lesson14 from "./Lessons/Lesson14";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Lesson1 />} />
          <Route path="/lesson1" element={<Lesson1 />} />
          <Route path="/lesson2" element={<Lesson2 />} />
          <Route path="/lesson3" element={<Lesson3 />} />
          <Route path="/lesson4" element={<Lesson4 />} />
          <Route path="/lesson5" element={<Lesson5 />} />
          <Route path="/lesson6" element={<Lesson6 />} />
          <Route path="/lesson7" element={<Lesson7 />} />
          <Route path="/lesson8" element={<Lesson8 />} />
          <Route path="/lesson9" element={<Lesson9 />} />
          <Route path="/lesson10" element={<Lesson10 />} />
          <Route path="/lesson11" element={<Lesson11 />} />
          <Route path="/lesson12" element={<Lesson12 />} />
          <Route path="/lesson13" element={<Lesson13 />} />
          <Route path="/lesson14" element={<Lesson14 />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;

