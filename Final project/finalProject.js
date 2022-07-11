
let sonic
let background1

let x = 100;
let y = 100;
let xPos;
let yPos;

function preload(){
sonic=loadImage('sonic.png')
background1=loadImage('background1.png')









}


function setup(){
createCanvas(windowWidth,windowHeight)
background(0)

xPos = random(windowWidth)
yPos = random(windowHeight)




}



function draw(){



  if (keyIsDown(LEFT_ARROW)) {
      x -= 10;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      x += 10;
    }

    if (keyIsDown(UP_ARROW)) {
      y -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
      y += 10;
    }


    image(sonic, x, y, 50,50)






}





function windowResized(){

}
