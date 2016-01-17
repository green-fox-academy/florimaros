// if x is dividable by 4
// and time is not more than 200
// set out to 'check'
// if time is more than 200
// set out to 'Time out'
// otherwise set out to 'Run Forest Run!'



var x = 8;
var time = 120;
var out = "";
var maxtime = 200;

if(x % 4 === 0 && time < maxtime) {
  out = "check";
} else if (time >= maxtime) {
  out = "time out";
} else {
  out = "fussa tee fussa";
}

console.log(out);
