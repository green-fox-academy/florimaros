"use strict";

var grades = [4, 3, 5, 2, 5, 4, 1, 3, 5];
//write a function that counts how many
//fives are in array
function countFives(grades) {
  var number = 0;
  for (var i = 0; i<grades.length; i++ ) {
    if (grades[i] === 5) {
    number++;
    }
  }
  return number;
}


console.log(countFives(grades));
