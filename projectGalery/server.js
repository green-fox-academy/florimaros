'use strict';
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/hu', function(req, res) {
res.send('<h1>Helló Világ!</h1>');
});
app.listen(3000);
