//Install the readline-sync module. it will be responsible for reading the input from command line
//install: npm install --save readline-sync usage:
//After printing the menu it should get an input from the command line and if the input is one of the menu
//items number it should print the name of the menu, if not it should require the input again
"use strict";

var readlineSync = require('readline-sync');
var fs = require('fs');
var menuItems = ["List todos", "Add todo", "Remove todo", "Quit", "Write to file", "Load from file"];
var listOfTodos = ["Buy beer", "Wash the car", "Walk the dog"];

function showMenu() {
  console.log ("Main menu:\n");
  for(var i=0; i<menuItems.length; i++) {
    console.log(i+1 + ". " +  menuItems[i]);
  }
  console.log ("\nPlease choose a menu item: ");
}

function getMenuItem(choosenNumber) {
  return menuItems[choosenNumber-1];
}

function isValidChoice(number) {
  if(number >= 1 && number <= menuItems.length) {
    return true;
  }
  return false;
}

function listTodoItems() {
  console.log("List of todo items:\n");
  for(var i=0; i<listOfTodos.length; i++) {
    console.log(i+1 + ". " +  listOfTodos[i]);
  }
}

function removeTodoItem() {
  var deleteNumber = parseInt(readlineSync.question());
  var newListOfTodos = [];
  for(var i=0; i<listOfTodos.length; i++) {
    if( i !== deleteNumber-1) {
      newListOfTodos.push(listOfTodos[i])
    }
  }
  listOfTodos = newListOfTodos;
}

function addTodoItem() {
  console.log("Please enter a new todo item:");
  var todoItem = readlineSync.question();
  listOfTodos.push(todoItem);
  console.log("Todo item is saved");
}

function writeToFile() {
  var textList = "";
  for(var i=0; i<listOfTodos.length; i++) {
    textList += listOfTodos[i] +"\n";
  }
    fs.writeFileSync('./alma.txt', textList);
}

function loadFromFile() {
    var content = fs.readFileSync('./alma.txt');
    var contentString = String(content);
    var list = contentString.split("\n");
    listOfTodos = list;
    console.log(listOfTodos);
}


function getMetod(number) {
  if(number === 1) {
    return listTodoItems
  }
  if(number === 2) {
    return addTodoItem
  }
  if (number === 3) {
    return removeTodoItem
  }
  if (number === 5) {
    return writeToFile
  }
if (number === 6) {
  return loadFromFile
  }
}

function inputNumber() {
  var choiceNumber = parseInt(readlineSync.question());

  if(isValidChoice(choiceNumber)) {
    console.log(getMenuItem(choiceNumber));
    if (choiceNumber === 4) {
    }
    else {
      getMetod(choiceNumber)();
      showMenu();
      inputNumber();
    }
  }
  else {
    console.log("Wrong number, try again!")
    inputNumber();
  }
}
showMenu();
inputNumber();
