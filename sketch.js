var movingrect,fixedrect
var gameObject1,gameObject2,gameObject3
function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(200, 200, 50, 80);
 movingrect= createSprite(400, 200, 80, 30);
 gameObject1= createSprite(100,300,50,50);
 gameObject2= createSprite(200,300,50,50);
 gameObject3= createSprite(300,300,50,50);
 fixedrect.shapeColor="green";
 movingrect.shapeColor="green";
 fixedrect.velocityY=3;
 gameObject2.velocityY=-3;
}


function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  bounceOff(fixedrect,gameObject2)
if( isTouching(gameObject1,movingrect)){
  gameObject1.shapeColor="blue";
  movingrect.shapeColor="blue";
}
else{
  gameObject1.shapeColor="orange";
  movingrect.shapeColor="orange";
}
  drawSprites();
}
