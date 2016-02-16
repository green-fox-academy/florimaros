'use strict';
//fs ha kiolvas barmit is az buffert kap, encodingot is tud tarolni egy tombben
//
var test = require("tape");
var FileReader = require("./readfile");

test("filereader", function(t) {
  var fs = {
    readFile: function (name, cb) {
      cb(null, new Buffer("alma"));
    }
  };

  var FileReader = new FileReader("test.txt")

  FileReader.readLines(function (err, lines) {
    t.deepEqual(lines,("alma"));
    t.end();
  });
});
///buffer beepitett tipus node-ban, stringeket tarol
