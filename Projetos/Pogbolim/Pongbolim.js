function setup() {
createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background('green');
  mostrarBolinha();
  movimentarBolinha();
  verificarColisaoComBorda();
  mostraJogadorTime1();
  mostraJogadorTime2();
  movimentarJogadoresTime1();
  movimentarJogadoresTime2();
  verificaColisaoComJogadoresTime1Biblioteca();
  verificaColisaoComJogadoresTime2Biblioteca();
  linhasDoCampo();
  incluiPlacarDoJogo();
  marcarPonto();
  mostraAreaDoGol();
  ColisaoTime1Comborda();
  ColisaoTime1CombordaSuperior(); 
  ColisaoTime2Comborda();
}

