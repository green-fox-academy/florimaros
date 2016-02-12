//Given two integers, which can be positive and negative, find the sum of all the
//numbers between including them too and return it. If both numbers are equal return a or b.
//Note! a and b are not ordered!
function GetSum( a,b )  {
  if (a===b) {
    return a;
  }
  var numList = []
  if(a<b) {
    for(var i=a; i<=b; i++) {
      numList.push(i)
    }
  }
  else if (a>b) {
    for(var i=b; i<=a; i++) {
      numList.push(i)
    }
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
