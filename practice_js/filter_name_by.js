'use strict';

var kids = [
  {name: 'Julika', age: 8, sex: 'female'},
  {name: 'Tiborka', age: 7, sex: 'male'},
  {name: 'Zsolti', age: 6, sex: 'male'},
  {name: 'Gerda', age: 9, sex: 'female'},
  {name: 'Zsomborka', age: 8, sex: 'male'}
];


function groupBySex(kids, gender) {
  var output = [];
  for (var i= 0; i<kids.length; i++) {
    if(kids[i].sex === gender) {
      output.push(kids[i].name)
    }
  }
  return output;
}


console.log(groupBySex(kids, 'female')); // ['Julika', 'Gerda']
