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

function (getTheLongestNamesAge(kids) {
  var names = [];
  kids.forEach(function(kid){
    ages.push(kid.age);
  });
  return ages;

//megkeresed a leghoszabb nevut es visszaadnad az age-et
//for ciklus utan visszaadni az age-t, valtozoban tarolni az egesz gyereket,
//vegigmenni es megvaltoztatni arra ai epp a leghoszabb
//kell egy tomb amivel visszaterunk, letrehozni, vegigmenni, belepakolni
//f egeszi a gyerekeket visszaadja mennyi a koruk,
//listat vesz be es ad vissza a kor alapjan ugyanolyan
//keressuk meg a leghosszab nevu embert es adja vissza az eletkorat
// sorrendben
//itt egy tombon megyek vegig
console.log(getTheLongestNamesAge(kids));
/*function getTheLongestNamesAge(kids) {
  var count = 0;
  kids.forEach(function(kid) {
    kid.age = kid.name.length
    count ++
  });
  return count
}*/


/*function getTheLongestNamesAge(kids) {
  var output = kids.name;
  for (var i = 0; i < kids.length; i++) {
      if (kids[i].length > output) {
          output = kids[i].length;
      }
  }
  return output;
}*/


function getTheLongestNamesAge(kids) {
  var kidNameCount = kids[0]
  kids.forEach(function (kid) {
    if (kid.name.length > kidNameCount.name.length) {
      kidNameCount = kid
    }
  });
  return kidNameCount.age;
}


console.log(getTheLongestNamesAge(kids));
