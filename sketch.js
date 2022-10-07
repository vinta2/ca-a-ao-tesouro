var canvas;
var backgroundIMG;
var powerCoins;
var coinIMG;
var life,lifeIMG;
var personagemPrincipal, personagemPrincipalIMG, personagem;
var enimes;
var fundo, fundo2;

function preload() {
  coinIMG=loadImage("./assets/goldCoin.png");
  lifeIMG=loadImage("./assets/life.png");
  backgroundIMG=loadImage("./assets/fundo1.png");
  personagemPrincipalIMG=loadImage("./assets/menino.gif");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  fundo = createSprite(width/2, height/2);
  fundo.scale = 1;
  fundo.addImage(backgroundIMG);

  personagemPrincipal=createSprite(100,100);
  personagemPrincipal.shapeColor="blue";
  personagemPrincipal.addImage(personagemPrincipalIMG);
  personagemPrincipal.scale = 5;

  personagem=createSprite(500,500);
  personagem.shapeColor="purple";
  enimes=new Group();

}

function draw() {
  background("gray");
 
  move()
  drawEnimes()
  
  camera.position.x=personagemPrincipal.x
  camera.position.y=personagemPrincipal.y
  drawSprites()
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
if(keyIsDown(UP_ARROW)){
personagemPrincipal.y-=10
console.log("funcionou")
}
if(keyIsDown(DOWN_ARROW)){
personagemPrincipal.y+=10
 }
 if(keyIsDown(LEFT_ARROW)){
personagemPrincipal.x-=10
}if(keyIsDown(RIGHT_ARROW)){
  personagemPrincipal.x+=10
  }

}