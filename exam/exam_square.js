'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'



function Square (side)  {
  this.side = side;
  this.getCircumference = function () {
    return 4 * this.side;
  }
  this.getArea = function ()  {
    return this.side * this.side;
  }
  this.toString = function()  {
    return "Side: " + this.side + ", Circumference: " + this.getCircumference() + ", Area: " + this.getArea();
  }
}

var square = new Square(4);
console.log(square.getCircumference());
console.log(square.getArea());
console.log(square.toString());
console.log('Side: 4, Circumference: 16, Area: 16')

 // Points: max 8
// Valid outputs: 1 point
// Good constructor: 2 point
// Good getArea outputs for all input: 1 point
// Good getCircumference outputs for all input: 1 point
// Good toString outputs for all input: 1 point
// No unnecessary global and Syntax: 1 point
// using prototype: 0.5 point
// Using Math.PI or Math.pow: 0.5 point
