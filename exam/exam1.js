'use strict';

// Write a function that takes an array of numbers,
// and returns a new array with the same length but all,
// of it's elements are the triple of the original array's elements!


function tripleEachElement(input) {
  var output = [];
  for (var i = 0; i < input.length; i++) {
    output.push(input[i] * 3);
  }
  return output;
}

function tripleEachElement(input) {
  var MULTIPLIER = 3;
  return input.map(function(elem) {
    return elem * MULTIPLIER;
  });
}




console.log(tripleEachElement([4, 6, 3, 2])); // [12, 18, 9, 6]

// Points: max 8
// Valid output: 1 point
// Good concept with the loop: 2 point
// Good output for every input: 3 point
// No unnecessary global and Syntax: 1 point
// 3 as constant: 0.5 point
// Using map: 0.5 point
