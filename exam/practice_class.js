"use strict"
// create a pirate class it should have 2 methods: drink_rum()
// hows_goin_mate(), if the drink_rum was called at least 5 times:
// hows_goin_mate should return "Arrrr!"; "Nothin'" otherwise
function Pirate() {
  this.drunkness = 0;
  this.drink_rum = function() {
    this.drunkness ++;
  }
  this.hows_goin_mate = function () {
    if (this.drunkness >= 5)
      {return "arrr"}
    else {
      return "nothin"
    }
  }
}
var peti = new Pirate ()
peti.drink_rum ()
console.log (peti.hows_goin_mate());

//create class method add

function Student() {
  this.grades = [];
  this.add_grade = function(grade) {
    this.grades.push (grade);
  }
  this.get_average = function () {
      return sum(this.grades) / this.grades.length;
  }
}
function sum(list) {
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    sum = sum + list[i];
  } return sum;
}
var peti = new Student ();
peti.add_grade (5)
console.log (peti.get_average());
