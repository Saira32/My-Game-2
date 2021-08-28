var red, orange, yellow, bg, green, blue, arrow, balloonChosen

var lives
var level

var gameState = 0;

function preload() {
  back_img = loadImage("images/pastel.png");
  red_img = loadImage("images/red.png")
  orange_img = loadImage("images/orange.png")
  yellow_img = loadImage("images/yellow.png")
  green_img = loadImage("images/green.png")
  blue_img = loadImage("images/blue.png")
  arrow_img = loadImage("images/arrow (1).png")
  start_img = loadImage("images/start button.jpeg")




}
function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(windowWidth / 2, windowHeight / 2, width, height)
  bg.scale = 2
  bg.addImage(back_img)

  red = createSprite(300, 600, 10, 10)
  red.addImage(red_img)
  red.scale = 1.5

  orange = createSprite(500, 620, 10, 10)
  orange.addImage(orange_img)
  orange.scale = 1.5


  yellow = createSprite(700, 600, 10, 10)
  yellow.addImage(yellow_img)
  yellow.scale = 1.5


  green = createSprite(900, 590, 10, 10)
  green.addImage(green_img)
  green.scale = 1.5


  blue = createSprite(1100, 600, 10, 10)
  blue.addImage(blue_img)
  blue.scale = 1.5


  arrow = createSprite(200, 200, 10, 10)
  arrow.addImage(arrow_img)



}

function draw() {
  //background(back_img);
  // background("black")

  if (gameState === 0) {



    if (mousePressedOver(red)) {
      orange.visible = false;
      yellow.visible = false;
      green.visible = false;
      blue.visible = false;
      balloonChosen = "red"
      gameState = 1
    }


    if (mousePressedOver(orange)) {
      red.visible = false;
      yellow.visible = false;
      green.visible = false;
      blue.visible = false;
      balloonChosen = "orange"
      gameState = 1
    }

    if (mousePressedOver(yellow)) {
      red.visible = false;
      orange.visible = false;
      green.visible = false;
      blue.visible = false;
      balloonChosen = "yellow"
      gameState = 1
    }

    if (mousePressedOver(green)) {
      red.visible = false;
      orange.visible = false;
      yellow.visible = false;
      blue.visible = false;
      balloonChosen = "green"
      gameState = 1
    }

    if (mousePressedOver(blue)) {
      red.visible = false;
      orange.visible = false;
      yellow.visible = false;
      green.visible = false;

      balloonChosen = "blue"
      gameState = 1
    }





  }

  drawSprites();



  if (gameState === 0) {
    fill("pink")
    textSize(40)
    text("Pop the balloon to choose!", 470, 300)
  }
  if (gameState === 1) {
    //background("cyan")
    message(balloonChosen)
    var start = createSprite(680, 420)
    start.addImage(start_img)
    start.scale = .3

    if (mousePressedOver(start)) {
      gameState = 2;
      start.destroy();
    }

  }

  
  if (gameState === 2){
    bg.visible=true

  if (keyIsDown(RIGHT_ARROW)) {
      red.x = red.x + 10
  }
  if (keyIsDown(LEFT_ARROW)) {
  red.x = red.x -10 
  }

  if (keyIsDown(RIGHT_ARROW)) {
    orange.x = orange.x + 10
}
  if (keyIsDown(LEFT_ARROW)) {
orange.x = orange.x -10 
}

if (keyIsDown(RIGHT_ARROW)) {
  yellow.x = orange.x + 10
}
if (keyIsDown(LEFT_ARROW)) {
yellow.x = yellow.x -10 
}

if (keyIsDown(RIGHT_ARROW)) {
  green.x = green.x + 10
}
if (keyIsDown(LEFT_ARROW)) {
green.x = green.x -10 

}
if (keyIsDown(RIGHT_ARROW)) {
  blue.x = blue.x + 10
}
if (keyIsDown(LEFT_ARROW)) {
blue.x = blue.x -10 
}


}



function message(balloon) {

  fill("black")
  textSize(50);
  text("You chose the color " + balloon + "!", 400, 200)
  fill("pink")
  textSize(40);
  text("Save your balloon from getting popped...", 365, 300)

}

function arrow(){
  
}
}