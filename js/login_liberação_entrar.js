const form = document.getElementById("formulario")
const botaoEntrar = document.getElementById("botaoEntrar")
const email = document.getElementById("inputEmail")
const senha = document.getElementById("inputSenha")

function fazerLogin() {
  if (email.value == "" && senha.value == "") {
  } else {
    window.location.href = "../home/index.html"
  }
}

function verificarInput() {
  if (email.value != "" && senha.value != "") {
    botaoEntrar.classList.add("buttonSelecionado")
    botaoEntrar.disabled = false
  } else {
    botaoEntrar.classList.remove("buttonSelecionado")
    botaoEntrar.disabled = true
  }
}

setInterval(verificarInput, 500)
