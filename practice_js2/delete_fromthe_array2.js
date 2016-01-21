'use strict';

var array = ["apple", "pear", "melon", "carrot", "grape"];


function delete3(array) {
  var newArra =  [];
  array.forEach(function(elem) {
    if (elem!== "carrot") {
      newArray.push(elem);
    }
  });
  array = newArray;
  return array;
}

function delete3(array) {
  array.splice(array.indexOf("carrot"), 1);
  return array;
}


console.log(array[0] - array[array.length - 1]);
