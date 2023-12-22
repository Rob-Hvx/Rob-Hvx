var spriteSheet;
var rij = 0;
var aantalSpriteRijen = 4;
var aantalSpriteKolommen = 12;

var schaal = 2.0;
var breedte; 
var hoogte; 
var sBr; 
var sHo; 
var br;
var ho; 
var x = 190; 
var y = 100;
var stapGroote = 5;
var aantalBewegingen = 0;

function preload() {
  spriteSheet = loadImage("images/sprites/Pony.png");
}

function setup() {
  canvas = createCanvas(460,280);
  canvas.parent('processing');
  textFont("Georgia");
  textSize(18);
  noStroke();
  frameRate(10);
  breedte = spriteSheet.width;
  hoogte = spriteSheet.height;
  sBr = breedte / aantalSpriteKolommen;
  sHo = hoogte / aantalSpriteRijen;
  br = sBr*schaal;
  ho = sHo*schaal;
}

function draw() {
  if (keyIsDown(RIGHT_ARROW)) {
    x += stapGroote;
    rij = 2;
    aantalBewegingen++;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x -= stapGroote;
    rij = 1;
    aantalBewegingen++;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= stapGroote;
    rij = 3;
    aantalBewegingen++;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += stapGroote;
    rij = 0;
    aantalBewegingen++;
  }
  x = constrain(x,0,width - br);
  y = constrain(y,0,height - ho);
  background('lavender');
  image(spriteSheet,x,y,br,ho,(aantalBewegingen % aantalSpriteKolommen)*sBr,rij*sHo,sBr,sHo);
}