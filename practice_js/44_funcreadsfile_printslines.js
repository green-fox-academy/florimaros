var filename = "alma.txt";
function print_file_lines_with_a(name) {
  var file_to_print = open(name);
  var content = file_to_print.read();
  var file_to_print.close();
  var output = "";
  var lines = content.split("\n");
  for (line.lines) {
    output += "a" + line + "n";
  }  return output;
} console.log print_file_lines_with_a("alma.txt");
