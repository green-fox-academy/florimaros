//male female listakat vesz at es viszaadja a nemekhez tartozo neveket a listaba
"use strict"
var kids = [
  {name: 'Julika', age: 8, sex: 'female'},
  {name: 'Tiborka', age: 7, sex: 'male'},
  {name: 'Zsolti', age: 6, sex: 'male'},
  {name: 'Gerda', age: 9, sex: 'female'},
  {name: 'Zsomborka', age: 8, sex: 'male'}
];

function  filterNamesBySex(kids, gender) {
      var filterNames = [];
      kids.forEach (function(kid) {
    if(kid.sex === gender) {
      filterNames.push(kid.name);
    } return filterNames ;
  }
}
console.log(filterNamesBySex(kids, "female"));
