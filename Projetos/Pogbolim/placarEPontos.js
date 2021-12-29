//VAriáveis de Placar
let placarTime1 = 0;
let placarTime2 = 0;

function incluiPlacarDoJogo(){
  stroke(255)
  textAlign(CENTER);
  textSize(16)
  fill('purple');
  rect (150, 10, 40, 20);
  fill('white')
  text(placarTime1, 170,26);
  fill('yellow');
  rect (450, 10, 40, 20);
  fill('white')
  text(placarTime2, 470,26);
  //Tendo como base que a tela do jogo tem 600 no tamanha, tirou-se 150 de cada Jogador, logo pegando metade de cadda lado temos 300-150 = 150 e 600 - 150 = 450.
}

function marcarPonto(){
  if (xBolinha > 585 && yBolinha > 120 && yBolinha < 270){
    placarTime2 += 1;
    voltaParaPosicaoInicial()
    ponto.play();
  }
  if (xBolinha < 15 && yBolinha > 120 && yBolinha < 270){
    placarTime1 += 1;
    voltaParaPosicaoInicial()
    ponto.play();
  }
}

function voltaParaPosicaoInicial(){
  yBolinha = 200;
  xBolinha = 300;
}
