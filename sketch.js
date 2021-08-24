var jake, jake_running;
var path , invisiblewall1, invisiblewall2, pathImg

function preload(){
  //pre-loading images
  jake_running = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.png", "jake5.png");
  pathImg = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //creating sprites 
  path = createSprite(200,200);
  path.addImage("path", pathImg);
  path.velocityY =4;
  path.scale=1.2;

  jake = createSprite(200,300,20,20);
  jake.addAnimation("jake", jake_running);
  jake.scale =0.6;

  //creating invisible walls
  invisiblewall1 = createSprite(35,200,20,400);
  invisiblewall1.visible =false;
  invisiblewall2 = createSprite(365,200,20,400);
  invisiblewall2.visible =false;  
}

function draw() {
  background(220);
 jake.x = mouseX;

if (path.y > 400){
  path.y = height/2;
}

if (jake.isTouching (invisiblewall1) ){
  jake.x=200;
  jake.y=300;
}

if (jake.isTouching (invisiblewall2) ){
  jake.x=200;
  jake.y=300;
}



drawSprites();
}
