import React from "react";

function Lesson5() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Lição 5: Cores</h1>
      <p><strong>Objetivo:</strong> Aprender o nome das principais cores em inglês e como usá-las para descrever objetos.</p>

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
          <tr><td style={td}>Red</td><td style={td}>Vermelho</td><td style={td}>/red/</td><td style={td}>réd</td></tr>
          <tr><td style={td}>Blue</td><td style={td}>Azul</td><td style={td}>/bluː/</td><td style={td}>blú</td></tr>
          <tr><td style={td}>Green</td><td style={td}>Verde</td><td style={td}>/ɡriːn/</td><td style={td}>grín</td></tr>
          <tr><td style={td}>Yellow</td><td style={td}>Amarelo</td><td style={td}>/ˈjel.oʊ/</td><td style={td}>iéllou</td></tr>
          <tr><td style={td}>Black</td><td style={td}>Preto</td><td style={td}>/blæk/</td><td style={td}>blék</td></tr>
          <tr><td style={td}>White</td><td style={td}>Branco</td><td style={td}>/waɪt/</td><td style={td}>uáit</td></tr>
          <tr><td style={td}>Pink</td><td style={td}>Rosa</td><td style={td}>/pɪŋk/</td><td style={td}>pínk</td></tr>
          <tr><td style={td}>Orange</td><td style={td}>Laranja</td><td style={td}>/ˈɔː.rɪndʒ/</td><td style={td}>órandj</td></tr>
        </tbody>
      </table>

      <h2>🗣️ Frases Práticas</h2>
      <ul>
        <li><strong>This is a red apple.</strong> → Esta é uma maçã vermelha.</li>
        <li><strong>The car is black.</strong> → O carro é preto.</li>
        <li><strong>My shirt is blue.</strong> → Minha camisa é azul.</li>
        <li><strong>I like green and white.</strong> → Eu gosto de verde e branco.</li>
      </ul>

      <h2>🔁 Atividades de Fixação</h2>
      <p><strong>1. Complete (em inglês):</strong></p>
      <ul>
        <li>This is a ______ banana.</li>
        <li>My favorite color is ______.</li>
        <li>The sky is ______.</li>
      </ul>

      <p><strong>2. Traduza:</strong></p>
      <ul>
        <li>Eu gosto da cor rosa.</li>
        <li>Esta é uma maçã verde.</li>
        <li>O carro é branco.</li>
      </ul>

      <h2>🎧 Áudio (em breve)</h2>
      <p>Logo você poderá ouvir a pronúncia de todas as cores com ajuda da inteligência artificial.</p>

      <h2>🧩 Desafio do Dia</h2>
      <p>Escolha três objetos ao seu redor e diga suas cores em inglês. Exemplo:</p>
      <p><em>“This is a blue pen. That is a red book. I have a black bag.”</em></p>

      <h2>🔁 Revisão Agendada</h2>
      <p>Revisar essa lição daqui a <strong>2 dias</strong>. Tente descrever objetos do seu dia a dia usando as cores em inglês.</p>
    </div>
  );
}

const td = {
  border: "1px solid #ccc",
  padding: "0.5rem",
  textAlign: "left",
};

export default Lesson5;
