import React from "react";

function Lesson3() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Lição 3: Nacionalidades e Países</h1>
      <p><strong>Objetivo:</strong> Identificar nacionalidades e países, aprender a dizer de onde você é e perguntar de onde as pessoas são.</p>

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
          <tr><td style={td}>Brazilian</td><td style={td}>Brasileiro(a)</td><td style={td}>/brəˈzɪl.jən/</td><td style={td}>brâzíliãn</td></tr>
          <tr><td style={td}>American</td><td style={td}>Americano(a)</td><td style={td}>/əˈmer.ɪ.kən/</td><td style={td}>américan</td></tr>
          <tr><td style={td}>English</td><td style={td}>Inglês</td><td style={td}>/ˈɪŋ.ɡlɪʃ/</td><td style={td}>ínglish</td></tr>
          <tr><td style={td}>Canadian</td><td style={td}>Canadense</td><td style={td}>/kəˈneɪ.di.ən/</td><td style={td}>canêidian</td></tr>
          <tr><td style={td}>I am from Brazil</td><td style={td}>Eu sou do Brasil</td><td style={td}>/aɪ æm frəm brəˈzɪl/</td><td style={td}>ai ém frâm brâzíl</td></tr>
          <tr><td style={td}>Where are you from?</td><td style={td}>De onde você é?</td><td style={td}>/wer ɑːr ju frəm/</td><td style={td}>uéar ar iú frâm</td></tr>
        </tbody>
      </table>

      <h2>🗣️ Frases Práticas</h2>
      <ul>
        <li><strong>Where are you from?</strong> → De onde você é?</li>
        <li><strong>I am from Brazil.</strong> → Eu sou do Brasil.</li>
        <li><strong>She is American.</strong> → Ela é americana.</li>
        <li><strong>He is Canadian.</strong> → Ele é canadense.</li>
        <li><strong>They are Brazilian.</strong> → Eles são brasileiros.</li>
      </ul>

      <h2>🔁 Atividades de Fixação</h2>
      <p><strong>1. Complete (em inglês):</strong></p>
      <ul>
        <li>Where ______ you from?</li>
        <li>I ______ from Brazil.</li>
        <li>He ______ American.</li>
      </ul>

      <p><strong>2. Traduza:</strong></p>
      <ul>
        <li>Ela é brasileira.</li>
        <li>Eu sou do Canadá.</li>
        <li>De onde ele é?</li>
      </ul>

      <h2>🎧 Áudio (em breve)</h2>
      <p>A função de áudio com IA será adicionada em breve para te ajudar com a pronúncia.</p>

      <h2>🧩 Desafio do Dia</h2>
      <p>Grave um áudio (ou leia em voz alta) com a seguinte frase:</p>
      <p><em>“Hi! I’m from Brazil. Where are you from?”</em></p>

      <h2>🔁 Revisão Agendada</h2>
      <p>Revisar essa lição daqui a <strong>2 dias</strong>. Ao revisar, pratique com o nome de diferentes países e nacionalidades.</p>
    </div>
  );
}

const td = {
  border: "1px solid #ccc",
  padding: "0.5rem",
  textAlign: "left",
};

export default Lesson3;


