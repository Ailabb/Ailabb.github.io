//Variáveis da dBolinha 
let xBolinha = 300;
let yBolinha = 200;
let diametro = 27;
let raio = diametro / 2;

//Velocidade e movimentação da Bolinha
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

function mostrarBolinha(){
  fill(255);
  circle(xBolinha,yBolinha, diametro);
}
function movimentarBolinha(){
  xBolinha +=  velocidadeXBolinha;
  yBolinha +=  velocidadeYBolinha;
}

