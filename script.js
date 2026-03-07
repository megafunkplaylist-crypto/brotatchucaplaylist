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

// ===== ERRO DO EMAIL ===== //
const emailInput = document.querySelector(".input-email");
const erroEmail = document.getElementById("erroEmail");

emailInput.addEventListener("input", function() {
    const email = emailInput.value;
    if (email.endsWith("@gmail.com") || email === "") {
        erroEmail.style.display = "none";
    } else {
        erroEmail.style.display = "block";
    }
});

// ===== FORMATAÇÃO TELEFONE ===== //
const telefoneInput = document.querySelector(".input-telefone");

telefoneInput.addEventListener("input", function() {
    let numeros = telefoneInput.value.replace(/\D/g, "");
    if (numeros.length > 11) {
        numeros = numeros.slice(0, 11);
    }
    
    let formatado = numeros;
    
    if (numeros.length > 0) {
        formatado = "(" + numeros.substring(0, 2);
    }
    if (numeros.length >= 3) {
        formatado += ") " + numeros.substring(2, 7);
    }
    if (numeros.length >= 8) {
        formatado += "-" + numeros.substring(7, 11);
    }
    
    telefoneInput.value = formatado;
});

// ===== BOTÃO FINALIZAR COM VALIDAÇÃO COMPLETA ===== //
const botaoFinalizar = document.getElementById('botaoFinalizar');

botaoFinalizar.addEventListener('click', (e) => {
    e.preventDefault();
    
    const nome = document.querySelector('.input-nome').value.trim();
    const email = document.querySelector('.input-email').value.trim();
    const telefone = document.querySelector('.input-telefone').value.trim();
    
    const emailValido = /^[^\s@]+@gmail\.com$/i.test(email);
    
    if (!emailValido && email !== '') {
        erroEmail.style.display = 'block';
    } else {
        erroEmail.style.display = 'none';
    }
    
    if (nome === "" || email === "" || telefone === "") {
        alert("Preencha todos os campos para continuar.");
        return;
    }
    
    if (!emailValido) {
        alert("Digite um email válido e que termine com @gmail.com.");
        return;
    }
    
    localStorage.setItem('nomeUsuario', nome);
    localStorage.setItem('emailUsuario', email);
    localStorage.setItem('telefoneUsuario', telefone);
    
    window.location.href = 'index2.html';
});