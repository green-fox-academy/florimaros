"use strict"

//ad.forEach(function(e) { summa += e;} console.log (summa);

// create a function that greets ae

var ae = "Jozsi"
var greet = function () {
  console.log("csaa" + ae);
}
function greet2(name) {
  console.log("csaa " + name);
}
greet2("you");
greet2("helo");
//create a function that double numbers

var af = 123;
function double(number) {
  return number * 2
} console.log (double(af));

// write a function that gets a string as an input and appends an 'a' character to its end

var ag = "kuty";
function pusH(text) {
  return text + "a";
} console.log(pusH(ag));

//write a function that sum all elements of list

var numbers = [4, 5, 6, 7, 8, 9, 10];
function sum_num(num_list) {
  var s = 0;
  for(var i = 0;i<num_list.length; i++) {
    s += num_list[i];
  } return s;
} console.log(sum_num(numbers));

//write a function for return its factorial

function factorial(num) {
  var output = 1;
  for (var i=1; i<=num; i++ ) {
    output *= i;
  }
  return output;
} console.log (factorial(5));

// write a function that reverses a list

var numbers = [3, 4, 5, 6, 7];
function reverse(input_list) {
  var output_list = [];
  for(var i = input_list.length - 1; i>=0; i--) {
        output_list.push(input_list[i])
    } return output_list
} console.log (reverse (numbers));

//write a function to filter odd numbers;

var numbers = [3, 4, 5, 6, 7];
function evenNumb(numlist) {
  var list = [];
  for (var i = 0; i<numlist.length ;i++) {
    if (numlist[i] % 2 === 0) {
      list.push(numlist[i])
    }
  } return list;
} console.log(evenNumb(numbers));

//write a function to return minimal element of list;

var numbers = [7, 5, 8, -1, 2];
function get_minimum_from_list(number_list) {
  var output = number_list[0];
  for (var i = 0; i<number_list.length ;i++) {
    if (output > number_list[i]) {
      output = number_list[i];
    }
  } return output;
} console.log(get_minimum_from_list(numbers));

//write a funvtion wich will return the shortest string;

var names = ['Zakarias', 'Hans', 'Otto', 'Ole'];
var names2 = ['Zakarias', 'Hans', 'Otto'];
function get_shortest_string_from_list(strings) {
  var output = strings[0];
  for (var i = 0; i<strings.length ;i++) {
    if (output.length > strings[i].length) {
      output = strings[i];
    }
  } return output;
}
console.log(get_shortest_string_from_list(names));
console.log(get_shortest_string_from_list(names2));

//write a function wich will return the name of the student who has 5 candies

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
    }
  }
} console.log(get_candy_count(students2));

//write a function wich will return no of candies for all students youngest than

function get_candy_count(students) {
  var candy_count = 0;
  for (var i = 0; i<students.length ;i++) {
    if (students[i].age < 15) {
      candy_count += students[i]["candies"]
    }} return candy_count;
} console.log(get_candy_count(students2));


function get_da_rich_mothers(kiddos) {
  var rich_mother_count = 0;
  for (var i = 0; i<kiddos.length ;i++) {
    if (kiddos[i].candies > 1) {
      rich_mother_count += 1;
    }} return rich_mother_count;
} console.log(get_da_rich_mothers(students2));

//mathrandom general egy szamot amit megszorzol a lista hosszaval a math.floor
//lefele kerekiti es beletoltod sz indexbe visszaadod a listaba rzen indexu elemet

'use strict';
var students = [   'Zsolt',  'Judit',   'Matyi',  'Flori'];
function getRandomFromArray(list) {
  var index = Math.floor(Math.random() * list.length-1);
  return list[index];
} console.log(getRandomFromArray(students));

//kivalasztas

'use strict';

var list = [1, 5, 10, 50, 75];
function deCision(decisionlist) {
  var waseven = false;
  for(var i=0; i<decisionlist.length && waseven === false; i++) {
    if(decisionlist[i]%2===0) {
      waseven = true;
    }
  } return waseven
} console.log(deCision(list));

var list = [1, 5, 10, 50, 75];
function deCision(decisionlist) {
  for(var i=0; i<decisionlist.length; i++) {
    if(decisionlist[i]%2===0) {
    return true
    }
  } return false;
} console.log(deCision(list));

//filter name by gender

'use strict';
var kids = [
  {name: 'Julika', age: 8, sex: 'female'},
  {name: 'Tiborka', age: 7, sex: 'male'},
  {name: 'Zsolti', age: 6, sex: 'male'},
  {name: 'Gerda', age: 9, sex: 'female'},
  {name: 'Zsomborka', age: 8, sex: 'male'}
];
function groupBySex(kids, gender) {
  var output = [];
  for (var i= 0; i<kids.length; i++) {
    if(kids[i].sex === gender) {
      output.push(kids[i].name)
    }
  }  return output;
} console.log(groupBySex(kids, 'female')); // ['Julika', 'Gerda']
