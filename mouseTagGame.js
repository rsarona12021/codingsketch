// position of game object
let xPos;
let yPos;

let xSpeed = 10;
let ySpeed = 10;

let mouseDist

let score = 0








let furby
function preload(){
  furby=loadImage('furby.png')
}


function setup(){
  createCanvas(windowWidth,windowHeight)
xPos = random(windowWidth)
yPos = random(windowHeight)

textAlign(CENTER)

}

function draw(){
background(0)
fill(225)
textSize(40)
text("Your score is " + score, windowWidth/2, 50)



mouseDist = dist(mouseX, mouseY, xPos, yPos)
print(mouseDist)





image(furby, xPos, yPos, 30, 30)
xPos = xPos + xSpeed
yPos = yPos + ySpeed

if(xPos>= windowWidth -15 || xPos <=0) {
  xSpeed = xSpeed *-1
}

if(yPos>= windowHeight || yPos <=0) {
  ySpeed = ySpeed * -1
}

if(mouseDist <= 15){
  xPos = random(15, windowWidth-15)
  yPos = random(15, windowHeight-15)
score++

}


function windowResized(){

}





}
