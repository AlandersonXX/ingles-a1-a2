import React from "react";
import lessons from "../data/lessons";

export default function Lesson1() {
  const lesson = lessons.find(l => l.id === 1);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{lesson.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
    </div>
  );
}
