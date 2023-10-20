var p = 100;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  frameRate(50);

}

function draw() {
  background('snow'); 
  tekenRechthoek(p); 
  tekenVierkant(p);
  tekenLijnen(p);
  p += 0.5;
  if (p > width) {
    noLoop();
  }
}

function tekenRechthoek(p) {
  push();
  strokeWeight(1);
  stroke('green');
  beginShape();
  vertex(p,0);
  vertex(0,p);
  vertex(width - p,height);
  vertex(width, height - p);
  endShape(CLOSE);
  pop();
}

function tekenVierkant(p) {
  push();
  strokeWeight(1);
  stroke('red');
  fill(255, 0, 0, 100);
  beginShape();
  vertex(p,0);
  vertex(width, p);
  vertex(width - p,height);
  vertex(0,height -p);
  endShape(CLOSE);
  pop();
}

function tekenLijnen(p) {
  push();
  strokeWeight(1);
  stroke('grey');
  line(0,p,width,p);
  line(0,height - p,width,height - p);
  pop();
}