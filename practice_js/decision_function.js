'use strict';

var list = [1, 5, 10, 50, 75];
function deCision(decisionlist) {
  var waseven = false;
  for(var i=0; i<decisionlist.length && waseven === false; i++) {
    if(decisionlist[i]%2===0) {
      waseven = true;
    }
  } return waseven
} console.log(deCision(list));


'use strict';

var list = [1, 5, 10, 50, 75];
function deCision(decisionlist) {
  for(var i=0; i<decisionlist.length; i++) {
    if(decisionlist[i]%2===0) {
    return true
    }
  } return false;
} console.log(deCision(list));
