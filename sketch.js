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
  enimes=new Group()
}

function draw() {
  background("white");
  drawSprites()
  drawEnimes()
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