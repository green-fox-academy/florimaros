//create a function that returns a new array that contains
//the doubles of the originial arrays elements

function doubleArray(num_list) {
var output = [];
for (var i=0; i<num_list.length; i++) {
  output.push(num_list[i] * 2);
} return output;

};

console.log(doubleArray([2, 8, 6, 9])); //[4, 16, 12, 18]
