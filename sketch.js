//variáveis da bolinha
let xBolinha=100;
let yBolinha=200;
let diametro=22;
let raio=diametro/2;
//velocidade da bolinha
let velocidadeXBolinha=6;
let velocidadeYBolinha=6
//variáveis da raquete
let xRaquete=5;
let yRaquete=150;
let raqueteComprimento=10;
let raqueteAltura=90;
let colidiu=false;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
}
function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}
function movimentoBolinha(){
  xBolinha+=velocidadeXBolinha;
  yBolinha+=velocidadeYBolinha;
}
function verificaColisaoBorda(){
  if(xBolinha>width||xBolinha<0){
    velocidadeXBolinha*=-1;
}

  if(yBolinha>height||yBolinha<0){
    velocidadeYBolinha*=-1;
    }
}
function mostraRaquete(){
  rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
}
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete-=10;
}
  if(keyIsDown(DOWN_ARROW)){
     yRaquete+=10;
}
}