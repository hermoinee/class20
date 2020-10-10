function setup() {
  createCanvas(800,400);
fixRect=createSprite(600,200,50,80);
fixRect.shapeColor="blue";
fixRect.debug=true;

movingRect=createSprite(600,400,50,80);
movingRect.shapeColor="blue";
movingRect.debug=true;


}

function draw() {
  background(255,255,255); 

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if (movingRect.x-fixRect.x<=movingRect.width/2+fixRect.width/2 && 
    fixRect.x-movingRect.x<=movingRect.width/2+fixRect.width/2  &&
    movingRect.y-fixRect.y<=movingRect.height/2+fixRect.height/2 &&
    fixRect.y-movingRect.y<=movingRect.height/2+fixRect.height/2 ){ 
    fixRect.shapeColor="pink";
    movingRect.shapeColor="pink";
  }
  else {
    fixRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  drawSprites();
}