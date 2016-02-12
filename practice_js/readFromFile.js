'use strict';
var fs = require("fs");

function WordCounter(fileName, fs) {
  this.fileName = fileName;
  this.fs = fs;
}

WordCounter.prototype.getCharacterCount = function(cb) {
  fs.readFile(this.fileName, function (err, content) {
    if(err)
      return cb(err);
  }
      cb(null, String(content).length);
  });
});


var almaCount = new WordCounter("./alma.txt");

//az objektum beveszi a filet amit be akarunk olvasni, letrehozzuk az almacount -ot,
//lesz egy metodusa, meghivja a callbeck-et a count-al, stringe valtoztatott tartalomnak meg kell nezni alengthjet

almaCount.getCharacterCount(function(err, count)
console.log(count); )
