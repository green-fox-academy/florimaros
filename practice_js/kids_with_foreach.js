'use strict';

var kids = [
  {name: 'Julika', age: 8, sex: 'female'},
  {name: 'Tiborka', age: 7, sex: 'male'},
  {name: 'Zsolti', age: 6, sex: 'male'},
  {name: 'Gerda', age: 9, sex: 'female'},
  {name: 'Zsomborka', age: 8, sex: 'male'}
];


function getAgeByName(kids2, namel) {
  kids2.forEach(function (e)  {
    if (e.name === namel) {
      return e.age
    }
  })
}
console.log(getAgeByName(kids, 'Gerda'));
//1 parameter meghivasanal az aktualis elemen megy vegig
//2 parameterrel az i-t is megkapod
//3 megkapod a tlejes listat is
