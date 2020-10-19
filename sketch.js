var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 300, 80, 50);
 fixedRect.shapeColor="red";
 movingRect= createSprite(500,300,50,80); 
 movingRect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if (fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x-fixedRect.x<fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2){
      fixedRect.shapeColor="green";
      movingRect.shapeColor= "blue";

    }
    else{
      fixedRect.shapeColor="red";
      movingRect.shapeColor= "red";
    }

    
  drawSprites();


}