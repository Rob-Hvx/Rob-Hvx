let friends ='{"friends":['+
    '{"name":"Matthijs", "age":"16"},'+
    '{"name":"Bas", "age":"16"},'+
    '{"name":"nobody", "age":"69"},'+
    '{"name":"the 60 year old man hiding in my attic", "age":"70"}]}';

JSON.stringify(friends);
console.log(friends);
let obj = JSON.parse(friends);
console.log(obj.friends[0].name + " " + obj.friends[0].age);
