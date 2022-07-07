// x,y cooridinates for the ball
let ballX=600
let ballY=700
let ballDia=50
let furby
let baby


function preload(){
  furby=loadImage('furby.png')
  baby=loadImage(dancingbaby2.gif)
}

function setup(){
createCanvas(windowWidth, windowHeight)
background(200,280,100)
print(windowWidth)
imageMode(CENTER)
}



function draw(){



if(mouseX > windowWidth/2 && mouseY> windowWidth/2){
  background(200,20,200)
}else{
background(200,180,100)
}
text('click', windowWidth/2, 100')
ellipse(ballX,ballY,ballDia,ballDia)
image(furby, mouseX, mouseY, 50, 50)


if(mouseIsPressed==true){
  ballX=windowWidth/2
  ballY=windowHeight/2
ballDia=200
  rect(200,500,400,300)
  image(baby, windowWidth/2, windowHeight/2)

}else{
  ballX=600
  ballY=700
  ballDia=50
}
}

function windowResized(){

resizeCanvas(windowWidth,windowHeight)
}
