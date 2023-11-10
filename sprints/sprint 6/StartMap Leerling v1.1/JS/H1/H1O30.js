var kolom = 0;

function setup() {
  canvas = createCanvas(451,451);
  canvas.parent('processing');
  background('coral');
  fill('white');
}

function draw() {
  for (var rij = 0;rij < 9;rij += 1) {
    rect(50*kolom,50*rij,50,50);

    for (var kolom = 0;kolom < 9;kolom += 1) {
      if (rij==3 & kolom==6){
        fill ('orange');
        rect(50*kolom,50*rij,50,50);
      } else {
        fill('white');
         rect(50*kolom,50*rij,50,50);
      }
    }
  }
  
}
