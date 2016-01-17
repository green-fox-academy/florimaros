var ad = [3, 4, 5, 6, 7];

var summa = 0;
var i = 0;
while (i<ad.length) {
  summa += ad[i];
  i += 1;
} console.log (summa);

for (var i = 0; i<ad.length; i++) {
  summa += ad[i];
} console.log (summa);

ad.forEach(function(e) {
  summa += e;
}) console.log (summa);
