'use strict';

var list = [1, 5, 10, 50, 75];
var minimum = list[0];
for(var i=1; i<list.length; i++) {
  if (list[i]<minimum) {
    minimum = list[i];
  }
} console.log(minimum);
