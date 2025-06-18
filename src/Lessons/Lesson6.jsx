import React from "react";

function Lesson6() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Lição 6: Dias da Semana e Rotina</h1>
      <p><strong>Objetivo:</strong> Aprender os dias da semana e expressões comuns relacionadas à rotina diária.</p>

      <h2>📚 Vocabulário Essencial</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}>
        <thead>
          <tr>
            <th style={td}>Inglês</th>
            <th style={td}>Português</th>
            <th style={td}>Pronúncia</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={td}>Monday</td><td style={td}>Segunda-feira</td><td style={td}>/ˈmʌn.deɪ/ (mân-dei)</td></tr>
          <tr><td style={td}>Tuesday</td><td style={td}>Terça-feira</td><td style={td}>/ˈtjuːz.deɪ/ (tiúz-dei)</td></tr>
          <tr><td style={td}>Wednesday</td><td style={td}>Quarta-feira</td><td style={td}>/ˈwenz.deɪ/ (wênz-dei)</td></tr>
          <tr><td style={td}>Thursday</td><td style={td}>Quinta-feira</td><td style={td}>/ˈθɜːrz.deɪ/ (thârz-dei)</td></tr>
          <tr><td style={td}>Friday</td><td style={td}>Sexta-feira</td><td style={td}>/ˈfraɪ.deɪ/ (frai-dei)</td></tr>
          <tr><td style={td}>Saturday</td><td style={td}>Sábado</td><td style={td}>/ˈsæt.ə.deɪ/ (sá-ta-dei)</td></tr>
          <tr><td style={td}>Sunday</td><td style={td}>Domingo</td><td style={td}>/ˈsʌn.deɪ/ (sân-dei)</td></tr>
          <tr><td style={td}>Every day</td><td style={td}>Todo dia</td><td style={td}>/ˈev.ri deɪ/ (évri dei)</td></tr>
          <tr><td style={td}>On weekdays</td><td style={td}>Durante a semana</td><td style={td}>/ɒn ˈwiːk.deɪz/ (on uík-deiz)</td></tr>
          <tr><td style={td}>Weekend</td><td style={td}>Final de semana</td><td style={td}>/ˈwiːk.end/ (uík-end)</td></tr>
        </tbody>
      </table>

      <h2>🗣️ Frases Práticas</h2>
      <ul>
        <li><strong>I work on weekdays.</strong> → Eu trabalho durante a semana.</li>
        <li><strong>I rest on weekends.</strong> → Eu descanso nos fins de semana.</li>
        <li><strong>Today is Monday.</strong> → Hoje é segunda-feira.</li>
        <li><strong>I study English every day.</strong> → Eu estudo inglês todos os dias.</li>
        <li><strong>Do you work on Saturdays?</strong> → Você trabalha aos sábados?</li>
      </ul>

      <h2>🔁 Atividades de Fixação</h2>
      <p><strong>1. Complete:</strong></p>
      <ul>
        <li>Today is __________.</li>
        <li>I study English on __________ and __________.</li>
        <li>I work on __________.</li>
      </ul>

      <p><strong>2. Traduza para o inglês:</strong></p>
      <ul>
        <li>Hoje é quarta-feira.</li>
        <li>Eu trabalho durante a semana.</li>
        <li>Eu descanso no fim de semana.</li>
      </ul>

      <h2>🎧 Áudio (em breve)</h2>
      <p>A função de áudio com IA será adicionada em breve.</p>

      <h2>🧩 Desafio do Dia</h2>
      <p>Grave ou leia em voz alta a seguinte rotina:</p>
      <p><em>“Hi! I’m Alanderson. I study English every day. I work on weekdays and I rest on weekends.”</em></p>

      <h2>🔁 Revisão Agendada</h2>
      <p>Revise esta lição em <strong>3 dias</strong>. Escreva ou fale sobre sua rotina usando os dias da semana.</p>
    </div>
  );
}

const td = {
  border: "1px solid #ccc",
  padding: "0.5rem",
};

export default Lesson6;
