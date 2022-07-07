
let tre



function preload(){
  treee=loadImage('tre.jpg')

}

function setup(){
createCanvas(windowWidth, windowHeight)
background(200,280,100)
print(windowWidth)
imageMode(CENTER)
}



function draw(){


  fill(0)
  textSize(40)
text("Press E to grow tree", windowWidth/2, 50)




if(key === 'e'){
  image(treee, 500,500,400,300)



}
}

function windowResized(){

resizeCanvas(windowWidth,windowHeight)
}
