'use strict';

var kids = [
  {name: 'Tibbor', candies: 2},
  {name: 'Steve', candies: 3},
  {name: 'Agoston', candies: 0},
  {name: 'Julika', candies: 7},
  {name: 'Krisztian', candies: 4}
];

function getRichestKidName (kids) {
  var output = kids[0];
  for (var i=0; i < kids.length; i++) {
    if (kids[i].candies > output.candies) {
      output = kids[i];
    }
  } return output.name;
}
function getKidsName (kids) {
  var list = [];
  for (var i=0; i<kids.length; i++) {
    list.push(kids[i].name)
  }
  return list;
}
console.log (getKidsName(kids));

//ird ki a gyerek nevet akinek a legtobb cukorkaja van
/*function getRichestKidName(kids) {
  var output = "";
  var max = kids[0]["candies"];
  for (var i = 0; i < kids.length; i++) {
    if (max < kids[i]["candies"]) {
      max = kids[i]["candies"];
      output = kids[i]["name"];
    }
  }
  return output;
}
console.log(getRichestKidName(kids));*/
console.log(getRichestKidName(kids));
