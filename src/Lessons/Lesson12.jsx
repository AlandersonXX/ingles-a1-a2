import React from "react";

function Lesson12() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Lição 12: Atividades Diárias</h1>
      <p><strong>Objetivo:</strong> Ampliar o vocabulário relacionado à rotina diária e praticar a construção de frases com verbos no presente simples.</p>

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
          <tr><td style={td}>Wake up</td><td style={td}>Acordar</td><td style={td}>/weɪk ʌp/ (ueik âp)</td></tr>
          <tr><td style={td}>Take a shower</td><td style={td}>Tomar banho</td><td style={td}>/teɪk ə ˈʃaʊər/ (teik a xáuer)</td></tr>
          <tr><td style={td}>Get dressed</td><td style={td}>Se vestir</td><td style={td}>/ɡɛt drɛst/ (guét drést)</td></tr>
          <tr><td style={td}>Have breakfast</td><td style={td}>Tomar café da manhã</td><td style={td}>/hæv ˈbrɛk.fəst/ (rév brékfâst)</td></tr>
          <tr><td style={td}>Go to work</td><td style={td}>Ir para o trabalho</td><td style={td}>/ɡoʊ tu wɜrk/ (gou tu uârk)</td></tr>
          <tr><td style={td}>Have lunch</td><td style={td}>Almoçar</td><td style={td}>/hæv lʌntʃ/ (rév lântch)</td></tr>
          <tr><td style={td}>Go home</td><td style={td}>Ir para casa</td><td style={td}>/ɡoʊ hoʊm/ (gou roum)</td></tr>
          <tr><td style={td}>Have dinner</td><td style={td}>Jantar</td><td style={td}>/hæv ˈdɪn.ər/ (rév díner)</td></tr>
          <tr><td style={td}>Brush my teeth</td><td style={td}>Escovar os dentes</td><td style={td}>/brʌʃ maɪ tiːθ/ (brâsh mái títh)</td></tr>
          <tr><td style={td}>Go to bed</td><td style={td}>Ir dormir</td><td style={td}>/ɡoʊ tu bɛd/ (gou tu béd)</td></tr>
        </tbody>
      </table>

      <h2>🗣️ Frases Práticas</h2>
      <ul>
        <li><strong>I wake up at 7 AM.</strong> → Eu acordo às 7 da manhã.</li>
        <li><strong>She takes a shower every morning.</strong> → Ela toma banho toda manhã.</li>
        <li><strong>We have lunch at work.</strong> → Nós almoçamos no trabalho.</li>
        <li><strong>He goes to bed at 10 PM.</strong> → Ele vai dormir às 22h.</li>
        <li><strong>They get dressed after breakfast.</strong> → Eles se vestem depois do café da manhã.</li>
      </ul>

      <h2>🔁 Atividades de Fixação</h2>
      <p><strong>1. Complete:</strong></p>
      <ul>
        <li>I __________ at 6:30. (acordar)</li>
        <li>She __________ at 8 PM. (jantar)</li>
        <li>They __________ their teeth after dinner. (escovar)</li>
      </ul>

      <p><strong>2. Traduza para o inglês:</strong></p>
      <ul>
        <li>Eu vou para casa às 6 da tarde.</li>
        <li>Nós jantamos às 7.</li>
        <li>Ela toma banho todas as manhãs.</li>
      </ul>

      <h2>🎧 Áudio (em breve)</h2>
      <p>A função de áudio com IA será adicionada em breve.</p>

      <h2>🧩 Desafio do Dia</h2>
      <p>Escreva 5 frases sobre sua rotina diária usando os verbos desta lição. Exemplo: I wake up at 7 AM.</p>

      <h2>🔁 Revisão Agendada</h2>
      <p>Revise esta lição em <strong>2 dias</strong>. Use o vocabulário para falar sobre sua rotina real.</p>
    </div>
  );
}

const td = {
  border: "1px solid #ccc",
  padding: "0.5rem",
};

export default Lesson12;
