'use strict';

// write a function that counts how many
// fives are in an array
var grades = [4, 3, 5, 2, 5, 4, 1, 3, 5];

function countFives2(grades)  {
  var number = 0;
  for (var i=0; i<grades.length, i++)  {
    if (grades[i] === 5)  {
      number += 1;
    } return number;
  }
}
console.log(countFives2(grades));
