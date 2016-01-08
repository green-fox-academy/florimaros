"use strict";

var grades = [4, 3, 5, 2, 5, 4, 1, 3, 5];
//write a function that counts how many
//fives are in array
function countFives(grades) {
  var number = 0;
  grades.forEach(function(grade) {
      if (grade === 5) {
        number++;
      }
  });
  return number;
}


console.log(countFives(grades));
