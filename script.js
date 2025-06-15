const mensagens = [
  "Seu sorriso é o meu lugar favorito. 😊❤️",
  "Você tem o dom de deixar tudo melhor só por estar perto. 💫💕",
  "Quando você sorri, o mundo desacelera. 😌🌎",
  "Com você, até os dias ruins têm cor. 🎨☀️",
  "Seu jeito é minha parte favorita dos dias. 🧸🌼",
  "Não existe explicação: você é meu motivo. ❣️🫶",
  "Estar com você é como respirar: natural e necessário. 🌬️❤️",
  "Você é minha parte preferida da vida. 🌈💗",
  "Seu olhar ilumina até os cantos mais escuros. ✨👀",
  "Você é o bug no meu cérebro... que eu nunca quero corrigir. 🐞🧠❤️"
];

let indice = 0;

function mostrarProximo() {
  const caixa = document.getElementById("message");
  caixa.textContent = mensagens[indice];
  indice = (indice + 1) % mensagens.length;
}
