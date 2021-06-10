var bg;
var bgImg;
var rocket;
var rocketImg;
var alien;
var alienImg;
var alien1;
var alien2;

var mars;
var jupiter;
var saturn;
var uranus;
var neptune;

var box;
var box1;

var gameState = "serve";

var option1, option2, option3, option4;
var question="";
var option1Text="";
var option2Text="";
var option3Text="";
var option4Text="";

feedback = "";

var joption1, joption2, joption3, joption4;
var soption2, soption2, soption3, soption4;

function preload() {
  bgImg = loadImage("Game.jpeg");
  rocketImg = loadImage("Rocket.png");
  alienImg = loadImage("alien.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rocket = createSprite(360, 275)
  alien = createSprite(425, 300)
  alien1 = createSprite(740, 280)
  alien2 = createSprite(925, 280)
  rocket.addImage("rocket",rocketImg);
  rocket.scale = 0.2;
  alien.addImage("alien", alienImg);
  alien.scale = 0.1;
  alien1.addImage("alien1", alienImg)
  alien1.scale = 0.1;
  alien2.addImage("alien2", alienImg)
  alien2.scale = 0.1;

  mars = createSprite(415, 350, 40, 40);
  jupiter = createSprite(585, 350, 150, 150);
  saturn = createSprite(770, 345, 20, 20);
  uranus = createSprite(935, 350, 20, 20);
  neptune  = createSprite(1135, 350, 20, 20);

  mars.setCollider("circle", 0, 0, 40)
  jupiter.setCollider("circle", 0, 0, 100);
  jupiter.debug = true;
  saturn.setCollider("circle", 0, 0, 70);
  saturn.debug = true;
  uranus.setCollider("circle", 0, 0, 60);
  uranus.debug = true;
  neptune.setCollider("circle", 0, 0, 90);
  neptune.debug = true;

  mars.visible = false;
  jupiter.visible = false;
  
}

function draw() {
  background(bgImg);  
  drawSprites();
  if (gameState === "serve") {
    if (mousePressedOver(mars)) {
      gameState = "mars"    
    }
  }
  if (gameState === "mars") {
    box = createSprite(710, 110, 400, 150);
    box.shapeColor = "#000066";
    var question="What is another name for Mars?";
    var option1Text="red planet";
    var option2Text="blue planet";
    var option3Text="orange planet";
    var option4Text="pink planet";

    textSize(20);
    fill("white");
    text(question, 570, 65)
    
    option1 = createSprite(590, 105, 120, 30);
    fill("white")
    text(option1Text, 540, 110);

    option2 = createSprite(795, 105, 120, 30)
    fill("white")
    text(option2Text, 745, 110)

    option3 = createSprite(600, 155, 140, 30)
    fill("white")
    text(option3Text, 535, 160)

    option4 = createSprite(795, 155, 120, 30)
    fill("white")
    text(option4Text, 740, 160)

    if (mousePressedOver(option1)) {
      var question="";
      var option1Text="";
      var option2Text="";
      var option3Text="";
      var option4Text="";
      gameState = "jupiter";
      feedback = "Correct Answer"
      text(feedback, 640, 20)
    } 
    if(mousePressedOver(option2)||mousePressedOver(option3)||mousePressedOver(option4)){
      var question="";
      var option1Text="";
      var option2Text="";
      var option3Text="";
      var option4Text="";
      gameState = "jupiter";
      feedback = "Wrong Answer"
      text(feedback, 640, 20)
  }
  }
    if (gameState==="jupiter") {
      var question="How many moons does Jupiter have?";
      var option1Text="80";
      var option2Text="78";
      var option3Text="83";
      var option4Text="79";
    
  textSize(20);
  fill("white");
  text(question, 570, 65)
  
  joption1 = createSprite(590, 105, 120, 30);
  fill("white")
  text(option1Text, 540, 110);

  joption2 = createSprite(795, 105, 120, 30)
  fill("white")
  text(option2Text, 745, 110)

  joption3 = createSprite(600, 155, 140, 30)
  fill("white")
  text(option3Text, 535, 160)

  joption4 = createSprite(795, 155, 120, 30)
  fill("white")
  text(option4Text, 740, 160)
      
      if (mousePressedOver(joption4)) {
        var question="";
var option1Text="";
var option2Text="";
var option3Text="";
var option4Text="";
        gameState = "saturn";
        text("Correct Answer", 640, 20)
      } 
      if(mousePressedOver(joption1)||mousePressedOver(joption2)||mousePressedOver(joption3)){
        var question="";
var option1Text="";
var option2Text="";
var option3Text="";
var option4Text="";
        gameState = "fight";
        text("Wrong Answer", 640, 20)
    }
    if (gameState==="saturn") {
      var question="How many rings does Saturn have?";
      var option1Text="1";
      var option2Text="2";
      var option3Text="3";
      var option4Text="4  ";

    textSize(20);
    fill("white");
    text(question, 570, 65)
    
    soption1 = createSprite(590, 105, 120, 30);
    fill("white")
    text(option1Text, 540, 110);

    soption2 = createSprite(795, 105, 120, 30)
    fill("white")
    text(option2Text, 745, 110)

    soption3 = createSprite(600, 155, 140, 30)
    fill("white")
    text(option3Text, 535, 160)

    soption4 = createSprite(795, 155, 120, 30)
    fill("white")
    text(option4Text, 740, 160)
    }
    

    if (mousePressedOver(soption1)) {
      var question="";
      var option1Text="";
      var option2Text="";
      var option3Text="";
      var option4Text="";
      gameState = "jupiter";
      text("Correct Answer", 640, 20)
    } 
    if(mousePressedOver(soption2)||mousePressedOver(soption3)||mousePressedOver(soption4)){
      var question="";
var option1Text="";
var option2Text="";
var option3Text="";
var option4Text="";
      gameState = "fight";
      text("Wrong Answer", 640, 20)
  }
  }

  console.log(gameState);
  text( "x:"+mouseX + "y:"+mouseY, mouseX, mouseY )
}


