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

function getTheLongestNamesAge(kids) {
  var object = [];
  for(var i=0; i<kids.length; i++) {
    if(kids[i]name.length>object.name.length) {
      object = kids[i];
    }
  } return object.age;
}

console.log(getTheLongestNamesAge(kids));
