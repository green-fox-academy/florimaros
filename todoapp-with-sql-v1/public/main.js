'use strict';

var textarea = document.querySelector('#input');
var todoContainer = document.querySelector('#todo-items');
var url = 'http://localhost:3000/todos';
var postButton = document.querySelector('#post-item');

postButton.addEventListener('click', function() {
	if(textarea.value !== '') {
		var request = new XMLHttpRequest();
		request.open('POST', 'http://localhost:3000/todos');
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify({"text": textarea.value}));
		request.onreadystatechange = function() {
			if(request.readyState === 4) {
				addItemsToDom(request.response)
				textarea.value = '';
			}
		}
	}
});

function getAllItems() {
	var request = new XMLHttpRequest();
	request.open('GET', 'http://localhost:3000/todos');
	request.send();
	request.onreadystatechange = function() {
	    if (request.readyState === 4) {
	      return addItemsToDom(request.response)
	    }
	}
}

function addItemsToDom(response) {
	var items = JSON.parse(response);
	items.forEach(function(item) {
		createDomItem(item);
	});
}

function createDomItem(item) {
	var newItem = document.createElement('p');
	newItem.setAttribute('id', item["todo_id"])
	newItem.classList.add(item["status"]);

	var removeSpan = createRemoveSpan(item["todo_id"]);
	var textSpan = createTextSpan(item["todo_id"], item["text"])

	newItem.appendChild(removeSpan);
	newItem.appendChild(textSpan);
	todoContainer.appendChild(newItem);
}


function createRemoveSpan(id) {
	var removeSpan = document.createElement('span');
	removeSpan.innerText = '[x] ';
	removeSpan.addEventListener('click', function() {
		var request = new XMLHttpRequest();
		request.open('DELETE', 'http://localhost:3000/todos/' + id);
		request.send();
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				removeItemFromDomById(id);
			}
		}
	});
	return removeSpan;
}

function createTextSpan(id, text) {
	var textSpan = document.createElement('span');
	textSpan.classList.add('text')
	textSpan.innerText = text;
	textSpan.addEventListener('click', function() {
		var request = new XMLHttpRequest();
		request.open('PUT', 'http://localhost:3000/todos/' + id);
		request.send();
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				document.getElementById(id).classList.remove('new');
				document.getElementById(id).classList.add('completed');
			}
		}
	});
	return textSpan;
}

function removeItemFromDomById(id) {
	document.getElementById(id).remove();
}

getAllItems();