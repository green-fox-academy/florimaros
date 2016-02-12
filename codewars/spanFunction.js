//The span function is a good one to know. It accepts an array and a predicate function and
//returns two arrays. The first array contains all the elements of the argument array up to
//the item that caused the first failure of the predicate. The second returned array contains
//the rest of the original array. The original array is not modified.

function span(arr, predicate) {
  var listOfNumbers = [[],[]]
  var addToTheFirstList = true;
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i])=== false) {
      addToTheFirstList = false;
    }
    if(addToTheFirstList) {
      listOfNumbers[0].push(arr[i]);
    }
    else {
      listOfNumbers[1].push(arr[i]);
    }
  }
  return listOfNumbers;
}

function isEven(number) {
  if (number % 2===0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(span([10, 2, 3, 55, 79, 160, 1000], isEven));

function span2(arr, predicate) {
  var i = 0;
  while (i < arr.length && predicate(arr[i])) {
     i++;
  }
  return [arr.slice(0, i), arr.slice(i)];
}


function span3(arr, predicate) {
  return [takeWhile(arr, predicate),dropWhile(arr,predicate)];
}

function takeWhile(arr, pred) {
    for (i = 0; i < arr.length; i++) {
        if (!pred(arr[i])) return arr.slice(0, i);
    }
    return arr;
}

function dropWhile(arr, pred) {
    for(i=0;i<arr.length;i++){
        if (!pred(arr[i])) return arr.slice(i);
    }
    return [];
}
function span4(arr, predicate) {
  var pass = [], fail = arr.slice()
  while(fail.length && predicate(fail[0])) {
    pass.push(fail.shift())
  }
  return [pass, fail]
}
