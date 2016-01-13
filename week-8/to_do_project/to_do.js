'use strict';
var probaRequest = new XMLHttpRequest();
console.log('probaRequest: ', probaRequest);
function createRequest (url, callback) {
  var probaRequest = new XMLHttpRequest();
  probaRequest.open('GET', url);
  probaRequest.send();
  probaRequest.onreadystatechange = function () {
    console.log("allapot", probaRequest.readyState);
    if (probaRequest.readyState === 4) {
      callback(probaRequest.response);
    }
  };
}
function createNote (url) {
  var probaRequest = new XMLHttpRequest();
  probaRequest.open('POST', url);
  probaRequest.setRequestHeader ("Content-Type", "application/json");
  probaRequest.send(JSON.stringify({text:"hello"}));

}

var url = 'https://mysterious-dusk-8248.herokuapp.com/todos';
var todoContainer = document.querySelector(".todo-cantainer");

var todoCallback = function (response) {
  console.log(JSON.parse(response));
  var todoArray = JSON.parse(response);
  todoArray.forEach(function(todoItem) {
    console.log(todoItem.text);
    var newTodoItem = document.createElement("p");
    newTodoItem.innerText = todoItem.text;
    todoContainer.appendChild(newTodoItem);
  })
}
createRequest(url, todoCallback);
createNote(url);

// probaRequest.open('POST', URL);
// probaRequest.setRequestHeader('Content-Type', 'application/json');
//
// probaRequest.send(JSON.stringify({text: 'Create todos'}));
