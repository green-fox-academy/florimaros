var numbers = [4, 5, 6, 7, 8, 9, 10];

function summa(num_list) {
  var s = 0;
  num_list.forEach (function(e) {
    s += e;
  }) return s
} console.log (summa(numbers));
