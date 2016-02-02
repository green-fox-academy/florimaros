"use strict"
var ab = [3, 4, -1, 5, 6, 7];
var min = ab[0];
for (var i = 1; i<ab.length; i++) {
  if(min>ab[i]) {
    min = ab[i];
  }
} console.log(min)
