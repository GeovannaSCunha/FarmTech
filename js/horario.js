function exibirDataHora() {
    var elemento = document.getElementById("data-hora");
    var dataHora = new Date();
    
    var dia = dataHora.getDate();
    var mes = dataHora.getMonth() + 1; // Os meses são indexados a partir de zero
    var ano = dataHora.getFullYear();
    
    var hora = dataHora.getHours();
    var minutos = dataHora.getMinutes();
    var segundos = dataHora.getSeconds();
    
    var dataFormatada = "0"+ dia + "/" + "0"+ mes + "/" + ano;
    var horaFormatada = hora + ":" + minutos + ":" + segundos;
    
    var dataHoraFormatada = dataFormatada + " " + horaFormatada;
    
    elemento.textContent = dataHoraFormatada;
  }
  
  // Chamar a função a cada segundo para atualizar a data e hora
  setInterval(exibirDataHora, 1000);

  //MODO NOTURNO
// Obtém o botão e o elemento body do DOM
 var darkModeToggle = document.getElementById("dark-mode-toggle");
 var body = document.body;

 // Adiciona o ouvinte de evento ao botão
 darkModeToggle.addEventListener("click", function() {
   // Alterna a classe dark-mode no elemento body 
   body.classList.toggle("dark-mode");
 });
  