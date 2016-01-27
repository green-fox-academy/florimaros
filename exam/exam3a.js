'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'


function Circle (number) {
  this.radius = number
  this.getCircumference = function () {
  return this.radius * 2 * Math.PI;
  }
  this.getArea = function ()  {
    return this.radius * this.radius * Math.PI;
  }
  this.toString = function () {
    return "Radius: " + this.radius + ", Circumference: " + this.getCircumference() + ", Area: " + this.getArea(); 
  }
}



var circle = new Circle(4);
console.log(circle.getCircumference());
console.log(circle.getArea());
console.log(circle.toString());


 // Points: max 8
// Valid outputs: 1 point
// Good constructor: 2 point
// Good getArea outputs for all input: 1 point
// Good getCircumference outputs for all input: 1 point
// Good toString outputs for all input: 1 point
// No unnecessary global and Syntax: 1 point
// using prototype: 0.5 point
// Using Math.PI or Math.pow: 0.5 point
