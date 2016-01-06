"use strict";

function Student() {
  this.grades=[];
  this.addGrade = function(grade) {
    this.grades.push (grade);
  }
  this.getAverage = function() {
    var sum = 0
    this.grades.forEach(function(i) {

    }
  }
}


var dezso = new Student();
dezso.addGrade("matek", 5);
dezso.addGrade("matek", 4);
dezso.addGrade("rajz", 1);
dezso.addGrade("rajz", 3);
dezso.getCount() // rajz: 2, matek: 3

console.log(jozsi.getAverage());
