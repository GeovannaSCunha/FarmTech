
// Array com os URLs dos banners
var banners = ["banner1.png", "banner2.png", "banner3.png"];

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


//FUNÇÃO ALTERA BANNER
// function alteraBanner() {
    
    
//     const img1 = document.querySelector(".l-e > img")
//     const img2 = document.querySelector(".l-d > img")
    
//     let nr = Math.ceil(Math.random() *3);
//     let caminho = `./img/banner-lateral-${nr}.png`;
//     img1.src = caminho;
    
//     nr = Math.ceil(Math.random() *3);
//     caminho = `./img/banner-lateral-${nr}.png`;
//     img2.src = caminho;

//     setTimeout(alteraBanner, 1000);

// }

// alteraBanner();