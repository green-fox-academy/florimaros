"use strict"

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

function CarStore (array_of_cars) {
  this.cars = array_of_cars;
  this.addCar = function (type, price, year) {
    //console.log(type, price, year)
    this.cars.push({"type": type, "price": price, "year": year})
  }
  this.getSumPrice = function ()  {
    var sum = 0;
    for(var i=0; i<this.cars.length; i++)  {
    //  console.log(this.cars[i]);
      sum += this.cars[i].price;
    }
    return sum;
  }
  this.getOldestCarType = function () {
    var oldestcar = this.cars[0]
    for (var i=0; i<this.cars.length; i++)  {
      if (this.cars[i].year < oldestcar.year) {
        oldestcar = this.cars[i];
      }
    } return oldestcar.type;
  }
  this.deleteCarByType = function (type)  {
    var newcarlist = [];
    for (var i=0; i<this.cars.length; i++)  {
      if (this.cars[i].type !== type) {
        newcarlist.push(this.cars[i]);
      }
    } this.cars = newcarlist;
  }
}
var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Ferrari', price: 45000, year: 2013},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001},
  {type: 'Ferrari', price: 80000, year: 2010}
];

var carStore = new CarStore(cars);

carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000
console.log(carStore.getOldestCarType()); // 'Trabant'
carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000
