//Install the readline-sync module. it will be responsible for reading the input from command line
//install: npm install --save readline-sync usage:
//After printing the menu it should get an input from the command line and if the input is one of the menu
//items number it should print the name of the menu, if not it should require the input again


var readlineSync = require('readline-sync');
var menuitems = ["List todos", "Add todo", "Remove todo", "Quit"];
function menu () {
    console.log ("Main menu:\n");
    for(var i=0; i<menuitems.length; i++) {
      console.log(i+1 + ". " +  menuitems[i]);
    }
    console.log ("\nPlease choose a menu item: ");
  }
function getMenuitems(index) {
  return menuitems[index-1]
}
function inputNumber() {
  var choosenumber =  parseInt(readlineSync.question());

  if(choosenumber >= 1 && choosenumber <= menuitems.length) {
    console.log(getMenuitems(choosenumber));
  }
  else {
    console.log("wrong input try again");
    inputNumber();
  }
}
menu();
inputNumber();
