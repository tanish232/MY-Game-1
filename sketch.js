var playerImg;
var alienImg;
var groundImg;
var bground ,alien,player;
function preload(){
playerImg=loadImage("images/spaceship.jpg")  
alienImg=loadImage("images/alien.png")
groundImg=loadImage("images/space.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bground=createSprite(displayWidth/2,displayHeight/2,400,50,1600)
  bground.addImage(groundImg);

  
  player=createSprite(displayWidth/2,displayHeight/2+300,30,30)
  player.addImage(playerImg);
  player.scale=0.3

  
  
}

function draw() {
  background("blue");  
  bground.velocityY=4;
 if(bground.y>displayHeight){
 bground.y=displayHeight/2;
}
if(frameCount%60===0){
  alien=createSprite(Math.round(random(displayWidth)),displayHeight/2-450,50,50)  
  alien.addImage(alienImg)
  alien.scale=0.5
  alien.velocityY=4;
}
if(keyDown===RIGHT_ARROW){
player.x=player.x+100  
}
  drawSprites();
}