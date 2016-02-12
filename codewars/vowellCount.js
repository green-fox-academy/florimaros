//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, and u as vowels for this Kata.
function isVowel(c) {
  return  c === "a" ||
          c === "e" ||
          c === "i" ||
          c === "o" ||
          c === "u";
}
function getCount(str) {
  var vowelsCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

console.log(getCount("abcdefghijklmnopqrst"));
