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
