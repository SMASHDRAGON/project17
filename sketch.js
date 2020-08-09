     var ballImage ,ball ,PaddleImage ,Paddle ;
                                                                                                                                var ball,img,paddle;
function preload() {
 ballImage=loadImage ("ball.png");
 PaddleImage=loadImage ("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  ball=createSprite(50,200,50,50);
  ball.addImage( "ball",ballImage);
ball.velocityX= 4;


  Paddle=createSprite (350,200,50,10);
  Paddle.addImage("paddle",PaddleImage);
}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();

if (keyDown(UP_ARROW)){
Paddle.velocityY= -5;

}
if(keyDown(DOWN_ARROW)){
Paddle.velocityY= 5 ;

}

Paddle.collide (edges);
ball.bounceOff(Paddle,explosion);
ball.bounceOff (edges[0]);
ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]);






  drawSprites();
}

function explosion(){
ball.velocityY=random(-5,5);




}

