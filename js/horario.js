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
  