import React from "react";

function Lesson2() {
  const td = {
    border: "1px solid #ccc",
    padding: "0.5rem",
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Lição 2: Apresentações Pessoais</h1>
      <p>
        <strong>Objetivo:</strong> Aprender a se apresentar e perguntar o nome de
        outras pessoas. Treinar estrutura gramatical básica com o verbo “to be”.
      </p>

      <h2>📚 Vocabulário Essencial</h2>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}
      >
        <thead>
          <tr>
            <th style={td}>Inglês</th>
            <th style={td}>Português</th>
            <th style={td}>Pronúncia (IPA)</th>
            <th style={td}>Pronúncia Simplificada</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>My name is...</td>
            <td style={td}>Meu nome é...</td>
            <td style={td}>/maɪ neɪm ɪz/</td>
            <td style={td}>máɪ nêim íz</td>
          </tr>
          <tr>
            <td style={td}>What is your name?</td>
            <td style={td}>Qual é o seu nome?</td>
            <td style={td}>/wʌt ɪz jʊr neɪm/</td>
            <td style={td}>uót íz iór nêim?</td>
          </tr>
          <tr>
            <td style={td}>Nice to meet you</td>
            <td style={td}>Prazer em conhecê-lo</td>
            <td style={td}>/naɪs tuː miːt juː/</td>
            <td style={td}>náis tu míit iú</td>
          </tr>
          <tr>
            <td style={td}>I am...</td>
            <td style={td}>Eu sou...</td>
            <td style={td}>/aɪ æm/</td>
            <td style={td}>ái æm</td>
          </tr>
          <tr>
            <td style={td}>He is / She is</td>
            <td style={td}>Ele é / Ela é</td>
            <td style={td}>/hi ɪz/ /ʃi ɪz/</td>
            <td style={td}>rí íz / xí íz</td>
          </tr>
          <tr>
            <td style={td}>This is...</td>
            <td style={td}>Este(a) é...</td>
            <td style={td}>/ðɪs ɪz/</td>
            <td style={td}>dís íz</td>
          </tr>
        </tbody>
      </table>

      <h2>🗣️ Frases Práticas</h2>
      <ul>
        <li>
          <strong>My name is Alanderson.</strong> → Meu nome é Alanderson.
        </li>
        <li>
          <strong>What is your name?</strong> → Qual é o seu nome?
        </li>
        <li>
          <strong>I am a student.</strong> → Eu sou um estudante.
        </li>
        <li>
          <strong>This is my friend, João.</strong> → Este é meu amigo, João.
        </li>
        <li>
          <strong>Nice to meet you!</strong> → Prazer em conhecê-lo!
        </li>
      </ul>

      <h2>🔁 Atividades de Fixação</h2>
      <p>
        <strong>1. Complete:</strong> (em inglês)
      </p>
      <ul>
        <li>________ name is Ana.</li>
        <li>Hi! ________ João.</li>
        <li>Nice to ________ you!</li>
      </ul>

      <p>
        <strong>2. Traduza:</strong>
      </p>
      <ul>
        <li>Este é meu professor.</li>
        <li>Qual é o seu nome?</li>
        <li>Eu sou brasileiro.</li>
      </ul>

      <h2>🎧 Áudio (em breve)</h2>
      <p>A função de áudio com IA será adicionada em breve.</p>

      <h2>🧩 Desafio do Dia</h2>
      <p>Grave um áudio (ou leia em voz alta) com a seguinte apresentação:</p>
      <p>
        <em>“Hello, my name is [seu nome]. I am from Brazil. Nice to meet you!”</em>
      </p>

      <h2>🔁 Revisão Agendada</h2>
      <p>
        Revisar essa lição daqui a <strong>2 dias</strong>. Ao revisar, tente montar
        frases diferentes com o vocabulário aprendido.
      </p>
    </div>
  );
}

export default Lesson2;


