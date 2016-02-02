'use strict';

var list = [1, 5, 10, 50, 75];
function sumNum(sumlist) {
  var sum = 0;
  for(var i=0; i<sumlist.length; i++) {
    sum += sumlist[i];
  } return sum;
}
console.log(sumNum(list));

function sumEvenNum (sumevenlist) {
  var sum = 0;
  for(var i=0; i<sumevenlist.length; i++) {
    if(sumevenlist[i]%2===0) {
      sum += sumevenlist[i];
    }
  } return sum;
} console.log(sumEvenNum(list));
