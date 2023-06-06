//DATA E HORA NAVEGADOR
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
  

 //SLIDESHOW
 // Array com os URLs dos banners
var banners = ["./img/banner1.png", "./img/banner2.png", "./img/banner3.png"];

// Variável para controlar o índice atual do banner
var currentBanner = 0;

// Função para trocar o banner
function changeBanner() {
  // Atualiza o atributo src da imagem com o próximo banner
  document.getElementById("imgInicial").src = banners[currentBanner];

  // Incrementa o índice atual
  currentBanner++;

  // Se o índice atual for maior que o número de banners, volta ao primeiro
  if (currentBanner >= banners.length) {
    currentBanner = 0;
  }
}

// Chama a função de troca de banner a cada 5 segundos (5000 milissegundos)
setInterval(changeBanner, 2000);
