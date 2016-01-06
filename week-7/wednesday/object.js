"use strict";

var humwee = {
  type: "Rendes katonai hummer";
  color: "Terep";
  km: 20000
};

function ride(car, km) {
  car.km += km;
}

ride(humwee, 200);

console.log(humwee.km);
