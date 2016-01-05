"use strict";

var list = [1, 2, 3, 45];
function sumlist(list) {
  var sum = 0;
  for ( var i = 0 ; i < list.length; i++)  {
    sum += list[i];
  }
  return sum;
}

console.log(sumlist(list));
