var huisNummers = new Array(23,25,27,29,31,33);
var huisEigenaren = new Array("Smiers","Dekker","Den Hartog","Tolboom","Kremer","Velthuizen");
var kleur;

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  background('cornflowerblue');
  textFont("Georgia");
  noStroke();
  noLoop();
}

function draw() {
  tekenAchtergrond();

  for (var teller =0;teller < huisNummers.length;teller++){
    if (teller % 2 === 0) {
      kleur = 'lightgray';
    } else {
      kleur = 'darkgray';
    }
    tekenHuis(kleur,huisNummers[teller],teller);
    translate(150,0);
  }

}

function tekenHuis(kleur,nr,bewoner) {
  push();
  fill(kleur);
  rect(0,110,150,150);
  fill('gray');
  triangle(0,110,150,110,75,20);
  rect(20,170,50,90);
  fill('indianred');
  textSize(30);
  text(nr,75,190);
  fill('black');
  textSize(15);
  text(huisEigenaren[bewoner],20,165);
  pop();
}

function tekenAchtergrond() {
  fill('wheat');
  rect(0,220,width,height - 220);
  translate(50,0);
}