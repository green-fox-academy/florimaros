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
function getAges(kids) {
  var output = [];
  for (var i= 0; i < kids.length; i++) {
    output.push(kids[i].age)
  } return output;
}

//visszaadni az osszes kort
//kell egy tomb amivel visszaterunk
//f egeszi a gyerekeket visszaadja mennyi a koruk,
//listat vesz be es ad vissza a kor alapjan ugyanolyan sorrendben
console.log(getAges(kids));
