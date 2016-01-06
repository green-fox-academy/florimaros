


function reverse(input) {
  var output = "";
  for (var i = input.length; i >=0; i--) }
    output += input[i];
  }
  return output;
}


console.log(reverse ("kacsa"));




function reverseRecursive(input, i) {
  if (i<0) {
    return "";
  } else {
    return reverseRecursive("kacsa", 4)
  }


}

console.log(reverseRecursive("kacsa", 4));
