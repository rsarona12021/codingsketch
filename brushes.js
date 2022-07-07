let lineBrushBool = false
let squareBrushBool = false
let ellipseBrushBool= false



function setup(){
  createCanvas(windowWidth, windowHeight)

  rectMode(CENTER)

  background(225);

}


function draw(){

  if(lineBrushBool == true){
    lineBrush()


  }

  if(squareBrushBool == true){
    squareBrush()


  }

}


function lineBrush(){
  if(mouseIsPressed){
    strokeWeight(5)
    stroke(random(225),random(225),random(225))
    line(pmouseX, pmouseY, mouseX, mouseY)

  }
}
function squareBrush(){
  if(mouseIsPressed){
    strokeWeight(5)
    stroke(random(225), random(225), random(225))
    fill(random(225),random(225),random(225))
    rect(mouseX, mouseY, 50, 50)

  }

}


function ellipseBrush(){
  if(mouseIsPressed){
    strokeWeight(5)
    stroke(random(225), random(225), random(225))
    fill(random(225),random(225),random(225))
    ellipse(mouseX, mouseY, 50, 50)
}
}



function keyTyped(){
  if(key === 'q'){
    print("pressed")
    lineBrushBool = true;
    squareBrushBool = false;
  }

  if(key === 'a'){
    lineBrushBool = false;
    squareBrushBool = true;

  }

if(key === 'e'){
lineBrushBool = false;
squareBrushBool = false;
ellipseBrushBool = true;
}


  if(key === 's'){
    save('drawing.jpg')
  }

}
