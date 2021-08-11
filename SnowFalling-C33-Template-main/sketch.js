function preload(){
snow1Image = loadImage ("snow1.jpg")
snow2Image = loadImage ("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  snow = createSprite(400, 200, 50, 50);
  snow.addImage(snow2Image)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}