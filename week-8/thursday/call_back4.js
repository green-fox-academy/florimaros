'use strict';

var fs = require("fs");

function readAlmaTxt(callback) {
  fs.readFile("alma.txt", function(err, content) {
    var output = String(content);
  callback(output);
  });
}
//csinalni egy fuggvenyt, 1 parameteru, a parameteru egy call beck

readAlmaTxt(function(content) {
  console.log(content);
});
