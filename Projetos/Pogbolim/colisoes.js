let colidiu = false;
let hit = false;

function verificarColisaoComBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
     velocidadeYBolinha *= -1;
     }
}

function ColisaoTime1Comborda(){
  for(i = 0; i < 2; i++){
    hit = collideRectRect(xJogadoresTime1[i], yJogadoresTime1[i], comprimentoJogador, alturaJogador, xDoCampo[0], yDoCampo[0], comprimentoDoCampo[0], comprimentoDoCampo[0]);
  if(hit){
    yJogadoresTime1[i] -=  5;
    }
  } 
}
function ColisaoTime1CombordaSuperior(){
  for(i = 0; i < 2; i++){
    hit = collideRectRect(xJogadoresTime1[i], yJogadoresTime1[i], comprimentoJogador, alturaJogador, xDoCampo[1], yDoCampo[1], comprimentoDoCampo[1], comprimentoDoCampo[1]);
  if(hit){
    yJogadoresTime1[i] += 0;
    }
  } 
}

function ColisaoTime2Comborda(){
  for(i = 0; i < 2; i++){
    hit = collideRectRect(xJogadoresTime2[i], yJogadoresTime2[i], comprimentoJogador, alturaJogador, xDoCampo[0], yDoCampo[0], comprimentoDoCampo[0], comprimentoDoCampo[0]);
  if(hit){
    yJogadoresTime2[i] -=  5;
    }
  } 
}
function verificaColisaoComJogadoresTime1Biblioteca(){
  for(i = 0; i < 2; i++){     colidiu=collideRectCircle(xJogadoresTime1[i],yJogadoresTime1[i],comprimentoJogador,alturaJogador,xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
 }
}

function verificaColisaoComJogadoresTime2Biblioteca(){
  for(i = 0; i < 2; i++){      colidiu=collideRectCircle(xJogadoresTime2[i],yJogadoresTime2[i],comprimentoJogador,alturaJogador,xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
   } 
  }
}
