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

function getTheLongestNamesAge(kids2) {
  var longestname = kids2[0];
  for (var i = 1; i < kids2.length; i++) {
    if (kids2[i].name.length > longestname.name.length )  {
      longestname = kids2[i];    }
  } return  longestname.age;
}

//keszits functiont ami listat kap es nevet es megmondja
//mennyi a kora a leghosszabb nevu gyereknek (maximum kivalasztas)

console.log(getTheLongestNamesAge(kids));
