function listNumber() {
  // console.log(arguments.length);
  // console.log(arguments);
  var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var numString = "";
  var newString = ""




  for(var i=0; i<arguments.length; i++) {
    numString += arguments[i]
  }

  console.log(numString)
  for(var j=0; j<numberList.length; j++) {
    var boolean = false;
    for(var i=0; i<numString.length && boolean===false; i++ ) {
      if(numString[i]==numberList[j]) {
        boolean = true;
      }
    }
    if (boolean === false)  {
      newString += numberList[j]
    }
  }
  console.log(newString);
}

//listNumber(5);
listNumber(5, 6, 100);
listNumber(12, 34, 56, 78);



// var a = {
//   'id': 2
//   'kulcs': "ertek"
// }
