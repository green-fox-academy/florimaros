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

function countByAge(kids, age) {
var count = 0;
  kids.forEach(function(kid) {
    if (kid.age === age)  {
      count ++
    }

  })
}return count;
}}
//hany eves kolykoket keresunk azok szamat adja vissza
//valtozo amivel szamolod a dolgokat es azt noveled

console.log(countByAge(kids, 8));
