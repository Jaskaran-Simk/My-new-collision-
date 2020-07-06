var moving_rectangle, fixed_rectangle;
function setup() {
  createCanvas(1200,1200);
  fixed_rectangle = createSprite(400, 200, 50, 50);
  moving_rectangle = createSprite(200,200,50,50)
  fixed_rectangle.shapeColor = "green"
  moving_rectangle.shapeColor = "green"

  moving_rectangle.debug = true;
  fixed_rectangle.debug = true;
}

function draw() {
  background(255,255,255);

  moving_rectangle.x = mouseX
  moving_rectangle.y= mouseY

  if(moving_rectangle.x - fixed_rectangle.x <= moving_rectangle.width/2 + fixed_rectangle.width/2 && 
    fixed_rectangle.x - moving_rectangle.x <= moving_rectangle.width/2 + fixed_rectangle.width/2 &&
    moving_rectangle.y - fixed_rectangle.y <= moving_rectangle.height/2 + fixed_rectangle.height/2 && 
    fixed_rectangle.y - moving_rectangle.y <= moving_rectangle.height/2 + fixed_rectangle.height/2 ){
    fixed_rectangle.shapeColor = "blue"
    moving_rectangle.shapeColor = "blue"
  }else {
    fixed_rectangle.shapeColor = "green"
    moving_rectangle.shapeColor = "green"
  
  }

  
    
  drawSprites();
}