function Student(name) {
  this.name = name;
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

function Class() {
  this.students = [];
  this.add_student = function (student) {
    this.students.push(student);
  }
  this.get_average = function () {
    var summa = 0;
    for (var i = 0; i < this.students.length ; i++) {
      summa += this.students [i].get_average();
    }
    return summa / this.students.length;
  }
  this.get_names = function () {
    var names = [];
    for (var i = 0; i < this.students.length ; i++) {
      names.push(this.students [i].name);
    } return names;
  }
}

var my_class = new Class()

var kati = new Student('Kati')
kati.add_grade(5)
kati.add_grade(5)
kati.add_grade(4)
my_class.add_student(kati)
var jozsi = new Student('Jozsi')
jozsi.add_grade(3)
jozsi.add_grade(2)
jozsi.add_grade(1)
my_class.add_student(jozsi)
var anti = new Student('Antal')
anti.add_grade(5)
anti.add_grade(5)
anti.add_grade(3)
my_class.add_student(anti)

console.log(my_class.get_average());
console.log(my_class.get_names());
