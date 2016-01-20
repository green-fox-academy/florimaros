//ket parametere van egyikbe gy listajat varja masikba a nevet es ez alapjan visszaadja
//dolgokban megkeresni dolgokat a legfontosabb
"use strict"
var kids = [
  {name: 'Julika', age: 8, sex: 'female'},
  {name: 'Tiborka', age: 7, sex: 'male'},
  {name: 'Zsolti', age: 6, sex: 'male'},
  {name: 'Gerda', age: 9, sex: 'female'},
  {name: 'Zsomborka', age: 8, sex: 'male'}
];

function getTheLongestNamesAge (kids) {
  var object = kids[0];
  for (var i = 0; i<kids.length; i++ )  {
    if (kids[i].name.length > object.name.length) {
      object = kids[i];
    } return object.age ;
  }
}

//leghoszabb nevu gyerek korat add vissza
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
function getTheLongestNamesAge(kids)  {
  var currentKidWithLongestName = kids[0];
  for (var i = 1; i < kids.length; i++) {
    if(currentKidWithLongestName.name.lingth < kids[i].name.length) {
      currentKidWithLongestName = [i];
    } return currentKidWithLongestName.age;
  }
} console.log(getTheLongestNamesAge(kids));
//az egesz objektuomt taroljuk le es abbol szedjuk ki az infot
//
