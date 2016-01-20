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

function countByAge(kids2, age) {
  var count = 0;
  for (var i=0; i<kids2.length; i++)  {
    if (kids2[i].age === age) {
    count = count + 1;
    }
  } return count;
}
//hany eves kolykoket keresunk azok szamat adja vissza
//valtozo amivel szamolod a dolgokat es azt noveled

console.log(countByAge(kids, 8));
