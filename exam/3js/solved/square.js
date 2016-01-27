'use strict';

// Create a Square constructor that creates a square object:
// it should take the square's length as a parameter
// it should have a "getPerimeter" method that returns it's perimeter
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Length: 5, Perimeter: 20, Area: 25'

function Square(length) {
  this.length = length;
  this.getPerimeter = function () {
    return this.length * 4;
  }
  this.getArea = function () {
    return this.length * this.length;
  }
  this.toString = function () {
    return 'Length: ' + this.length +
            ', Perimeter: ' + this.getPerimeter() +
            ', Area: ' + this.getArea();
  }
}

var square = new Square(5);
// console.log(square.getPerimeter());
// console.log(square.getArea());
console.log(square.toString());
console.log('Length: 5, Perimeter: 20, Area: 25');
