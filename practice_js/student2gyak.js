'use strict';

function Student() {
  this.grades = [];
  this.addGrade = function (subject, grade) {
    var obj = {"tantargy": subject, "jegy": grade}
    this.grades.push(obj);
  }
  this.getCount = function () {
    var obj2 = {}
    for (var i = 0; i<this.grades.length; i++) {
      if (!(this.grades[i]["tantargy"] in obj2)) {
        obj2[this.grades[i]["tantargy"]] = 0
      }
       obj2[this.grades[i]["tantargy"]] += 1;
    }
    return obj2
  }
}

var dezso = new Student();
dezso.addGrade('matek', 5);
dezso.addGrade('matek', 4);
dezso.addGrade('matek', 4);
dezso.addGrade('rajz', 1);
dezso.addGrade('rajz', 3);
dezso.addGrade('magyar', 4);
console.log(dezso.getCount()) // {'rajz': 2, matek: 3}
//console.log(dezso.getAverage()) // 3.4
// szorgalmi
//dezso.getAverageBySubject() // {'matek': 4.3, 'rajz': 2}
console.log(dezso.grades)
