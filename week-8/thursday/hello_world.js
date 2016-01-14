'use strict';
var express = require("express");

var app = express()

app.get("/", function (reg, res) {
  res.send("Hello world");
});
var a = parseInt(query["a"]);
var b = parseInt(query["b"]);
var result = a + b;

console.log(a, b);
console.log(query);

res.send(result.toString() + "\n");
});

app.post("/add", function (req, res) {
  console.log(req.body);
  res.status(204).end;
  });

app.post("/add", function (req, res) {
  console.log(req.body);
  res.status(204).end();
});


  res.send("hello," + name + "\n");
  

app.listen(3000);
