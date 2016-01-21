'use strict';

var array = ["apple", "pear", "melon", "carrot", "grape"];


function delete (array) {
  var newArray = []:
  for (var i = 0; i<array.length; i++)  {
    if (array[i] !== "carrot")  {
      newArray.push(array[i])
    }
  }
  array = newArray;
  return array;
}





console.log(array[0] - array[array.length - 1]);
