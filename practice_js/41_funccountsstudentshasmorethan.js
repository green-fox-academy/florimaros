var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Teodor', 'age': 3, 'candies': 2}
];
function get_da_rich_mothers(kiddos) {
  var rich_mother_count = 0;
  for (var i = 0; i<kiddos.length ;i++) {
    if (kiddos[i].candies > 4) {
      rich_mother_count += 1;
    }} return rich_mother_count;
} console.log(get_da_rich_mothers(students));

function is_rich(kid) {
  return kid["candies"] > 4;
}

//function filter_da_rich(peeps) {
  //return students.lenghts(list(filter(is_rich, peeps)));
//} console.log (filter_da_rich(students));
