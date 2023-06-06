//VALIDAÇÃO LOGIN
const user = document.querySelector("input[name='user']");
const senha = document.querySelector("input[name='senha']");
const mensagem = document.querySelector("#mensagem");
const botaoLogin = document.querySelector("#botaoLogin");

botaoLogin.addEventListener("click", (evento) => {
  evento.preventDefault(); // Impede o envio padrão do formulário

  if (user.value == "Admin" && senha.value == "123456") {
    // document.getElementById("botaoLogin").disabled = false;
    window.location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021";
  } else {
    alert("Usuárioe/ou senha inválidos");
    // document.getElementById("botaoLogin").disabled = true;
  }
});