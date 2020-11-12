var aprochingMosquitos,fearedMosquitos,can,aprochingMosquitosImg,fearedMosquitosImg,canImg;
var spray,sprayImg;
var count=0;
var life;

function preload(){
 aprochingMosquitosImg=loadImage('aproching mosquito.png');
 fearedMosquitosImg=loadImage('fearing mosquitoes.png');
 sprayImg=loadImage('spray1.png');
 canImg=loadImage('canimg.png');


}
function setup() {
  createCanvas(displayWidth,displayHeight);
 // fearedMosquitos.addImage('a',fearedMosquitosImg);
  

//  spray.addImage('s',sprayImg);
}

function draw() {
  background(255); 
   var can=createSprite(200,200);
   can.addImage('c',canImg);
   can.scale=0.2;
   can.velocityY=0;

  // if(keyDown(UP_ARROW)){
  //   can.velocityY=-2;
  // }
   
  fill('yellow');
  text('score:'+count,770,100);
  drawSprites();

  spawnMosquitos();
  keyPressed();
}

function spawnMosquitos(){
  if(frameCount%50===0){
  var aprochingMosquitos=createSprite(displayWidth,random(1,displayHeight));
  
  aprochingMosquitos.velocityX=- (6 + 3*count/100);
  aprochingMosquitos.addImage('m',aprochingMosquitosImg);
  aprochingMosquitos.scale=0.3;
  aprochingMosquitos.lifetime=800/-5;
  }
}
function keyPressed(){
  if(keyCode===24){
    can.velocityY=-2;
  }
  if(keyCode===25){
    can.velocityY=2;
  }
}
