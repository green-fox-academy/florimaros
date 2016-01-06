"use strict";

var humwee = {
  type: "Rendes katonai hummer";
  color: "Terep";
  km: 20000
  ride: function(km) {
  this.km += km;
  }
};

humwee2,ride(200);

console.log(humwee.km);
console.log(humwee2);
