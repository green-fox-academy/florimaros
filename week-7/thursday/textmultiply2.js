"use strict";


function textMutiply (text, number) {
  var output = "";
  for (var i = 0 ; i < number  ; i ++) {
    output += text;
  }
  return output;
}

function textMutiply(text, number) {
  return number > 0 ? text + textMutiply(text, nuumber - 1) : "";
}

console.log(textMutiply("alma", 3));
