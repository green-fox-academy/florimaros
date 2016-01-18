var ab = [3, 4, 5, 6, 7];
// please double all the elements of the list

for (var i=0; i<ab.length; i++) {
  ab[i] *= 2;
  i = i + 1;
} console.log(ab);

var i=0;
while(i<ab.length) {
  ab[i]*=2;
  i=i+1;
} console.log(ab);
