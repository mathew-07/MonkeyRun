
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
 monkey = createSprite(50,400,20,50);
 monkey.addAnimation("running", monkey_running)
 monkey.scale = 0.1
  
  ground = createSprite(300,500,600,10);
  
  banana = createSprite(300,400)
  banana.addImage(bananaImage)
  banana.scale = 0.1
  banana.velocityX =-3   

  obstace = createSprite(400,445)
  obstace.addImage(obstaceImage)
  obstace.scale = 0.26 
  obstace.velocityX = -4
}


function draw() {
 background(255)

  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -20;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(200,250));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 180
    
  }
    
  if (frameCount % 300 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(440,445));
    banana.addImage(obstaceImage);
    banana.scale = 0.25;
    banana.velocityX = -4;
    banana.lifetime = 180
    
  }
  
  drawSprites() 
}