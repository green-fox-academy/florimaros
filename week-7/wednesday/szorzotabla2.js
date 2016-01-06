"use strict";

var szorzotabla1 = "";

for (var i = 1; i <= 10; i++) {
  szorzotabla1 += i + "*" + 4 + "=" + i*4 + "\n";
}
console.log(szorzotabla1);


var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var szorzotabla2= "";
szamok.forEach(function(e) {
  szorzotabla2 += e + "*" + 4 + "=" + e*4 + "\n";
});
console.log(szorzotabla2);

var szorzotabla3 = "";
var sorok = szamok.map(fun ction(e) {
  return e + "*" + 4 + "=" + e*4 + "\n";
})
szorzotabla3=sorok,join
