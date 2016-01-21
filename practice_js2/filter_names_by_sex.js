'use strict';

var kids = [
  {name: 'Julika', age: 8, sex: 'female'},
  {name: 'Tiborka', age: 7, sex: 'male'},
  {name: 'Zsolti', age: 6, sex: 'male'},
  {name: 'Gerda', age: 9, sex: 'female'},
  {name: 'Zsomborka', age: 8, sex: 'male'}
];


function groupBySex(kids, gender) {
  var output = {female: 0, male: 0};
  for (var i= 0; i<kids.length; i++) {
    output [kid sex] ++
  });
  return output;
}


console.log(groupBySex(kids, 'female')); // ['Julika', 'Gerda']
