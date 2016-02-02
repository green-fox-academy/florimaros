'use strict';
var list = [1, 5, 10, 50, 75];
function maXimum(paramlist) {
  var maximum = paramlist[0];
  for(var i=1; i<paramlist.length; i++) {
    if(paramlist[i]>maximum) {
      maximum = paramlist[i];
    }
  } return maximum;
} console.log(maXimum(list));
