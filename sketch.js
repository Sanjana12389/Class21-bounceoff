var fixedRect,movingRect;

function setup() {
  createCanvas(1500,800);
 fixedRect = createSprite(400,400, 50, 80);
 fixedRect.shapeColor = "green";
 fixedRect.debug = true;
 movingRect = createSprite(800,400,80,50);
 movingRect.shapeColor = "green";
 movingRect.debug=true;

 fixedRect.velocityX= 5;
 movingRect.velocityX = -5;
}

function draw() {
  background("purple");  
bounceOff(movingRect,fixedRect);

  drawSprites();
}




