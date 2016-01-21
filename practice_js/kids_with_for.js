'use strict';

var kids = [
  {name: 'Julika', age: 8, sex: 'female'},
  {name: 'Tiborka', age: 7, sex: 'male'},
  {name: 'Zsolti', age: 6, sex: 'male'},
  {name: 'Gerda', age: 9, sex: 'female'},
  {name: 'Zsomborka', age: 8, sex: 'male'}
];


function getAgeByName (kids, name)
for (var i= 0; i<kids.length; i++) {
  if (kids[i].name === name) {
    return kids[i].age;
  }
}

console.log(getAgeByName(kids, 'Gerda'));
