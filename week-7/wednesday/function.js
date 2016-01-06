"use strict";

function greet(name) {
  console.log("Csa-aa " + name + "!");
}

greet (" Flori");

var koszontes = greet;

koszontes("Gyuri");

var print = console.log;

function greeter(name, log) {
  log("Csovi" + name)
}

greeter("Lajoskam", print);

function add(a, b) {
  return a+b;
}

console.log(add(1, 2));
var add = function (a, b) (return a + b; );

greeter("csabi", function(text)) {
  console.log(text, "logged by my function");
}
