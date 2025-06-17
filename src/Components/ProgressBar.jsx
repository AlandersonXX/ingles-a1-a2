import React from "react";
import { useLocation } from "react-router-dom";

const lessons = ["/lesson1", "/lesson2", "/lesson3", "/lesson4", "/lesson5", "/lesson6"];

function ProgressBar() {
  const location = useLocation();
  const currentIndex = lessons.indexOf(location.pathname);
  const progress = ((currentIndex + 1) / lessons.length) * 100;

  return (
    <div style={{ margin: "10px 0" }}>
      <p>Progresso: {currentIndex + 1} de {lessons.length} lições</p>
      <div style={{ background: "#ccc", height: "10px", borderRadius: "5px" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "10px",
            background: "#4caf50",
            borderRadius: "5px",
            transition: "width 0.5s"
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
