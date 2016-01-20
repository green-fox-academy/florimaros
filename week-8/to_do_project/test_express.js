"use strict";
var express = require("express");
//webserver letrehozasa
var app = express();

app.use(express.static("public"))?
console.log("hello");

app.get("/test", function(req, res) {
  res.render("<html1><body>so much wow></html>");
});

app.listen(3000, function() {
  console.log("listening on port 3000...")
});
