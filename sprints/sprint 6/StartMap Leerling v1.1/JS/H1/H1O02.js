function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // noStroke();
  // fill('darkred');
  // triangle(0,0,0,450,450,450);

  noStroke();
  fill('pink');
  beginShape();
  vertex(450,0);
  vertex(450,450);
  vertex(0,225);
  endShape(CLOSE);

  noStroke();
  fill('purple');
  beginShape();
  vertex(0,0);
  vertex(0,450);
  vertex(450,225);
  endShape(CLOSE); 
}
