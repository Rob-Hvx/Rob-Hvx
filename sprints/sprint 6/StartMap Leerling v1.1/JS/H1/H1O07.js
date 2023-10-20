function setup() {
  canvas = createCanvas(450,450);
  background('lavender');
  canvas.parent('processing');
  noLoop();
  colorMode(RGB, 255, 255, 255, 1);
  fill(178, 34, 34,.5);
}

function draw() {
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  translate(225,225);
  rect(0,0,200,200);
  
  rotate(45);
  
  rect(0,0,200,200);

  push();
   rotate(45);
   fill(255,225,0);
   rect(0,0,50,50);
  pop();
  
}
