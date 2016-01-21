'use strict';

var array = ["apple", "pear", "melon", "carrot", "grape"];


function deleteArray(array) {
  var list = [];
  for (var i = 0; i<array.length; i++)  {
    if (array[i] !== "carrot") {
      list.push(array[i]);
    }
  } array = list;
    return array;
}


console.log(deleteArray(array));
