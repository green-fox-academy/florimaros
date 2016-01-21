"use strict"
var a = ["zoli", "labda", "uto"];

console.log(a.length);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

for (var i=0; i<a.length; i++) {
  console.log (a[i]);
}

for (var i=a.length-1; i>=0; i--) {
  console.log (a[i]);
}

var b = [
{"name": "laci", "age": 10 },
{"name": "mari", "age": 7 },
{"name": "saci", "age": 12 }
]

console.log(b);
console.log(b[0]);
console.log(b[0]["name"]);
console.log(b[0]["age"]);
//kiirni a nevet es a korat
// NEV: mari - KOR: 7
console.log("NEV: " + b[1]["name"] + " - KOR: " + b[1]["age"]);
printList(b);
function Human(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    return "hello world i am "+this.name;
  }
}
var c = new Human ("tibi", 9);
var d = new Human ("james", 10);
console.log(c, d);
console.log(c.hello());
console.log(d.hello());

b.push(c);
printList(b);
var e = b;
function printList (b) {
  for (var i = 0; i<b.length; i++) {
  console.log ("NEV: " + b[i]["name"] + " - KOR: " + b[i]["age"]);
}

}
printList(e)
