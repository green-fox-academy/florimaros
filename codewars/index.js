"use strict"

var express = require("express");
function createApp() {
  var app = express();
  app.get
}


app.get("/time", function (req, res) {
  var date = new Date();
  res.json( {
    currentTime: date.toISOString()
  });
});

module.exports = app;

app.listen(808);
