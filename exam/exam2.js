'use strict';

// Write a function that checks, if an array contains a number
// that has 5 as divisor. If it has it should return true otherwise false.

function hasDivisableBy5(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] % 5 === 0) {
      return true;
    }
  }
  return false;
}

function hasDivisableBy5(numbers) {
  var DIVISOR = 5;
  return numbers.some(function(number) {
    return number % DIVISOR === 0;
  });
}


console.log(hasDivisableBy5([1, 8, 3, 6, 2])); // false
console.log(hasDivisableBy5([11, 7, 15, 9])); // true

// Points: max 8
// Valid output: 1 point
// Good concept with the loop: 2 point
// Good output for every input: 3 point
// No unnecessary global and Syntax: 1 point
// 5 as constant or no unnecessary variable: 0.5 point
// using reduce or some: 0.5 point
