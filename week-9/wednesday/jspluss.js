'use strict';
function printEverything (a, b, c)  {
  console.log(a, b, c, this);
}
printEverything (1, 2, 3)

var obj = {
  kacsa: 1,
  printEverything: printEverything
}

obj.printEverything(1, 2, 3);

var obj = {kitt: "szaljbeakocsiba"}

obj.printEverything.call(obj)
console.log("=================")

var obj2 = {kitt: "szaljbeakocsiba"}
var binded = printEverything.bind(obj2);
binded(7, 8, 9);
