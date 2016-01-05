"use strict";


function textMutiply (name, number) {
  var m = "";
  for (var i = 0 ; i < number  ; i += 1) {
    m += name;
  }
  return m;
}


console.log(textMutiply("alma", 3));
