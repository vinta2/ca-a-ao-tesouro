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

function preload() {
  coinIMG=loadImage("./assets/goldCoin.png");
  lifeIMG=loadImage("./assets/life.png");
  backgroundIMG=loadImage("./assets/fundo10.png");
  personagemPrincipalIMG=loadImage("./assets/menino.gif");
  xIMG=loadImage("./assets/x.png");
  papelIMG=loadImage("./assets/papel.png");
  lapisIMG=loadImage("./assets/lapis.png");
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

  lapis=createSprite(-1800,-380);
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
  
  camera.position.x=personagemPrincipal.x
  camera.position.y=personagemPrincipal.y
  drawSprites()
  console.log(personagemPrincipal.x)
  console.log(personagemPrincipal.y)
}

function drawEnimes(){
if(frameCount%200===0){
var enime;
enime =createSprite(width-100,height-100);
enime.shapeColor="red";
enime.velocityX=-2;
enimes.add(enime);
}
}

function move(){
if(keyIsDown(UP_ARROW) && personagemPrincipal.y > -2260){
personagemPrincipal.y-=10
console.log("funcionou")
}
if(keyIsDown(DOWN_ARROW) && personagemPrincipal.y < 3200){
personagemPrincipal.y+=10
 }
 if(keyIsDown(LEFT_ARROW) && personagemPrincipal.x > 1650){
personagemPrincipal.x-=10
}if(keyIsDown(RIGHT_ARROW) && personagemPrincipal.x < 3170){
  personagemPrincipal.x+=10
  }
}

function coletar(sprite){
personagemPrincipal.overlap(sprite,function(collector,collected){
collected.remove();
})
}