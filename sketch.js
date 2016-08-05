var butts=100
var woof=50

function circle(x, y, diameter) {
  ellipse(x,y,diameter,diameter)
}


function setup (){
  createCanvas(640,640);
  background(100,50,150);

  
}


function draw() {
   butts=butts+5
   woof=woof+3
   noStroke()
  fill(20,180,40,255);
  circle(butts,woof,150)
  fill(90,100,0);
  circle(butts,woof,100);
  fill(120,250,90);
  circle(butts,woof,50);
  
  if (butts==640) {
  butts=0; 
  woof=0;
  }
}