

let sonic
let background1
let rings



let x = 100;
let y = 100;
let xPos;
let yPos;






function preload(){
sonic=loadImage('sonic.png')
background1=loadImage('background1.png')
rings=loadImage('sonicrings.png')


}








function setup(){
createCanvas(windowWidth,windowHeight)
background(background1)





}


function draw(){






background(background1)


for(let i= 0; i< 100; i++ ){
  image(rings, random(windowWidth), random(windowHeight), 20 , 20)
}


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


    if (x < 0){
       x +=10
     }
     if (x >= windowWidth){
       x -= 50
     }

     if (y < 0){
       y +=10
     }
     if (y >= windowHeight){
       y -= 50
     }





}

function windowResized(){

}
