import React from "react";

function Lesson1() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Lição 1: Saudações Básicas</h1>
      <p><strong>Objetivo:</strong> Aprender a cumprimentar pessoas em diferentes momentos do dia.</p>

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
          <tr><td style={td}>Hello</td><td style={td}>Olá</td><td style={td}>/həˈləʊ/</td><td style={td}>relôu</td></tr>
          <tr><td style={td}>Hi</td><td style={td}>Oi</td><td style={td}>/haɪ/</td><td style={td}>rai</td></tr>
          <tr><td style={td}>Good morning</td><td style={td}>Bom dia</td><td style={td}>/ɡʊd ˈmɔːrnɪŋ/</td><td style={td}>gud mornin</td></tr>
          <tr><td style={td}>Good afternoon</td><td style={td}>Boa tarde</td><td style={td}>/ɡʊd ˌæftərˈnuːn/</td><td style={td}>gud afternun</td></tr>
          <tr><td style={td}>Good night</td><td style={td}>Boa noite</td><td style={td}>/ɡʊd naɪt/</td><td style={td}>gud nait</td></tr>
          <tr><td style={td}>How are you?</td><td style={td}>Como vai você?</td><td style={td}>/haʊ ɑːr juː/</td><td style={td}>rau ar iú</td></tr>
          <tr><td style={td}>I’m fine, thank you</td><td style={td}>Estou bem, obrigado(a)</td><td style={td}>/aɪm faɪn θæŋk juː/</td><td style={td}>aim fain, fenk iú</td></tr>
        </tbody>
      </table>

      <h2>🗣️ Frases Práticas</h2>
      <ul>
        <li><strong>Hello! How are you?</strong> → Olá! Como vai você?</li>
        <li><strong>Good morning! I’m fine, thank you.</strong> → Bom dia! Estou bem, obrigado(a).</li>
        <li><strong>Good night!</strong> → Boa noite!</li>
        <li><strong>Hi, Alanderson!</strong> → Oi, Alanderson!</li>
      </ul>

      <h2>🔁 Atividades de Fixação</h2>
      <p><strong>1. Complete (em inglês):</strong></p>
      <ul>
        <li>Good _______!</li>
        <li>_______! How are you?</li>
        <li>I’m ________, thank you.</li>
      </ul>

      <p><strong>2. Traduza para o inglês:</strong></p>
      <ul>
        <li>Oi, João!</li>
        <li>Boa tarde!</li>
        <li>Como vai você?</li>
      </ul>

      <h2>🎧 Áudio (em breve)</h2>
      <p>A função de áudio com IA será adicionada em breve para ajudar na pronúncia.</p>

      <h2>🧩 Desafio do Dia</h2>
      <p>Grave um áudio (ou leia em voz alta) com a seguinte frase:</p>
      <p><em>“Hi! Good morning! How are you? I’m fine, thank you.”</em></p>

      <h2>🔁 Revisão Agendada</h2>
      <p>Revisar essa lição daqui a <strong>2 dias</strong>. Na revisão, tente usar as expressões com diferentes pessoas do seu convívio.</p>
    </div>
  );
}

const td = {
  border: "1px solid #ccc",
  padding: "0.5rem",
  textAlign: "left",
};

export default Lesson1;



