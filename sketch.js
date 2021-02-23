function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30)
  fixedRect.shapeColor = "green";
  movingRect .shapeColor = "green"
}

function draw() {
  background(0);  
  movingRect .x = World.mouseX;
  movingRect.y = World.mouseY;
  //console.log(movingRect.x-fixedRect.x);
  //console.log(fixedRect.width/2+movingRect.width/2);
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x< fixedRect.width/2+movingRect.width/2 )
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}