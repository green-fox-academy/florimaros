var numbers = [3, 4, 5, 6, 7];
function oddNumb(numlist) {
  var l = [];
  for (var i = 0; i<numlist.length ;i++) {
    if (numlist[i] % 2 === 0) {
      l.push(numlist[i])
    }
  }
  return l;
}
console.log(oddNumb(numbers));
