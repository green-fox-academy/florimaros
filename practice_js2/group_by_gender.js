'use strict';

var kids = [
  {name: 'Julika', age: 8, sex: 'female'},
  {name: 'Tiborka', age: 7, sex: 'male'},
  {name: 'Zsolti', age: 6, sex: 'male'},
  {name: 'Gerda', age: 9, sex: 'female'},
  {name: 'Zsomborka', age: 8, sex: 'male'}
];


function groupBySex(kids, gender) {
  var output = {female: [], male: []};
  kids.forEach(function(kid) {
    output[kid.sex].push(kid);
  });
  return output;
}


console.log(groupBySex(kids, 'female')); // ['Julika', 'Gerda']
