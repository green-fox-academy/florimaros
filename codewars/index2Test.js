"use strict"

var test = require("tape");

var createLogger = require("./loginfo");
var logger = createLogger();

test(function (t) {
  t.equal(typeof logger logInfo, "function")
  t.end();
}
