"use strict";

function Student() {
  this.grades= {};

  this.addGrade = function(subject, grade) {
    if (!(subject in this.grades)) {
      this.grades[subject] = [];
    };

  this.getCount = function() {
    var output = {};
    for (var subject in this.grades) {
      output[subject] = this.grades[subject].length;
    }
    return output;
  };
}


var dezso = new Student();
dezso.addGrade("matek", 5);
dezso.addGrade("matek", 4);
dezso.addGrade("rajz", 1);
dezso.addGrade("rajz", 3);
dezso.getCount() // rajz: 2, matek: 3
dezso.getAverage()

console.log(jozsi.getAverage());
