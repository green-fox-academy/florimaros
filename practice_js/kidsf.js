'use strict';

var kids = [
  {name: 'Tibbor', candies: 2},
  {name: 'Steve', candies: 3},
  {name: 'Agoston', candies: 0},
  {name: 'Julika', candies: 7},
  {name: 'Krisztian', candies: 4}
];


function getRichestKidName(kids) {
  var output = kids[0];
  for (var i= 0; i< kids.length; i++) {
    if (kids[i].candies > output.candies) {
      output = kids[i];
    }
  } return output.name;
}
console.log(getRichestKidName(kids));

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
