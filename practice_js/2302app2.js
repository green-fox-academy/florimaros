'use strict';

const express = require('express');

const app = express();

app.get("/time",(req, res) =>
 {
   res.json({});
})

module.exports = app;
