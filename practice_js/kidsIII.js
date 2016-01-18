//ket parametere van egyikbe gy listajat varja masikba a nevet es ez alapjan visszaadja
//dolgokban megkeresni dolgokat a legfontosabb
"use strict"
var kids = [
  {name: "Julika", age: 8, sex: "female"},
  {name: "Julika", age: 8, sex: "female"},
  {name: "Julika", age: 8, sex: "female"},
  {name: "Julika", age: 8, sex: "female"},
  {name: "Julika", age: 8, sex: "female"}
];

function getAges(kids) {
  var ages = [];
  kids.forEach(function(kid){
    ages.push(kid.age);
  });
  return ages;
}
//kell egy tomb amivel visszaterunk
//f egeszi a gyerekeket visszaadja mennyi a koruk,
//listat vesz be es ad vissza a kor alapjan ugyanolyan sorrendben
console.log(getAges(kids));
