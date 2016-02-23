"use strict";

function Student(age, name) {
  this.age = age;
  this.name = name;
  this.tosy = [];
  Student.prototype.addToy = function (toy) {
    this.toy.push(toy);
  }

  Student.prototype.showOfWithToys = function () {
    this.toys.forEach(function (toy) {
      console.log("hehehe I hava a; " + toy)
    });
  }
}

var akos = new Student(56, "Akos");
akos
  .addToy("Lego set 8880");
  .addToy("Matchbox Ferrari F40")
  .showOfWithToys()
  .addToy("Scrabble")
  .showOfWithToys()
