"use-strict"

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '05011978',
  database: 'todo'
});

connection.connect();

function addItem(attributes, callback) {
  connection.query('INSERT INTO todo SET ?', attributes, function(err, result){
    if (err) throw err;
    return getLastAddedItem(callback);
  });
}

function removeItem(id, callback) {
  connection.query('DELETE FROM todo WHERE todo_id= ?', id, function(err, result) {
    if (err) throw err;
    callback(id);
  });
}

function allItems(callback) {
  connection.query('SELECT * FROM todo ORDER BY todo_id ASC', function(err, result) {
    if (err) throw err;
    return callback(result);
  });
}

function getLastAddedItem(callback) {
  connection.query('SELECT * FROM todo ORDER BY todo_id DESC LIMIT 1', function(err, result) {
    if (err) throw err;
    return callback(result);
  });
}

function setCompleted(id, callback){
  connection.query('UPDATE todo SET status="completed" WHERE todo_id= ?', id, function(err, result) {
    if (err) throw err;
    return callback(id);
  });
}

module.exports = {
  add: addItem,
  remove: removeItem,
  all: allItems,
  complete: setCompleted
};
