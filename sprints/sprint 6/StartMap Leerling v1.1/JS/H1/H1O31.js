var kolom = 0;
var rij = 0
var kleur = 'black';
var hoogte = 10;
var breedte = 10;

function setup() {
  canvas = createCanvas(501,501);
  canvas.parent('processing');
  background('coral');
  fill('white');
}

function draw() {
  let hoogteBlokje  = height / hoogte;
  let breedteBlokje = width / breedte;
  for (var rij = 0;rij < hoogte;rij += 1) {
    for (var kolom = 0;kolom < breedte;kolom += 1) {
      if ((kolom + rij) % 2 == 0){
        kleur =  'white'
      } else{
        kleur = 'black'
      }
        fill(kleur);
        rect(breedteBlokje*kolom,hoogteBlokje*rij,breedteBlokje,hoogteBlokje);
    }
  }
}
