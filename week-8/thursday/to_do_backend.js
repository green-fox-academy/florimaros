'use strict';

var express = require("express");
//ez alatt erem el az express modul-t require - behuzza az express modult
var bodyParser = require("body-parser");
var app = express();
//az app valtozoba toltomaz express lefuto fugvenyt
app.use(bodyParser.json());

var list = [
    {
        "completed": false,
        "id": 1,
        "text": "Buy milk"
    },
    {
        "completed": false,
        "id": 2,
        "text": "Make dinner"
    },
    {
        "completed": false,
        "id": 3,
        "text": "Save the world"
    }
];
//letrehoztam egy lista amibe tarolom a to do itemeket
app.get("/todos", function (reg, res) {
  res.send(list);
});

app.post("/todos", function(reg, res) {
  list.push({id:reg.body.id, text:reg.body.text, completed:reg.body.completed})
  res.json({succes:true})
});

//
//az express hez kapcsolodik figyel a get metodusokra get fuggveny appra nezve,
//figyel a get keresre a localhost per linken, ha talal egy ilyet akkor megcsinalja ami a bajszokon belul van
//visszakuldi azt ami a listbe van

app.get("/helloworld", function (reg, res) {
  res.send('hello world');
});

app.listen(3000);
