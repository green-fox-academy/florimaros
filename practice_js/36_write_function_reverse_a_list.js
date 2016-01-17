var numbers = [3, 4, 5, 6, 7];
// write a function that reverses a list

function reverse(input_list) {
  var output_list = [];
  var i = input_list.length - 1;
    while (i >= 0) {
        output_list.push(input_list[i]);
        i -= 1
    }
    return output_list
}
console.log (reverse (numbers));
