'use strict';

var list = [1, 5, 10, 50, 75];
var waseven = false;
for(var i=0; i<list.length && waseven === false; i++) {
  if(list[i]%2===0) {
    waseven = true;
  }
} console.log(waseven);
