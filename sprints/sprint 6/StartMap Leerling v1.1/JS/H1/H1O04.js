const { generateKey } = require("crypto");

function setup() {
  canvas = createCanvas(450,400);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('wheat');
  rect(0,350,450,100);

  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray')
  rect(100,280,100,100);

  fill('gray')
  beginShape();
  vertex(150,200);
  vertex(100,280);
  vertex(200,280);
  endShape(CLOSE);

  fill('gray');
  noStroke();
  rect(110,330,30,50);

  fill('khaki');
  ellipse(350,100,150);

  fill('sienna');
  rect(300,250,40,130);

  fill('olive');
  ellipse(320,225,100,150)
}
