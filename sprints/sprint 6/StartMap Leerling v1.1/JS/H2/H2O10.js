var animatie = [];
var aantalBeeldjes = 3;
var nummer = 1;
var richting = 1;
var volgendeNummer = 0;

function preload() {
 for (var b = 0;b < aantalBeeldjes;b++) {
  nieuw_beeldje = loadImage("images/sprites/Jos_losse_beeldjes/Jos-" + b +".png");
  animatie.push(nieuw_beeldje);
 }

}
function setup() {
 canvas = createCanvas(460,460);
 canvas.parent('processing');
 noStroke();
 frameRate(5);
 textFont("Georgia");
 textSize(18);
}

function draw() {
  background('lavender');
  image(animatie[nummer],80,160,300,300);
  text("frameCount=" + frameCount,5,20);
  text("nummer=" + nummer,5,40);
  if (frameCount % 2 ==0) {
  nummer = volgendeNummer; 
  veranderNummer()
 } else {
  nummer =2;
 }
}


function veranderNummer() {
  if (nummer === 0) {
    volgendeNummer = 1;
  } else if (nummer === 1) {
    volgendeNummer = 0;
  }
}