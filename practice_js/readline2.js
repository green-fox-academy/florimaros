'use strict';
//fs ha kiolvas barmit is az buffert kap, encodingot is tud tarolni egy tombben
//
function FileReader(fileName, fs) {
  this.fileName = fileName;
  this.fs = fs;
}

FileReader.prototype.readLine = function (cb) {
  this.fs.readFile(this.fileName, function (err) {
    if (err) {
      return cb(err)
    }
    return cb(null,String(content).split("/n")
  });
};

module.exports = FileReader;
