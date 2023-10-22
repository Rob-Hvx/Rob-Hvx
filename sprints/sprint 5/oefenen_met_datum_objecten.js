let huidigeDatum = new Date("2023-07-02");
console.log("het is vanaag " + huidigeDatum);
let ookdehuidigeDatum = new Date(2023,6,2,15,14);
console.log("het is nu " + ookdehuidigeDatum);
console.log("dat betekent dat het jaar " + ookdehuidigeDatum.getFullYear() + " is");
let anderedatum = new Date(3000,0,30)
console.log("ooit wordt het " + anderedatum);
if (ookdehuidigeDatum.getTime() > anderedatum.getTime()) {
    console.log("de huidige datum is nieuwer");
  } else if (anderedatum.getTime() > ookdehuidigeDatum.getTime()) {
    console.log("de andere datum is nieuwer");
  } else {
    console.log("Beide datums zijn gelijk");
  }