//Install the readline-sync module. it will be responsible for reading the input from command line
//install: npm install --save readline-sync usage:
//After printing the menu it should get an input from the command line and if the input is one of the menu
//items number it should print the name of the menu, if not it should require the input again

var readlineSync = require('readline-sync');
var menuitems = ["List todos", "Add todo", "Remove todo", "Quit"];
var list_of_todos = ["Buy beer", "Wash the car", "Walk the dog"];

function menu () {
  console.log ("Main menu:\n");
    for(var i=0; i<menuitems.length; i++) {
      console.log(i+1 + ". " +  menuitems[i]);
    }
    console.log ("\nPlease choose a menu item: ");
}

function getMenuitems(index) {
  return menuitems[index-1];
}

function inputNumber() {
  var choosenumber =  parseInt(readlineSync.question());

  if(choosenumber >= 1 && choosenumber <= menuitems.length) {
    console.log(getMenuitems(choosenumber));
      if(choosenumber===2) {
        console.log("Please enter a new todo item:");
        var todoit =  (readlineSync.question());
        list_of_todos.push(todoit);
        console.log("Todo item is saved");
        menu();
        inputNumber();
    }

    else if(choosenumber===1) {
      console.log("List of todo items:\n");
      for(var i=0; i<list_of_todos.length; i++) {
        console.log(i+1 + ". " +  list_of_todos[i]);
      }
      menu();
      inputNumber();
    }
//indentalast atnezni, menut at tudod-e alakitani, h lehet az input no rovidebb, reszeket
    else if(choosenumber===3) {
      var deletenumber =  parseInt(readlineSync.question());
      var new_list_of_todos = [];
      for(var i=0; i<list_of_todos.length; i++) {
        if( i !== deletenumber)
        new_list_of_todos.push(list_of_todos[i])
      }
      list_of_todos = new_list_of_todos;

      menu();
      inputNumber();
    }
    else {
    console.log("wrong input try again"); {
    }
  }
  }
}



menu();
inputNumber();
