import React from "react";

function Lesson7() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Lição 7: Membros da Família</h1>
      <p><strong>Objetivo:</strong> Aprender os principais termos para descrever membros da família em inglês.</p>

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
          <tr><td style={td}>Father</td><td style={td}>Pai</td><td style={td}>/ˈfɑː.ðər/ (fá-der)</td></tr>
          <tr><td style={td}>Mother</td><td style={td}>Mãe</td><td style={td}>/ˈmʌ.ðər/ (mâ-der)</td></tr>
          <tr><td style={td}>Son</td><td style={td}>Filho</td><td style={td}>/sʌn/ (sân)</td></tr>
          <tr><td style={td}>Daughter</td><td style={td}>Filha</td><td style={td}>/ˈdɔː.tər/ (dó-ter)</td></tr>
          <tr><td style={td}>Brother</td><td style={td}>Irmão</td><td style={td}>/ˈbrʌ.ðər/ (brâ-der)</td></tr>
          <tr><td style={td}>Sister</td><td style={td}>Irmã</td><td style={td}>/ˈsɪs.tər/ (sís-ter)</td></tr>
          <tr><td style={td}>Grandfather</td><td style={td}>Avô</td><td style={td}>/ˈɡræn.fɑː.ðər/ (grén-fá-der)</td></tr>
          <tr><td style={td}>Grandmother</td><td style={td}>Avó</td><td style={td}>/ˈɡræn.mʌ.ðər/ (grén-mâ-der)</td></tr>
          <tr><td style={td}>Uncle</td><td style={td}>Tio</td><td style={td}>/ˈʌŋ.kəl/ (ân-kol)</td></tr>
          <tr><td style={td}>Aunt</td><td style={td}>Tia</td><td style={td}>/ænt/ ou /ɑːnt/ (ênt ou ánt)</td></tr>
          <tr><td style={td}>Cousin</td><td style={td}>Primo(a)</td><td style={td}>/ˈkʌ.zən/ (câ-zan)</td></tr>
        </tbody>
      </table>

      <h2>🗣️ Frases Práticas</h2>
      <ul>
        <li><strong>This is my mother.</strong> → Esta é minha mãe.</li>
        <li><strong>My father is a doctor.</strong> → Meu pai é médico.</li>
        <li><strong>I have two brothers and one sister.</strong> → Eu tenho dois irmãos e uma irmã.</li>
        <li><strong>Her uncle lives in Brazil.</strong> → O tio dela mora no Brasil.</li>
        <li><strong>My cousin is very funny.</strong> → Meu/minha primo(a) é muito engraçado(a).</li>
      </ul>

      <h2>🔁 Atividades de Fixação</h2>
      <p><strong>1. Complete:</strong></p>
      <ul>
        <li>This is my __________ (mãe).</li>
        <li>I have one __________ (irmão) and one __________ (irmã).</li>
        <li>My __________ (tia) is very kind.</li>
      </ul>

      <p><strong>2. Traduza para o inglês:</strong></p>
      <ul>
        <li>Minha avó mora em São Paulo.</li>
        <li>Eu tenho dois primos e uma prima.</li>
        <li>Meu pai trabalha em um hospital.</li>
      </ul>

      <h2>🎧 Áudio (em breve)</h2>
      <p>A função de áudio com IA será adicionada em breve.</p>

      <h2>🧩 Desafio do Dia</h2>
      <p>Apresente os membros da sua família em inglês. Exemplo:</p>
      <p><em>“Hi! My name is Alanderson. I have one sister and two brothers. My father is a teacher and my mother is a nurse.”</em></p>

      <h2>🔁 Revisão Agendada</h2>
      <p>Revise esta lição em <strong>3 dias</strong>. Tente descrever sua família em voz alta, usando os termos aprendidos.</p>
    </div>
  );
}

const td = {
  border: "1px solid #ccc",
  padding: "0.5rem",
};

export default Lesson7;

