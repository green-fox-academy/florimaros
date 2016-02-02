"use strict"
var num_list = [2134, 3, 432, 543, 134, 5435];
//add the last and the first element of list

console.log(num_list[0]+ num_list.length-1);

//add the second to the third

console.log(num_list[1]+ num_list[2]);

//increment third element

num_list[2] = num_list[2]+num_list[0];

console.log(num_list)

//change the second letter

var string_list = ["p","z","t","h","o","n"];
string_list[1] = "y";
var str = "";
for (var i = 0; i < string_list.length; i++) {
  str += string_list[i]
}
console.log(str);

//tell if both numbers are even

var m1 = 124;
var m2 = 456;

console.log(m1 % 2 === 0 && m2 % 2 === 0);

//tell if numbers  are bigger then 100

console.log(m1 > 100 || m2 > 100);

//console log text if the condition is true

if(m1<m2) {
  console.log("hurray");
}

//print 'Yeah!' if dividable by 4 but print 'End of program' after regardless

if (m1 % 4 === 0) {
  console.log("yeah");
}
console.log("end of program");

// if m1 is even increment m2 by one
if (m1 % 2 === 0)  {
  m2 += 1;
}
console.log(m2);

//if the string is longer than 4 characters print 'Long!' otherwise print 'Short!'

var string = "monkey";
if (string.length >= 4) {
  console.log("long");
} else {
  console.log("short");
}

// Tell if the string has even or odd number of characters with a True
//for even and false False output otherwise

console.log(string.length % 2 === 0);

//if the last and the first letter of the string are the same
//double the variable called out, if not half it

var string2 = "seasons";
var out = 6;
if (string2[0] === string2[string2.length - 1]) {
  out *= 2;
} else {
  out /= 2;
} console.log(out);

// if u is between 10 and 20 print 'Sweet!', if less than 10 print 'More!',
// if more than 20 print 'Less!'

var u = 13;
var out = ""
if (u > 10 && u <= 20) {
  out = "sweet";
} else if (u <= 10) {
  out = "more";
} else {
  out = "less";
} console.log(out);

// if the v list contains one element set the out to 1,  if the v list
//contains two element set the out to 2 if the v list contains more than 2
//set the out to 10 if the v contains no elements it should set to -1

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

// if x is dividable by 4 and time is not more than 200 set out to 'check'
// if time is more than 200 set out to 'Time out'
// otherwise set out to 'Run Forest Run!'

var x = 5;
var time = 120;
var out = "";
var maxtime = 200;

if(x % 4 === 0 && time < maxtime) {
  out = "check";
} else if (time >= maxtime) {
  out = "time out";
} else {
  out = "run forest run";
}
console.log(out);

// print the numbers till y from 0

var y = 5;
var i = 1;
for (i; i<=y; i++)  {
  console.log(i);
};

// print content of the text variable z times
var z = 4;
var text = 'Gold';
for(var i=0; i<z; i++) {
  console.log(text);
}

//print all elements of list

var aa = [4, 5, 6, 7];
for (var i = 0; i<aa.length; i++) {
  aa[i] *= 1;
console.log(aa);
}

//add the letter to the string;

var ac = ["kuty", "macsk", "cic"];
for (i=0; i<ac.length; i++ ) {
  ac[i] += "a";
} console.log (ac);

//print sum of all numbers;

var ad = [3, 4, 5, 6, 7];
var summa = 0;
for (var i = 0; i<ad.length; i++) {
  summa += ad[i];
} console.log (summa);

//count elements of the list

var list = [1, 5, 10, 50, 75];
var count = 0;
for(var i=0; i<list.length; i++) {
  if(list[i]%2===0) {
    count += 1;
  }
} console.log(count);

var count_odd = 0;
for(var i=0; i<list.length; i++) {
  if(list[i]%2!==0) {
    count_odd += 1;
  }
} console.log(count_odd);

//filter elements of the list

'use strict';
var list = [1, 5, 10, 50, 75];
var evennumbers = [];
for(var i=0; i<list.length; i++) {
  if(list[i]%2===0) {
    evennumbers.push(list[i]);
  }
} console.log(evennumbers)
