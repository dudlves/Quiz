const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação",
      "Uma linguagem de programação",
      "Um sistema operacional",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
    respostas: [
      "Converter tipos de dados",
      "Verificar o tipo de uma variável",
      "Realizar operações matemáticas",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é uma variável em JavaScript?",
    respostas: [
      "Uma função",
      "Um valor constante",
      "Um contêiner para armazenar dados",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Qual é a sintaxe correta para comentários de uma linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "# Este é um comentário",
      "/* Este é um comentário */",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um modelo de dados",
      "Um tipo de variável",
      "A representação da estrutura da página web",
    ],
    correta: 2,
  },
  {
    pergunta: "Como você declara uma função em JavaScript?",
    respostas: [
      "função minhaFuncao()",
      "def minhaFuncao()",
      "function minhaFuncao()",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é um loop 'for' em JavaScript?",
    respostas: [
      "Um dispositivo de entrada",
      "Um comando de saída",
      "Uma estrutura de controle de fluxo",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "Não há diferença",
      "Um compara apenas o valor, o outro compara valor e tipo",
      "Um compara apenas o tipo, o outro compara valor e tipo",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é AJAX em JavaScript?",
    respostas: [
      "Uma linguagem de programação",
      "Uma técnica para atualização assíncrona de dados na página",
      "Um framework para construção de interfaces gráficas",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é JSON em JavaScript?",
    respostas: [
      "Um formato de arquivo de áudio",
      "Uma linguagem de marcação",
      "Um formato de dados para intercâmbio",
    ],
    correta: 2,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (const resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      if(estaCorreta){
        alert('acertou')
      }
    };
    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  quiz.appendChild(quizItem);
}
