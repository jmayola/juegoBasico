let x = 20;
let y = 20;
function setup() {
 createCanvas(800,600);
}


function draw() {
  background(150,150,255);
  noStroke();
  ellipse(x,y,40,40);
  
  x++;
  y++;
  
  if(y == 580){
    y--;
  }
}
