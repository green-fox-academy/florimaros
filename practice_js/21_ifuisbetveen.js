// if u is between 10 and 20 print 'Sweet!'
// if less than 10 print 'More!',
// if more than 20 print 'Less!'

var u = 13;
var out = ""
if (u > 10 && u <= 20) {
  out = "sweet";
} else if (u <= 10) {
  out = "more";
} else {
  out = "less";
}

console.log(out);
