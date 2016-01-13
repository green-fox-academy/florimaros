var grade = [
  {num: 3 subject: "math"},
  {num: 5 subject: "math"},
  {num: 5 subject: "arts"},
  {num: 2 subject: "sport"},
  {num: 3 subject: "physics"},
  {num: 5 subject: "math"},
]




function countFives(grades) {
  var count = 0;
  grades.forEach(function(grade) {
    if (grade.num === 5) {
      count++
    }
});
return count;

console.log(countFives(grades)};
