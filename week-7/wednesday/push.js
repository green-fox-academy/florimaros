var benaSzavak = [
  "kuty",
  "macsk",
  "alm",
  "kacs",
];
//2
var faszaSzavak = [];

for (var i = 0; i < benaSzavak.lenght, i++) {
  faszaSzavak.push(benaSzavak[i] + "a")
}
console.log(faszaSzavak);

var faszaSzavak2 = [];

benaSzavak.forEach(function(szo) {
  faszaSzavak2.push(szo+"a");
}
console.log(faszaSzavak2);
///3
var faszaSzavak3 = benaSzavak.map(function(szo) {
  return szo + "a";
});

console.log(faszaSzavak3);
