'use strict';

var kids = [
  {name: 'Julika', age: 8, sex: 'female'},
  {name: 'Tiborka', age: 7, sex: 'male'},
  {name: 'Zsolti', age: 6, sex: 'male'},
  {name: 'Gerda', age: 9, sex: 'female'},
  {name: 'Zsomborka', age: 8, sex: 'male'}
];


function getAgeByName (kids2, name) {
  for (var i=0; i<kids2; i++) {
    if (name === kids2[i].name)  {
      return kids2[i].age;
    }
  }
}

console.log(getAgeByName(kids, 'Gerda'));
