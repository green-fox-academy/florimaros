'use strict';

var students = [
  'Zsolt',
  'Judit',
  'Matyi',
  'Flori'
];


function getRandomFromArray(list) {
  var index = Math.floor(Math.random() * list.length - 1);
  return list[index];
}
//mathrandom general egy szamot amit megszorzol a lista hosszaval
//a math.floor lefele kerekiti
//es beletoltod sz indexbe visszaadod a listaba rzen indexu elemet

console.log(getRandomFromArray(students));
