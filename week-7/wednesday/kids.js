var kids = [
  {name: "Tibor", candies: 2},
  {name: "Steve", candies: 3},
  {name: "Agoston", candies: 0},
  {name: "Julika", candies: 7},
  {name: "Krisztian", candies: 4}
];


function getRichestKidsName(kids) {
var max=kids[0];
for (var i=1; i<kids.length; i++) {
  if (max.candies<kids[i].candies) {
    max=kids[i];
  }

}
return max.name;
}

console.log(getRichestKidsName(kids));
