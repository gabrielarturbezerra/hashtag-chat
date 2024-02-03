const botaoEnviar = document.getElementById("enviar");
const texto = document.getElementById("texto");
const chat = document.getElementById("mensagens");

const socket = io();

botaoEnviar.addEventListener("click", enviarMensagem);
texto.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    enviarMensagem();
  }
});

function enviarMensagem() {
  if (texto.value.trim() !== "") {
    socket.emit("nova mensagem", texto.value.trim());
    texto.value = "";
  }
}

socket.addEventListener("nova mensagem", (msg) => {
  const novaMensagem = document.createElement("li");
  novaMensagem.classList.add("mensagem");
  novaMensagem.textContent = msg;
  chat.appendChild(novaMensagem);
});