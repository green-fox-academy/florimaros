var students2 = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
];
function get_candy_count(students) {

  for (var i = 0; i<students.length ;i++) {
    if (students[i].candies === 5) {
      return students[i]["name"];
    }}
//ha az age propertyben tarolt ertek kisebb mint 10
//a candycounthoz adja hozza a students iedik elemenek candies
//propretijeben tarolt erteket
} console.log(get_candy_count(students2));

function get_candy_count_foreach(students) {
  students.forEach (function (e) {
    if (e.candies === 5) {
      return e["name"];
    }
  })
}

// 0 + 2
