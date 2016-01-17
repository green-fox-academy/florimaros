var numbers = [7, 5, 8, -1, 2];
function get_minimum_from_list(number_list) {
  var output = number_list[0];
  for (var i = 0; i<number_list.length ;i++) {
    if (output > number_list[i]) {
      output = number_list[i];
    }
  }
    return output;
} console.log(get_minimum_from_list(numbers));
