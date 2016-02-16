'use strict';
//fs ha kiolvas barmit is az buffert kap, encodingot is tud tarolni egy tombben
//
var fs = require("fs");

function FileReader(fileName, newFs) {
  this.fileName = fileName;
  this.fs = newFs || fs;
}

FileReader.prototype.readLines = function (cb) {
  this.fs.readFile(this.fileName, function (err) {
    if (err) {
      return cb(err);
    }
    cb(null, String(content).split("/n"));
  });
  

//azt teszteled ami ebben tortenik: spliteles, filemegadasa...

module.exports = FileReader;
