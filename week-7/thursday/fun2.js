"use strict";

function greet(name) {
  console.log("Hi" + name + "!");
}

greet("Flori");

greet("Flori", 4, [])

greet();

function printArgs(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}

printArgs(1, 2, 3);

function fdouble(num) {
  return 2 * num;
}
console.log(double(4));
