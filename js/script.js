//função para validação
function validar(campo, label, mensagem) {
    campo.addEventListener("keyup", () => {
      if (campo.value.length < 3) {
        campo.setAttribute("style", "outline-color: #ff0000");
        label.setAttribute("style", "color: #ff0000");
        mensagem.innerHTML = "Campo obrigatório. Digite 3 caracteres ou mais";
      } else {
        campo.setAttribute("style", "outline-color: #00ff00");
        label.setAttribute("style", "color: #00ff00");
        mensagem.innerHTML = "";
      }
    });
  }

  //validação nome
const nome = document.querySelector("input[name='nome']");
const cNome = document.querySelector("label[for ='c-name']");
const legendaNome = document.querySelector("#legendaNome");
validar(nome, cNome, legendaNome);

 //validação sobrenome  
const sobrenome = document.querySelector("input[name='sobrenome']");
const cSobrenome = document.querySelector("label[for ='c-sobrenome']");
const legendaSobrenome = document.querySelector("#legendaSobrenome");
validar(sobrenome, cSobrenome, legendaSobrenome);

//validação email
    const email = document.querySelector("input[name='email']");
     const cEmail = document.querySelector("label[for ='c-email']");
     const legendaEmail = document.querySelector("#legendaEmail");
     email.addEventListener("keyup", () => {
          if (email.value.length >= 5 && email.value.includes("@")) {
               email.setAttribute("style", "outline-color: #dddddd");
               cEmail.setAttribute("style", "color: #00ff00");
               legendaEmail.innerHTML = "";

          } else {
               email.setAttribute("style", "outline-color: #ff0000");
               cEmail.setAttribute("style", "color: #ff0000");
               legendaEmail.innerHTML = "O email precisa ter @ e 5 digitos ou mais.";
          }
          });
//Validação telefone
const telefone = document.querySelector("input[name='telefone']");
const cTelefone = document.querySelector("label[for ='c-telefone']");
const legendaTelefone = document.querySelector("#legendaTelefone")
telefone.addEventListener("keyup", () => {
    if(telefone.value.length >= 11) {
        telefone.setAttribute("style", "color: #00ff00");
        cTelefone.setAttribute("style", "color: #00ff00");
        legendaTelefone.innerHTML = "";
    }else {
        telefone.setAttribute("style", "outline-color: #ff0000");
        cTelefone.setAttribute("style", "color: #ff0000");
        legendaTelefone.innerHTML = "O telefone precisa conter 11 digitos contando com DDD.";
   }
});

//validação caixa de texto de observação
const caixaTexto = document.querySelector("#c-obs");
const legendaObs = document.querySelector("#observacao");
const labelObs = document.querySelector("label[for ='c-feedback']");

caixaTexto.addEventListener("keyup",()=>{
    if (caixaTexto.value.length < 10) {
        legendaObs.innerHTML = "Campo obrigatório. Digite 10 caractres ou mais";
        caixaTexto.setAttribute("style", "outline-color: #ff0000");
        labelObs.setAttribute("style", "color: #ff0000");
      } else {
       legendaObs.innerHTML = "";
       caixaTexto.setAttribute("style", "outline-color: #00ff00");
       labelObs.setAttribute("style", "color: #00ff00");

      }
    })

const botao = document.querySelector("#botao");

 botao.addEventListener("click", (evento)=>{
   
    if(evento.target.id == "botao"){
        let arroba;
        if (email.value.includes("@")) {
        arroba = true;
        } else {
        arroba = false;
        }

            if (nome.value.length>=3 && sobrenome.value.length>=3 && email.value.length >= 5 && email.value.includes("@") && linha.value.length>=3 && caixaTexto.value.length>=10 && telefone.value.length >= 11) {
       
                mensagem.innerHTML = "Bem-Vindo!!!";
                mensagem.setAttribute("style", "color: #00ff00");
                document.getElementById("botao").disabled = true;
            } else {
                alert("ERRO. PREENCHA TODOS OS CAMPOS CORRETAMENTE!!!!");
            }
    
    }});