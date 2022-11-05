var canvas;
var backgroundIMG;
var powerCoins;
var coinIMG;
var life,lifeIMG;
var personagemPrincipal, personagemPrincipalIMG, personagem;
var enimes;
var fundo, fundo2;
var lapis,lapisIMG
var x,xIMG
var papel,papelIMG
var pirata1,pirata2,pirata3
var marcador=0
var mapaIMG,mapa

function preload() {
  coinIMG=loadImage("./assets/goldCoin.png");
  lifeIMG=loadImage("./assets/life.png");
  backgroundIMG=loadImage("./assets/fundo10.png");
  personagemPrincipalIMG=loadImage("./assets/menino.gif");
  xIMG=loadImage("./assets/x.png");
  papelIMG=loadImage("./assets/papel.png");
  lapisIMG=loadImage("./assets/lapis.png");
  pirata1=loadImage("./assets/pirata_inimigo.gif")
  pirata2=loadImage("./assets/pirata_inimigo2.gif")
  pirata3=loadImage("./assets/pirata_inimigo3.gif")
  mapaIMG=loadImage("./assets/mapa.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  fundo = createSprite(width/2, height/2);
  fundo.scale = 1;
  fundo.addImage(backgroundIMG);

  personagemPrincipal=createSprite(100,100);
  personagemPrincipal.shapeColor="blue";
  personagemPrincipal.addImage(personagemPrincipalIMG);
  personagemPrincipal.scale = 2;

  x=createSprite(1270,-1480);
  x.addImage(xIMG);
  x.scale=0.6;

  lapis=createSprite(-1000,-380);
  lapis.addImage(lapisIMG);
  lapis.scale=0.1;

  papel=createSprite(2150,3160);
  papel.addImage(papelIMG);
  papel.scale=0.3;

  enimes=new Group();

}

function draw() {
  background("gray");

  image(personagemPrincipalIMG, 500, 500,100,100);
 
  move()
  drawEnimes()
  coletar(x)
  coletar(lapis)
  coletar(papel)
  console.log("marcador"+marcador)
  if(marcador===3){
mapa=createSprite(860,400)
mapa.addImage("map",mapaIMG)
mapa.scale=0.05
  }
  
  camera.position.x=personagemPrincipal.x
  camera.position.y=personagemPrincipal.y
  drawSprites()
 // console.log(personagemPrincipal.x)
  //console.log(personagemPrincipal.y)
}

function drawEnimes(){
if(frameCount%400===0){
var enime;
enime =createSprite(Math.round(random(-1270,3170)),Math.round(random(-2220,3200)));
enime.scale=2.5
if(personagemPrincipal.x>0){
enime.velocityX=2
}
else{
enime.velocityX=-2
}
if(personagemPrincipal.y>0){
  enime.velocityY=2
  }
  else{
  enime.velocityY=-2
  }
enimes.add(enime);
var rand=Math.round(random(1,3))
switch(rand){
case 1:enime.addImage(pirata1);
break;

case 2:enime.addImage(pirata2);
break;

case 3:enime.addImage(pirata3);
break;

default:
break;
}
}
}

function move(){
if(keyIsDown(UP_ARROW) && personagemPrincipal.y > -2220){
personagemPrincipal.y-=10
console.log("funcionou")
}
if(keyIsDown(DOWN_ARROW) && personagemPrincipal.y < 3200){
personagemPrincipal.y+=10
 }
 if(keyIsDown(LEFT_ARROW) && personagemPrincipal.x > -1270){
personagemPrincipal.x-=10
}if(keyIsDown(RIGHT_ARROW) && personagemPrincipal.x < 3170){
  personagemPrincipal.x+=10
  }
}

function coletar(sprite){
personagemPrincipal.overlap(sprite,function(collector,collected){
collected.remove();
marcador+=1
})
}