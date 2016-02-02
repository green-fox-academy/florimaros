//create a function that returns the smallest number from a list


function getMax(number_list) {
  var output = number_list[0];
  for(var i=0; i<number_list.length; i++) {
    if(output>number_list[i]) {
      output = number_list[i]
    }
  } return output;
}



console.log(getMax([4, 7, 9, 1, 3])); // 9
