'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'

function Circle(radius) {
  this.getCircumference = function () {
    return  2 * radius * Math.PI;
  }
  this.getArea = function ()  {
    return radius * radius * Math.PI;
  }
  this.toString = function () {
    return "Radius: " + radius + ", Circumference: " + this.getCircumference () + ", Area: " + this.getArea();
  }
}

var circle = new Circle(4);
console.log(circle.getCircumference())
console.log(circle.getArea())
console.log(circle.toString())
console.log('Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669');
console.log(circle)
