// if the v list contains one element set the out to 1
// if the v list contains two element set the out to 2
// if the v list contains more than 2 set the out to 10
// if the v contains no elements it should set to -1
var v = [1, 2, 3];
var out = 0;

if (v.length === 0) {
  out = -1;
} else if (v.length === 1) {
  out = 1;
} else if (v.length === 2) {
  out = 2;
} else {
  out = 10;
}

console.log(out);
