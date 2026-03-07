// Bloquear clique direito
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// Bloquear atalhos de desenvolvedor
document.addEventListener("keydown", function(e) {
  
  // F12
  if (e.key === "F12") {
    e.preventDefault();
  }
  
  // Ctrl+Shift+I / Ctrl+Shift+C / Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey &&
    (e.key === "I" || e.key === "C" || e.key === "J")) {
    e.preventDefault();
  }
  
  // Ctrl+U
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }
  
  // Ctrl+C
  if (e.ctrlKey && e.key === "c") {
    e.preventDefault();
  }

});

function copiarPix() {
    const codigo = document.getElementById("codigoPix").innerText;

    navigator.clipboard.writeText(codigo);
}

// ===== MENSAGEM COPIAR PIX ===== //
function copiarPix() {

    const codigo = document.getElementById("codigoPix").innerText;
    const mensagem = document.getElementById("mensagemCopiado");

    navigator.clipboard.writeText(codigo);

    mensagem.style.opacity = "1";

    setTimeout(function(){
        mensagem.style.opacity = "0";
    }, 2500);

}

// ===== DADOS WHATSAPP ===== //
const botaoConfirmar = document.querySelector('.botao-confirmar');

// pegar dados do localStorage
const nome = localStorage.getItem('nomeUsuario') || '';
const email = localStorage.getItem('emailUsuario') || '';
const telefone = localStorage.getItem('telefoneUsuario') || '';

// montar a mensagem para WhatsApp
const mensagem = `Olá, já realizei o pagamento da playlist! 
Nome: ${nome}
Email: ${email}
Telefone: ${telefone}`;

// transformar em URL para WhatsApp
const urlWhatsApp = `https://wa.me/5598987261116?text=${encodeURIComponent(mensagem)}`;

// alterar o link do botão
botaoConfirmar.href = urlWhatsApp;