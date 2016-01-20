'use strict';

var kids = [
  {name: 'Tibbor', candies: 2},
  {name: 'Steve', candies: 3},
  {name: 'Agoston', candies: 0},
  {name: 'Julika', candies: 7},
  {name: 'Krisztian', candies: 4}
];

function  getRichestKidName (kids)  {
  var reachest = kids[0]
  for (var i=0; i<length.kids; i++) {
    if (kids[i].candies > reachest.candies {
      reachest = kids[i];
    } return reachest.name;
  }
}
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
