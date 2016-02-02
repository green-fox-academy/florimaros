"use strict"
var ab = [3, 4, -1, 5, 6, 7];
function minimum(list) {
  var min = list[0];
  for (var i = 1; i<list.length; i++) {
    if(min>list[i]) {
      min = list[i];
    }
  } return min;
}
console.log(minimum(ab));
