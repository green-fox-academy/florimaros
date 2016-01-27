'use strict';

// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.


function countLetters(string) {
  var output = {};
  for (var i = 0; i < string.length; i++) {
    if (!(string[i] in output)) {
      output[string[i]] = 0;
    }
    output[string[i]]++;
  }
  return output;
}

function countLetters(string) {
  return string.split('').reduce(function(output, letter) {
    output[letter] = output[letter] + 1 || 0;
    return output;
  }, {});
}

console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}

// Points:
// Valid output: 1 point
// Good concept with the loop: 3 point
// Good output for every input: 2 point
// No unnecessary global and Syntax: 1 point
// Using no if: 0.5 point
// Using reduce: 0.5 point
