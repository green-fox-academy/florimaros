'use strict';

// Create a Rectangle constructor that creates a rectangle object:
// it should take the rectangle's length and width as a parameter
// it should have a "getPerimeter" method that returns it's perimeter
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Length: 5, Width: 3, Perimeter: 16, Area: 15'

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
  this.getPerimeter = function () {
    return this.length * 2 + this.width * 2;
  }
  this.getArea = function () {
    return this.length * this.width;
  }
  this.toString = function () {
    return 'Length: ' + this.length +
            ', Width: ' + this.width +
            ', Perimeter: ' + this.getPerimeter() +
            ', Area: ' + this.getArea();
  }
}

var rectangle = new Rectangle(5, 3);
// console.log(rectangle.getPerimeter());
// console.log(rectangle.getArea());
console.log(rectangle.toString());
console.log('Length: 5, Width: 3, Perimeter: 16, Area: 15');
