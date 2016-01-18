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

function getAgeByName(kids, name) {
  var age = 0;
  for (var i= 0; i<kids.length; i++)  {
  if (kids[i].name === name) {
    age= kids[i].age;
  }
}
  return age;
}
//kell egy f, ket parameteru; legyen valtozonk amibe taroljuk a nevet, ha megvan a nev foron at visszaterunk vele
console.log(getAgeByName(kids, "Gerda"));
//ha  akids i edik eleme neve
//megegyezik a egadiottt nevvel akkor aget beallitom a gyerek ageere
