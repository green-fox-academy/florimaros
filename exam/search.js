//create a function that determines if a letter is in a string

function searcH (stringL, letterL) {
  for(var i=0; i<stringL.length; i++) {
    if(stringL[i] === letterL) {
      return true;
    }
  }
  return false;
}

console.log(searcH("alma", "a"));  //true
console.log(searcH("korte", "a")); //false
console.log(searcH("cba", "a")); //true
