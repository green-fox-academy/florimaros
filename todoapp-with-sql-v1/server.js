"use strict"

var express = require("express");
var bodyParser = require("body-parser");
var items = require("./items.js");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/todos', function(req, res) {
	items.all(function(result) {
		res.json(result);
	})
});

app.post("/todos", function(req, res) {
  items.add(req.body, function(item) {
  	res.status(201).json(item);
  });
});

app.delete("/todos/:id", function(req, res) {
  items.remove(req.params.id, function(result) {
    res.json(result);
  });
});

app.put("/todos/:id", function(req, res) {
  items.complete(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000...")
});