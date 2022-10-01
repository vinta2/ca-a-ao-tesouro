var canvas;
var backgroundImage
var powerCoins
var coinIMG
var life,lifeIMG
var personagemPrincipal
var enimes

function preload() {
  coinIMG=loadImage("./assets/goldCoin.png")
  lifeIMG=loadImage("./assets/life.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  personagemPrincipal=createSprite(100,height-100)
  personagemPrincipal.shapeColor="blue"
  enimes=new Group()
}

function draw() {
  background("white");
  move()
  drawEnimes()
  personagemPrincipal.velocityX=100
  //camera.position.x=personagemPrincipal.x
  //camera.position.y=personagemPrincipal.y
  drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function drawEnimes(){
if(frameCount%200===0){
var enime
enime =createSprite(width-100,height-100 )
enime.shapeColor="red"
enime.velocityX=-2
enimes.add(enime)
}
}
  function move(){
if(keyIsDown(UP_ARROW)){
personagemPrincipal.y-=1
console.log("funcionou")
}
if(keyIsDown(DOWN_ARROW)){
personagemPrincipal.y+=1
 }
 if(keyIsDown(LEFT_ARROW)){
personagemPrincipal.x-=1
}if(keyIsDown(RIGHT_ARROW)){
  personagemPrincipal.x+=1
  }

}