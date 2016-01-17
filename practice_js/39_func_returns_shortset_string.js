var names = ['Zakarias', 'Hans', 'Otto', 'Ole'];
var names2 = ['Zakarias', 'Hans', 'Otto'];
function get_shortest_string_from_list(strings) {
  var output = strings[0];
  for (var i = 0; i<strings.length ;i++) {
    if (output.length > strings[i].length) {
      output = strings[i];
    }} return output;
}
console.log(get_shortest_string_from_list(names));
console.log(get_shortest_string_from_list(names2));
