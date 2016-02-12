//Given two integers, which can be positive and negative, find the sum of all the
//numbers between including them too and return it. If both numbers are equal return a or b.
//Note! a and b are not ordered!
function generateNumberList(start, end) {
  var generateNumbersList = [];
  for (var i = start; i <= end; i++) {
    generateNumbersList.push(i);
  }
  return generateNumbersList;
}
function GetSum( a,b )  {
  if (a===b) {
    return a;
  }
  if(a<b) {
    var numList = generateNumberList(a, b);
  }
  else if (a>b) {
    var numList = generateNumberList(b, a);
  }
  var sumNumbers = 0;
  for (var i = 0; i < numList.length; i++) {
    sumNumbers += numList[i];
  }
  return sumNumbers;
}

console.log(GetSum(1, 0) == 1)   // 1 + 0 = 1
console.log(GetSum(1, 2) == 3)   // 1 + 2 = 3
console.log(GetSum(0, 1) == 1)   // 0 + 1 = 1
console.log(GetSum(1, 1) == 1)   // 1 Since both are same
console.log(GetSum(-1, 0) == -1) // -1 + 0 = -1
console.log(GetSum(-1, 2) == 2)  // -1 + 0 + 1 + 2 = 2
