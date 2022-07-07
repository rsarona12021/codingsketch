function setup(){
  createCanvas(windowWidth, windowHeight)
  background(30, 160, 200)

for(let i=0; i< windowWidth; i = i+10){
  line(i, 0, i , height)
  print(i)


for(let i = 0; i<windowHeight; i= i+20){
line(0, i, windowWidth, 0 )
  }


}

for(let i= 0; i< 100; i++ ){
  ellipse(random(windowWidth), random(windowHeight), 20 , 20)
}

ellipse(200, 200, 100, 100)
}

function draw(){




}
