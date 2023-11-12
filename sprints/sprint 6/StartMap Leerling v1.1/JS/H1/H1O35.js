var aantalLagen = 10;
var breedte = 90;
var hoogte;

function setup() {
  hoogte = breedte / 2;
  canvas = createCanvas(aantalLagen*breedte + 1,aantalLagen*hoogte + 1);
  canvas.parent('processing');
  noLoop();
  background('silver');
  fill('lightslategray');
  stroke('darkslategray');
}

function draw() {
  for (laag = 0; laag <= aantalLagen;laag++){
    tekenRij(laag);
  }
}

function tekenRij(aantalStenen) {
  inspringen = (aantalLagen - aantalStenen)/2;
  push();
  translate(inspringen*breedte,0);
  for (var steen = 0;steen < aantalStenen;steen++) {
    rect(breedte*steen,hoogte*(laag-1),breedte,hoogte);
  }
  pop();
}