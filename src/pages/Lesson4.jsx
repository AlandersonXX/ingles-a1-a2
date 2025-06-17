import React from "react";

function Lesson4() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Lição 4: Números e Idade</h1>
      <p><strong>Objetivo:</strong> Aprender os números de 1 a 20 em inglês e como perguntar e dizer a idade de forma simples.</p>

      <h2>📚 Vocabulário Essencial</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}>
        <thead>
          <tr>
            <th style={td}>Inglês</th>
            <th style={td}>Português</th>
            <th style={td}>Pronúncia IPA</th>
            <th style={td}>Pronúncia BR</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={td}>One</td><td style={td}>Um</td><td style={td}>/wʌn/</td><td style={td}>uãn</td></tr>
          <tr><td style={td}>Two</td><td style={td}>Dois</td><td style={td}>/tuː/</td><td style={td}>tchu</td></tr>
          <tr><td style={td}>Three</td><td style={td}>Três</td><td style={td}>/θriː/</td><td style={td}>thrí</td></tr>
          <tr><td style={td}>Four</td><td style={td}>Quatro</td><td style={td}>/fɔːr/</td><td style={td}>fór</td></tr>
          <tr><td style={td}>Five</td><td style={td}>Cinco</td><td style={td}>/faɪv/</td><td style={td}>faiv</td></tr>
          <tr><td style={td}>Ten</td><td style={td}>Dez</td><td style={td}>/ten/</td><td style={td}>tén</td></tr>
          <tr><td style={td}>Fifteen</td><td style={td}>Quinze</td><td style={td}>/ˌfɪfˈtiːn/</td><td style={td}>fiftín</td></tr>
          <tr><td style={td}>Twenty</td><td style={td}>Vinte</td><td style={td}>/ˈtwenti/</td><td style={td}>tuênti</td></tr>
          <tr><td style={td}>How old are you?</td><td style={td}>Quantos anos você tem?</td><td style={td}>/haʊ oʊld ɑːr juː/</td><td style={td}>rau ould ar iú</td></tr>
          <tr><td style={td}>I am 20 years old</td><td style={td}>Eu tenho 20 anos</td><td style={td}>/aɪ æm ˈtwenti jɪrz oʊld/</td><td style={td}>ai ém tuênti iêrz ould</td></tr>
        </tbody>
      </table>

      <h2>🗣️ Frases Práticas</h2>
      <ul>
        <li><strong>How old are you?</strong> → Quantos anos você tem?</li>
        <li><strong>I am twenty years old.</strong> → Eu tenho vinte anos.</li>
        <li><strong>He is fifteen years old.</strong> → Ele tem quinze anos.</li>
        <li><strong>She is ten.</strong> → Ela tem dez anos.</li>
      </ul>

      <h2>🔁 Atividades de Fixação</h2>
      <p><strong>1. Complete (em inglês):</strong></p>
      <ul>
        <li>I am ______ years old.</li>
        <li>How ______ are you?</li>
        <li>She is ______.</li>
      </ul>

      <p><strong>2. Traduza:</strong></p>
      <ul>
        <li>Quantos anos ele tem?</li>
        <li>Eu tenho treze anos.</li>
        <li>Ela tem vinte anos.</li>
      </ul>

      <h2>🎧 Áudio (em breve)</h2>
      <p>Em breve você poderá escutar todos os vocabulários e frases com pronúncia gerada por IA.</p>

      <h2>🧩 Desafio do Dia</h2>
      <p>Grave um áudio (ou leia em voz alta) com a seguinte frase:</p>
      <p><em>“Hi! My name is [seu nome]. I am [sua idade] years old.”</em></p>

      <h2>🔁 Revisão Agendada</h2>
      <p>Revisar essa lição daqui a <strong>2 dias</strong>. Treine os números em voz alta e pergunte a idade de alguém em inglês.</p>
    </div>
  );
}

const td = {
  border: "1px solid #ccc",
  padding: "0.5rem",
  textAlign: "left",
};

export default Lesson4;

