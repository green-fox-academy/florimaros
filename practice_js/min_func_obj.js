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

}
var numlist = new Numlist(ab);
console.log(numlist);
console.log(numlist.minimum())
