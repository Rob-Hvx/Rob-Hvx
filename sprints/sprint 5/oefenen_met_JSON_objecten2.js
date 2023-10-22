let boeken ='{"boeken":['+
    '{"name":"boek 1", "auteur":"Henk Knoop", "jaar":"2017"},'+
    '{"name":"boek 2", "auteur":"Bassie Adriaan", "jaar":"2000"},'+
    '{"name":"boek 3", "auteur":"Walter White", "jaar":"2023"},'+
    '{"name":"boek 4", "auteur":"Gerda knoop", "jaar":"1999"}]}';

JSON.stringify(boeken);
console.log(boeken);
let obj = JSON.parse(boeken);
console.log(obj.boeken[0].name + " ~ " + obj.boeken[0].auteur + " (" + obj.boeken[0].jaar + ")");
