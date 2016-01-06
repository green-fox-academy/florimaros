


function reverse(input) {
  var output = "";
  for (var i = input.length; i >=0; i--) {
    output += input[i];
  }
  return output;
}


console.log(reverse ("kacsa"));
