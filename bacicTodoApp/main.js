"use strict";
var logInButton = document.getElementById("logInButton");
var logOutButton = document.getElementById("logOutButton");
var toDoApp = document.getElementById("toDoApp");
//dombol kivalaszottuk a login button id-ju elemet
var userName = document.querySelector(".userName");
//a dombol kivalaszottuk az elso user name osztallyal rendelkezo elemet
var password = document.querySelector(".password");
//az elso pasword osztallyal rendelkezo elemet valasztottuk ki
var user =  {username: "flori", password: "flori"}
//objektumban ket propertit taroltunk
logOutButton.addEventListener("click", function () {
//esemenyfigyelo a logout gombra ami a todoap divet elrejti
  toDoApp.style.display="none";
})
logInButton.addEventListener("click", function () {
//megnezi h egyezik e a jelszo, megjeleniti a todoap blokkot,
//meghivja az inicializalos f-t es kiuriti a ket mezot
  if (userName.value===user.username && password.value===user.password) {
    alert("succesfulLogin");
    toDoApp.style.display="block";
    initTodo();
    userName.value="";
    password.value="";
  }
  else {
    alert("loginWasntSuccesful");
  }
})
//h kell megvalositani a server kliens kapcsolatot ahhoz h a login featuret valossa tegyuk
//beletettuk az egeszet egy f-be, h csak akkor jojon letre a todoap amikor sikeresen beleptunk
function initTodo() {
  var todoInput = document.querySelector(".todoInput");
  var addTodo = document.getElementById("addTodo");
  var items = document.getElementById("items");
  addTodo.addEventListener("click", function () {
    var li =  document.createElement("li");
    li.innerText = todoInput.value;
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", function () {
      deleteButton.parentElement.remove();
    })
    li.appendChild(deleteButton);
    items.appendChild(li);
  })

  document.addEventListener("keypress", function (event) {
    if (event.charCode===13) {
      addTodo.click();
    }
  })
}
