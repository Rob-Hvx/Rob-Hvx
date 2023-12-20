var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var xJos;
var yJos;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(901,601);
  canvas.parent('processing');
  celGrootte = width / aantalKolommenRaster;
  background(brug,0,0);
}

function draw() {
  xJos = 400
  yJos = 300
  tekenRaster();
  image(spriteJos,xJos,yJos);
}

function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  for (var rij = 0;rij < aantalKolommenRaster;rij += 1) {
    for (var kolom = 0;kolom < 9;kolom += 1) {
      rect(rij*celGrootte,kolom*celGrootte,celGrootte,celGrootte);
    }
  }
  pop();
}