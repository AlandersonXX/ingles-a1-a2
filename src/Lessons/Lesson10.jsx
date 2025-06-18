import React from "react";

function Lesson10() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Lição 10: Cores e Adjetivos Descritivos</h1>
      <p><strong>Objetivo:</strong> Aprender as cores básicas em inglês e adjetivos comuns para descrever objetos.</p>

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
          <tr><td style={td}>Red</td><td style={td}>Vermelho</td><td style={td}>/rɛd/ (réd)</td></tr>
          <tr><td style={td}>Blue</td><td style={td}>Azul</td><td style={td}>/bluː/ (blú)</td></tr>
          <tr><td style={td}>Green</td><td style={td}>Verde</td><td style={td}>/ɡriːn/ (grín)</td></tr>
          <tr><td style={td}>Yellow</td><td style={td}>Amarelo</td><td style={td}>/ˈjɛl.oʊ/ (ié-lou)</td></tr>
          <tr><td style={td}>Black</td><td style={td}>Preto</td><td style={td}>/blæk/ (blék)</td></tr>
          <tr><td style={td}>White</td><td style={td}>Branco</td><td style={td}>/waɪt/ (uáit)</td></tr>
          <tr><td style={td}>Big</td><td style={td}>Grande</td><td style={td}>/bɪɡ/ (big)</td></tr>
          <tr><td style={td}>Small</td><td style={td}>Pequeno</td><td style={td}>/smɔːl/ (smól)</td></tr>
          <tr><td style={td}>Beautiful</td><td style={td}>Bonito(a)</td><td style={td}>/ˈbjuː.tɪ.fəl/ (biú-ti-fol)</td></tr>
          <tr><td style={td}>Old</td><td style={td}>Velho</td><td style={td}>/oʊld/ (ould)</td></tr>
          <tr><td style={td}>New</td><td style={td}>Novo</td><td style={td}>/nuː/ (nu)</td></tr>
        </tbody>
      </table>

      <h2>🗣️ Frases Práticas</h2>
      <ul>
        <li><strong>The house is big and white.</strong> → A casa é grande e branca.</li>
        <li><strong>I have a small red car.</strong> → Eu tenho um carro vermelho pequeno.</li>
        <li><strong>She wears a beautiful green dress.</strong> → Ela usa um vestido verde bonito.</li>
        <li><strong>This is an old black chair.</strong> → Esta é uma cadeira preta velha.</li>
        <li><strong>The new book is blue.</strong> → O livro novo é azul.</li>
      </ul>

      <h2>🔁 Atividades de Fixação</h2>
      <p><strong>1. Complete:</strong></p>
      <ul>
        <li>The car is __________ (vermelho).</li>
        <li>The house is __________ and __________ (grande e branca).</li>
        <li>She has a __________ dress (bonito).</li>
      </ul>

      <p><strong>2. Traduza para o inglês:</strong></p>
      <ul>
        <li>O carro é pequeno e azul.</li>
        <li>A cadeira é preta e velha.</li>
        <li>Eu tenho um vestido novo e bonito.</li>
      </ul>

      <h2>🎧 Áudio (em breve)</h2>
      <p>A função de áudio com IA será adicionada em breve.</p>

      <h2>🧩 Desafio do Dia</h2>
      <p>Descreva três objetos ao seu redor usando cores e adjetivos aprendidos.</p>

      <h2>🔁 Revisão Agendada</h2>
      <p>Revise esta lição em <strong>3 dias</strong>. Tente falar ou escrever frases usando cores e adjetivos.</p>
    </div>
  );
}

const td = {
  border: "1px solid #ccc",
  padding: "0.5rem",
};

export default Lesson10;
