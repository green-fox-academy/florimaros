'use strict';
var list = [1, 5, 10, 50, 75];
function miNimum(paramlist) {
  var minimum = paramlist[0];
  for(var i=1; i<paramlist.length; i++) {
    if(paramlist[i]<minimum) {
      minimum = paramlist[i];
    }
  } return minimum;
}
console.log(miNimum(list));
