'use strict';
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(3000);
//git log -1 | tee commit.log
//rm -rf node_modules .git .gitignore
//git config --global user.name "CODESHIP deploy script"
//git config --global user.email "codeship@example.com"
//git init .
//git remote add heroku-staging git@heroku.com:lufi-ci-project.git
//git add --all && git commit -am 'CODESHIP deployed `cat commit.log`'
//git push -f heroku-staging master
//!! git remote add heroku-staging git@heroku.com:SAJAT APP NEV !!
