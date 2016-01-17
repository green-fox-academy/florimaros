var students2 = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
];
function get_candy_count(students) {
  var candy_count = 0;
  //amikor osszegzel kell valtozo amibe osszegyujtod az osszeget
  //a kezdo erteke semleges ertek, osszeadasnal 0, szorz 1, stringnel"
  // ha van tipusod a + semgleges e
  for (var i = 0; i<students.length ;i++) {
    if (students[i].age < 10) {
      candy_count += students[i]["candies"]
    }} return candy_count;
//ha az age propertyben tarolt ertek kisebb mint 10
//a candycounthoz adja hozza a students iedik elemenek candies
//propretijeben tarolt erteket
} console.log(get_candy_count(students2));

function get_candy_count_foreach(students) {
  var candy_count = 0;
  students.forEach (function (e) {
    if (e.age < 10) {
      candy_count += e["candies"]
    }
  }) return candy_count
}

// 0 + 2
