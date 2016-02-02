'use strict';

var list = [1, 5, 10, 50, 75];
var count = 0;
for(var i=0; i<list.length; i++) {
  if(list[i]%2===0) {
    count += 1;
  }
} console.log(count);

var count_odd = 0;
for(var i=0; i<list.length; i++) {
  if(list[i]%2!==0) {
    count_odd += 1;
  }
} console.log(count_odd);
