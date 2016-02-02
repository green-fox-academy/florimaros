'use strict';

var list = [1, 5, 10, 50, 75];
var maximum = list[0];
for (var i=1; i<list.length; i++) {
  if(list[i]>maximum) {
    maximum = list[i];
  }
} console.log(maximum);
