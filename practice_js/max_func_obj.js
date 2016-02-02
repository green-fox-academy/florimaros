"use strict"
var ab = [3, 4, 5, 6, 7];

function Numlist (list) {
  this.list = list;
  this.minimum = function () {
    var minel = this.list[0];
    for (var i=1; i<this.list.length; i++) {
      if (this.list[i]<minel) {
        minel = this.list[i]
      }
    }
    return minel;
  }
  this.maximum = function () {
    var maxel = this.list[0];
    for (var i = 1; i<this.list.length; i++) {
      if (this.list[i]>maxel) {
        maxel = this.list[i];
      }
    }
    return maxel;
  }
  this.reverse = function () {
    for(var i=this.list.length-1; i>=0; i-- ) {
      console.log(this.list[i])
    }
  }

}
var numlist = new Numlist(ab);
console.log(numlist);
console.log(numlist.list);
console.log(numlist.minimum());
console.log(numlist.maximum())
numlist.reverse();
