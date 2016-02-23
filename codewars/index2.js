"use strict"

var logger = require("./")
function createLogger(loggerFunction, Date) {
  function logInfo(message) {
    var date 
  }
  var date = new Date ();
  console.log("INFO" + message + "" + date.toISOString());
}

module.exports = logInfo;
