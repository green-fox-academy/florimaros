"use strict"
var ab = [3, 4, -1, 5, 6, 7];
var max = ab[0];
for (var i = 1; i<ab.length; i++) {
  if(max<ab[i]) {
    max = ab[i];
  }
} console.log(max)
