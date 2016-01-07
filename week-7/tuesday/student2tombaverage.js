"use strict";

function Student() {
  this.grades = [];

  this.addGrade = function(s, g) {
      this.grades.push({subject: s, grade: g});
    };

  this.getCount = function() {
    var output = {};
    this.grades.forEach(function(grade) {
      if (!(grade.subject in output)) {
        output[grade.subject in output)) {
          output[grade.subject] = 0;
        }
        output[grade.subject]++;
    });
    return output;
  };
  return sum/
  this.getAverage = function () {
    var sum = 0;
    var count = 0;
    for (var subject in this.grades) {
      this.grades[subject].forEach(function(grade) {
        sum += grade;
        count += 1;
      };
    }
}

this.getAverage = function () {
  var sum = 0;
  this.grades.forEach(function(grade) {
    sum += grade.num;
  })
}

var dezso = new Student();
dezso.addGrade("matek", 5);
dezso.addGrade("matek", 4);
dezso.addGrade("rajz", 1);
dezso.addGrade("rajz", 3);
dezso.getCount() // rajz: 2, matek: 3
dezso.getAverage()

console.log(jozsi.getAverage());
