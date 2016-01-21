'use strict';

function Car(color, type, km) {
  this.color = color;
  this.type = type;
  this.km = km;

  this.ride = function(km) {
    this.km += km;
  }
}

var uaz = new Car ("libafos", "uaz", 300000);
uaz.ride(60);
console.log(uaz.km);
