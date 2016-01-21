//ket parametere van egyikbe gy listajat varja masikba a nevet es ez alapjan visszaadja
//dolgokban megkeresni dolgokat a legfontosabb
"use strict"
var kids = [
  {name: 'Julika', age: 9, sex: 'female'},
  {name: 'Tiborka', age: 7, sex: 'male'},
  {name: 'Zsolti', age: 6, sex: 'male'},
  {name: 'Gerda', age: 9, sex: 'female'},
  {name: 'Zsomborka', age: 8, sex: 'male'}
];

function countByAge (kids, age) {
  var output = 0;
  for (var i= 0; i< kids.length; i++) {
    if (kids[i].age === age) {
      output += 1;
    }
  } return output;
}
//hany eves kolykoket keresunk azok szamat adja vissza
//valtozo amivel szamolod a dolgokat es azt noveled

console.log(countByAge(kids, 8));
