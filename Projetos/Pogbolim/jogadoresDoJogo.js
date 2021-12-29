// VAriaveis comnus para os dois times:
let comprimentoJogador = 10;
let alturaJogador = 100;

//variaveis para time um em lista
let xJogadoresTime1 = [70, 450];
let yJogadoresTime1 = [150, 190];

let xJogadoresTime2 = [520, 150];
let yJogadoresTime2 = [150, 180];

function mostraJogadorTime1(){
  for(i = 0; i < 2; i++){
     fill('purple');
  rect(xJogadoresTime1[i], yJogadoresTime1[i], comprimentoJogador, alturaJogador);
  }
}

function mostraJogadorTime2(){
  for(i = 0; i < 2; i++){
  fill('yellow');
  rect(xJogadoresTime2[i], yJogadoresTime2[i], comprimentoJogador, alturaJogador);
 }
}

function movimentarJogadoresTime1(){
  
  if (keyIsDown(UP_ARROW)) {
    yJogadoresTime1[0] -= 5;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yJogadoresTime1[0] += 5;
  }
  if (keyIsDown(UP_ARROW)){
      yJogadoresTime1[1] -= 5;
      }
  if (keyIsDown(DOWN_ARROW)) {
    yJogadoresTime1[1] += 5;
  }
}

function movimentarJogadoresTime2(){
 if(keyIsDown(87)) { //W
       yJogadoresTime2[0] -= 5;
    }
    if(keyIsDown(83)) { //S
       yJogadoresTime2[0] += 5;
    }
  if(keyIsDown(87)) { //W
       yJogadoresTime2[1] -= 5;
    }
    if(keyIsDown(83)) { //S
       yJogadoresTime2[1] += 5;
    }

}

