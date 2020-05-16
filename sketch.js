var ball,ballImg,paddle,paddleImg;

var t,l,b;

var b1, b1Img;
var b2, b2Img;
var b3, b3Img;
var b4, b4Img;
var b5, b5Img;
var b6, b6Img;
var b7, b7Img;
var b8, b8Img;

function preload() {
  ballImg = loadImage("ball.png");
  
  paddleImg = loadImage("paddle.png");
  
  b8Img = loadImage("b8.png");
  
  b7Img = loadImage("b7.png");
  
  b3Img = loadImage("b3.png");
  
  b2Img = loadImage("b2.png");
  
  b1Img = loadImage("b1.png");
  
  b4Img = loadImage("b4.png");
  
  b6Img = loadImage("b6.png");
  
  b5Img = loadImage("b5.png");
}

function setup() {
  createCanvas(400, 410);
  
  paddle = createSprite(380, 200, 20, 60);
  paddle.addImage("paddle", paddleImg);
  paddle.setCollider("rectangle", 0, 0, 20, 90);
  
  ball = createSprite(200,200,20,20);
  ball.addImage("ball", ballImg);
  ball.scale = 0.7;
  
  ball.velocityX = 9;
  
  
  t = createSprite(198, -5, 395, 10);
  t.visible = false;
  
  l = createSprite(-5, 200, 10, 400);
  l.visible = false;
  
  b = createSprite(198, 405, 395, 10);
  b.visible = false;
  
  b8 = createSprite(15, 26, 20, 20);
  b8.addImage("b8", b8Img);
  b8.scale = 0.5;
  
  b7 = createSprite(15, 78, 20, 20);
  b7.addImage("b7", b7Img);
  b7.scale = 0.5;
  
  b3 = createSprite(15, 129, 20, 20);
  b3.addImage("b3", b3Img);
  b3.scale = 0.5;
  
  b2 = createSprite(15, 180, 20, 20);
  b2.addImage("b2", b2Img);
  b2.scale = 0.5;
  
  b1 = createSprite(15, 231, 20, 20);
  b1.addImage("b1", b1Img);
  b1.scale = 0.5;
  
  b4 = createSprite(15, 282, 20, 20);
  b4.addImage("b4", b4Img);
  b4.scale = 0.5;
  
  b6 = createSprite(15, 334, 20, 20);
  b6.addImage("b6", b6Img);
  b6.scale = 0.5;
  
  b5 = createSprite(15, 385, 20, 20);
  b5.addImage("b5", b5Img);
  b5.scale = 0.5;
  
  
  
}

function draw() {
  background(205,153,0);
  
  ball.bounceOff(t, bounce1);
  ball.bounceOff(l, bounce3);
  ball.bounceOff(b, bounce2);
  ball.bounceOff(paddle, randomVelocity);
  
  paddle.bounceOff(t);
  paddle.bounceOff(b);
  
  if(keyWentDown(UP_ARROW))
  {
     paddle.velocityY = -9;
  }
  
  if(keyWentUp(UP_ARROW))
  {
     paddle.velocityY = 0;
  }
  
  if(keyWentDown(DOWN_ARROW))
  {
     paddle.velocityY = 9;
  }
  
  if(keyWentUp(DOWN_ARROW))
  {
     paddle.velocityY = 0;
  }
  
  if(ball.isTouching(b1))
  {
   b1.destroy(); 
  }
  
  if(ball.isTouching(b2))
  {
   b2.destroy(); 
  }
  
  if(ball.isTouching(b3))
  {
   b3.destroy(); 
  }
  
  if(ball.isTouching(b4))
  {
   b4.destroy(); 
  }
  
  if(ball.isTouching(b5))
  {
   b5.destroy(); 
  }
  
  if(ball.isTouching(b6))
  {
   b6.destroy(); 
  }
  
  if(ball.isTouching(b7))
  {
   b7.destroy(); 
  }
  
  if(ball.isTouching(b8))
  {
   b8.destroy(); 
  }
  
  drawSprites();
  
}

function bounce1(){
  ball.velocityX = -7;
  ball.velocityY = 3;
}

function bounce2(){
  ball.velocityX = 5;
  ball.velocityY = -7;
}

function bounce3(){
  ball.velocityX = 7;
  ball.velocityY = 4;
}

function randomVelocity(){
  ball.velocityX = random(-7,-5 || 5,7);
  ball.velocityY = random(-9,6 || 6,9);
}
