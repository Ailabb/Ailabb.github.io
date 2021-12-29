//VAriáveis Da Area do Campo
let xDoCampo = [10, 10, 10, 590, 299 ];
let yDoCampo = [390, 10, 10, 10, 10];
let comprimentoDoCampo = [580, 580, 2, 2, 2];
let alturaDoCampo = [2, 2, 380, 381, 380];
let xCentroDoCampo = 300;
let yCentroDoCampo = 200;
let diametroCentroDoCampo = 22;
let raioCentroDoCampo = diametro / 2;

//Variáveis Do Gol
let xDaAreaDoGol = [5, 585];
let yDaAreaDoGol = 120;
let comprimentoDaAreaDoGol = 10;
let alturaDaAreaDoGol = 150;


function linhasDoCampo(){
   for (x=0; x < 5; x++){
     fill(255);
     rect(xDoCampo[x], yDoCampo[x], comprimentoDoCampo[x], alturaDoCampo[x]);
  }
  noFill();
  arc(590, 10, 60, 60, HALF_PI, PI);// DIREITA CIMA
  noFill();
  arc(10, 10, 60, 60, 0, HALF_PI);// ESQUERDA CIMA
  noFill();
  arc(590, 390, 60, 60, PI, PI + HALF_PI); // DIREITA BAIXO
  noFill();
  arc(10, 390, 60, 60, HALF_PI + PI, 0);
  
  noFill();
  circle( 300, 200, 150);
  fill('white');
  circle(300, 200, 7);
}

function mostraAreaDoGol(){
  for(i = 0; i < 2; i++){
    fill('white');
   rect(xDaAreaDoGol[i], yDaAreaDoGol, comprimentoDaAreaDoGol, alturaDaAreaDoGol);
  }
  noFill();
  rect(10, 120, 30, 150);
  noFill();
  rect(560, 120, 30, 150);
  
  fill('white');
  circle(50, 190, 5);
  
   fill('white');
  circle(548, 190, 5);
  
  noFill();
  rect(10, 80, 70, 230);
  
  noFill();
  rect(520, 80, 70, 230);
  
 }

