

//Given a string or number write a function tea42 that takes as input a string or
//number and returns a string  where every '2' charcter or digit has been replaced with a t.

function tea42(input) {
  var inputString = String(input);
  var wordString = "";
  for(var i=0; i<inputString.length; i++) {
    if(inputString[i]==="2") {
      wordString += "t";
    }
    else {
      wordString += inputString[i];
    }
  }
  return wordString;
};

console.log(tea42(9032));
