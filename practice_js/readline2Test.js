'use strict';
//fs ha kiolvas barmit is az buffert kap, encodingot is tud tarolni egy tombben
//
var test = require("tape");
var FileReader = require("./readfile");

test("filereader", function(t) {
  t.equal(typeof FileReader, "function");
  t.end();
    }};

test("readfile exists", function (t) {
  var reader = new FileReader("alma.txt");
  t.equal(typeof reader.readLine,"function");
  t.end();
});

test("readfile exists", function (t) {
  var fs = new FileReader("alma.txt");
  t.equal(typeof reader.readLine,"function");
  t.end();
})
