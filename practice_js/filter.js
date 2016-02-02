'use strict';

var list = [1, 5, 10, 50, 75];
var evennumbers = [];
for(var i=0; i<list.length; i++) {
  if(list[i]%2===0) {
    evennumbers.push(list[i]);
  }
} console.log(evennumbers)
