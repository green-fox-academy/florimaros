'use strict';

function createCar(color, type, km) {
  var

}

  function ride(distance) {
    km += distance;
  }

function getKm()  {
  return km;
}

return {
  ride: ride,
  getKm: getKm
};

}
var opel = createCar("white", "opel", 4000);
opel.ride(100);
