document.getElementById("popUp").style.display = "none";
// Hier defineer ik alle vragen.
let vraag1 = {
  vraagtekst: "Wanneer kwam kabouter Plop voor het eerst op tv?",
  antwoorden: [
    "1997",
    "2004",
    "1989",
    "1995"
  ],
  juisteAntwoord: 1
}

let vraag2 = {
  vraagtekst: "Wat is de naam van het bekende liedje waarin Kabouter Plop zijn Plop-dans danst?",
  antwoorden: [
    "het ploplied",
    "de ganzenpas",
    "de kabouterdans",
    "de plopdans"
  ],
  juisteAntwoord: 3
}

let vraag3 = {
  vraagtekst: "Welke kabouter staat bekend om zijn luie karakter en is altijd aan het dutten?",
  antwoorden: [
    "kaboter Vermoeid",
    "kabouter Lui",
    "kaboter Klus",
    "kabouter lui"
  ],
  juisteAntwoord: 2
}

//Hier zet ik de vragen in een array of lijst
let alleVragen = [
  vraag1,
  vraag2,
  vraag3,
]

//Hier maak ik een functie om de vragen te weergeven.
let aantalVragen = alleVragen.length
let huidigeVraag = 1;
let score = 0;
function weergeefVragen(){
  aantalVragen = alleVragen.length
  if(huidigeVraag <= aantalVragen){  let Vraagvariable = alleVragen[huidigeVraag-1];
  document.getElementById("vraagID").innerHTML = Vraagvariable.vraagtekst;
  document.getElementById("antwoord 1").innerHTML = Vraagvariable.antwoorden[0];
  document.getElementById("antwoord 2").innerHTML = Vraagvariable.antwoorden[1];
  document.getElementById("antwoord 3").innerHTML = Vraagvariable.antwoorden[2];
  document.getElementById("antwoord 4").innerHTML = Vraagvariable.antwoorden[3];
  document.getElementById("scoreID").innerHTML = "score: " + score
} else if (huidigeVraag > aantalVragen && aantalVragen > 0) {
  huidigeVraag -= 1
  document.getElementById("popUp").style.display = "block";
  document.getElementById("popUpScore").innerHTML = score;
}

}
weergeefVragen();

let gebruikerAntwoord;

const antwoord1klik = document.getElementById("antwoord 1");
const antwoord2klik = document.getElementById("antwoord 2");
const antwoord3klik = document.getElementById("antwoord 3");
const antwoord4klik = document.getElementById("antwoord 4");
const vraagX = document.getElementById("vraagX");

//Hier maak ik een functie waar het antwoord wordt gecontroleerd
function controleerAntwoord(gebruikerAntwoord){
  let juisteAntwoord = alleVragen[huidigeVraag-1].juisteAntwoord
  if (gebruikerAntwoord == juisteAntwoord){
    score += 1;
  } else {
    score += 0;
  }
  huidigeVraag += 1
  weergeefVragen()
}
//hier voeg ik vragen toe 
function vragenToevoegen(){
  let nieuwevraag = prompt("wat is de vraag")
  let antwoord1 = prompt("wat is het eerste antwoord?");
  let antwoord2 = prompt("wat is het tweede antwoord?");
  let antwoord3 = prompt("wat is het derde antwoord?");
  let antwoord4 = prompt("wat is het laatste antwoord?");
  let goedantwoord = prompt("welk antwoord is goed?", "1, 2, 3 of 4")
  goedantwoord = parseInt(goedantwoord)
  let nieuweVraagOBJECT ={
  vraagtekst: nieuwevraag,
    antwoorden: [antwoord1,antwoord2,antwoord3,antwoord4],
    juisteAntwoord: goedantwoord
  }
  alleVragen.push(nieuweVraagOBJECT);
  console.log(alleVragen)
}
//hier test ik of er op de antwoorden wordt geklikt 
antwoord1klik.addEventListener("click", function() {
    controleerAntwoord(1);
});
antwoord2klik.addEventListener("click", function() {
    controleerAntwoord(2);
});
antwoord3klik.addEventListener("click", function() {
    controleerAntwoord(3);
});
antwoord4klik.addEventListener("click", function() {
    controleerAntwoord(4);
});
vraagX.addEventListener("click", function() {
  vragenToevoegen();
});

function gaVerder() {
  document.getElementById("popUp").style.display = "none";
}