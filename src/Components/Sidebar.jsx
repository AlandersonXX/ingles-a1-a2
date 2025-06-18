// Components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const modules = [
  {
    title: "Fundamentos de Inglês",
    lessons: [
      { path: "/lesson1", title: "Lição 1: Apresentações" },
      { path: "/lesson2", title: "Lição 2: Saudações" },
      { path: "/lesson3", title: "Lição 3: Números e Datas" },
      { path: "/lesson4", title: "Lição 4: Cores e Objetos" },
      { path: "/lesson5", title: "Lição 5: Verbos Básicos" },
    ],
  },
  {
    title: "Família e Pessoas",
    lessons: [
      { path: "/lesson6", title: "Lição 6: Família" },
      { id: "Lesson7", title: "Lição 7: Membros da Família", path: "/lesson7" },
      { path: "/lesson8", title: "Lição 8: Casa e Ambiente" },
      { path: "/lesson9", title: "Lição 9: Objetos e Itens do Lar" },
      { path: "/lesson10", title: "Lição 10: Cores e Adjetivos Descritivos" },
      
    ],
  },
  {
  title: "Rotina e Vida Diária",
  lessons: [
    { path: "/lesson11", title: "Lição 11: Verbos no Presente Simples" },
    { path: "/lesson12", title: "Lição 12: Atividades Diárias" },
    { path: "/lesson13", title: "Lição 13: Horários e Rotinas" },
    { path: "/lesson14", title: "Lição 14: Perguntas e Respostas Básicas" },

    ],
  },
];


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Curso de Inglês</h2>
      {modules.map((module, index) => (
        <div key={index} className="module">
          <h3 className="module-title">{module.title}</h3>
          <ul className="lesson-list">
            {module.lessons.map((lesson, i) => (
              <li key={i}>
                <NavLink
                  to={lesson.path}
                  className={({ isActive }) =>
                    isActive ? "lesson-link active" : "lesson-link"
                  }
                >
                  {lesson.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* CSS embutido */}
      <style>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background-color: #1e1e2f;
          color: #ffffff;
          padding: 20px;
          box-sizing: border-box;
          overflow-y: auto;
          position: fixed;
        }

        .logo {
          font-size: 1.5rem;
          margin-bottom: 20px;
          font-weight: bold;
          text-align: center;
        }

        .module-title {
          font-size: 1rem;
          margin-top: 20px;
          margin-bottom: 8px;
          font-weight: 600;
          border-bottom: 1px solid #444;
          padding-bottom: 5px;
        }

        .lesson-list {
          list-style: none;
          padding-left: 10px;
        }

        .lesson-link {
          display: block;
          padding: 6px 12px;
          margin-bottom: 6px;
          text-decoration: none;
          color: #ddd;
          border-radius: 4px;
          transition: background 0.3s;
        }

        .lesson-link:hover {
          background: #333c4a;
          color: white;
        }

        .lesson-link.active {
          background-color: #4caf50;
          color: white;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .sidebar {
            position: relative;
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </aside>
  );
}

