"use strict"

var tape = require ("tape");
var supertest = require("supertest");

var app = require("./app");


test(function (t) {
  supertest(app)
  .get("/time")
  .expect(200)
  .end(function (err) {
    if (err) {
      t.fall(err);
    }
    t.end();
  })
});
