var numbers = [4, 5, 6, 7, 8, 9, 10];

function summa(num_list) {
  var s = 0;
  for(var i = 0;num_list.length>i; i++) {
    s += num_list[i];
  }
   return s
} console.log (summa(numbers));
