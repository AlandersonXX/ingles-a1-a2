
import { useState } from 'react';
import './App.css';

const weeks = [
  'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4',
  'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8',
  'Semana 9', 'Semana 10', 'Semana 11', 'Semana 12',
];

const initialProgress = weeks.reduce((acc, week) => {
  acc[week] = false;
  return acc;
}, {});

function App() {
  const [progress, setProgress] = useState(initialProgress);
  const [notes, setNotes] = useState('');

  const toggleWeek = (week) => {
    setProgress({ ...progress, [week]: !progress[week] });
  };

  const completed = Object.values(progress).filter(Boolean).length;

  return (
    <div className="container">
      <h1>Inglês para Alanderson: Do A1 ao A2</h1>
      <p>Plano de 12 semanas para sair do nível A1 com fluência básica</p>

      <div className="card">
        <h2>Progresso Semanal</h2>
        <ul>
          {weeks.map((week) => (
            <li key={week}>
              <span>{week}</span>
              <button onClick={() => toggleWeek(week)}>
                {progress[week] ? 'Concluído' : 'Marcar como feito'}
              </button>
            </li>
          ))}
        </ul>
        <p>{completed} de 12 semanas concluídas ({Math.round((completed / 12) * 100)}%)</p>
      </div>

      <div className="card">
        <h2>Minhas Anotações</h2>
        <textarea
          placeholder="Escreva aqui frases, vocabulário, dúvidas, etc."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
